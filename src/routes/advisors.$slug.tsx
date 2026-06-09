import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useContentData } from "@/lib/use-content-data";
import { User, ArrowLeft } from "lucide-react";
import { PageLoader } from "@/components/ui/PageLoader";
import { ThesisRow } from "@/components/thesis/ThesisRow";

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

      {advisor.thesesSupervised.length > 0 && (
        <section className="mt-10">
          <h2 className="font-display text-2xl">As main supervisor</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {advisor.thesesSupervised.length}{" "}
            {advisor.thesesSupervised.length === 1 ? "thesis" : "theses"}
          </p>
          <ul className="mt-4 divide-y rule">
            {advisor.thesesSupervised.map((t) => <li key={t.slug}><ThesisRow t={t} /></li>)}
          </ul>
        </section>
      )}

      {advisor.thesesOnCommittee.length > 0 && (
        <section className="mt-10">
          <h2 className="font-display text-2xl">As committee member</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {advisor.thesesOnCommittee.length}{" "}
            {advisor.thesesOnCommittee.length === 1 ? "thesis" : "theses"}
          </p>
          <ul className="mt-4 divide-y rule">
            {advisor.thesesOnCommittee.map((t) => <li key={t.slug}><ThesisRow t={t} /></li>)}
          </ul>
        </section>
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

