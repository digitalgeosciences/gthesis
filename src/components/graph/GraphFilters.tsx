import { Filter, X } from "lucide-react";

export const CONCEPT_CATEGORIES = [
  { key: "formations",  label: "Formations",  color: "#d97706" },
  { key: "locations",   label: "Locations",   color: "#0891b2" },
  { key: "techniques",  label: "Techniques",  color: "#059669" },
  { key: "terminology", label: "Terminology", color: "#7c3aed" },
  { key: "themes",      label: "Themes",      color: "#db2777" },
] as const;

export const CATEGORY_COLOR: Record<string, string> = Object.fromEntries(
  CONCEPT_CATEGORIES.map((c) => [c.key, c.color]),
);

export interface GraphFilterState {
  hiddenCategories: string[];
  showTheses: boolean;
  yearMin: number;
  yearMax: number;
  minConnections: number;
  searchTerm: string;
  author: string;
  conceptSearch: string;
  degrees: string[];
  nodeSizeMultiplier: number;
  conceptSizeMultiplier: number;
  linkWidth: number;
  labelCategories: string[];
  showThesisLabels: boolean;
  labelType: "title" | "alias" | "all";
}

interface Props {
  filters: GraphFilterState;
  onChange: (f: GraphFilterState) => void;
  yearBounds: [number, number];
  nodeCount: { concepts: number; theses: number; links: number };
  onReset: () => void;
  thesisColor: string;
  filterHeight?: number;
}

