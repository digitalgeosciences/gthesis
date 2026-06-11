import { useEffect, useRef, useState, useMemo } from "react";
import { useNavigate } from "@tanstack/react-router";
import type { ContentIndex } from "@/lib/content";
import { CATEGORY_COLOR, type GraphFilterState } from "./GraphFilters";
import { extractLastName } from "@/lib/utils";

type GNode = {
  id: string;
  name: string;
  type: string;
  year?: number;
  category?: string;
  val?: number;
};
type GLink = { source: string; target: string };

export function KnowledgeGraph({
  data,
  height = 600,
  focusSlug,
  filters,
  nodeColors,
}: {
  data: ContentIndex;
  height?: number;
  focusSlug?: string;
  filters?: GraphFilterState;
  nodeColors?: { concept: string; thesis: string; focused: string };
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const graphRef = useRef<any>(null);
  const [size, setSize] = useState({ w: 800, h: height });
  const [Comp, setComp] = useState<any>(null);
  const navigate = useNavigate();

  function zoomBy(factor: number) {
    if (!graphRef.current) return;
    const current = graphRef.current.zoom();
    graphRef.current.zoom(current * factor, 300);
  }

  const colors = nodeColors ?? {
    concept: "#1e4d6b",
    thesis: "#6b9aad",
    focused: "#f59e0b",
  };

  useEffect(() => {
    let alive = true;
    import("react-force-graph-2d").then((m) => {
      if (alive) setComp(() => m.default);
    });
    return () => {
      alive = false;
    };
  }, []);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setSize({ w: el.clientWidth, h: height }));
    ro.observe(el);
    return () => ro.disconnect();
  }, [height]);

  const { visibleIds, visibleThesisIds, visibleConceptIds } = useMemo(() => {
    const vThesisIds = new Set(
      Object.values(data.bySlug)
        .filter((e) => {
          if (e.type !== "source") return false;
          if (filters && !filters.showTheses) return false;
          if (filters && e.year && (e.year < filters.yearMin || e.year > filters.yearMax)) return false;
          if (filters?.author && !(e.author ?? "").toLowerCase().includes(filters.author.toLowerCase())) return false;
          if (filters?.degrees?.length && !filters.degrees.includes(e.degree ?? "")) return false;
          if (filters && e.links.length < filters.minConnections) return false;
          if (filters?.conceptSearch) {
            const term = filters.conceptSearch.toLowerCase();
            const hasMatch = e.links.some((l) => data.bySlug[l]?.title.toLowerCase().includes(term));
            if (!hasMatch) return false;
          }
          return true;
        })
        .map((e) => e.slug),
    );

    const vConceptIds = new Set(
      Object.values(data.bySlug)
        .filter((e) => {
          if (e.type !== "concept") return false;
          if (filters && filters.hiddenCategories.includes(e.category ?? "")) return false;
          if (filters && e.backlinks.length < filters.minConnections) return false;
          if (filters?.conceptSearch && !e.title.toLowerCase().includes(filters.conceptSearch.toLowerCase())) return false;
          return e.backlinks.some((b) => vThesisIds.has(b));
        })
        .map((e) => e.slug),
    );

    return {
      visibleThesisIds: vThesisIds,
      visibleConceptIds: vConceptIds,
      visibleIds: new Set([...vThesisIds, ...vConceptIds]),
    };
  }, [data, filters]);

  const highlightId = useMemo(() => {
    return focusSlug ??
      (filters?.searchTerm
        ? Object.values(data.bySlug).find((e) =>
            e.title.toLowerCase().includes(filters.searchTerm.toLowerCase()),
          )?.slug
        : undefined);
  }, [data, focusSlug, filters?.searchTerm]);

  const { nodes, links, neighbors } = useMemo(() => {
    const computedNodes: GNode[] = Object.values(data.bySlug)
      .filter((e) => visibleIds.has(e.slug))
      .map((e) => ({
        id: e.slug,
        name: e.type === "source"
          ? `${extractLastName(e.author ?? e.title)}${e.year ? ` (${e.year})` : ""}`
          : (() => {
              const aliasSlug = e.slug.split("/").pop() ?? e.slug;
              if (filters?.labelType === "alias") return aliasSlug;
              if (filters?.labelType === "all") return `${e.title} · ${aliasSlug}`;
              return e.title;
            })(),
        type: e.type,
        year: e.year,
        category: e.category,
        val:
          e.type === "concept"
            ? (1 + e.backlinks.filter((b) => visibleThesisIds.has(b)).length * 2) * (filters?.conceptSizeMultiplier ?? 1)
            : 4 * (filters?.nodeSizeMultiplier ?? 1),
      }));

    const computedLinks: GLink[] = [];
    const seenConceptPairs = new Set<string>();

    Object.values(data.bySlug).forEach((e) => {
      if (e.type === "source" && visibleIds.has(e.slug)) {
        const visibleConcepts = e.links.filter((l) => visibleIds.has(l));
        visibleConcepts.forEach((l) => computedLinks.push({ source: e.slug, target: l }));
        // Concept↔concept co-occurrence edges. Off by default, and only between
        // concepts of *different* categories (same-category links are sibling
        // noise, e.g. formation↛formation).
        if (filters?.linkConcepts) {
          for (let i = 0; i < visibleConcepts.length; i++) {
            for (let j = i + 1; j < visibleConcepts.length; j++) {
              const catI = data.bySlug[visibleConcepts[i]]?.category;
              const catJ = data.bySlug[visibleConcepts[j]]?.category;
              if (catI && catJ && catI === catJ) continue;
              const pair = [visibleConcepts[i], visibleConcepts[j]].sort().join("\0");
              if (!seenConceptPairs.has(pair)) {
                seenConceptPairs.add(pair);
                computedLinks.push({ source: visibleConcepts[i], target: visibleConcepts[j] });
              }
            }
          }
        }
      }
    });

    const computedNeighbors = new Map<string, Set<string>>();
    computedNodes.forEach((n) => computedNeighbors.set(n.id, new Set()));
    computedLinks.forEach((l) => {
      computedNeighbors.get(l.source)?.add(l.target);
      computedNeighbors.get(l.target)?.add(l.source);
    });

    return { nodes: computedNodes, links: computedLinks, neighbors: computedNeighbors };
  }, [data, visibleIds, visibleThesisIds, visibleConceptIds, filters]);

  const graphData = useMemo(() => ({ nodes, links }), [nodes, links]);

  const [hoverNode, setHoverNode] = useState<GNode | null>(null);
  const [selectedNode, setSelectedNode] = useState<GNode | null>(null);

  const activeNode = hoverNode || selectedNode;

  return (
    <div
      ref={wrapRef}
      className="relative w-full overflow-hidden rounded-lg border rule bg-card"
      style={{ height }}
    >
      {Comp ? (
        <Comp
          ref={graphRef}
          graphData={graphData}
          width={size.w}
          height={size.h}
          nodeRelSize={2}
          backgroundColor="transparent"
          nodeColor={(n: GNode) => {
            const isHighlighted = activeNode && (n.id === activeNode.id || neighbors.get(activeNode.id)?.has(n.id));
            const isDimmed = activeNode && !isHighlighted;
            const baseColor = n.id === highlightId
              ? colors.focused
              : n.type === "concept"
                ? (CATEGORY_COLOR[n.category ?? ""] ?? colors.concept)
                : colors.thesis;
            return isDimmed ? baseColor + "33" : baseColor; // Append low opacity if dimmed
          }}
          linkColor={(l: any) => {
            const sourceId = typeof l.source === "object" ? l.source.id : l.source;
            const targetId = typeof l.target === "object" ? l.target.id : l.target;
            if (activeNode) {
              const isHighlighted = sourceId === activeNode.id || targetId === activeNode.id;
              return isHighlighted ? "rgba(128,128,128,0.7)" : "rgba(128,128,128,0.05)";
            }
            return "rgba(128,128,128,0.2)";
          }}
          linkWidth={(l: any) => {
            const sourceId = typeof l.source === "object" ? l.source.id : l.source;
            const targetId = typeof l.target === "object" ? l.target.id : l.target;
            const baseWidth = filters?.linkWidth ?? 0.6;
            if (activeNode && (sourceId === activeNode.id || targetId === activeNode.id)) {
              return baseWidth * 2.5;
            }
            return baseWidth;
          }}
          nodeCanvasObjectMode={() => "after"}
          nodeCanvasObject={(n: any, ctx: CanvasRenderingContext2D, scale: number) => {
            const showDefault = n.type === "concept"
              ? filters?.labelCategories?.includes(n.category ?? "")
              : filters?.showThesisLabels;
            
            const isHovered = activeNode?.id === n.id;
            const isNeighbor = activeNode && neighbors.get(activeNode.id)?.has(n.id);
            const isDimmed = activeNode && !isHovered && !isNeighbor;
            
            if (!showDefault && !isHovered && !isNeighbor) return;
            if (isDimmed) return;

            const fontSize = Math.max(3, 5 / scale);
            ctx.font = `${fontSize}px Inter, sans-serif`;
            
            const baseColor = n.id === highlightId
              ? colors.focused
              : n.type === "concept"
              ? (CATEGORY_COLOR[n.category ?? ""] ?? colors.concept)
              : colors.thesis;

            // Give hovered labels their node color, others get muted text color
            ctx.fillStyle = (isHovered || isNeighbor) ? baseColor : "rgba(100,116,139,0.85)";
            
            ctx.textAlign = "center";
            const r = Math.sqrt(n.val ?? 1) * 2;
            // n.name already encodes the chosen label style (title / alias slug /
            // both), so render it verbatim instead of force-slugifying concepts.
            ctx.fillText(n.name, n.x, n.y + r + fontSize + 1);
            ctx.textAlign = "left";
          }}
          nodeLabel={(n: GNode) => n.name}
          onNodeHover={(n) => setHoverNode(n || null)}
          onNodeClick={(n: GNode) => {
            if (selectedNode?.id === n.id) {
              if (n.type === "concept")
                navigate({
                  to: "/concepts/$slug",
                  params: { slug: n.id.replace("concepts/", "") },
                });
              else
                navigate({
                  to: "/theses/$slug",
                  params: { slug: n.id.replace("sources/", "") },
                });
            } else {
              setSelectedNode(n);
            }
          }}
          onBackgroundClick={() => setSelectedNode(null)}
          cooldownTicks={80}
        />
      ) : (
        <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
          Loading graph…
        </div>
      )}
      <div className="absolute bottom-4 right-4 flex flex-col gap-1">
        <button
          onClick={() => zoomBy(1.5)}
          className="flex size-8 items-center justify-center rounded border rule bg-card text-lg font-medium text-muted-foreground hover:text-foreground hover:border-[var(--teal-soft)] shadow-sm"
          aria-label="Zoom in"
        >+</button>
        <button
          onClick={() => zoomBy(1 / 1.5)}
          className="flex size-8 items-center justify-center rounded border rule bg-card text-lg font-medium text-muted-foreground hover:text-foreground hover:border-[var(--teal-soft)] shadow-sm"
          aria-label="Zoom out"
        >−</button>
      </div>

      {selectedNode && (
        <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full border rule bg-card/95 px-5 py-2.5 text-sm shadow-md backdrop-blur">
          <span className="text-muted-foreground">Selected: </span>
          <span className="font-semibold text-foreground">{selectedNode.name}</span>
          <span className="ml-2 text-xs text-muted-foreground">(Click again to open)</span>
        </div>
      )}
    </div>
  );
}
