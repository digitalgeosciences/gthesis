import { createFileRoute, Link } from "@tanstack/react-router";
import { useFilteredContent } from "@/lib/use-content-data";
import { User } from "lucide-react";
import { toTitleCase } from "@/lib/utils";
import { PageLoader } from "@/components/ui/PageLoader";

export const Route = createFileRoute("/timeline")({
  head: () => ({ meta: [{ title: "Timeline — GeoThesis" }, { name: "description", content: "Three decades of KFUPM Geosciences research, year by year." }] }),
  component: TimelinePage,
});

function TimelinePage() {
  const data = useFilteredContent();
  if (!data) return <PageLoader />;
  if (data.years.length === 0)
    return <div className="mx-auto max-w-6xl px-5 py-12 text-sm text-muted-foreground">No theses in this department.</div>;
  const max = Math.max(...data.years.map((y) => data.thesesByYear[y].length));
  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <h1 className="font-display text-4xl">Timeline</h1>
      <p className="mt-1 text-sm text-muted-foreground">{data.years[0]} – {data.years[data.years.length - 1]} · {data.theses.length} theses</p>

      <div className="mt-10 space-y-10">
        {data.years.slice().reverse().map((y) => {
          const list = data.thesesByYear[y];
          return (
            <section key={y}>
              <div className="flex items-baseline justify-between border-b rule pb-2">
                <h2 className="font-display text-2xl">{y}</h2>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  {(() => {
                    const ms = list.filter(t => t.degree === "MS").length;
                    const phd = list.filter(t => t.degree === "PhD").length;
                    return (
                      <>
                        {ms > 0 && (
                          <span className="flex items-center gap-1">
                            <span className="inline-block size-2 rounded-full bg-[#3b82f6]" />
                            MS {ms}
                          </span>
                        )}
                        {phd > 0 && (
                          <span className="flex items-center gap-1">
                            <span className="inline-block size-2 rounded-full bg-[#22c55e]" />
                            PhD {phd}
                          </span>
                        )}
                        <div className="flex h-1.5 w-32 overflow-hidden rounded-full bg-muted">
                          <div className="h-full bg-[#3b82f6]" style={{ width: `${(ms / max) * 100}%` }} />
                          <div className="h-full bg-[#22c55e]" style={{ width: `${(phd / max) * 100}%` }} />
                        </div>
                        <span className="font-mono">{list.length}</span>
                      </>
                    );
                  })()}
                </div>
              </div>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {list.map((t) => (
                  <li key={t.slug}>
                    <Link to="/theses/$slug" params={{ slug: t.slug.replace("sources/", "") }} className="block rounded px-2 py-1.5 text-sm text-foreground hover:bg-muted">
                      <span className="font-medium">{toTitleCase(t.title)}</span>
                      <span className="ml-2 inline-flex items-center gap-1 text-xs text-muted-foreground">
                        <User className="size-3 shrink-0" />
                        {t.author}
                        {t.degree && (
                          <>
                            <span>•</span>
                            <span style={{ color: t.degree === "MS" ? "#3b82f6" : t.degree === "PhD" ? "#22c55e" : undefined }}>{t.degree}</span>
                          </>
                        )}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </div>
  );
}
