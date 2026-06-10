import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Eye, EyeOff, Maximize2, Minimize2, SlidersHorizontal, Search, X } from "lucide-react";
import {
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Customized,
} from "recharts";
import { CONCEPT_CATEGORIES, CATEGORY_COLOR } from "@/components/graph/GraphFilters";
import type { ConceptDebut } from "@/lib/content";

type Point = ConceptDebut & { x: number; y: number };

/** Deterministic jitter in [-0.35, 0.35] so concepts sharing a (year, count) cell don't fully overlap. */
function jitter(slug: string): number {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) | 0;
  return ((Math.abs(h) % 1000) / 1000 - 0.5) * 0.7;
}

function ConceptTooltip({ active, payload }: { active?: boolean; payload?: Array<{ payload: Point }> }) {
  if (!active || !payload?.length) return null;
  const p = payload[0].payload;
  return (
    <div className="rounded-md border rule bg-card px-3 py-2 text-xs shadow-md">
      <p className="font-medium text-foreground">{p.title}</p>
      <p className="mt-0.5 text-muted-foreground">
        First mentioned {p.firstYear} · {p.totalMentions} {p.totalMentions === 1 ? "thesis" : "theses"}
      </p>
    </div>
  );
}

const FONT_SIZE = 10;
const CHAR_W = 5.6; // approx px per char at FONT_SIZE
const ROW_GAP = 13; // min vertical spacing between label baselines
const ANCHOR_OFFSET = 11; // default px a label floats above its dot

interface ScaleProps {
  xAxisMap?: Record<string, { scale?: (v: number) => number }>;
  yAxisMap?: Record<string, { scale?: (v: number) => number }>;
  offset?: { top: number; left: number; width: number; height: number };
}

/**
 * Single label layer for the whole chart: places each labeled point's title
 * above its dot, then resolves collisions by stacking labels upward. Any label
 * pushed off its dot gets a thin leader line back to the dot.
 */
function makeLabelLayer(points: Point[], onPick: (slug: string) => void) {
  return function LabelLayer(props: ScaleProps) {
    const xScale = props.xAxisMap?.[Object.keys(props.xAxisMap)[0]]?.scale;
    const yScale = props.yAxisMap?.[Object.keys(props.yAxisMap)[0]]?.scale;
    if (!xScale || !yScale) return null;

    const topClamp = (props.offset?.top ?? 0) + FONT_SIZE;

    const items = points
      .map((p) => ({
        slug: p.slug,
        title: p.title,
        color: CATEGORY_COLOR[p.category] ?? "var(--color-foreground)",
        ax: xScale(p.x),
        ay: yScale(p.y),
        halfW: (p.title.length * CHAR_W) / 2,
      }))
      .sort((a, b) => a.ay - b.ay); // top of chart first

    const placed: Array<typeof items[number] & { ly: number }> = [];
    for (const it of items) {
      let ly = it.ay - ANCHOR_OFFSET;
      let moved = true;
      let guard = 0;
      while (moved && guard++ < 300) {
        moved = false;
        for (const q of placed) {
          const overlapX = Math.abs(it.ax - q.ax) < it.halfW + q.halfW + 4;
          if (overlapX && Math.abs(ly - q.ly) < ROW_GAP) {
            ly = q.ly - ROW_GAP;
            moved = true;
          }
        }
      }
      if (ly < topClamp) ly = topClamp;
      placed.push({ ...it, ly });
    }

    return (
      <g>
        {placed.map((p) => {
          const displaced = it_displaced(p.ay - ANCHOR_OFFSET, p.ly);
          return (
            <g key={p.slug} style={{ cursor: "pointer" }} onClick={() => onPick(p.slug)}>
              {displaced && (
                <line
                  x1={p.ax}
                  y1={p.ay - 3}
                  x2={p.ax}
                  y2={p.ly + 2}
                  stroke={p.color}
                  strokeWidth={0.75}
                  strokeOpacity={0.6}
                />
              )}
              <text
                x={p.ax}
                y={p.ly}
                textAnchor="middle"
                style={{ fontSize: FONT_SIZE, fill: "var(--color-foreground)" }}
              >
                {p.title}
              </text>
            </g>
          );
        })}
      </g>
    );
  };
}

/** A label is "displaced" (needs a leader line) once it sits clearly above its default float position. */
function it_displaced(defaultY: number, finalY: number): boolean {
  return defaultY - finalY > 4;
}

