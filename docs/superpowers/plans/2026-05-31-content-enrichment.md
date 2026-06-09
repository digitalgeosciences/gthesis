# GeoThesis Content Enrichment Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a `config.json` theming/branding layer, render full rich markdown content on thesis and concept pages with clickable `[[wiki-links]]`, and fix the graph's default filter so all nodes are visible on first load.

**Architecture:** A static `public/contents/config.json` is fetched once by `useConfig()` and applied to CSS custom properties via `ConfigStyleInjector` (fonts, colors, sizes) and to UI text via TopNav/Footer/Home. Content pages call `resolveWikiLinks(entry.content, bySlug)` before passing to `<ReactMarkdown>` to turn `[[slug]]` into real links. All data comes from the dynamic server function — no slug is hardcoded anywhere.

**Tech Stack:** TanStack Start SSR (v1.167), React 19, Tailwind CSS 4, TypeScript 5, gray-matter, react-force-graph-2d.

---

## File Map

| File | Status | Responsibility |
|------|--------|---------------|
| `public/contents/config.json` | **Create** | Brand, nav, footer, theme (fonts/colors/sizes), graph colors, home hero text |
| `src/lib/use-config.ts` | **Create** | `SiteConfig` type + `useConfig()` hook (fetch-once, module-level cache) |
| `src/lib/wiki-links.ts` | **Create** | Pure `resolveWikiLinks(markdown, bySlug)` — `[[slug]]` → markdown links |
| `src/components/ConfigStyleInjector.tsx` | **Create** | Applies `config.theme` as CSS custom properties; injects font `<link>` tags |
| `src/routes/__root.tsx` | **Modify** | Mount `<ConfigStyleInjector />`; remove Lovable error reporting |
| `src/components/layout/TopNav.tsx` | **Modify** | Brand name/subtitle and nav links from `useConfig()` |
| `src/components/layout/Footer.tsx` | **Modify** | Tagline, links, copyright from `useConfig()` |
| `src/routes/index.tsx` | **Modify** | Hero heading/subtext from `useConfig()` with `{thesisCount}`/`{conceptCount}` placeholders |
| `src/routes/theses.$slug.tsx` | **Modify** | Render `entry.content` via `resolveWikiLinks` instead of `entry.summary` |
| `src/routes/concepts.$slug.tsx` | **Modify** | Render `entry.content` via `resolveWikiLinks`; add summary line to related-theses list |
| `src/routes/graph.tsx` | **Modify** | `minConnections` default → 0; node/link colors from `useConfig()` |

---

## Task 1 — Create `public/contents/config.json`

**Files:**
- Create: `public/contents/config.json`

- [ ] **Step 1: Create the file**

  ```json
  {
    "brand": {
      "name": "GeoThesis",
      "subtitle": "KFUPM Research Archive",
      "tagline": "A curated archive of KFUPM graduate research in the earth sciences.",
      "institution": "King Fahd University of Petroleum and Minerals",
      "siteTitle": "GeoThesis — KFUPM Earth Sciences Research Archive",
      "siteDescription": "Explore KFUPM graduate theses across petroleum geology, geophysics, reservoir engineering, hydrogeology, and environmental science."
    },
    "nav": {
      "links": [
        { "label": "Theses",      "to": "/theses" },
        { "label": "Concepts",    "to": "/concepts" },
        { "label": "Timeline",    "to": "/timeline" },
        { "label": "Departments", "to": "/departments" },
        { "label": "About",       "to": "/about" }
      ]
    },
    "footer": {
      "tagline": "A curated archive of KFUPM graduate research in the earth sciences.",
      "links": [
        { "label": "About",    "to": "/about" },
        { "label": "Graph",    "to": "/graph" },
        { "label": "Timeline", "to": "/timeline" }
      ],
      "copyright": "© 2026 KFUPM"
    },
    "theme": {
      "fonts": {
        "display": "\"DM Serif Display\", Georgia, serif",
        "body": "Inter, system-ui, sans-serif",
        "mono": "\"JetBrains Mono\", monospace",
        "displayUrl": "",
        "bodyUrl": ""
      },
      "sizes": {
        "base": "16px"
      },
      "colors": {
        "teal": "#1e6b8a",
        "tealSoft": "#6b9aad"
      }
    },
    "graph": {
      "nodeColors": {
        "concept": "#1e4d6b",
        "thesis":  "#6b9aad",
        "focused": "#f59e0b"
      },
      "linkOpacity": 0.25,
      "linkWidth": 0.6
    },
    "home": {
      "heroHeading": "A reading room for graduate research in petroleum geology, geophysics, and the earth sciences.",
      "heroSubtext": "GeoThesis turns {thesisCount}+ thesis summaries into a navigable knowledge graph — connected by {conceptCount}+ shared concepts, formations, and methods."
    }
  }
  ```

