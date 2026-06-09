import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { useContentData } from "@/lib/use-content-data";
import { PageLoader } from "@/components/ui/PageLoader";
import { buildConceptDebuts } from "@/lib/content";
import { CONCEPT_CATEGORIES } from "@/components/graph/GraphFilters";
import { ConceptTrendsChart } from "@/components/trends/ConceptTrendsChart";

export const Route = createFileRoute("/trends")({
  head: () => ({
    meta: [
      { title: "Trends — GeoThesis" },
      { name: "description", content: "See when each geoscience concept was first mentioned and how widely it spread across the KFUPM thesis archive." },
    ],
  }),
  component: TrendsPage,
});

function TrendsPage() {
  const data = useContentData();
  const [q, setQ] = useState("");
  const [hidden, setHidden] = useState<string[]>([]);

  const debuts = useMemo(() => (data ? buildConceptDebuts(data) : []), [data]);

  const yearBounds = useMemo<[number, number]>(() => {
    if (debuts.length === 0) return [2000, 2026];
    const ys = debuts.map((d) => d.firstYear);
    return [Math.min(...ys), Math.max(...ys)];
  }, [debuts]);

  const [yearMin, setYearMin] = useState<number | null>(null);
  const [yearMax, setYearMax] = useState<number | null>(null);
  const lo = yearMin ?? yearBounds[0];
  const hi = yearMax ?? yearBounds[1];

  const years = useMemo(() => {
    const out: number[] = [];
    for (let y = yearBounds[0]; y <= yearBounds[1]; y++) out.push(y);
    return out;
  }, [yearBounds]);

  const maxMentions = useMemo(() => debuts.reduce((m, d) => Math.max(m, d.totalMentions), 0), [debuts]);
  const [labelThreshold, setLabelThreshold] = useState<number | null>(null);
  // Default high so only the few well-separated outliers are labeled; drag down to reveal more.
  const threshold = labelThreshold ?? Math.max(3, Math.ceil((maxMentions || 8) * 0.45));

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    return debuts.filter((d) => {
      if (hidden.includes(d.category)) return false;
      if (d.firstYear < lo || d.firstYear > hi) return false;
      if (term) {
        const inTitle = d.title.toLowerCase().includes(term);
        const inAlias = d.aliases.some((a) => a.toLowerCase().includes(term));
        if (!inTitle && !inAlias) return false;
      }
      return true;
    });
  }, [debuts, q, hidden, lo, hi]);

  if (!data) return <PageLoader />;

  return (
    <div className="mx-auto max-w-6xl px-5 py-10">
      <div className="flex flex-wrap items-baseline justify-between gap-4">
        <div>
          <h1 className="font-display text-4xl">Trends</h1>
          <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
            When each concept was first mentioned (horizontal) versus how many theses engage with it (vertical). Click any point to open the concept.
          </p>
        </div>
        <p className="font-mono text-xs text-muted-foreground">
          {filtered.length} of {debuts.length} concepts
        </p>
      </div>

      {/* Filters */}
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <div className="relative grow sm:grow-0 sm:w-72">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search title or alias…"
            className="h-10 w-full rounded-md border rule bg-card pl-9 pr-3 text-sm outline-none focus:border-[var(--teal-soft)]"
          />
        </div>

        <div className="flex items-center gap-2">
          <select
            value={lo}
            onChange={(e) => setYearMin(Math.min(Number(e.target.value), hi))}
            className="h-10 rounded-md border rule bg-card px-3 text-sm outline-none focus:border-[var(--teal-soft)]"
          >
            {years.filter((y) => y <= hi).map((y) => <option key={y} value={y}>{y}</option>)}
          </select>
          <span className="text-muted-foreground">–</span>
          <select
            value={hi}
            onChange={(e) => setYearMax(Math.max(Number(e.target.value), lo))}
            className="h-10 rounded-md border rule bg-card px-3 text-sm outline-none focus:border-[var(--teal-soft)]"
          >
            {years.filter((y) => y >= lo).map((y) => <option key={y} value={y}>{y}</option>)}
          </select>
        </div>
      </div>

      {/* Category toggles */}
      <div className="mt-3 flex flex-wrap gap-2">
        {CONCEPT_CATEGORIES.map(({ key, label, color }) => {
          const on = !hidden.includes(key);
          return (
            <button
              key={key}
              onClick={() =>
                setHidden((h) => (h.includes(key) ? h.filter((c) => c !== key) : [...h, key]))
              }
              className={`flex items-center gap-1.5 rounded-full border rule px-3 py-1 text-xs transition-colors ${
                on ? "bg-card text-foreground" : "bg-transparent text-muted-foreground opacity-50"
              }`}
            >
              <span className="inline-block size-2 rounded-full" style={{ background: color }} />
              {label}
            </button>
          );
        })}
      </div>

      {/* Label density */}
      <div className="mt-4 flex items-center gap-3">
        <label htmlFor="label-threshold" className="text-xs font-medium tracking-wide text-muted-foreground whitespace-nowrap">
          Labels: ≥ {threshold} {threshold === 1 ? "thesis" : "theses"}
        </label>
        <input
          id="label-threshold"
          type="range"
          min={1}
          max={Math.max(1, maxMentions)}
          value={threshold}
          onChange={(e) => setLabelThreshold(Number(e.target.value))}
          className="w-48 accent-[var(--teal)]"
        />
        <span className="font-mono text-xs text-muted-foreground">
          {filtered.filter((d) => d.totalMentions >= threshold).length} labeled
        </span>
      </div>

      <div className="mt-6">
        {filtered.length > 0 ? (
          <ConceptTrendsChart debuts={filtered} yearBounds={[lo, hi]} labelThreshold={threshold} />
        ) : (
          <div className="rounded-lg border rule bg-card p-12 text-center text-muted-foreground">
            No concepts match these filters.
          </div>
        )}
      </div>
    </div>
  );
}
