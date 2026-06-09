import { createFileRoute, Link } from "@tanstack/react-router";
import { useContentData } from "@/lib/use-content-data";
import { ThesisCard } from "@/components/thesis/ThesisCard";
import { ArrowRight, Shuffle, Network, Search as SearchIcon } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
import { useConfig } from "@/lib/use-config";
import { PageLoader } from "@/components/ui/PageLoader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GeoThesis — KFUPM Earth Sciences Research Archive" },
      { name: "description", content: "Explore 200+ KFUPM graduate theses across petroleum geology, geophysics, reservoir engineering, hydrogeology, and environmental science." },
    ],
  }),
  component: Home,
});

function Home() {
  const data = useContentData();
  const navigate = useNavigate();
  const config = useConfig();

  const featuredSort = config?.home.featuredSort ?? "recent";
  const featuredCount = config?.home.featuredCount ?? 6;
  const featured = data
    ? [...data.theses]
        .sort((a, b) =>
          featuredSort === "linked"
            ? b.links.length - a.links.length
            : (b.year ?? 0) - (a.year ?? 0)
        )
        .slice(0, featuredCount)
    : [];
  const topConcepts = data
    ? [...data.concepts]
        .sort((a, b) => b.backlinks.length - a.backlinks.length)
        .slice(0, 12)
    : [];

  if (!data || !config) return <PageLoader />;

  const surprise = () => {
    if (!data) return;
    const t = data.theses[Math.floor(Math.random() * data.theses.length)];
    navigate({ to: "/theses/$slug", params: { slug: t.slug.replace("sources/", "") } });
  };

  return (
    <div>
      {/* Hero */}
      <section className="border-b rule">
        <div className="mx-auto max-w-6xl px-5 py-10 sm:py-16">
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--teal)]">KFUPM · Geosciences Archive</p>
          <h1 className="mt-3 max-w-3xl font-display text-5xl leading-[1.05] tracking-tight text-foreground sm:text-6xl">
            {config?.home.heroHeading}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            {config?.home.heroSubtext
              ?.replace("{thesisCount}", String(data?.theses.length ?? ""))
              .replace("{conceptCount}", String(data?.concepts.length ?? ""))}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link to="/theses" className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90">
              Browse theses <ArrowRight className="size-4" />
            </Link>
            <Link to="/graph" className="inline-flex items-center gap-2 rounded-md border rule bg-card px-4 py-2.5 text-sm font-medium hover:border-[var(--teal-soft)]">
              <Network className="size-4" /> Open the graph
            </Link>
            <button onClick={surprise} className="inline-flex items-center gap-2 rounded-md border rule bg-card px-4 py-2.5 text-sm font-medium hover:border-[var(--teal-soft)]">
              <Shuffle className="size-4" /> Surprise me
            </button>
            <span className="ml-2 hidden text-xs text-muted-foreground sm:inline">
              press <span className="kbd">/</span> to search · <span className="kbd">g</span> graph · <span className="kbd">r</span> random
            </span>
          </div>
        </div>
      </section>

      {/* Featured theses */}
      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="flex items-baseline justify-between">
          <h2 className="font-display text-3xl">Featured research</h2>
          <Link to="/theses" className="text-sm text-[var(--teal)] hover:underline">All theses →</Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((t) => <ThesisCard key={t.slug} t={t} />)}
        </div>
      </section>

      {/* Top concepts */}
      <section className="border-t rule bg-[color-mix(in_oklab,var(--highlight)_60%,transparent)]">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="flex items-baseline justify-between">
            <h2 className="font-display text-3xl">Most-studied concepts</h2>
            <Link to="/concepts" className="text-sm text-[var(--teal)] hover:underline">All concepts →</Link>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {topConcepts.map((c) => (
              <Link
                key={c.slug}
                to="/concepts/$slug"
                params={{ slug: c.slug.replace("concepts/", "") }}
                className="group flex items-baseline gap-2 rounded-md border rule bg-card px-3 py-2 hover:border-[var(--teal-soft)]"
              >
                <span className="font-medium text-foreground">{c.title}</span>
                <span className="font-mono text-xs text-muted-foreground">{c.backlinks.length}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How to use */}
      <section className="mx-auto max-w-6xl px-5 py-14">
        <h2 className="font-display text-3xl">Three ways in</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <Link to="/theses" className="thesis-card">
            <SearchIcon className="size-5 text-[var(--teal)]" />
            <h3 className="mt-3 font-display text-lg">Browse</h3>
            <p className="mt-1 text-sm text-muted-foreground">Filter by year, degree, or keyword.</p>
          </Link>
          <Link to="/concepts" className="thesis-card">
            <Network className="size-5 text-[var(--teal)]" />
            <h3 className="mt-3 font-display text-lg">Follow concepts</h3>
            <p className="mt-1 text-sm text-muted-foreground">Each concept gathers every thesis that touches it.</p>
          </Link>
          <Link to="/graph" className="thesis-card">
            <Shuffle className="size-5 text-[var(--teal)]" />
            <h3 className="mt-3 font-display text-lg">Explore the graph</h3>
            <p className="mt-1 text-sm text-muted-foreground">See the whole field as a network of ideas and authors.</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