- [ ] **Step 2: Verify the file is valid JSON**

  ```bash
  node -e "JSON.parse(require('fs').readFileSync('public/contents/config.json','utf8')); console.log('valid')"
  ```

  Expected output: `valid`

- [ ] **Step 3: Commit**

  ```bash
  git add public/contents/config.json
  git commit -m "feat: add config.json for branding, theming, and graph controls"
  ```

---

## Task 2 — Create `src/lib/use-config.ts`

**Files:**
- Create: `src/lib/use-config.ts`

- [ ] **Step 1: Create the hook**

  ```ts
  import { useEffect, useState } from "react";

  export interface NavLink {
    label: string;
    to: string;
  }

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
    footer: {
      tagline: string;
      links: NavLink[];
      copyright: string;
    };
    theme: {
      fonts: {
        display: string;
        body: string;
        mono: string;
        displayUrl: string;
        bodyUrl: string;
      };
      sizes: { base: string };
      colors: {
        teal: string;
        tealSoft: string;
        [key: string]: string;
      };
    };
    graph: {
      nodeColors: { concept: string; thesis: string; focused: string };
      linkOpacity: number;
      linkWidth: number;
    };
    home: {
      heroHeading: string;
      heroSubtext: string;
    };
  }

  let _cached: SiteConfig | null = null;
  let _inflight: Promise<SiteConfig> | null = null;

  async function fetchConfig(): Promise<SiteConfig> {
    if (_cached) return _cached;
    if (_inflight) return _inflight;
    _inflight = fetch("/contents/config.json")
      .then((r) => {
        if (!r.ok) throw new Error(`config.json fetch failed: ${r.status}`);
        return r.json() as Promise<SiteConfig>;
      })
      .then((data) => {
        _cached = data;
        return data;
      });
    return _inflight;
  }

  export function useConfig(): SiteConfig | null {
    const [config, setConfig] = useState<SiteConfig | null>(_cached);
    useEffect(() => {
      if (!_cached) {
        fetchConfig().then(setConfig).catch(() => {});
      }
    }, []);
    return config;
  }
  ```

- [ ] **Step 2: Verify TypeScript compiles**

  ```bash
  bunx tsc --noEmit 2>&1 | head -30
  ```

  Expected: no errors on `src/lib/use-config.ts`.

- [ ] **Step 3: Commit**

  ```bash
  git add src/lib/use-config.ts
  git commit -m "feat: add useConfig hook with SiteConfig type for config.json"
  ```

---

## Task 3 — Create `src/lib/wiki-links.ts`

**Files:**
- Create: `src/lib/wiki-links.ts`

- [ ] **Step 1: Create the preprocessor**

  ```ts
  import type { Entry } from "./content";

  export function resolveWikiLinks(
    markdown: string,
    bySlug: Record<string, Entry>,
  ): string {
    return markdown.replace(/\[\[([^\]]+)\]\]/g, (_, slug: string) => {
      const sourceEntry = bySlug[`sources/${slug}`];
      if (sourceEntry) return `[${sourceEntry.title}](/theses/${slug})`;
      const conceptEntry = bySlug[`concepts/${slug}`];
      if (conceptEntry) return `[${conceptEntry.title}](/concepts/${slug})`;
      return slug;
    });
  }
  ```

- [ ] **Step 2: Verify TypeScript compiles**

  ```bash
  bunx tsc --noEmit 2>&1 | head -30
  ```

  Expected: no errors on `src/lib/wiki-links.ts`.

- [ ] **Step 3: Quick smoke-test in Node**

  ```bash
  node -e "
  const { resolveWikiLinks } = require('./src/lib/wiki-links.ts');
  " 2>&1 | head -5
  ```

  Note: if the runtime can't run TypeScript directly, skip this step — TypeScript compilation check above is sufficient.

