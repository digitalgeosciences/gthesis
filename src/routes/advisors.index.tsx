import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { useContentData } from "@/lib/use-content-data";
import { User } from "lucide-react";
import { PageLoader } from "@/components/ui/PageLoader";

export const Route = createFileRoute("/advisors/")({
  head: () => ({
    meta: [
      { title: "Advisors — GeoThesis" },
      { name: "description", content: "Browse all thesis supervisors and committee members in the KFUPM archive." },
    ],
  }),
  component: AdvisorsPage,
});

function AdvisorsPage() {
  const data = useContentData();
  const [sort, setSort] = useState<"count" | "az">("count");

  const sorted = useMemo(() => {
    if (!data) return [];
    return [...data.advisors].sort((a, b) =>
      sort === "az"
        ? a.name.localeCompare(b.name)
        : b.thesesSupervised.length + b.thesesOnCommittee.length -
          (a.thesesSupervised.length + a.thesesOnCommittee.length),
    );
  }, [data, sort]);

  if (!data) return <PageLoader />;

  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <div className="flex items-baseline justify-between">
        <div>
          <h1 className="font-display text-4xl">Advisors</h1>
          <p className="mt-1 text-sm text-muted-foreground">{data.advisors.length} advisors</p>
        </div>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as "count" | "az")}
          aria-label="Sort advisors"
          className="h-9 rounded-md border rule bg-card px-3 text-sm outline-none focus:border-[var(--teal-soft)]"
        >
          <option value="count">Most theses</option>
          <option value="az">A → Z</option>
        </select>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sorted.map((a) => (
          <Link
            key={a.slug}
            to="/advisors/$slug"
            params={{ slug: a.slug }}
            className="thesis-card group"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2">
                <User className="size-4 shrink-0 text-[var(--teal)]" />
                <span className="font-medium text-foreground group-hover:text-[var(--teal)]">
                  {a.name}
                </span>
              </div>
              <span className="shrink-0 font-mono text-xs text-muted-foreground">
                {a.thesesSupervised.length + a.thesesOnCommittee.length}
              </span>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              {a.thesesSupervised.length} supervised · {a.thesesOnCommittee.length} committee
            </p>
            {a.departments.length > 0 && (
              <p className="mt-1 truncate text-xs text-muted-foreground">
                {a.departments.join(", ")}
              </p>
            )}
            {a.yearsActive && (
              <p className="mt-1 font-mono text-xs text-muted-foreground">
                {a.yearsActive[0]}–{a.yearsActive[1]}
              </p>
            )}
          </Link>
        ))}
        {sorted.length === 0 && (
          <p className="col-span-full text-sm text-muted-foreground">No advisors found.</p>
        )}
      </div>
    </div>
  );
}
