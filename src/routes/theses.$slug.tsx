import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useContentData, useEntryContent } from "@/lib/use-content-data";
import { similarTheses } from "@/lib/content";
import { ConceptChip } from "@/components/concept/ConceptChip";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Copy, ArrowLeft, User, ExternalLink, FileDown } from "lucide-react";
import { PageLoader } from "@/components/ui/PageLoader";
import { Link as RouterLink } from "@tanstack/react-router";

function stripLeadingTitle(content: string, title: string): string {
  const lines = content.trimStart().split("\n");
  const firstHeading = lines[0]?.replace(/^#{1,3}\s+/, "").trim();
  if (firstHeading && firstHeading.toLowerCase() === title.toLowerCase()) {
    return lines.slice(1).join("\n").trimStart();
  }
  return content;
}

const ALWAYS_UPPER = new Set([
  "CO2","H2S","NMR","GIS","API","KFUPM","ANN","GPR","EOR","IOR","PVT",
  "3D","2D","1D","GPS","GHG","UAE","KSA","SPE","SEG","AAPG","CT","MRI",
  "XRD","SEM","TEM","UV","IR","pH","DNA","RNA","BTEX","VOC","TOC",
]);

function toAPAAuthor(name: string): string {
  if (!name) return "";
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0];
  const last = parts[parts.length - 1];
  const initials = parts.slice(0, -1).map((p) => p.charAt(0).toUpperCase() + ".").join(" ");
  return `${last}, ${initials}`;
}

function toSentenceCase(str: string): string {
  return str
    .toLowerCase()
    .split(" ")
    .map((word, i) => {
      const clean = word.replace(/[^a-z0-9]/gi, "");
      if (ALWAYS_UPPER.has(clean.toUpperCase())) return clean.toUpperCase();
      if (i === 0) return word.charAt(0).toUpperCase() + word.slice(1);
      return word;
    })
    .join(" ")
    .replace(/:\s+([a-z])/g, (m, c) => m.replace(c, c.toUpperCase()));
}

function toTitleCase(str: string): string {
  const minorWords = new Set(["a","an","the","and","but","or","for","nor","on","at","to","by","in","of","up","as"]);
  return str.toLowerCase().split(" ").map((word, i) => {
    const clean = word.replace(/[^a-z0-9]/gi, "");
    if (ALWAYS_UPPER.has(clean.toUpperCase())) return word.toUpperCase();
    if (i !== 0 && minorWords.has(clean)) return word;
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
}
import { useState } from "react";
import { resolveWikiLinks } from "@/lib/wiki-links";

export const Route = createFileRoute("/theses/$slug")({
  head: ({ params }) => ({
    meta: [
      { title: `${params.slug.replace(/-/g, " ")} — GeoThesis` },
      { name: "description", content: "KFUPM thesis summary, methods, findings, and related concepts." },
    ],
  }),
  component: ThesisDetail,
});

function ThesisDetail() {
  const { slug } = Route.useParams();
  const data = useContentData();
  const body = useEntryContent(data ? `sources/${slug}` : undefined);
  const [copied, setCopied] = useState(false);

  if (!data) return <PageLoader />;
  const entry = data.bySlug[`sources/${slug}`];
  if (!entry) throw notFound();

  const similar = similarTheses(entry, data.theses, 5);
  const cite = `${toAPAAuthor(entry.author ?? "")} (${entry.year}). ${toSentenceCase(entry.title)} [${entry.degree} thesis, ${entry.department}, KFUPM].${entry.url ? " " + entry.url : ""}`;

  function copy() {
    navigator.clipboard.writeText(cite);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <article className="mx-auto max-w-3xl px-5 py-12">
      <Link to="/theses" className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
        <ArrowLeft className="size-3" /> All theses
      </Link>
      <div className="mt-4 flex items-center justify-between">
        <p className="font-mono text-xs tracking-wide text-[var(--teal)]">
          {entry.degree} · {entry.department} · {entry.year}
        </p>
        <div className="flex items-center gap-3">
          {entry.url && (
            <a
              href={entry.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
              title="Open source page"
            >
              <ExternalLink className="size-4" />
            </a>
          )}
          <button
            onClick={() => window.print()}
            className="text-muted-foreground hover:text-foreground"
            title="Print / Save as PDF"
          >
            <FileDown className="size-4" />
          </button>
        </div>
      </div>
      <h1 className="mt-2 font-display text-4xl leading-tight text-foreground">{toTitleCase(entry.title)}</h1>
      <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
        <span className="inline-flex items-center gap-1.5 font-bold text-foreground">
          <User className="size-3.5 shrink-0" />
          {entry.author}
        </span>
        {entry.supervisor && (
          <>
            <span className="text-base">•</span>
            <span className="inline-flex items-center gap-1.5">
              <span className="rounded border rule px-1.5 py-0.5 text-xs text-muted-foreground">
                Advised by
              </span>
              <RouterLink
                to="/theses"
                search={{ person: entry.supervisor }}
                className="inline-flex items-center gap-1.5 hover:text-foreground"
              >
                <User className="size-3.5 shrink-0" />
                {entry.supervisor}
              </RouterLink>
            </span>
          </>
        )}
        {entry.committee && entry.committee.length > 0 && (
          <>
            <span className="text-base">•</span>
            <span className="inline-flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="rounded border rule px-1.5 py-0.5 text-xs text-muted-foreground">
                Committee
              </span>
              {entry.committee.map((m) => (
                <RouterLink
                  key={m}
                  to="/theses"
                  search={{ person: m }}
                  className="inline-flex items-center gap-1.5 hover:text-foreground"
                >
                  <User className="size-3 shrink-0" />
                  {m}
                </RouterLink>
              ))}
            </span>
          </>
        )}
      </div>
      <div className="mt-5 flex flex-wrap gap-1.5">
        {entry.links.filter(l => l.startsWith("concepts/")).map(l => (
          <ConceptChip key={l} slug={l} />
        ))}
      </div>

      <div className="mt-10 prose-thesis">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {stripLeadingTitle(resolveWikiLinks(body ?? entry.summary ?? "", data.bySlug), entry.title)}
        </ReactMarkdown>
      </div>

      {/* Citation */}
      <div className="mt-12 rounded-md border rule bg-card p-4">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-base">Cite this thesis</h3>
          <button onClick={copy} className="inline-flex items-center gap-1.5 text-xs text-[var(--teal)] hover:underline">
            <Copy className="size-3" /> {copied ? "Copied" : "Copy"}
          </button>
        </div>
        <p className="mt-2 font-mono text-xs leading-relaxed text-muted-foreground">{cite}</p>
      </div>

      {/* Similar */}
      {similar.length > 0 && (
        <section className="mt-12 border-t rule pt-8">
          <h3 className="font-display text-xl">Related theses</h3>
          <ul className="mt-4 space-y-3">
            {similar.map((s) => (
              <li key={s.slug}>
                <Link to="/theses/$slug" params={{ slug: s.slug.replace("sources/", "") }} className="group flex items-baseline justify-between gap-4 border-b rule py-2 hover:border-[var(--teal-soft)]">
                  <div>
                    <div className="text-sm font-medium text-foreground group-hover:text-[var(--teal)]">{s.title}</div>
                    <div className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                      <User className="size-3 shrink-0" />
                      {s.author} · {s.year}
                    </div>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">{s.links.filter(l => l.startsWith("concepts/")).length} concepts</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