- [ ] **Step 4: Commit**

  ```bash
  git add src/lib/wiki-links.ts
  git commit -m "feat: add resolveWikiLinks preprocessor for [[slug]] → markdown links"
  ```

---

## Task 4 — Create `src/components/ConfigStyleInjector.tsx`

**Files:**
- Create: `src/components/ConfigStyleInjector.tsx`

This component watches for the config to load, then applies CSS custom properties to `:root`, optionally injects Google Font `<link>` tags, and updates `document.title`.

- [ ] **Step 1: Create the component**

  ```tsx
  import { useEffect } from "react";
  import { useConfig } from "@/lib/use-config";

  function injectFontLink(url: string): void {
    if (!url || typeof document === "undefined") return;
    if (document.querySelector(`link[href="${url}"]`)) return;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = url;
    document.head.appendChild(link);
  }

  export function ConfigStyleInjector() {
    const config = useConfig();

    useEffect(() => {
      if (!config) return;
      const root = document.documentElement;
      const { theme, brand } = config;

      // Font families
      if (theme.fonts.display) root.style.setProperty("--font-display", theme.fonts.display);
      if (theme.fonts.body)    root.style.setProperty("--font-body",    theme.fonts.body);
      if (theme.fonts.mono)    root.style.setProperty("--font-mono",    theme.fonts.mono);

      // Base font size
      if (theme.sizes.base) root.style.fontSize = theme.sizes.base;

      // Color tokens
      if (theme.colors.teal)     root.style.setProperty("--teal",      theme.colors.teal);
      if (theme.colors.tealSoft) root.style.setProperty("--teal-soft", theme.colors.tealSoft);
      for (const [key, value] of Object.entries(theme.colors)) {
        if (value && !["teal", "tealSoft"].includes(key)) {
          root.style.setProperty(`--color-${key}`, value);
        }
      }

      // Optional font links (only if not already loaded)
      injectFontLink(theme.fonts.displayUrl);
      injectFontLink(theme.fonts.bodyUrl);

      // Page title
      if (brand.siteTitle) document.title = brand.siteTitle;
    }, [config]);

    return null;
  }
  ```

- [ ] **Step 2: Verify TypeScript compiles**

  ```bash
  bunx tsc --noEmit 2>&1 | head -30
  ```

  Expected: no errors on `src/components/ConfigStyleInjector.tsx`.

- [ ] **Step 3: Commit**

  ```bash
  git add src/components/ConfigStyleInjector.tsx
  git commit -m "feat: add ConfigStyleInjector — applies config theme to CSS custom properties"
  ```

---

## Task 5 — Wire `ConfigStyleInjector` into `__root.tsx` and remove Lovable

**Files:**
- Modify: `src/routes/__root.tsx`

The current file imports and calls `reportLovableError` inside `ErrorComponent`. Both need to be removed. `ConfigStyleInjector` is mounted inside `RootComponent`.

- [ ] **Step 1: Replace `src/routes/__root.tsx`**

  ```tsx
  import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
  import {
    Outlet,
    Link,
    createRootRouteWithContext,
    useRouter,
    HeadContent,
    Scripts,
  } from "@tanstack/react-router";
  import { type ReactNode } from "react";

  import appCss from "../styles.css?url";
  import { AppShell } from "@/components/layout/AppShell";
  import { ConfigStyleInjector } from "@/components/ConfigStyleInjector";

  function NotFoundComponent() {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <div className="max-w-md text-center">
          <h1 className="font-display text-7xl text-foreground">404</h1>
          <h2 className="mt-4 font-display text-xl text-foreground">Not found</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            That page isn't in the archive.
          </p>
          <div className="mt-6">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Back to GeoThesis
            </Link>
          </div>
        </div>
      </div>
    );
  }

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

  export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
    head: () => ({
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { title: "GeoThesis — KFUPM Earth Sciences Research Archive" },
        { name: "description", content: "Explore KFUPM graduate theses across petroleum geology, geophysics, reservoir engineering, hydrogeology, and environmental science." },
        { property: "og:title", content: "GeoThesis" },
        { property: "og:description", content: "A curated archive of KFUPM graduate research in the earth sciences." },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary" },
      ],
      links: [
        { rel: "stylesheet", href: appCss },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" },
      ],
    }),
    shellComponent: RootShell,
    component: RootComponent,
    notFoundComponent: NotFoundComponent,
    errorComponent: ErrorComponent,
  });

  function RootShell({ children }: { children: ReactNode }) {
    return (
      <html lang="en">
        <head>
          <HeadContent />
          <script
            dangerouslySetInnerHTML={{
              __html: `try{var t=localStorage.getItem('theme');var d=t?t==='dark':matchMedia('(prefers-color-scheme:dark)').matches;if(d)document.documentElement.classList.add('dark');}catch(e){}`,
            }}
          />
        </head>
        <body>
          {children}
          <Scripts />
        </body>
      </html>
    );
  }

  function RootComponent() {
    const { queryClient } = Route.useRouteContext();
    return (
      <QueryClientProvider client={queryClient}>
        <ConfigStyleInjector />
        <AppShell>
          <Outlet />
        </AppShell>
      </QueryClientProvider>
    );
  }
  ```

