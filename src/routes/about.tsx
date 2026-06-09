import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About — GeoThesis" }, { name: "description", content: "About the GeoThesis archive of KFUPM graduate research." }] }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-16">
      <p className="font-mono text-xs uppercase tracking-widest text-[var(--teal)]">About</p>
      <h1 className="mt-2 font-display text-5xl leading-tight">A knowledge graph for KFUPM geoscience research.</h1>
      <div className="mt-8 prose-thesis">
        <p>
          Graduate theses are among the most detailed, rigorously reviewed bodies of knowledge a university produces —
          yet they are among the least discoverable. A researcher studying carbonate diagenesis may never encounter a
          2009 thesis that solved an analogous problem in a neighbouring formation. A student mapping reservoir
          heterogeneity may unknowingly duplicate three earlier studies.
        </p>
        <p>
          GeoThesis was built to close that gap. It collects the structured summaries of graduate theses produced at the
          Geosciences Department, King Fahd University of Petroleum and Minerals, and connects them into a navigable
          knowledge graph — so decades of careful regional research become easy to read, link, and re-discover.
        </p>
        <h2>Why it matters for innovation</h2>
        <p>
          Every thesis is tagged with the concepts, formations, methods, and tools it engages with. Following a single
          concept surfaces its entire research lineage across years and degrees. The force-directed graph makes clusters
          of activity and unexplored frontiers visible at a glance. Timeline and statistical views show when topics
          peaked and where the field is heading.
        </p>
        <p>
          The result is a research institution that can think about itself — and plan its next contributions from a
          complete picture of what has already been done.
        </p>
        <h2>What you can do here</h2>
        <ul>
          <li><Link to="/theses">Browse</Link> the full archive with filters for year and degree.</li>
          <li><Link to="/concepts">Follow concepts</Link> — every page lists the theses that engage with a topic.</li>
          <li><Link to="/graph">Explore the graph</Link> — theses and concepts as a force-directed network with statistical views.</li>
          <li><Link to="/timeline">Walk the timeline</Link> to see how research output evolved year by year.</li>
        </ul>
        <h2>Keyboard shortcuts</h2>
        <ul>
          <li><span className="kbd">/</span> open search</li>
          <li><span className="kbd">g</span> jump to the graph</li>
          <li><span className="kbd">r</span> open a random thesis</li>
        </ul>
        <h2>Contact</h2>
        <p>
          This archive is part of a research data management initiative by{" "}
          <a href="https://www.digitalgeosciences.com" target="_blank" rel="noopener noreferrer">Digital Geosciences</a>{" "}
          through the WIIP approach (
          <a href="https://doi.org/10.13140/RG.2.2.21030.79680" target="_blank" rel="noopener noreferrer">
            doi:10.13140/RG.2.2.21030.79680
          </a>
          ). For details or enquiries, contact{" "}
          <a href="https://qubalee.com/about">Dr. Abdullah Alqubalee</a>{" "}
          or{" "}
          <a href="mailto:info@digitalgeosciences.com">info@digitalgeosciences.com</a>.
        </p>
      </div>
    </article>
  );
}
