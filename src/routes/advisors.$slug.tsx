import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useContentData } from "@/lib/use-content-data";
import { User, ArrowLeft } from "lucide-react";
import { PageLoader } from "@/components/ui/PageLoader";
import { ThesisRow } from "@/components/thesis/ThesisRow";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import type { Entry } from "@/lib/content";

export const Route = createFileRoute("/advisors/$slug")({
  head: ({ params }) => ({
    meta: [
      { title: `${params.slug.replace(/-/g, " ")} — GeoThesis Advisors` },
      { name: "description", content: "Advisor profile: supervised theses, committee roles, and frequent collaborators." },
    ],
  }),
  component: AdvisorProfilePage,
});

function AdvisorProfilePage() {
  const { slug } = Route.useParams();
  const data = useContentData();

  if (!data) return <PageLoader />;
  const advisor = data.advisorsBySlug[slug];
  if (!advisor) throw notFound();

  // Recent-first; theses with no year sink to the bottom.
  const byYearDesc = (a: Entry, b: Entry) => (b.year ?? 0) - (a.year ?? 0);
  const supervised = [...advisor.thesesSupervised].sort(byYearDesc);
  const committee = [...advisor.thesesOnCommittee].sort(byYearDesc);

  const tabs: { key: string; label: string; theses: Entry[] }[] = [];
  if (supervised.length) tabs.push({ key: "supervisor", label: "Main supervisor", theses: supervised });
  if (committee.length) tabs.push({ key: "committee", label: "Committee member", theses: committee });

  return (
    <div className="mx-auto max-w-3xl px-5 py-12">
      <Link
        to="/advisors"
        className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-3" /> All advisors
      </Link>

      <div className="mt-4 flex items-center gap-3">
        <User className="size-6 shrink-0 text-[var(--teal)]" />
        <h1 className="font-display text-4xl">{advisor.name}</h1>
      </div>

      <p className="mt-2 font-mono text-xs text-muted-foreground">
        {advisor.thesesSupervised.length} supervised · {advisor.thesesOnCommittee.length} committee
        {advisor.departments.length > 0 && ` · ${advisor.departments.join(", ")}`}
        {advisor.yearsActive && ` · ${advisor.yearsActive[0]}–${advisor.yearsActive[1]}`}
      </p>

      {tabs.length > 0 && (
        <Tabs defaultValue={tabs[0].key} className="mt-10">
          <TabsList>
            {tabs.map((t) => (
              <TabsTrigger key={t.key} value={t.key}>
                {t.label}
                <span className="ml-2 font-mono text-xs opacity-70">{t.theses.length}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          {tabs.map((t) => (
            <TabsContent key={t.key} value={t.key}>
              <ul className="mt-4 divide-y rule">
                {t.theses.map((x) => <li key={x.slug}><ThesisRow t={x} /></li>)}
              </ul>
            </TabsContent>
          ))}
        </Tabs>
      )}

      {advisor.collaborators.length > 0 && (
        <section className="mt-10 border-t rule pt-8">
          <h2 className="font-display text-2xl">Frequent collaborators</h2>
          <ul className="mt-4 divide-y rule">
            {advisor.collaborators.map((c) => (
              <li key={c.slug}>
                <Link
                  to="/advisors/$slug"
                  params={{ slug: c.slug }}
                  className="group flex items-center justify-between py-3 hover:text-[var(--teal)]"
                >
                  <span className="flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-[var(--teal)]">
                    <User className="size-3.5 shrink-0 text-muted-foreground" />
                    {c.name}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">{c.count} shared</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}

