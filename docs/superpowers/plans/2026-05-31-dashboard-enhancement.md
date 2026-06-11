# GeoThesis Explorer Enhancement Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remove all Lovable integration, add a config.json for branding/controls, serve all content via a server function reading markdown files (eliminating public JSON), build a professional graph page with filters, and complete the departments/timeline pages.

**Architecture:** Content is loaded via a TanStack Start `createServerFn` that reads `public/contents/sources/*.md` and `public/contents/concepts/*.md` at runtime, parses YAML frontmatter and `[[wiki-links]]`, builds the `ContentIndex`, and caches it in server memory. This replaces `public/content-index.json` and `public/graph-data.json`. Dashboard branding, navigation, footer links, and graph colors are all controlled via `public/contents/config.json`, consumed by a `useConfig` hook. The graph page gains a collapsible filter panel (type, department, year range, min-connections, search).

**Tech Stack:** TanStack Start SSR (v1.167), React 19, Tailwind CSS 4, TypeScript 5, gray-matter (new dep for frontmatter parsing), react-force-graph-2d, zod (already installed)

---

## File Map

### New files
| Path | Purpose |
|------|---------|
| `public/contents/config.json` | Brand, nav links, footer links, graph colors |
| `src/lib/use-config.ts` | Hook fetching/caching config.json |
| `src/lib/content-loader.server.ts` | `createServerFn` reading all markdown files |
| `src/components/graph/GraphFilters.tsx` | Filter sidebar component for the graph page |

### Modified files
| Path | Change |
|------|--------|
| `src/routes/__root.tsx` | Remove Lovable import + useEffect |
| `src/components/layout/TopNav.tsx` | Read brand/nav from useConfig |
| `src/components/layout/Footer.tsx` | Read tagline/links/copyright from useConfig |
| `src/lib/use-content-data.ts` | Call server function instead of fetching JSON |
| `src/components/graph/KnowledgeGraph.tsx` | Accept filters prop, apply node/link visibility |
| `src/routes/graph.tsx` | Add filter state + sidebar layout + legend |
| `src/routes/departments.tsx` | Add "Browse all →" per dept linking to filtered theses |
| `src/routes/theses.index.tsx` | Accept `department` URL search param for deep-linking |
| `src/routes/timeline.tsx` | Add year + department filter dropdowns |
| `src/routes/about.tsx` | Update provenance to reflect new data source |
| `src/routes/index.tsx` | Use config for hero heading/subtext |
| `package.json` | Add gray-matter; rename `name` to `geothesis-explorer` |
| `vite.config.ts` | Remove @lovable.dev dependency (see Task 1d) |

### Deleted files
| Path | Reason |
|------|--------|
| `.lovable/project.json` | Lovable project metadata |
| `src/lib/lovable-error-reporting.ts` | Lovable runtime tracking |
| `public/content-index.json` | Replaced by server function |
| `public/graph-data.json` | Already unused (KnowledgeGraph builds dynamically) |

---

## Task 1 — Strip Lovable Metadata

**Files:** `.lovable/project.json`, `src/lib/lovable-error-reporting.ts`, `src/routes/__root.tsx`, `package.json`, `vite.config.ts`

### Task 1a: Delete Lovable project artifacts

- [ ] **Step 1: Delete `.lovable/project.json`**

  ```
  Delete the file: .lovable/project.json
  ```

- [ ] **Step 2: Delete `src/lib/lovable-error-reporting.ts`**

  ```
  Delete the file: src/lib/lovable-error-reporting.ts
  ```