- [ ] **Step 2: Verify TypeScript compiles**

  ```bash
  bunx tsc --noEmit 2>&1 | head -30
  ```

  Expected: no errors.

- [ ] **Step 3: Start dev server and confirm the app loads**

  ```bash
  bun run dev
  ```

  Open `http://localhost:3000`. The page should load normally. Open DevTools → Elements → check `<html>` root for any inline `style` attribute after a second (that's `ConfigStyleInjector` applying CSS vars from config.json).

- [ ] **Step 4: Commit**

  ```bash
  git add src/routes/__root.tsx
  git commit -m "feat: mount ConfigStyleInjector in root; remove Lovable error reporting"
  ```

---

## Task 6 — Wire `useConfig` into `TopNav`

**Files:**
- Modify: `src/components/layout/TopNav.tsx`

- [ ] **Step 1: Replace `src/components/layout/TopNav.tsx`**

  ```tsx
  import { Link } from "@tanstack/react-router";
  import { Moon, Sun, Search as SearchIcon, Network } from "lucide-react";
  import { useTheme } from "@/lib/theme";
  import { useConfig } from "@/lib/use-config";

  const DEFAULT_NAV = [
    { label: "Theses",      to: "/theses" },
    { label: "Concepts",    to: "/concepts" },
    { label: "Timeline",    to: "/timeline" },
    { label: "Departments", to: "/departments" },
    { label: "About",       to: "/about" },
  ];

  export function TopNav({ onOpenSearch }: { onOpenSearch: () => void }) {
    const { theme, toggle } = useTheme();
    const config = useConfig();
    const brandName    = config?.brand.name     ?? "GeoThesis";
    const brandSub     = config?.brand.subtitle ?? "KFUPM Research Archive";
    const navLinks     = config?.nav.links      ?? DEFAULT_NAV;

    return (
      <header className="sticky top-0 z-40 border-b rule bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70">
        <div className="mx-auto flex h-14 max-w-6xl items-center gap-6 px-5">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-display text-xl tracking-tight text-foreground">{brandName}</span>
            <span className="hidden text-xs text-muted-foreground sm:inline">{brandSub}</span>
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

- [ ] **Step 2: Commit**

  ```bash
  git add src/components/layout/TopNav.tsx
  git commit -m "feat: wire TopNav brand and nav links to config.json"
  ```

---

## Task 7 — Wire `useConfig` into `Footer`

**Files:**
- Modify: `src/components/layout/Footer.tsx`

- [ ] **Step 1: Replace `src/components/layout/Footer.tsx`**

  ```tsx
  import { Link } from "@tanstack/react-router";
  import { useConfig } from "@/lib/use-config";

  const DEFAULT_LINKS = [
    { label: "About",    to: "/about" },
    { label: "Graph",    to: "/graph" },
    { label: "Timeline", to: "/timeline" },
  ];

  export function Footer() {
    const config = useConfig();
    const brandName  = config?.brand.name          ?? "GeoThesis";
    const tagline    = config?.footer.tagline       ?? config?.brand.tagline ?? "A curated archive of KFUPM graduate research.";
    const links      = config?.footer.links         ?? DEFAULT_LINKS;
    const copyright  = config?.footer.copyright     ?? "";

    return (
      <footer className="mt-24 border-t rule">
        <div className="mx-auto max-w-6xl px-5 py-10 text-sm text-muted-foreground">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <span className="font-display text-base text-foreground">{brandName}</span>
              <span className="mx-2">·</span>
              {tagline}
            </div>
            <div className="flex gap-5">
              {links.map((link) => (
                <Link key={link.to} to={link.to as any} className="hover:text-foreground">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          {copyright && (
            <p className="mt-4 text-xs text-muted-foreground">{copyright}</p>
          )}
        </div>
      </footer>
    );
  }
  ```

- [ ] **Step 2: Commit**

  ```bash
  git add src/components/layout/Footer.tsx
  git commit -m "feat: wire Footer tagline, links, and copyright to config.json"
  ```

---

## Task 8 — Wire `useConfig` into Home page hero

**Files:**
- Modify: `src/routes/index.tsx`

The hero `<h1>` and `<p>` text are hardcoded. They should come from `config.home`, with `{thesisCount}` and `{conceptCount}` replaced by live counts.

- [ ] **Step 1: Add `useConfig` import and replace hero text in `src/routes/index.tsx`**

  At the top of the file, add the import:
  ```ts
  import { useConfig } from "@/lib/use-config";
  ```

  Inside the `Home` function, add after the existing hooks:
  ```ts
  const config = useConfig();
  ```

  Replace the hardcoded hero `<h1>` and `<p>` (lines 40–46 currently):
  ```tsx
  <h1 className="mt-3 max-w-3xl font-display text-5xl leading-[1.05] tracking-tight text-foreground sm:text-6xl">
    {config?.home.heroHeading ?? "A reading room for graduate research in petroleum geology, geophysics, and the earth sciences."}
  </h1>
  <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
    {(config?.home.heroSubtext ?? "GeoThesis turns {thesisCount}+ thesis summaries into a navigable knowledge graph — connected by {conceptCount}+ shared concepts, formations, and methods.")
      .replace("{thesisCount}", String(data?.theses.length ?? ""))
      .replace("{conceptCount}", String(data?.concepts.length ?? ""))}
  </p>
  ```

- [ ] **Step 2: Verify TypeScript compiles**

  ```bash
  bunx tsc --noEmit 2>&1 | head -30
  ```

  Expected: no errors.

- [ ] **Step 3: Verify in browser**

  Open `http://localhost:3000`. The hero heading and subtext should appear. Open `public/contents/config.json`, change `heroHeading` to any test string, save, reload the page — confirm the new text appears.

- [ ] **Step 4: Commit**

  ```bash
  git add src/routes/index.tsx
  git commit -m "feat: wire home hero heading and subtext to config.json"
  ```

---

## Task 9 — Enrich thesis detail page with full markdown content

**Files:**
- Modify: `src/routes/theses.$slug.tsx`

Currently renders `entry.summary ?? entry.content` — the one-liner summary from `index.md`. This task switches to rendering `entry.content` (the full markdown body: Summary, Research Problem, Objectives, Methods, Key Findings, Limitations, Recommendations, Related Concepts) and preprocesses `[[slug]]` links.

- [ ] **Step 1: Add `resolveWikiLinks` import in `src/routes/theses.$slug.tsx`**

  Add at the top:
  ```ts
  import { resolveWikiLinks } from "@/lib/wiki-links";
  ```

- [ ] **Step 2: Replace the prose section**

  Find the current prose `<div>` (currently around line 58–60):
  ```tsx
  <div className="mt-10 prose-thesis">
    <ReactMarkdown remarkPlugins={[remarkGfm]}>{entry.summary ?? entry.content ?? ""}</ReactMarkdown>
  </div>
  ```

  Replace with:
  ```tsx
  <div className="mt-10 prose-thesis">
    <ReactMarkdown remarkPlugins={[remarkGfm]}>
      {resolveWikiLinks(entry.content ?? entry.summary ?? "", data.bySlug)}
    </ReactMarkdown>
  </div>
  ```

- [ ] **Step 3: Verify TypeScript compiles**

  ```bash
  bunx tsc --noEmit 2>&1 | head -30
  ```

  Expected: no errors.

- [ ] **Step 4: Verify in browser**

  Navigate to any thesis, e.g. `http://localhost:3000/theses/alqubalee-2017`.

  Confirm:
  - The page shows **Research Problem**, **Objectives**, **Methods**, **Key Findings**, **Limitations**, **Recommendations**, and **Related Concepts** sections
  - Items in the **Related Concepts** section (e.g. `[[glaciolacustrine-deposition]]`) appear as clickable links, not literal bracket text
  - Clicking a concept link navigates to `/concepts/glaciolacustrine-deposition`

- [ ] **Step 5: Commit**

  ```bash
  git add src/routes/theses.\$slug.tsx
  git commit -m "feat: render full thesis content with resolved wiki-links"
  ```

---

## Task 10 — Enrich concept detail page with full content and related-thesis summaries

**Files:**
- Modify: `src/routes/concepts.$slug.tsx`

Currently renders `entry.summary ?? entry.content` and shows related theses as a minimal title/author/year list. This task: (a) renders full concept content with resolved wiki-links, (b) adds a summary line to each related thesis row.

- [ ] **Step 1: Replace `src/routes/concepts.$slug.tsx`**

  ```tsx
  import { createFileRoute, Link, notFound } from "@tanstack/react-router";
  import { useContentData } from "@/lib/use-content-data";
  import { resolveWikiLinks } from "@/lib/wiki-links";
  import ReactMarkdown from "react-markdown";
  import remarkGfm from "remark-gfm";
  import { ArrowLeft } from "lucide-react";

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
    if (!data) return <div className="mx-auto max-w-3xl px-5 py-12 text-sm text-muted-foreground">Loading…</div>;
    const entry = data.bySlug[`concepts/${slug}`];
    if (!entry) throw notFound();

    const related = data.thesesByConcept[entry.slug] ?? [];
    const resolved = resolveWikiLinks(entry.content ?? entry.summary ?? "", data.bySlug);

    return (
      <div className="mx-auto max-w-4xl px-5 py-12">
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
                  <div className="mt-0.5 text-xs text-muted-foreground">
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
  ```

- [ ] **Step 2: Verify TypeScript compiles**

  ```bash
  bunx tsc --noEmit 2>&1 | head -30
  ```

  Expected: no errors.

- [ ] **Step 3: Verify in browser**

  Navigate to `http://localhost:3000/concepts/glaciolacustrine-deposition`.

  Confirm:
  - **Overview**, **How It Appears in the Thesis Collection**, **Methods, Tools, or Applications**, **Key Findings Across Sources**, **Contradictions**, **Open Questions**, and **Related Pages** sections all render
  - `[[alqubalee-2017]]` references in the body appear as a clickable link to `/theses/alqubalee-2017`
  - The "Theses that engage with…" list at the bottom shows each thesis with author, year, department, and a two-line summary below the title

- [ ] **Step 4: Commit**

  ```bash
  git add src/routes/concepts.\$slug.tsx
  git commit -m "feat: render full concept content with wiki-links; enrich related-theses list with summaries"
  ```

---

## Task 11 — Fix graph default filter and wire colors from config

**Files:**
- Modify: `src/routes/graph.tsx`

Two changes: (a) `minConnections` initial value changes from `2` to `0` so the graph shows all nodes on first load; (b) the three hardcoded color constants are replaced by `useConfig()` values (with same hardcoded values as fallbacks so nothing breaks if config is slow).

- [ ] **Step 1: Add `useConfig` import in `src/routes/graph.tsx`**

  Add at the top:
  ```ts
  import { useConfig } from "@/lib/use-config";
  ```

- [ ] **Step 2: Replace the three hardcoded color constants and update `GraphPage`**

  Remove these three lines near the top of the file:
  ```ts
  const CONCEPT_COLOR = "#1e4d6b";
  const THESIS_COLOR  = "#6b9aad";
  const FOCUSED_COLOR = "#f59e0b";
  ```

  Add `useConfig` inside `GraphPage` and derive colors with fallbacks:
  ```ts
  const config = useConfig();
  const conceptColor = config?.graph.nodeColors.concept ?? "#1e4d6b";
  const thesisColor  = config?.graph.nodeColors.thesis  ?? "#6b9aad";
  const focusedColor = config?.graph.nodeColors.focused ?? "#f59e0b";
  ```

- [ ] **Step 3: Change `minConnections` default from `2` to `0`**

  In the `useState<GraphFilterState>` initializer, change:
  ```ts
  minConnections: 2,
  ```
  to:
  ```ts
  minConnections: 0,
  ```

  Also update the `defaultFilters` object (used by the Reset button) the same way:
  ```ts
  const defaultFilters: GraphFilterState = {
    showConcepts: true,
    showTheses: true,
    department: "",
    yearMin: yearBounds[0],
    yearMax: yearBounds[1],
    minConnections: 0,
    searchTerm: "",
  };
  ```

- [ ] **Step 4: Update legend dots and `GraphFilters` / `KnowledgeGraph` props to use derived colors**

  Replace all references to `CONCEPT_COLOR`, `THESIS_COLOR`, `FOCUSED_COLOR` in the JSX:

  Legend section — change:
  ```tsx
  <span className="inline-block size-2.5 rounded-full" style={{ background: CONCEPT_COLOR }} />
  ...
  <span className="inline-block size-2.5 rounded-full" style={{ background: THESIS_COLOR }} />
  ...
  <span className="inline-block size-2.5 rounded-full" style={{ background: FOCUSED_COLOR }} />
  ```
  to:
  ```tsx
  <span className="inline-block size-2.5 rounded-full" style={{ background: conceptColor }} />
  ...
  <span className="inline-block size-2.5 rounded-full" style={{ background: thesisColor }} />
  ...
  <span className="inline-block size-2.5 rounded-full" style={{ background: focusedColor }} />
  ```

  `<GraphFilters>` props — change:
  ```tsx
  conceptColor={CONCEPT_COLOR}
  thesisColor={THESIS_COLOR}
  ```
  to:
  ```tsx
  conceptColor={conceptColor}
  thesisColor={thesisColor}
  ```

  `<KnowledgeGraph>` prop — change:
  ```tsx
  nodeColors={{ concept: CONCEPT_COLOR, thesis: THESIS_COLOR, focused: FOCUSED_COLOR }}
  ```
  to:
  ```tsx
  nodeColors={{ concept: conceptColor, thesis: thesisColor, focused: focusedColor }}
  ```

- [ ] **Step 5: Verify TypeScript compiles**

  ```bash
  bunx tsc --noEmit 2>&1 | head -30
  ```

  Expected: no errors.

- [ ] **Step 6: Verify in browser**

  Navigate to `http://localhost:3000/graph`.

  Confirm:
  - Graph loads immediately with nodes visible (not empty due to `minConnections: 2`)
  - Filter sidebar shows node counts > 0
  - Legend color dots match the graph node colors
  - Changing `graph.nodeColors.concept` in `config.json` and reloading updates the graph and legend colors

- [ ] **Step 7: Commit**

  ```bash
  git add src/routes/graph.tsx
  git commit -m "feat: graph default minConnections=0; node colors from config.json"
  ```

---

## Self-Review

**Spec coverage:**

| Spec requirement | Task |
|-----------------|------|
| `config.json` with brand/nav/footer/theme/graph/home | Task 1 |
| `useConfig()` hook with `SiteConfig` type | Task 2 |
| `resolveWikiLinks` preprocessor | Task 3 |
| `ConfigStyleInjector` — CSS vars, font links, meta | Task 4 |
| Mount `ConfigStyleInjector` in root; remove Lovable | Task 5 |
| TopNav reads brand + nav from config | Task 6 |
| Footer reads tagline/links/copyright from config | Task 7 |
| Home hero reads from config with count placeholders | Task 8 |
| Thesis page renders `entry.content` via wiki-links | Task 9 |
| Concept page renders `entry.content` via wiki-links + enriched list | Task 10 |
| Graph `minConnections` default 0; colors from config | Task 11 |
| Dynamic content guarantee (all from ContentIndex) | No code change needed — server loader already dynamic; noted in spec |

All requirements covered. No gaps.

**Placeholder scan:** No TBDs, no "similar to Task N", all code blocks complete.

**Type consistency:**
- `SiteConfig` defined once in `use-config.ts` (Task 2), used in Tasks 4, 6, 7, 8, 11
- `resolveWikiLinks(markdown: string, bySlug: Record<string, Entry>): string` defined in Task 3, called identically in Tasks 9 and 10
- `NavLink` interface (`{ label: string; to: string }`) used consistently in Tasks 6 and 7
- `useConfig()` returns `SiteConfig | null` — all consumers use `config?.` optional chaining with fallbacks
- `conceptColor`, `thesisColor`, `focusedColor` are `string` in Task 11, matching the `nodeColors` props of `GraphFilters` (`conceptColor: string`, `thesisColor: string`) and `KnowledgeGraph` (`nodeColors: { concept: string; thesis: string; focused: string }`)
