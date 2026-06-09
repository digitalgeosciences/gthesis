import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { useContentData } from "@/lib/use-content-data";
import { ThesisCard } from "@/components/thesis/ThesisCard";
import { Search } from "lucide-react";
import { PageLoader } from "@/components/ui/PageLoader";

export const Route = createFileRoute("/theses/")({
  validateSearch: (search: Record<string, unknown>) => ({
    supervisor: typeof search.supervisor === "string" ? search.supervisor : "",
    person: typeof search.person === "string" ? search.person : "",
  }),
  head: () => ({
    meta: [
      { title: "All theses — GeoThesis" },
      { name: "description", content: "Browse and filter every KFUPM thesis in the archive by year, degree, and keyword." },
    ],
  }),
  component: ThesesPage,
});

const PAGE_SIZE = 18;

function ThesesPage() {
  const data = useContentData();
  const { supervisor: supervisorParam, person: personParam } = Route.useSearch();
  const [q, setQ] = useState("");
  const [degree, setDegree] = useState<string>("all");
  const [year, setYear] = useState<string>("all");
  const [sort, setSort] = useState<"recent" | "az" | "linked">("recent");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    if (!data) return [];
    const term = q.trim().toLowerCase();
    let r = data.theses.filter((t) => {
      if (degree !== "all" && t.degree !== degree) return false;
      if (year !== "all" && String(t.year) !== year) return false;
      if (term && !(t.title.toLowerCase().includes(term) || (t.author ?? "").toLowerCase().includes(term))) return false;
      if (supervisorParam && (t.supervisor ?? "").toLowerCase() !== supervisorParam.toLowerCase()) return false;
      if (personParam) {
        const name = personParam.toLowerCase();
        const isSupervisor = (t.supervisor ?? "").toLowerCase() === name;
        const isCommittee = (t.committee ?? []).some((m) => m.toLowerCase() === name);
        if (!isSupervisor && !isCommittee) return false;
      }
      return true;
    });
    if (sort === "recent") r = r.sort((a, b) => (b.year ?? 0) - (a.year ?? 0));
    else if (sort === "az") r = r.sort((a, b) => a.title.localeCompare(b.title));
    else r = r.sort((a, b) => b.links.length - a.links.length);
    return r;
  }, [data, q, degree, year, sort]);

  if (!data) return <PageLoader />;

  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <div className="flex items-baseline justify-between">
        <div>
          <h1 className="font-display text-4xl">All theses</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {filtered.length} of {data.theses.length}
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto_auto_auto]">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search title or author…"
            className="h-10 w-full rounded-md border rule bg-card pl-9 pr-3 text-sm outline-none focus:border-[var(--teal-soft)]"
          />
        </div>
        <Select value={degree} onChange={setDegree} options={[{v:"all",l:"All degrees"},{v:"MS",l:"MS"},{v:"PhD",l:"PhD"}]} />
        <Select value={year} onChange={setYear} options={[{v:"all",l:"All years"}, ...data.years.slice().reverse().map(y=>({v:String(y),l:String(y)}))]} />
        <Select value={sort} onChange={(v)=>setSort(v as any)} options={[{v:"recent",l:"Most recent"},{v:"az",l:"A → Z"},{v:"linked",l:"Most linked"}]} />
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.slice(0, visibleCount).map((t) => <ThesisCard key={t.slug} t={t} />)}
        {filtered.length === 0 && (
          <div className="col-span-full rounded-lg border rule bg-card p-8 text-center text-muted-foreground">
            No theses match these filters.
          </div>
        )}
      </div>
      {filtered.length > visibleCount && (
        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            onClick={() => setVisibleCount((v) => v + PAGE_SIZE)}
            className="rounded-md border rule bg-card px-4 py-2 text-sm text-muted-foreground hover:border-[var(--teal-soft)] hover:text-foreground"
          >
            Show more ({Math.min(PAGE_SIZE, filtered.length - visibleCount)} of {filtered.length - visibleCount} remaining)
          </button>
          <button
            onClick={() => setVisibleCount(filtered.length)}
            className="rounded-md border rule bg-card px-4 py-2 text-sm text-muted-foreground hover:border-[var(--teal-soft)] hover:text-foreground"
          >
            Show all ({filtered.length})
          </button>
        </div>
      )}
    </div>
  );
}

function Select({ value, onChange, options }: { value: string; onChange: (v: string) => void; options: {v:string;l:string}[] }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="h-10 rounded-md border rule bg-card px-3 text-sm outline-none focus:border-[var(--teal-soft)]"
    >
      {options.map((o) => <option key={o.v} value={o.v}>{o.l}</option>)}
    </select>
  );
}