export function ConceptTrendsChart({ debuts }: { debuts: ConceptDebut[] }) {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);

  // View controls
  const [showLabels, setShowLabels] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);

  // Filter state (owned by the chart so it travels into fullscreen)
  const [q, setQ] = useState("");
  const [hidden, setHidden] = useState<string[]>([]);
  const [yearMin, setYearMin] = useState<number | null>(null);
  const [yearMax, setYearMax] = useState<number | null>(null);
  const [labelThreshold, setLabelThreshold] = useState<number | null>(null);

  useEffect(() => {
    const onChange = () => setIsFullscreen(document.fullscreenElement === containerRef.current);
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  const toggleFullscreen = () => {
    if (document.fullscreenElement) {
      void document.exitFullscreen?.();
    } else {
      void containerRef.current?.requestFullscreen?.();
    }
  };

  const yearBounds = useMemo<[number, number]>(() => {
    if (debuts.length === 0) return [2000, 2026];
    const ys = debuts.map((d) => d.firstYear);
    return [Math.min(...ys), Math.max(...ys)];
  }, [debuts]);

  const lo = yearMin ?? yearBounds[0];
  const hi = yearMax ?? yearBounds[1];

  const years = useMemo(() => {
    const out: number[] = [];
    for (let y = yearBounds[0]; y <= yearBounds[1]; y++) out.push(y);
    return out;
  }, [yearBounds]);

  // Slider max from the full set so it doesn't shift as you filter.
  const maxMentionsAll = useMemo(() => debuts.reduce((m, d) => Math.max(m, d.totalMentions), 0), [debuts]);
  // Default high so only the few well-separated outliers are labeled; drag down to reveal more.
  const threshold = labelThreshold ?? Math.max(3, Math.ceil((maxMentionsAll || 8) * 0.45));

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    return debuts.filter((d) => {
      if (hidden.includes(d.category)) return false;
      if (d.firstYear < lo || d.firstYear > hi) return false;
      if (term) {
        const inTitle = d.title.toLowerCase().includes(term);
        const inAlias = d.aliases.some((a) => a.toLowerCase().includes(term));
        if (!inTitle && !inAlias) return false;
      }
      return true;
    });
  }, [debuts, q, hidden, lo, hi]);

  const byCategory = useMemo(() => {
    const groups: Record<string, Point[]> = {};
    for (const d of filtered) {
      (groups[d.category] ||= []).push({ ...d, x: d.firstYear + jitter(d.slug), y: d.totalMentions });
    }
    return groups;
  }, [filtered]);

  const labeledPoints = useMemo(
    () =>
      filtered
        .filter((d) => d.totalMentions >= threshold)
        .map((d) => ({ ...d, x: d.firstYear + jitter(d.slug), y: d.totalMentions })),
    [filtered, threshold],
  );

  const ticks = useMemo(() => {
    const out: number[] = [];
    for (let y = lo; y <= hi; y++) out.push(y);
    return out;
  }, [lo, hi]);

  const maxMentions = useMemo(
    () => filtered.reduce((m, d) => Math.max(m, d.totalMentions), 0),
    [filtered],
  );

  const openConcept = (slug: string) =>
    navigate({ to: "/concepts/$slug", params: { slug: slug.replace("concepts/", "") } });

  const iconBtn =
    "rounded-md border rule bg-card/80 p-2 text-muted-foreground backdrop-blur hover:border-[var(--teal-soft)] hover:text-foreground";

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden rounded-lg border rule bg-card p-6 ${isFullscreen ? "flex flex-col" : ""}`}
    >
      {/* Toolbar */}
      <div className="absolute right-3 top-3 z-10 flex gap-1">
        <button
          onClick={() => setPanelOpen((v) => !v)}
          aria-pressed={panelOpen}
          title="Filters & labels"
          aria-label="Filters and labels"
          className={iconBtn}
        >
          <SlidersHorizontal className="size-4" />
        </button>
        <button
          onClick={toggleFullscreen}
          title={isFullscreen ? "Exit full screen" : "Full screen"}
          aria-label={isFullscreen ? "Exit full screen" : "Full screen"}
          className={iconBtn}
        >
          {isFullscreen ? <Minimize2 className="size-4" /> : <Maximize2 className="size-4" />}
        </button>
      </div>

      {/* Sidebar */}
      {panelOpen && (
        <div className="absolute right-0 top-0 z-20 flex h-full w-72 max-w-[85%] flex-col gap-4 overflow-y-auto border-l rule bg-card p-4 shadow-xl">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-lg">Filters</h3>
            <button onClick={() => setPanelOpen(false)} aria-label="Close filters" className={iconBtn}>
              <X className="size-4" />
            </button>
          </div>

          <p className="font-mono text-xs text-muted-foreground">
            {filtered.length} of {debuts.length} concepts
          </p>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search title or alias…"
              className="h-10 w-full rounded-md border rule bg-card pl-9 pr-3 text-sm outline-none focus:border-[var(--teal-soft)]"
            />
          </div>

          {/* Year range */}
          <div>
            <p className="mb-1.5 text-xs font-medium tracking-wide text-muted-foreground">Years</p>
            <div className="flex items-center gap-2">
              <select
                value={lo}
                onChange={(e) => setYearMin(Math.min(Number(e.target.value), hi))}
                className="h-9 grow rounded-md border rule bg-card px-2 text-sm outline-none focus:border-[var(--teal-soft)]"
              >
                {years.filter((y) => y <= hi).map((y) => <option key={y} value={y}>{y}</option>)}
              </select>
              <span className="text-muted-foreground">–</span>
              <select
                value={hi}
                onChange={(e) => setYearMax(Math.max(Number(e.target.value), lo))}
                className="h-9 grow rounded-md border rule bg-card px-2 text-sm outline-none focus:border-[var(--teal-soft)]"
              >
                {years.filter((y) => y >= lo).map((y) => <option key={y} value={y}>{y}</option>)}
              </select>
            </div>
          </div>

          {/* Category toggles */}
          <div>
            <p className="mb-1.5 text-xs font-medium tracking-wide text-muted-foreground">Categories</p>
            <div className="flex flex-wrap gap-2">
              {CONCEPT_CATEGORIES.map(({ key, label, color }) => {
                const on = !hidden.includes(key);
                return (
                  <button
                    key={key}
                    onClick={() =>
                      setHidden((h) => (h.includes(key) ? h.filter((c) => c !== key) : [...h, key]))
                    }
                    className={`flex items-center gap-1.5 rounded-full border rule px-3 py-1 text-xs transition-colors ${
                      on ? "bg-card text-foreground" : "bg-transparent text-muted-foreground opacity-50"
                    }`}
                  >
                    <span className="inline-block size-2 rounded-full" style={{ background: color }} />
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Labels */}
          <div className="border-t rule pt-3">
            <button
              onClick={() => setShowLabels((v) => !v)}
              aria-pressed={showLabels}
              className="flex items-center gap-2 text-xs font-medium tracking-wide text-muted-foreground hover:text-foreground"
            >
              {showLabels ? <Eye className="size-4" /> : <EyeOff className="size-4" />}
              {showLabels ? "Labels shown" : "Labels hidden"}
            </button>
            {showLabels && (
              <div className="mt-3">
                <label htmlFor="label-threshold" className="text-xs text-muted-foreground">
                  Show labels for ≥ {threshold} {threshold === 1 ? "thesis" : "theses"}
                </label>
                <input
                  id="label-threshold"
                  type="range"
                  min={1}
                  max={Math.max(1, maxMentionsAll)}
                  value={threshold}
                  onChange={(e) => setLabelThreshold(Number(e.target.value))}
                  className="mt-2 w-full accent-[var(--teal)]"
                />
                <span className="font-mono text-xs text-muted-foreground">
                  {labeledPoints.length} labeled
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      <ResponsiveContainer width="100%" height={isFullscreen ? "100%" : 460}>
        <ScatterChart margin={{ top: 16, right: 20, left: 0, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
          <XAxis
            type="number"
            dataKey="x"
            name="First mention"
            domain={[lo - 0.5, hi + 0.5]}
            ticks={ticks}
            allowDecimals={false}
            tickFormatter={(v) => String(Math.round(v))}
            tick={{ fontSize: 12 }}
          />
          <YAxis
            type="number"
            dataKey="y"
            name="Theses"
            domain={[0, Math.max(1, maxMentions + 1)]}
            allowDecimals={false}
            tick={{ fontSize: 12 }}
            label={{ value: "Theses mentioning", angle: -90, position: "insideLeft", style: { fontSize: 12, fill: "var(--color-muted-foreground)" } }}
          />
          <ZAxis range={[40, 40]} />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} content={<ConceptTooltip />} />
          <Legend />
          {CONCEPT_CATEGORIES.map(({ key, label, color }) =>
            byCategory[key]?.length ? (
              <Scatter
                key={key}
                name={label}
                data={byCategory[key]}
                fill={color}
                fillOpacity={0.75}
                isAnimationActive={false}
                onClick={(p: Point) => openConcept(p.slug)}
                className="cursor-pointer"
              />
            ) : null,
          )}
          {showLabels && <Customized component={makeLabelLayer(labeledPoints, openConcept)} />}
        </ScatterChart>
      </ResponsiveContainer>

      {filtered.length === 0 && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center text-sm text-muted-foreground">
          No concepts match these filters.
        </div>
      )}
    </div>
  );
}
