import { useMemo } from "react";
import { useNavigate } from "@tanstack/react-router";
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

export function ConceptTrendsChart({
  debuts,
  yearBounds,
  labelThreshold,
}: {
  debuts: ConceptDebut[];
  yearBounds: [number, number];
  labelThreshold: number;
}) {
  const navigate = useNavigate();

  const byCategory = useMemo(() => {
    const groups: Record<string, Point[]> = {};
    for (const d of debuts) {
      (groups[d.category] ||= []).push({ ...d, x: d.firstYear + jitter(d.slug), y: d.totalMentions });
    }
    return groups;
  }, [debuts]);

  const labeledPoints = useMemo(
    () =>
      debuts
        .filter((d) => d.totalMentions >= labelThreshold)
        .map((d) => ({ ...d, x: d.firstYear + jitter(d.slug), y: d.totalMentions })),
    [debuts, labelThreshold],
  );

  const ticks = useMemo(() => {
    const out: number[] = [];
    for (let y = yearBounds[0]; y <= yearBounds[1]; y++) out.push(y);
    return out;
  }, [yearBounds]);

  const maxMentions = useMemo(
    () => debuts.reduce((m, d) => Math.max(m, d.totalMentions), 0),
    [debuts],
  );

  const openConcept = (slug: string) =>
    navigate({ to: "/concepts/$slug", params: { slug: slug.replace("concepts/", "") } });

  return (
    <div className="rounded-lg border rule bg-card p-6">
      <ResponsiveContainer width="100%" height={460}>
        <ScatterChart margin={{ top: 16, right: 20, left: 0, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
          <XAxis
            type="number"
            dataKey="x"
            name="First mention"
            domain={[yearBounds[0] - 0.5, yearBounds[1] + 0.5]}
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
          <Customized component={makeLabelLayer(labeledPoints, openConcept)} />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}
