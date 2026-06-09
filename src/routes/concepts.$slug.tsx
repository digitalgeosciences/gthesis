import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useContentData } from "@/lib/use-content-data";
import { resolveWikiLinks } from "@/lib/wiki-links";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft, User } from "lucide-react";
import { PageLoader } from "@/components/ui/PageLoader";

export const Route = createFileRoute("/concepts/$slug")({
  head: ({ params }) => ({
    meta: [
      { title: `${params.slug.replace(/-/g, " ")} — GeoThesis` },
      { name: "description", content: "Concept definition and every KFUPM thesis that engages with it." },
    ],
  }),
  component: ConceptDetail,
});

function ConceptDetail() {
  const { slug } = Route.useParams();
  const data = useContentData();
  if (!data) return <PageLoader />;
  const entry = data.bySlug[`concepts/${slug}`];
  if (!entry) throw notFound();

  const related = data.thesesByConcept[entry.slug] ?? [];
  const HIDDEN = new Set([
    "Related Pages",
    "Contradictions or Differences Between Sources",
    "Open Questions and Research Gaps",
  ]);

  function stripSections(md: string): string {
    const parts = md.split(/(?=\n## )/);
    return parts
      .filter(part => {
        const heading = part.match(/^\n?##\s+(.+)/m)?.[1]?.trim();
        return !heading || !HIDDEN.has(heading);
      })
      .join("");
  }

  const resolved = stripSections(
    resolveWikiLinks(entry.content ?? entry.summary ?? "", data.bySlug)
  ).trimEnd();

  return (
    <div key={slug} className="mx-auto max-w-4xl px-5 py-12">
      <Link to="/concepts" className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
        <ArrowLeft className="size-3" /> All concepts
      </Link>
      <p className="mt-4 font-mono text-xs uppercase tracking-widest text-[var(--teal)]">Concept</p>
      <h1 className="mt-2 font-display text-4xl text-foreground">{entry.title}</h1>

      <div className="mt-6 prose-thesis">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{resolved}</ReactMarkdown>
      </div>

      <section className="mt-12 border-t rule pt-8">
        <h2 className="font-display text-2xl">Theses that engage with {entry.title}</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          {related.length} {related.length === 1 ? "thesis" : "theses"}
        </p>
        <ul className="mt-6 divide-y rule">
          {related.map((t) => (
            <li key={t.slug}>
              <Link
                to="/theses/$slug"
                params={{ slug: t.slug.replace("sources/", "") }}
                className="group block py-4 hover:bg-muted/30 -mx-2 px-2 rounded"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-sm font-medium text-foreground group-hover:text-[var(--teal)]">
                    {t.title}
                  </span>
                  <span className="shrink-0 font-mono text-xs text-muted-foreground">{t.year}</span>
                </div>
                <div className="mt-0.5 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <User className="size-3 shrink-0" />
                  {t.author}{t.department ? ` · ${t.department}` : ""}
                </div>
                {t.summary && (
                  <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                    {t.summary}
                  </p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