export function GraphFilters({
  filters,
  onChange,
  yearBounds,
  onReset,
  thesisColor,
  filterHeight = 680,
}: Props) {
  function set<K extends keyof GraphFilterState>(k: K, v: GraphFilterState[K]) {
    onChange({ ...filters, [k]: v });
  }

  const years = Array.from(
    { length: yearBounds[1] - yearBounds[0] + 1 },
    (_, i) => yearBounds[0] + i,
  );

  return (
    <aside
      style={filterHeight !== undefined ? { height: filterHeight } : undefined}
      className="flex w-full md:w-60 shrink-0 flex-col gap-4 rounded-lg border rule bg-card p-4 text-sm overflow-y-auto"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-1.5 font-medium text-foreground">
          <Filter className="size-3.5" />
          Filters
        </span>
        <button
          onClick={onReset}
          className="flex items-center gap-1 rounded px-1.5 py-0.5 text-xs text-muted-foreground hover:bg-muted hover:text-foreground"
        >
          <X className="size-3" /> Reset
        </button>
      </div>

      {/* Year range — dropdowns, at top */}
      <div className="space-y-1.5">
        <span className="block text-xs font-medium tracking-wide text-muted-foreground">Year range</span>
        <div className="flex items-center gap-2">
          <select
            value={filters.yearMin}
            onChange={(e) => set("yearMin", Math.min(Number(e.target.value), filters.yearMax))}
            className="flex-1 rounded-md border rule bg-background px-2 py-1 text-xs outline-none focus:border-[var(--teal)]"
          >
            {years.filter((y) => y <= filters.yearMax).map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
          <span className="text-muted-foreground">–</span>
          <select
            value={filters.yearMax}
            onChange={(e) => set("yearMax", Math.max(Number(e.target.value), filters.yearMin))}
            className="flex-1 rounded-md border rule bg-background px-2 py-1 text-xs outline-none focus:border-[var(--teal)]"
          >
            {years.filter((y) => y >= filters.yearMin).map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Author search */}
      <div className="space-y-1.5">
        <label className="block text-xs font-medium tracking-wide text-muted-foreground">Author</label>
        <input
          type="search"
          placeholder="Filter by author…"
          value={filters.author}
          onChange={(e) => set("author", e.target.value)}
          className="w-full rounded-md border rule bg-background px-3 py-1.5 text-xs outline-none focus:border-[var(--teal)]"
        />
      </div>

      {/* Concept search */}
      <div className="space-y-1.5">
        <label className="block text-xs font-medium tracking-wide text-muted-foreground">Concept</label>
        <input
          type="search"
          placeholder="Filter by concept…"
          value={filters.conceptSearch}
          onChange={(e) => set("conceptSearch", e.target.value)}
          className="w-full rounded-md border rule bg-background px-3 py-1.5 text-xs outline-none focus:border-[var(--teal)]"
        />
      </div>

      {/* Degree */}
      <div className="space-y-2">
        <span className="block text-xs font-medium tracking-wide text-muted-foreground">Degree</span>
        {["MS", "PhD"].map((deg) => (
          <label key={deg} className="flex cursor-pointer items-center gap-2.5">
            <input
              type="checkbox"
              checked={filters.degrees.includes(deg)}
              onChange={(e) =>
                set("degrees", e.target.checked
                  ? [...filters.degrees, deg]
                  : filters.degrees.filter((d) => d !== deg))
              }
              className="size-3.5 accent-[var(--teal)]"
            />
            <span>{deg}</span>
          </label>
        ))}
      </div>

      {/* Node size */}
      <div className="space-y-1.5">
        <span className="block text-xs font-medium tracking-wide text-muted-foreground">Node size</span>
        <div className="flex items-center gap-2">
          <span
            title="Concept size"
            className="inline-block rounded-sm flex-shrink-0 transition-all"
            style={{ background: "#d97706", width: `${Math.round(6 * filters.conceptSizeMultiplier)}px`, height: `${Math.round(6 * filters.conceptSizeMultiplier)}px` }}
          />
          <div className="flex items-center gap-1 ml-auto">
            <button
              onClick={() => set("conceptSizeMultiplier", Math.max(0.5, +(filters.conceptSizeMultiplier - 0.5).toFixed(1)))}
              className="flex size-6 items-center justify-center rounded border rule bg-card text-sm text-muted-foreground hover:text-foreground"
            >−</button>
            <span className="w-8 text-center font-mono text-xs">{filters.conceptSizeMultiplier}×</span>
            <button
              onClick={() => set("conceptSizeMultiplier", Math.min(3, +(filters.conceptSizeMultiplier + 0.5).toFixed(1)))}
              className="flex size-6 items-center justify-center rounded border rule bg-card text-sm text-muted-foreground hover:text-foreground"
            >+</button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span
            title="Thesis size"
            className="inline-block rounded-full flex-shrink-0 transition-all"
            style={{ background: thesisColor, width: `${Math.round(6 * filters.nodeSizeMultiplier)}px`, height: `${Math.round(6 * filters.nodeSizeMultiplier)}px` }}
          />
          <div className="flex items-center gap-1 ml-auto">
            <button
              onClick={() => set("nodeSizeMultiplier", Math.max(0.5, +(filters.nodeSizeMultiplier - 0.5).toFixed(1)))}
              className="flex size-6 items-center justify-center rounded border rule bg-card text-sm text-muted-foreground hover:text-foreground"
            >−</button>
            <span className="w-8 text-center font-mono text-xs">{filters.nodeSizeMultiplier}×</span>
            <button
              onClick={() => set("nodeSizeMultiplier", Math.min(3, +(filters.nodeSizeMultiplier + 0.5).toFixed(1)))}
              className="flex size-6 items-center justify-center rounded border rule bg-card text-sm text-muted-foreground hover:text-foreground"
            >+</button>
          </div>
        </div>
      </div>

      {/* Label style */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <span className="block text-xs font-medium tracking-wide text-muted-foreground">Label style</span>
          <select
            value={filters.labelType}
            onChange={(e) => set("labelType", e.target.value as "title" | "alias")}
            className="rounded-md border rule bg-background px-2 py-0.5 text-xs outline-none focus:border-[var(--teal)]"
          >
            <option value="title">Title</option>
            <option value="alias">Aliases (slug)</option>
            <option value="all">All</option>
          </select>
        </div>
      </div>

      {/* Link thickness */}
      <div className="space-y-1.5">
        <label className="block text-xs font-medium tracking-wide text-muted-foreground">
          Link thickness: <span className="font-mono normal-case">{filters.linkWidth}</span>
        </label>
        <input
          type="range" min={0.3} max={4} step={0.3}
          value={filters.linkWidth}
          onChange={(e) => set("linkWidth", Number(e.target.value))}
          className="w-full accent-[var(--teal)]"
        />
      </div>

      {/* Node types — visibility + label per row */}
      <div className="space-y-2">
        <span className="block text-xs font-medium tracking-wide text-muted-foreground">Node types</span>
        {CONCEPT_CATEGORIES.map(({ key, label, color }) => {
          const visible = !filters.hiddenCategories.includes(key);
          return (
            <div key={key} className="flex items-center gap-2.5">
              <span className="inline-block size-2.5 rounded-full flex-shrink-0" style={{ background: color }} />
              <span className="flex-1 text-sm">{label}</span>
              <input
                type="checkbox"
                checked={visible}
                onChange={(e) =>
                  set(
                    "hiddenCategories",
                    e.target.checked
                      ? filters.hiddenCategories.filter((c) => c !== key)
                      : [...filters.hiddenCategories, key],
                  )
                }
                className="size-3.5 accent-[var(--teal)] w-7"
              />
              <input
                type="checkbox"
                checked={filters.labelCategories.includes(key)}
                disabled={!visible}
                onChange={(e) =>
                  set(
                    "labelCategories",
                    e.target.checked
                      ? [...filters.labelCategories, key]
                      : filters.labelCategories.filter((c) => c !== key),
                  )
                }
                className="size-3.5 accent-[var(--teal)] w-7 disabled:opacity-30"
              />
            </div>
          );
        })}
        <div className="flex items-center gap-2.5">
          <span className="inline-block size-2.5 rounded-full flex-shrink-0" style={{ background: thesisColor }} />
          <span className="flex-1 text-sm">Theses</span>
          <input
            type="checkbox"
            checked={filters.showTheses}
            onChange={(e) => set("showTheses", e.target.checked)}
            className="size-3.5 accent-[var(--teal)] w-7"
          />
          <input
            type="checkbox"
            checked={filters.showThesisLabels}
            disabled={!filters.showTheses}
            onChange={(e) => set("showThesisLabels", e.target.checked)}
            className="size-3.5 accent-[var(--teal)] w-7 disabled:opacity-30"
          />
        </div>
      </div>

      {/* Min connections */}
      <div className="space-y-1.5">
        <label
          className="block text-xs font-medium tracking-wide text-muted-foreground cursor-help"
          title="Hide nodes with fewer connections to reduce clutter."
        >
          Min connections: <span className="font-mono normal-case">{filters.minConnections}</span>
        </label>
        <input
          type="range"
          min={0}
          max={20}
          value={filters.minConnections}
          onChange={(e) => set("minConnections", Number(e.target.value))}
          className="w-full accent-[var(--teal)]"
        />
      </div>
    </aside>
  );
}
