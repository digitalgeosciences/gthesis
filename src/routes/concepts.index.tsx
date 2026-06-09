import { createFileRoute, Link } from "@tanstack/react-router";
import { useContentData } from "@/lib/use-content-data";
import { useState, useMemo } from "react";
import { PageLoader } from "@/components/ui/PageLoader";

export const Route = createFileRoute("/concepts/")({
  head: () => ({ meta: [{ title: "Concepts — GeoThesis" }, { name: "description", content: "All research concepts referenced across the KFUPM thesis archive." }] }),
  component: ConceptsPage,
});

function ConceptsPage() {
  const data = useContentData();
  const [q, setQ] = useState("");
  const sorted = useMemo(() => {
    if (!data) return [];
    const term = q.trim().toLowerCase();
    return data.concepts
      .filter((c) => !term || c.title.toLowerCase().includes(term))
      .sort((a, b) => b.backlinks.length - a.backlinks.length);
  }, [data, q]);

  if (!data) return <PageLoader />;

  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <h1 className="font-display text-4xl">Concepts</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        {data.concepts.length} concepts across {data.theses.length} theses.
      </p>
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Filter concepts…"
        className="mt-6 h-10 w-full max-w-md rounded-md border rule bg-card px-3 text-sm outline-none focus:border-[var(--teal-soft)]"
      />
      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {sorted.map((c) => (
          <Link
            key={c.slug}
            to="/concepts/$slug"
            params={{ slug: c.slug.replace("concepts/", "") }}
            className="thesis-card"
          >
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="font-display text-lg text-foreground">{c.title}</h3>
              <span className="font-mono text-xs text-muted-foreground">{c.backlinks.length}</span>
            </div>
            {c.summary && c.summary.replace(/[.\s]+$/, "").toLowerCase() !== c.title.toLowerCase() && (
              <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{c.summary}</p>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
