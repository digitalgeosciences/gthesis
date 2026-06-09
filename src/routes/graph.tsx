import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Maximize2, Minimize2, Filter } from "lucide-react";
import { PageLoader } from "@/components/ui/PageLoader";
import { useContentData } from "@/lib/use-content-data";
import { useConfig } from "@/lib/use-config";
import { KnowledgeGraph } from "@/components/graph/KnowledgeGraph";
import { GraphFilters, type GraphFilterState } from "@/components/graph/GraphFilters";
import { TimelineChart } from "@/components/graph/TimelineChart";
import { DegreeChart } from "@/components/graph/DegreeChart";

type GraphType = "knowledge" | "timeline" | "degree";

const GRAPH_TYPES: { value: GraphType; label: string }[] = [
  { value: "knowledge", label: "Knowledge graph" },
  { value: "timeline",  label: "Timeline" },
  { value: "degree",   label: "MS vs PhD" },
];

export const Route = createFileRoute("/graph")({
  head: () => ({
    meta: [
      { title: "Knowledge graph — GeoThesis" },
      { name: "description", content: "Explore the full KFUPM thesis network as an interactive force-directed graph." },
    ],
  }),
  component: GraphPage,
});

function GraphPage() {
  const data = useContentData();
  const config = useConfig();
  const [graphType, setGraphType] = useState<GraphType>("knowledge");
  const [fullscreen, setFullscreen] = useState(false);
  const [filtersVisible, setFiltersVisible] = useState(false);

  const conceptColor = config?.graph?.nodeColors?.concept ?? "";
  const thesisColor  = config?.graph?.nodeColors?.thesis  ?? "";
  const focusedColor = config?.graph?.nodeColors?.focused ?? "";

  const yearBounds = useMemo<[number, number]>(
    () => (data ? [Math.min(...data.years), Math.max(...data.years)] : [1990, 2024]),
    [data],
  );

  const defaultFilters: GraphFilterState = {
    hiddenCategories: ["formations", "locations", "techniques", "terminology"],
    showTheses: true,
    yearMin: yearBounds[0],
    yearMax: yearBounds[1],
    minConnections: 0,
    searchTerm: "",
    author: "",
    conceptSearch: "",
    degrees: [],
    nodeSizeMultiplier: 1,
    conceptSizeMultiplier: 1,
    linkWidth: 0.6,
    labelCategories: [],
    showThesisLabels: false,
    labelType: "title",
  };

  const [filters, setFilters] = useState<GraphFilterState>(defaultFilters);

  const [synced, setSynced] = useState(false);
  if (data && !synced) {
    setFilters((f) => ({ ...f, yearMin: yearBounds[0], yearMax: yearBounds[1] }));
    setSynced(true);
  }

  const nodeCount = useMemo(() => {
    if (!data) return { concepts: 0, theses: 0, links: 0 };
    const concepts = data.concepts.filter(
      (c) =>
        !filters.hiddenCategories.includes(c.category ?? "") &&
        c.backlinks.length >= filters.minConnections,
    ).length;
    const theses = filters.showTheses
      ? data.theses.filter(
          (t) =>
            (!t.year || (t.year >= filters.yearMin && t.year <= filters.yearMax)) &&
            (!filters.author || (t.author ?? "").toLowerCase().includes(filters.author.toLowerCase())) &&
            (!filters.degrees.length || filters.degrees.includes(t.degree ?? "")) &&
            t.links.length >= filters.minConnections,
        ).length
      : 0;
    const links = data.theses.reduce(
      (sum, t) =>
        filters.showTheses &&
        (!t.year || (t.year >= filters.yearMin && t.year <= filters.yearMax)) &&
        t.links.length >= filters.minConnections
          ? sum + t.links.filter((l) => {
              const e = data.bySlug[l];
              return e && !filters.hiddenCategories.includes(e.category ?? "") && e.backlinks.length >= filters.minConnections;
            }).length
          : sum,
      0,
    );
    return { concepts, theses, links };
  }, [data, filters]);

  if (!data) {
    return (
      <div className="mx-auto max-w-7xl px-5 py-10">
        <div className="flex h-[680px] items-center justify-center rounded-lg border rule bg-card">
          <PageLoader />
        </div>
      </div>
    );
  }

  const graphTypeSelect = (
    <select
      value={graphType}
      onChange={(e) => setGraphType(e.target.value as GraphType)}
      className="h-9 rounded-md border rule bg-card px-3 text-sm outline-none focus:border-[var(--teal-soft)]"
    >
      {GRAPH_TYPES.map((g) => (
        <option key={g.value} value={g.value}>{g.label}</option>
      ))}
    </select>
  );

  const knowledgePanel = (isFullscreen: boolean) => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const graphHeight = isFullscreen ? window.innerHeight : isMobile ? 360 : 680;
    const filterHeight = isFullscreen ? window.innerHeight : isMobile ? undefined : graphHeight;

    return (
      <div className={`flex w-full ${isFullscreen ? 'h-full flex-row' : 'mt-4 flex-col gap-4 md:flex-row md:items-start'}`}>
        {filtersVisible && (
          <div 
            className={`${isFullscreen ? 'h-full overflow-y-auto p-4 border-r border-border/40 bg-card/95 w-80 shrink-0 shadow-lg' : 'w-full md:w-72 shrink-0'} z-20`}
          >
            <GraphFilters
              filters={filters}
              onChange={setFilters}
              yearBounds={yearBounds}
              nodeCount={nodeCount}
              onReset={() => setFilters({ ...defaultFilters, yearMin: yearBounds[0], yearMax: yearBounds[1] })}
              thesisColor={thesisColor}
              filterHeight={filterHeight}
            />
          </div>
        )}
        <div className="relative min-w-0 flex-1 bg-background">
          <div className="absolute right-4 top-4 z-10 flex flex-col gap-2">
            <button
              onClick={() => setFiltersVisible(!filtersVisible)}
              className="flex items-center justify-center rounded-md border rule bg-card/80 p-2 text-muted-foreground hover:bg-card hover:text-foreground backdrop-blur-sm shadow-sm"
              title={filtersVisible ? "Hide filters" : "Show filters"}
            >
              <Filter className="size-4" />
            </button>
            <button
              onClick={() => setFullscreen(!isFullscreen)}
              className="flex items-center justify-center rounded-md border rule bg-card/80 p-2 text-muted-foreground hover:bg-card hover:text-foreground backdrop-blur-sm shadow-sm"
              title={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
            >
              {isFullscreen ? <Minimize2 className="size-4" /> : <Maximize2 className="size-4" />}
            </button>
          </div>
          <KnowledgeGraph
            data={data}
            height={graphHeight}
            filters={filters}
            nodeColors={{ concept: conceptColor, thesis: thesisColor, focused: focusedColor }}
          />
        </div>
      </div>
    );
  };

  if (fullscreen) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col bg-background overflow-hidden">
        {graphType === "knowledge" && knowledgePanel(true)}
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-5 py-10">
      <div className="flex flex-wrap items-baseline justify-between gap-4">
        <div>
          <h1 className="font-display text-4xl">
            {GRAPH_TYPES.find((g) => g.value === graphType)?.label}
          </h1>
          {graphType !== "knowledge" && (
            <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
              {graphType === "timeline"
                ? "Number of theses published per year, split by degree type."
                : "MS and PhD thesis counts side by side per year."}
            </p>
          )}
        </div>
        {graphTypeSelect}
      </div>

      {graphType === "knowledge" && knowledgePanel(false)}
      {graphType === "timeline" && <div className="mt-6"><TimelineChart data={data} /></div>}
      {graphType === "degree"   && <div className="mt-6"><DegreeChart data={data} /></div>}
    </div>
  );
}