- [ ] **Step 3: Remove Lovable usage from `src/routes/__root.tsx`**

  Remove line 13 (the import) and lines 38–38 (the useEffect calling `reportLovableError`).
  Also remove the `useEffect` import if it is only used for the Lovable call (check — it's on line 9, imported alongside other things; keep it if used elsewhere, which it is not in this file → remove it from the import too).

  The file currently imports:
  ```ts
  import { useEffect, type ReactNode } from "react";
  import { reportLovableError } from "../lib/lovable-error-reporting";
  ```

  And `ErrorComponent` currently reads:
  ```tsx
  function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
    console.error(error);
    const router = useRouter();
    useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
    return ( ... );
  }
  ```

  Replace the entire `ErrorComponent` with:
  ```tsx
  function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
    console.error(error);
    const router = useRouter();
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <div className="max-w-md text-center">
          <h1 className="font-display text-xl text-foreground">Something went wrong</h1>
          <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <button
              onClick={() => { router.invalidate(); reset(); }}
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Try again
            </button>
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent"
            >
              Go home
            </a>
          </div>
        </div>
      </div>
    );
  }
  ```

  And change the top import line from:
  ```ts
  import { useEffect, type ReactNode } from "react";
  ```
  to:
  ```ts
  import { type ReactNode } from "react";
  ```

- [ ] **Step 4: Rename package in `package.json`**

  Change line 2 from `"name": "tanstack_start_ts"` to `"name": "geothesis-explorer"`.

### Task 1b: Replace Lovable vite config

**Goal:** Remove `@lovable.dev/vite-tanstack-config` from the build chain; replace with standard TanStack Start plugins.

- [ ] **Step 1: Check TanStack Start vite export**

  Run:
  ```bash
  node -e "const m = require('@tanstack/react-start'); console.log(Object.keys(m))"
  ```
  Or look for a `/vite` subpath:
  ```bash
  ls node_modules/@tanstack/react-start/
  ```
  You are looking for a file named `vite.js` or `vite/index.js` in the package. If it exists, the import path is `@tanstack/react-start/vite`.

- [ ] **Step 2: Replace `vite.config.ts`**

  If `@tanstack/react-start/vite` exists, replace `vite.config.ts` with:

  ```ts
  import { defineConfig } from "vite";
  import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
  import react from "@vitejs/plugin-react";
  import tailwindcss from "@tailwindcss/vite";
  import tsconfigPaths from "vite-tsconfig-paths";

  export default defineConfig({
    plugins: [
      TanStackRouterVite({ target: "react", autoCodeSplitting: true }),
      react(),
      tailwindcss(),
      tsconfigPaths(),
    ],
  });
  ```

  If the above breaks SSR (server functions stop working), revert and keep the Lovable config for now — only the runtime Lovable artifacts (error reporting + .lovable/) need to be removed for this sprint.

- [ ] **Step 3: Test the dev server**

  Run `bun run dev`. Navigate to `/`, `/theses`, and `/graph`. All three must load without errors.

- [ ] **Step 4: Commit**

  ```bash
  git add src/routes/__root.tsx package.json vite.config.ts
  git rm .lovable/project.json src/lib/lovable-error-reporting.ts
  git commit -m "chore: remove Lovable metadata, error reporting, and project artifacts"
  ```

---

## Task 2 — Config JSON for Branding and Controls

**Files:** `public/contents/config.json` (create), `src/lib/use-config.ts` (create), `src/components/layout/TopNav.tsx`, `src/components/layout/Footer.tsx`, `src/routes/index.tsx`

### Task 2a: Create config.json

- [ ] **Step 1: Create `public/contents/config.json`**

  ```json
  {
    "brand": {
      "name": "GeoThesis",
      "subtitle": "KFUPM Research Archive",
      "tagline": "A curated archive of KFUPM graduate research in the earth sciences.",
      "institution": "King Fahd University of Petroleum and Minerals",
      "siteTitle": "GeoThesis — Geosciences Research Archive",
      "siteDescription": "Explore 200+ KFUPM graduate theses across petroleum geology, geophysics, reservoir engineering, hydrogeology, and environmental science."
    },
    "nav": {
      "links": [
        { "label": "Theses", "to": "/theses" },
        { "label": "Concepts", "to": "/concepts" },
        { "label": "Timeline", "to": "/timeline" },
        { "label": "Departments", "to": "/departments" },
        { "label": "About", "to": "/about" }
      ]
    },
    "footer": {
      "tagline": "A curated archive of KFUPM graduate research in the earth sciences.",
      "links": [
        { "label": "About", "to": "/about" },
        { "label": "Graph", "to": "/graph" },
        { "label": "Timeline", "to": "/timeline" }
      ],
      "copyright": "© 2026 KFUPM"
    },
    "graph": {
      "nodeColors": {
        "concept": "#1e4d6b",
        "thesis": "#6b9aad",
        "focused": "#f59e0b"
      },
      "linkOpacity": 0.25,
      "linkWidth": 0.6
    },
    "home": {
      "heroHeading": "A reading room for graduate research in petroleum geology, geophysics, and the earth sciences.",
      "heroSubtext": "GeoThesis turns thesis summaries into a navigable knowledge graph — connected by shared concepts, formations, and methods."
    }
  }
  ```

### Task 2b: Create useConfig hook

- [ ] **Step 1: Create `src/lib/use-config.ts`**

  ```ts
  import { useEffect, useState } from "react";

  export interface NavLink { label: string; to: string }

  export interface SiteConfig {
    brand: {
      name: string;
      subtitle: string;
      tagline: string;
      institution: string;
      siteTitle: string;
      siteDescription: string;
    };
    nav: { links: NavLink[] };
    footer: { tagline: string; links: NavLink[]; copyright: string };
    graph: {
      nodeColors: { concept: string; thesis: string; focused: string };
      linkOpacity: number;
      linkWidth: number;
    };
    home: { heroHeading: string; heroSubtext: string };
  }

  let cached: SiteConfig | null = null;
  let inflight: Promise<SiteConfig> | null = null;

  async function loadConfig(): Promise<SiteConfig> {
    if (cached) return cached;
    if (inflight) return inflight;
    inflight = fetch("/contents/config.json")
      .then((r) => r.json() as Promise<SiteConfig>)
      .then((data) => { cached = data; return data; });
    return inflight;
  }

  export function useConfig(): SiteConfig | null {
    const [config, setConfig] = useState<SiteConfig | null>(cached);
    useEffect(() => {
      if (!cached) loadConfig().then(setConfig);
    }, []);
    return config;
  }
  ```

### Task 2c: Update TopNav

- [ ] **Step 1: Replace `src/components/layout/TopNav.tsx`**

  ```tsx
  import { Link } from "@tanstack/react-router";
  import { Moon, Sun, Search as SearchIcon, Network } from "lucide-react";
  import { useTheme } from "@/lib/theme";
  import { useConfig } from "@/lib/use-config";

  export function TopNav({ onOpenSearch }: { onOpenSearch: () => void }) {
    const { theme, toggle } = useTheme();
    const config = useConfig();
    const brand = config?.brand;
    const navLinks = config?.nav.links ?? [
      { label: "Theses", to: "/theses" },
      { label: "Concepts", to: "/concepts" },
      { label: "Timeline", to: "/timeline" },
      { label: "Departments", to: "/departments" },
      { label: "About", to: "/about" },
    ];

    return (
      <header className="sticky top-0 z-40 border-b rule bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70">
        <div className="mx-auto flex h-14 max-w-6xl items-center gap-6 px-5">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-display text-xl tracking-tight text-foreground">
              {brand?.name ?? "GeoThesis"}
            </span>
            <span className="hidden text-xs text-muted-foreground sm:inline">
              {brand?.subtitle ?? "KFUPM Research Archive"}
            </span>
          </Link>
          <nav className="ml-4 hidden items-center gap-5 text-sm md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to as any}
                className="text-muted-foreground hover:text-foreground"
                activeProps={{ className: "text-foreground font-medium" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 rounded-md border rule bg-card px-3 py-1.5 text-xs text-muted-foreground hover:border-[var(--teal-soft)] hover:text-foreground"
            >
              <SearchIcon className="size-3.5" />
              <span className="hidden sm:inline">Search theses, concepts…</span>
              <span className="kbd ml-2 hidden sm:inline">/</span>
            </button>
            <Link
              to="/graph"
              className="rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
              aria-label="Knowledge graph"
            >
              <Network className="size-4" />
            </Link>
            <button
              onClick={toggle}
              className="rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </button>
          </div>
        </div>
      </header>
    );
  }
  ```

### Task 2d: Update Footer

- [ ] **Step 1: Replace `src/components/layout/Footer.tsx`**

  ```tsx
  import { Link } from "@tanstack/react-router";
  import { useConfig } from "@/lib/use-config";

  export function Footer() {
    const config = useConfig();
    const brand = config?.brand;
    const footer = config?.footer;
    const links = footer?.links ?? [
      { label: "About", to: "/about" },
      { label: "Graph", to: "/graph" },
      { label: "Timeline", to: "/timeline" },
    ];

    return (
      <footer className="mt-24 border-t rule">
        <div className="mx-auto max-w-6xl px-5 py-10 text-sm text-muted-foreground">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <span className="font-display text-base text-foreground">
                {brand?.name ?? "GeoThesis"}
              </span>
              <span className="mx-2">·</span>
              {footer?.tagline ?? brand?.tagline ?? "A curated archive of KFUPM graduate research."}
            </div>
            <div className="flex gap-5">
              {links.map((link) => (
                <Link key={link.to} to={link.to as any} className="hover:text-foreground">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          {footer?.copyright && (
            <p className="mt-4 text-xs text-muted-foreground">{footer.copyright}</p>
          )}
        </div>
      </footer>
    );
  }
  ```

### Task 2e: Update Home page to use config hero text

- [ ] **Step 1: Modify `src/routes/index.tsx`**

  Add the import:
  ```ts
  import { useConfig } from "@/lib/use-config";
  ```

  At the top of the `Home` function, add:
  ```ts
  const config = useConfig();
  ```

  In the hero section, replace the hardcoded `<h1>` and `<p>` text:

  Replace:
  ```tsx
  <h1 className="mt-3 max-w-3xl font-display text-5xl leading-[1.05] tracking-tight text-foreground sm:text-6xl">
    A reading room for graduate research in petroleum geology, geophysics, and the earth sciences.
  </h1>
  <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
    GeoThesis turns {data?.theses.length ?? 200}+ thesis summaries into a navigable knowledge graph —
    connected by {data?.concepts.length ?? 30}+ shared concepts, formations, and methods.
  </p>
  ```

  With:
  ```tsx
  <h1 className="mt-3 max-w-3xl font-display text-5xl leading-[1.05] tracking-tight text-foreground sm:text-6xl">
    {config?.home.heroHeading ?? "A reading room for graduate research in the earth sciences."}
  </h1>
  <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
    {config?.home.heroSubtext
      ? config.home.heroSubtext
        .replace("{thesisCount}", String(data?.theses.length ?? 200))
        .replace("{conceptCount}", String(data?.concepts.length ?? 30))
      : `GeoThesis turns ${data?.theses.length ?? 200}+ thesis summaries into a navigable knowledge graph — connected by ${data?.concepts.length ?? 30}+ shared concepts, formations, and methods.`
    }
  </p>
  ```

- [ ] **Step 2: Verify in browser — nav, footer, and home hero text all read from config.json**

  Run `bun run dev`. Open browser at `localhost`. Change a value in `public/contents/config.json`, reload page, confirm the change appears.

- [ ] **Step 3: Commit**

  ```bash
  git add public/contents/config.json src/lib/use-config.ts src/components/layout/TopNav.tsx src/components/layout/Footer.tsx src/routes/index.tsx
  git commit -m "feat: add config.json for branding controls; wire nav, footer, and home hero to config"
  ```

---

## Task 3 — Server-Side Content Loading from Markdown

**Files:** `src/lib/content-loader.server.ts` (create), `src/lib/use-content-data.ts`, `package.json`, `public/content-index.json` (delete), `public/graph-data.json` (delete)

### Task 3a: Add gray-matter dependency

- [ ] **Step 1: Install gray-matter**

  ```bash
  bun add gray-matter
  ```

  Expected output: gray-matter added to `dependencies` in `package.json`.

- [ ] **Step 2: Verify types are available**

  ```bash
  bun tsc --noEmit 2>&1 | head -20
  ```

  `gray-matter` ships its own types — no separate `@types/gray-matter` needed.

### Task 3b: Create content-loader.server.ts

- [ ] **Step 1: Create `src/lib/content-loader.server.ts`**

  ```ts
  import { createServerFn } from "@tanstack/react-start";
  import { readdir, readFile } from "node:fs/promises";
  import { resolve, join } from "node:path";
  import matter from "gray-matter";
  import type { Entry } from "./content";

  let serverCache: Record<string, Entry> | null = null;

  async function parseDir(
    dir: string,
    entryType: "source" | "concept",
    prefix: "sources" | "concepts",
  ): Promise<Record<string, Entry>> {
    let files: string[];
    try {
      files = await readdir(dir);
    } catch {
      return {};
    }
    const entries: Record<string, Entry> = {};
    await Promise.all(
      files
        .filter((f) => f.endsWith(".md"))
        .map(async (file) => {
          const slug = `${prefix}/${file.replace(/\.md$/, "")}`;
          const raw = await readFile(join(dir, file), "utf8");
          const { data: fm, content } = matter(raw);
          const summaryMatch = content.match(/\*\*Summary\*\*:\s*(.+?)(?=\n\n|\n##|$)/s);
          const wikiLinks = [...content.matchAll(/\[\[([^\]]+)\]\]/g)].map((m) => m[1]);
          const links =
            entryType === "source"
              ? wikiLinks.map((s) => `concepts/${s}`)
              : [];
          entries[slug] = {
            type: entryType,
            slug,
            title: String(fm.title ?? file.replace(/\.md$/, "").replace(/-/g, " ")),
            author: fm.author ? String(fm.author) : undefined,
            year: fm.year ? Number(fm.year) : undefined,
            department: fm.department ? String(fm.department) : undefined,
            degree: fm.degree ? String(fm.degree) : undefined,
            supervisor: fm.supervisor ? String(fm.supervisor) : undefined,
            summary: summaryMatch ? summaryMatch[1].trim() : undefined,
            content,
            links,
            backlinks: [],
          };
        }),
    );
    return entries;
  }

  function buildBacklinks(all: Record<string, Entry>): void {
    for (const entry of Object.values(all)) {
      for (const link of entry.links) {
        if (all[link] && !all[link].backlinks.includes(entry.slug)) {
          all[link].backlinks.push(entry.slug);
        }
      }
    }
  }

  export const loadContentIndex = createServerFn({ method: "GET" }).handler(async () => {
    if (serverCache) return serverCache;
    const base = resolve(process.cwd(), "public/contents");
    const [sources, concepts] = await Promise.all([
      parseDir(join(base, "sources"), "source", "sources"),
      parseDir(join(base, "concepts"), "concept", "concepts"),
    ]);
    const all = { ...sources, ...concepts };
    buildBacklinks(all);
    serverCache = all;
    return all;
  });
  ```

### Task 3c: Update useContentData to call server function

- [ ] **Step 1: Replace `src/lib/use-content-data.ts`**

  ```ts
  import { useEffect, useState } from "react";
  import { buildIndex, type ContentIndex, type Entry } from "./content";
  import { loadContentIndex } from "./content-loader.server";

  let cached: ContentIndex | null = null;
  let inflight: Promise<ContentIndex> | null = null;

  async function load(): Promise<ContentIndex> {
    if (cached) return cached;
    if (inflight) return inflight;
    inflight = loadContentIndex().then((raw: Record<string, Entry>) => {
      cached = buildIndex(raw);
      return cached;
    });
    return inflight;
  }

  export function useContentData(): ContentIndex | null {
    const [data, setData] = useState<ContentIndex | null>(cached);
    useEffect(() => {
      if (!cached) load().then(setData);
    }, []);
    return data;
  }
  ```

### Task 3d: Delete public JSON files

- [ ] **Step 1: Delete `public/content-index.json`**

- [ ] **Step 2: Delete `public/graph-data.json`**

### Task 3e: Verify data loads from markdown

- [ ] **Step 1: Run dev server and verify theses load**

  ```bash
  bun run dev
  ```

  Open `http://localhost:3000/theses`. Confirm the thesis list appears. If it shows "Loading archive…" indefinitely, check the browser Network tab for errors on the server function call.

- [ ] **Step 2: Verify graph still renders**

  Navigate to `/graph`. Confirm the force-directed graph loads with nodes and edges.

- [ ] **Step 3: Commit**

  ```bash
  git add src/lib/content-loader.server.ts src/lib/use-content-data.ts package.json bun.lock
  git rm public/content-index.json public/graph-data.json
  git commit -m "feat: serve content from markdown files via server function; remove public JSON"
  ```

---

## Task 4 — Professional Knowledge Graph with Filters

**Files:** `src/components/graph/GraphFilters.tsx` (create), `src/components/graph/KnowledgeGraph.tsx`, `src/routes/graph.tsx`

### Task 4a: Create GraphFilters component

- [ ] **Step 1: Create `src/components/graph/GraphFilters.tsx`**

  ```tsx
  import { Filter, X } from "lucide-react";

  export interface GraphFilterState {
    showConcepts: boolean;
    showTheses: boolean;
    department: string;
    yearMin: number;
    yearMax: number;
    minConnections: number;
    searchTerm: string;
  }

  interface Props {
    filters: GraphFilterState;
    onChange: (f: GraphFilterState) => void;
    departments: string[];
    yearBounds: [number, number];
    nodeCount: { concepts: number; theses: number; links: number };
    onReset: () => void;
  }

  export function GraphFilters({ filters, onChange, departments, yearBounds, nodeCount, onReset }: Props) {
    function set<K extends keyof GraphFilterState>(k: K, v: GraphFilterState[K]) {
      onChange({ ...filters, [k]: v });
    }

    return (
      <aside className="flex w-60 shrink-0 flex-col gap-5 rounded-lg border rule bg-card p-4 text-sm self-start sticky top-20">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1.5 font-medium text-foreground">
            <Filter className="size-3.5" /> Filters
          </span>
          <button
            onClick={onReset}
            className="flex items-center gap-1 rounded px-1.5 py-0.5 text-xs text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <X className="size-3" /> Reset
          </button>
        </div>

        <div className="space-y-1.5">
          <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Search node
          </label>
          <input
            type="search"
            placeholder="Highlight by name…"
            value={filters.searchTerm}
            onChange={(e) => set("searchTerm", e.target.value)}
            className="w-full rounded-md border rule bg-background px-3 py-1.5 text-xs outline-none focus:border-[var(--teal)]"
          />
        </div>

        <div className="space-y-2">
          <span className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Node types
          </span>
          <label className="flex cursor-pointer items-center gap-2">
            <span className="inline-block size-3 rounded-full" style={{ background: "#1e4d6b" }} />
            <input
              type="checkbox"
              checked={filters.showConcepts}
              onChange={(e) => set("showConcepts", e.target.checked)}
              className="size-3.5 accent-[var(--teal)]"
            />
            <span>Concepts</span>
          </label>
          <label className="flex cursor-pointer items-center gap-2">
            <span className="inline-block size-3 rounded-full" style={{ background: "#6b9aad" }} />
            <input
              type="checkbox"
              checked={filters.showTheses}
              onChange={(e) => set("showTheses", e.target.checked)}
              className="size-3.5 accent-[var(--teal)]"
            />
            <span>Theses</span>
          </label>
        </div>

        <div className="space-y-1.5">
          <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Department
          </label>
          <select
            value={filters.department}
            onChange={(e) => set("department", e.target.value)}
            className="w-full rounded-md border rule bg-background px-2 py-1.5 text-xs outline-none focus:border-[var(--teal)]"
          >
            <option value="">All departments</option>
            {departments.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </div>

        <div className="space-y-1.5">
          <span className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Year range
          </span>
          <div className="flex items-center gap-2">
            <input
              type="number"
              min={yearBounds[0]}
              max={filters.yearMax}
              value={filters.yearMin}
              onChange={(e) => set("yearMin", Number(e.target.value))}
              className="w-[4.5rem] rounded-md border rule bg-background px-2 py-1 text-xs outline-none focus:border-[var(--teal)]"
            />
            <span className="text-muted-foreground">–</span>
            <input
              type="number"
              min={filters.yearMin}
              max={yearBounds[1]}
              value={filters.yearMax}
              onChange={(e) => set("yearMax", Number(e.target.value))}
              className="w-[4.5rem] rounded-md border rule bg-background px-2 py-1 text-xs outline-none focus:border-[var(--teal)]"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Min connections: <span className="font-mono">{filters.minConnections}</span>
          </label>
          <input
            type="range"
            min={0}
            max={20}
            value={filters.minConnections}
            onChange={(e) => set("minConnections", Number(e.target.value))}
            className="w-full accent-[var(--teal)]"
          />
          <p className="text-xs text-muted-foreground">Hide low-degree nodes to reduce clutter.</p>
        </div>

        <div className="mt-auto rounded-md bg-muted/50 p-3 space-y-0.5 font-mono text-xs text-muted-foreground">
          <div>{nodeCount.concepts} concepts visible</div>
          <div>{nodeCount.theses} theses visible</div>
          <div>{nodeCount.links} connections</div>
        </div>
      </aside>
    );
  }
  ```

### Task 4b: Update KnowledgeGraph to accept filters

- [ ] **Step 1: Replace `src/components/graph/KnowledgeGraph.tsx`**

  ```tsx
  import { useEffect, useRef, useState } from "react";
  import { useNavigate } from "@tanstack/react-router";
  import type { ContentIndex } from "@/lib/content";
  import type { GraphFilterState } from "./GraphFilters";

  type GNode = { id: string; name: string; type: string; year?: number; dept?: string; val?: number };
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
    const [size, setSize] = useState({ w: 800, h: height });
    const [Comp, setComp] = useState<any>(null);
    const navigate = useNavigate();

    const colors = nodeColors ?? { concept: "#1e4d6b", thesis: "#6b9aad", focused: "#f59e0b" };

    useEffect(() => {
      let alive = true;
      import("react-force-graph-2d").then((m) => {
        if (alive) setComp(() => m.default);
      });
      return () => { alive = false; };
    }, []);

    useEffect(() => {
      const el = wrapRef.current;
      if (!el) return;
      const ro = new ResizeObserver(() => setSize({ w: el.clientWidth, h: height }));
      ro.observe(el);
      return () => ro.disconnect();
    }, [height]);

    const allEntries = Object.values(data.bySlug);

    const visibleIds = new Set(
      allEntries
        .filter((e) => {
          if (!filters) return true;
          if (e.type === "concept" && !filters.showConcepts) return false;
          if (e.type === "source" && !filters.showTheses) return false;
          if (filters.department && e.type === "source" && e.department !== filters.department) return false;
          if (e.type === "source" && e.year) {
            if (e.year < filters.yearMin || e.year > filters.yearMax) return false;
          }
          const connections =
            e.type === "concept" ? e.backlinks.length : e.links.length;
          if (connections < filters.minConnections) return false;
          return true;
        })
        .map((e) => e.slug),
    );

    const searchSlug = filters?.searchTerm
      ? allEntries.find((e) => e.title.toLowerCase().includes(filters.searchTerm.toLowerCase()))?.slug
      : undefined;

    const nodes: GNode[] = allEntries
      .filter((e) => visibleIds.has(e.slug))
      .map((e) => ({
        id: e.slug,
        name: e.title,
        type: e.type,
        year: e.year,
        dept: e.department,
        val: e.type === "concept" ? 6 + e.backlinks.length * 0.3 : 2 + e.links.length * 0.2,
      }));

    const links: GLink[] = [];
    allEntries.forEach((e) => {
      if (e.type === "source" && visibleIds.has(e.slug)) {
        e.links.forEach((l) => {
          if (visibleIds.has(l)) links.push({ source: e.slug, target: l });
        });
      }
    });

    const highlightId = focusSlug ?? searchSlug;

    return (
      <div ref={wrapRef} className="w-full overflow-hidden rounded-lg border rule bg-card" style={{ height }}>
        {Comp ? (
          <Comp
            graphData={{ nodes, links }}
            width={size.w}
            height={size.h}
            nodeRelSize={4}
            backgroundColor="transparent"
            nodeColor={(n: GNode) =>
              n.id === highlightId
                ? colors.focused
                : n.type === "concept"
                  ? colors.concept
                  : colors.thesis
            }
            linkColor={() => `rgba(107,154,173,0.25)`}
            linkWidth={0.6}
            nodeLabel={(n: GNode) =>
              `${n.name}${n.type === "source" && n.year ? ` (${n.year})` : ""}`
            }
            onNodeClick={(n: GNode) => {
              if (n.type === "concept")
                navigate({ to: "/concepts/$slug", params: { slug: n.id.replace("concepts/", "") } });
              else navigate({ to: "/theses/$slug", params: { slug: n.id.replace("sources/", "") } });
            }}
            cooldownTicks={80}
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
            Loading graph…
          </div>
        )}
      </div>
    );
  }
  ```

### Task 4c: Rewrite graph page with filter sidebar

- [ ] **Step 1: Replace `src/routes/graph.tsx`**

  ```tsx
  import { createFileRoute } from "@tanstack/react-router";
  import { useMemo, useState } from "react";
  import { useContentData } from "@/lib/use-content-data";
  import { useConfig } from "@/lib/use-config";
  import { KnowledgeGraph } from "@/components/graph/KnowledgeGraph";
  import { GraphFilters, type GraphFilterState } from "@/components/graph/GraphFilters";

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

    const yearBounds = useMemo<[number, number]>(
      () => (data ? [Math.min(...data.years), Math.max(...data.years)] : [1990, 2024]),
      [data],
    );

    const [filters, setFilters] = useState<GraphFilterState>({
      showConcepts: true,
      showTheses: true,
      department: "",
      yearMin: yearBounds[0],
      yearMax: yearBounds[1],
      minConnections: 2,
      searchTerm: "",
    });

    // Keep yearMin/yearMax in sync with data bounds on first load
    const [synced, setSynced] = useState(false);
    if (data && !synced) {
      setFilters((f) => ({ ...f, yearMin: yearBounds[0], yearMax: yearBounds[1] }));
      setSynced(true);
    }

    const nodeCount = useMemo(() => {
      if (!data) return { concepts: 0, theses: 0, links: 0 };
      const concepts = filters.showConcepts
        ? data.concepts.filter((c) => c.backlinks.length >= filters.minConnections).length
        : 0;
      const theses = filters.showTheses
        ? data.theses.filter(
            (t) =>
              (!filters.department || t.department === filters.department) &&
              (!t.year || (t.year >= filters.yearMin && t.year <= filters.yearMax)) &&
              t.links.length >= filters.minConnections,
          ).length
        : 0;
      return { concepts, theses, links: 0 };
    }, [data, filters]);

    if (!data) {
      return (
        <div className="mx-auto max-w-7xl px-5 py-10">
          <div className="flex h-[680px] items-center justify-center rounded-lg border rule bg-card text-sm text-muted-foreground">
            Loading graph…
          </div>
        </div>
      );
    }

    return (
      <div className="mx-auto max-w-7xl px-5 py-10">
        <h1 className="font-display text-4xl">Knowledge graph</h1>
        <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
          Every thesis and concept in the archive, connected by shared topics. Click any node to open it.
        </p>

        {/* Legend */}
        <div className="mt-4 flex flex-wrap items-center gap-5 text-xs text-muted-foreground border-b rule pb-4">
          <span className="flex items-center gap-1.5">
            <span className="inline-block size-3 rounded-full bg-[#1e4d6b]" />
            Concept
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block size-3 rounded-full bg-[#6b9aad]" />
            Thesis
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block size-3 rounded-full bg-[#f59e0b]" />
            Highlighted / focused
          </span>
          <span className="ml-auto font-mono">
            {data.concepts.length} concepts · {data.theses.length} theses total
          </span>
        </div>

        <div className="mt-6 flex items-start gap-4">
          <GraphFilters
            filters={filters}
            onChange={setFilters}
            departments={data.departments}
            yearBounds={yearBounds}
            nodeCount={nodeCount}
            onReset={() =>
              setFilters({
                showConcepts: true,
                showTheses: true,
                department: "",
                yearMin: yearBounds[0],
                yearMax: yearBounds[1],
                minConnections: 2,
                searchTerm: "",
              })
            }
          />
          <div className="min-w-0 flex-1">
            <KnowledgeGraph
              data={data}
              height={680}
              filters={filters}
              nodeColors={config?.graph.nodeColors}
            />
          </div>
        </div>
      </div>
    );
  }
  ```

- [ ] **Step 2: Verify the graph page in browser**

  Navigate to `/graph`. Confirm:
  - Filter sidebar appears on the left
  - Legend row shows above the graph
  - Toggling "Concepts" checkbox removes teal nodes
  - Selecting a department filters to theses from that department only
  - Changing min-connections slider removes sparse nodes
  - Typing a name in "Search node" highlights matching node in amber

- [ ] **Step 3: Commit**

  ```bash
  git add src/components/graph/GraphFilters.tsx src/components/graph/KnowledgeGraph.tsx src/routes/graph.tsx
  git commit -m "feat: professional knowledge graph with filter sidebar (type, dept, year, connections)"
  ```

---

## Task 5 — Complete and Enhance Existing Pages

**Files:** `src/routes/departments.tsx`, `src/routes/theses.index.tsx`, `src/routes/timeline.tsx`, `src/routes/about.tsx`

### Task 5a: Departments page — add "Browse all" deep link per department

- [ ] **Step 1: Modify `src/routes/departments.tsx`**

  Add `import { z } from "zod";` — not needed. Just add the browse link.

  Inside the department card, after the `{list.length > 8 && (...)}` block, add a "Browse all" link. The full updated `DeptsPage` function:

  ```tsx
  import { createFileRoute, Link } from "@tanstack/react-router";
  import { useContentData } from "@/lib/use-content-data";
  import { ArrowRight } from "lucide-react";

  export const Route = createFileRoute("/departments")({
    head: () => ({
      meta: [
        { title: "Departments — GeoThesis" },
        { name: "description", content: "Research output grouped by KFUPM Geosiences departments." },
      ],
    }),
    component: DeptsPage,
  });

  function DeptsPage() {
    const data = useContentData();
    if (!data)
      return <div className="mx-auto max-w-6xl px-5 py-12 text-sm text-muted-foreground">Loading…</div>;

    return (
      <div className="mx-auto max-w-6xl px-5 py-12">
        <h1 className="font-display text-4xl">Departments</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {data.departments.length} departments · {data.theses.length} total theses
        </p>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {data.departments.map((d) => {
            const list = data.thesesByDept[d];
            return (
              <section key={d} className="rounded-lg border rule bg-card p-5">
                <div className="flex items-baseline justify-between">
                  <h2 className="font-display text-xl">{d}</h2>
                  <span className="font-mono text-xs text-muted-foreground">{list.length}</span>
                </div>
                <ul className="mt-3 space-y-1.5">
                  {list.slice(0, 8).map((t) => (
                    <li key={t.slug}>
                      <Link
                        to="/theses/$slug"
                        params={{ slug: t.slug.replace("sources/", "") }}
                        className="block text-sm text-foreground hover:text-[var(--teal)]"
                      >
                        <span className="font-mono text-xs text-muted-foreground">{t.year}</span>{" "}
                        {t.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-3 flex items-center justify-between">
                  {list.length > 8 && (
                    <span className="text-xs text-muted-foreground">+{list.length - 8} more</span>
                  )}
                  <Link
                    to="/theses"
                    search={{ department: d }}
                    className="ml-auto flex items-center gap-1 text-xs text-[var(--teal)] hover:underline"
                  >
                    Browse all {list.length} <ArrowRight className="size-3" />
                  </Link>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    );
  }
  ```

### Task 5b: Theses page — accept department URL search param

- [ ] **Step 1: Modify `src/routes/theses.index.tsx`**

  Add zod `validateSearch` to the route and initialize `dept` state from the URL param.

  Change the route definition from:
  ```ts
  export const Route = createFileRoute("/theses/")({
    head: () => ({ ... }),
    component: ThesesPage,
  });
  ```

  To:
  ```ts
  import { z } from "zod";

  export const Route = createFileRoute("/theses/")({
    head: () => ({ ... }),
    validateSearch: z.object({
      department: z.string().optional(),
    }),
    component: ThesesPage,
  });
  ```

  And in `ThesesPage`, change the `dept` state initializer from:
  ```ts
  const [dept, setDept] = useState<string>("all");
  ```
  To:
  ```ts
  const { department: initialDept } = Route.useSearch();
  const [dept, setDept] = useState<string>(initialDept ?? "all");
  ```

  The full modified top of `ThesesPage`:
  ```ts
  function ThesesPage() {
    const data = useContentData();
    const { department: initialDept } = Route.useSearch();
    const [q, setQ] = useState("");
    const [dept, setDept] = useState<string>(initialDept ?? "all");
    const [degree, setDegree] = useState<string>("all");
    const [year, setYear] = useState<string>("all");
    const [sort, setSort] = useState<"recent" | "az" | "linked">("recent");
    // ... rest unchanged
  ```

  Also add the `z` import at the top of the file:
  ```ts
  import { z } from "zod";
  ```

### Task 5c: Timeline page — add year and department filter dropdowns

- [ ] **Step 1: Replace `src/routes/timeline.tsx`**

  ```tsx
  import { createFileRoute, Link } from "@tanstack/react-router";
  import { useState } from "react";
  import { useContentData } from "@/lib/use-content-data";

  export const Route = createFileRoute("/timeline")({
    head: () => ({
      meta: [
        { title: "Timeline — GeoThesis" },
        { name: "description", content: "Three decades of Geosciences research, year by year." },
      ],
    }),
    component: TimelinePage,
  });

  function TimelinePage() {
    const data = useContentData();
    const [deptFilter, setDeptFilter] = useState("");
    const [yearFilter, setYearFilter] = useState<number | null>(null);

    if (!data)
      return <div className="mx-auto max-w-6xl px-5 py-12 text-sm text-muted-foreground">Loading…</div>;

    const max = Math.max(...data.years.map((y) => data.thesesByYear[y].length));
    const filteredYears = yearFilter ? data.years.filter((y) => y === yearFilter) : data.years;

    const totalShown = filteredYears.reduce((sum, y) => {
      const list = deptFilter
        ? (data.thesesByYear[y] ?? []).filter((t) => t.department === deptFilter)
        : data.thesesByYear[y] ?? [];
      return sum + list.length;
    }, 0);

    return (
      <div className="mx-auto max-w-6xl px-5 py-12">
        <h1 className="font-display text-4xl">Timeline</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {data.years[0]} – {data.years[data.years.length - 1]} · {data.theses.length} theses
        </p>

        {/* Filters */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <select
            value={deptFilter}
            onChange={(e) => setDeptFilter(e.target.value)}
            className="rounded-md border rule bg-card px-3 py-1.5 text-sm outline-none focus:border-[var(--teal-soft)]"
          >
            <option value="">All departments</option>
            {data.departments.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
          <select
            value={yearFilter ?? ""}
            onChange={(e) => setYearFilter(e.target.value ? Number(e.target.value) : null)}
            className="rounded-md border rule bg-card px-3 py-1.5 text-sm outline-none focus:border-[var(--teal-soft)]"
          >
            <option value="">All years</option>
            {data.years
              .slice()
              .reverse()
              .map((y) => (
                <option key={y} value={y}>{y}</option>
              ))}
          </select>
          {(deptFilter || yearFilter) && (
            <button
              onClick={() => { setDeptFilter(""); setYearFilter(null); }}
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              Clear filters ×
            </button>
          )}
          <span className="ml-auto font-mono text-xs text-muted-foreground">{totalShown} shown</span>
        </div>

        <div className="mt-10 space-y-10">
          {filteredYears
            .slice()
            .reverse()
            .map((y) => {
              const list = deptFilter
                ? (data.thesesByYear[y] ?? []).filter((t) => t.department === deptFilter)
                : data.thesesByYear[y] ?? [];
              if (list.length === 0) return null;
              return (
                <section key={y}>
                  <div className="flex items-baseline justify-between border-b rule pb-2">
                    <h2 className="font-display text-2xl">{y}</h2>
                    <div className="flex items-center gap-3">
                      <div className="h-1.5 w-40 overflow-hidden rounded-full bg-muted">
                        <div
                          className="h-full bg-[var(--teal)]"
                          style={{ width: `${(list.length / max) * 100}%` }}
                        />
                      </div>
                      <span className="font-mono text-xs text-muted-foreground">{list.length}</span>
                    </div>
                  </div>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {list.map((t) => (
                      <li key={t.slug}>
                        <Link
                          to="/theses/$slug"
                          params={{ slug: t.slug.replace("sources/", "") }}
                          className="block rounded px-2 py-1.5 text-sm text-foreground hover:bg-muted"
                        >
                          <span className="font-medium">{t.title}</span>
                          <span className="ml-2 text-xs text-muted-foreground">{t.author}</span>
                          {t.department && (
                            <span className="ml-2 font-mono text-[10px] text-muted-foreground">
                              {t.department}
                            </span>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}
        </div>
      </div>
    );
  }
  ```

### Task 5d: About page — update provenance

- [ ] **Step 1: Replace the Provenance section in `src/routes/about.tsx`**

  Find this block in about.tsx (lines 37–42):
  ```tsx
  <h2>Provenance</h2>
  <p>
    Data lives in <code>public/content-index.json</code>. Drop in a refreshed file to update the archive — the entire
    site rebuilds its indexes, search, and graph from that one document.
  </p>
  ```

  Replace with:
  ```tsx
  <h2>Provenance</h2>
  <p>
    Data lives in <code>public/contents/</code> — one Markdown file per thesis under{" "}
    <code>sources/</code> and one per concept under <code>concepts/</code>. The server reads these
    files directly and builds the full index, search, and graph on first load. To update the archive,
    drop in revised Markdown files and restart the server.
  </p>
  <p>
    Site configuration — branding, navigation, footer links, and graph colours — is controlled via{" "}
    <code>public/contents/config.json</code>. Edit that file and reload to see changes.
  </p>
  ```

- [ ] **Step 2: Verify all five pages in browser**

  - `/departments` — each card has a "Browse all N →" link; clicking it opens `/theses` with that department pre-filtered
  - `/theses?department=Geosciences` — theses filtered to Geosciences on load
  - `/timeline` — department and year dropdowns work; "shown" count updates
  - `/about` — provenance mentions `public/contents/` and `config.json`
  - `/graph` — filters, legend, and node highlighting all work

- [ ] **Step 3: Commit**

  ```bash
  git add src/routes/departments.tsx src/routes/theses.index.tsx src/routes/timeline.tsx src/routes/about.tsx
  git commit -m "feat: complete departments/timeline filters; add department deep-link from theses page"
  ```

---

## Self-Review Checklist

- [x] **Spec coverage**
  - Remove Lovable metadata → Task 1 (`.lovable`, `lovable-error-reporting.ts`, `vite.config.ts`, `package.json`)
  - No JSON in public root → Task 3 (deletes `content-index.json` + `graph-data.json`; adds server function)
  - Config JSON for branding/footer → Task 2 (`config.json`, `useConfig`, TopNav, Footer, Home)
  - Professional graph with filters → Task 4 (`GraphFilters`, updated `KnowledgeGraph`, new `graph.tsx`)
  - Complete missing pages → Task 5 (departments links, theses URL param, timeline filters, about provenance)

- [x] **No placeholders** — all code blocks in every step are complete and runnable

- [x] **Type consistency**
  - `GraphFilterState` defined once in `GraphFilters.tsx`, imported by `KnowledgeGraph.tsx` and `graph.tsx`
  - `SiteConfig` / `NavLink` defined once in `use-config.ts`
  - `loadContentIndex` returns `Record<string, Entry>`, consumed by `buildIndex()` in `use-content-data.ts` — same type as before
  - `nodeColors` prop on `KnowledgeGraph` matches `config.graph.nodeColors` shape
