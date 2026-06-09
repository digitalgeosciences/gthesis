# GeoThesis Explorer — Content Enrichment Design

**Date:** 2026-05-31
**Scope:** Config JSON theming layer, fully dynamic markdown-driven content, full section rendering on thesis/concept pages, wiki-link navigation, graph default fix.

---

## What This Solves

1. **Thesis detail pages** show only a one-line summary. The source markdown files contain rich structured content (Research Problem, Objectives, Methods, Key Findings, Limitations, Recommendations) that is loaded but never rendered.

2. **Concept detail pages** render the full concept body but `[[wiki-links]]` display as literal bracketed text. "How It Appears in the Thesis Collection" and "Related Pages" are therefore unnavigable.

3. **No config file.** Branding, navigation, footer, graph colors, fonts, and sizes are hardcoded across multiple files. A single `config.json` should control all of these — including CSS theming — so the dashboard can be reskinned without touching code.

4. **Content must be fully dynamic.** Dropping a new `.md` file into `sources/` or `concepts/` must automatically appear in all pages (lists, graph, timeline, search, concept links) without any code change. Removing a file must equally vanish from all views.

Bonus: the graph's default `minConnections: 2` hides most nodes on first load. It should default to 0.

---

## Architecture

### A. `public/contents/config.json` — Full Theming + Branding

The config file is a public static asset. It controls:

**Brand** — site name, subtitle, tagline, institution name, `<title>` tag, meta description.

**Navigation** — ordered array of `{ label, to }` links rendered in TopNav and Footer.

**Theme** — a complete CSS custom-property map applied at runtime to `:root`:
- `fonts.display` — font-family string for headings (e.g. `"Georgia, serif"`)
- `fonts.body` — font-family for body text
- `fonts.mono` — font-family for code/mono text
- `fonts.displayUrl` — optional Google Fonts URL for the display font (injected as `<link>`)
- `fonts.bodyUrl` — optional Google Fonts URL for body font
- `sizes.base` — root font size (e.g. `"16px"`)
- `colors.teal` — primary accent color
- `colors.tealSoft` — lighter accent variant
- `colors.background`, `colors.foreground`, `colors.muted`, `colors.mutedForeground` — full palette

**Graph** — `nodeColors.concept`, `nodeColors.thesis`, `nodeColors.focused`, `linkOpacity`, `linkWidth`.

**Home** — hero heading and subtext strings (can include `{thesisCount}` / `{conceptCount}` placeholders).

Full example shape:
```json
{
  "brand": {
    "name": "GeoThesis",
    "subtitle": "KFUPM Research Archive",
    "tagline": "A curated archive of KFUPM graduate research in the geosciences.",
    "institution": "King Fahd University of Petroleum and Minerals",
    "siteTitle": "GeoThesis — KFUPM geosciences Research Archive",
    "siteDescription": "Explore KFUPM graduate theses across petroleum geology, geophysics, and more."
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
    "tagline": "A curated archive of KFUPM graduate research in geosciences.",
    "links": [
      { "label": "About",    "to": "/about" },
      { "label": "Graph",    "to": "/graph" },
      { "label": "Timeline", "to": "/timeline" }
    ],
    "copyright": "© 2026 KFUPM"
  },
  "theme": {
    "fonts": {
      "display": "Georgia, serif",
      "body": "Inter, system-ui, sans-serif",
      "mono": "JetBrains Mono, monospace",
      "displayUrl": "",
      "bodyUrl": ""
    },
    "sizes": {
      "base": "16px"
    },
    "colors": {
      "teal": "#1e6b8a",
      "tealSoft": "#6b9aad",
      "background": "",
      "foreground": ""
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

### B. `src/lib/use-config.ts` — Config Hook

Fetches `config.json` once, caches in module scope, returns synchronously on subsequent renders. Returns `null` until loaded; all consumers provide hardcoded fallback values (same as current) so the UI never flickers or breaks if fetch is slow or fails.

`SiteConfig` TypeScript interface mirrors the JSON shape above exactly.

### C. `src/components/ConfigStyleInjector.tsx` — CSS Custom Property Applicator

A React component mounted once in `__root.tsx`. When `useConfig()` resolves:

1. Sets CSS custom properties on `document.documentElement`:
   - `--font-display`, `--font-body`, `--font-mono`
   - `--font-size-base`
   - `--teal`, `--teal-soft` (and any other color tokens present)

2. Sets `document.documentElement.style.fontSize` to `theme.sizes.base`.

3. If `fonts.displayUrl` or `fonts.bodyUrl` are non-empty strings, injects `<link rel="stylesheet">` into `<head>` (checks for duplicates before inserting).

4. Updates `<title>` and meta `description` from `brand.siteTitle` / `brand.siteDescription`.

This means the existing Tailwind CSS classes (`font-display`, `font-mono`, `text-foreground`, etc.) continue to work — only the underlying CSS variable values change.

### D. `src/lib/wiki-links.ts` — Wiki-link Preprocessor

```ts
export function resolveWikiLinks(
  markdown: string,
  bySlug: Record<string, Entry>
): string
```

Replaces every `[[slug]]` occurrence:
- If `sources/slug` exists in bySlug → `[Entry Title](/theses/slug)`
- If `concepts/slug` exists in bySlug → `[Entry Title](/concepts/slug)`
- If neither exists → bare `slug` text (no broken brackets, no dead links)

Pure function. Called immediately before passing content to `<ReactMarkdown>`. No new dependencies.

### E. Thesis Detail Page — `src/routes/theses.$slug.tsx`

Renders `entry.content` (full markdown body) run through `resolveWikiLinks`. The body already contains every section in reading order:

> **Summary** · Research Problem · Objectives · Methods · Data & Materials · Key Findings · Limitations · Recommendations · Related Concepts

The concept chips row at the top (quick-scan affordance) is kept. The `prose-thesis` CSS class already provides correct heading hierarchy, lists, and code styling.

Fallback: if `entry.content` is absent, fall back to `entry.summary ?? ""`.

### F. Concept Detail Page — `src/routes/concepts.$slug.tsx`

Renders `entry.content` run through `resolveWikiLinks`. Every `[[thesis-slug]]` in sections like "How It Appears in the Thesis Collection" and "Related Pages" becomes a real link.

The existing "Theses that engage with this concept" list at the bottom is enriched: each row gains a second line showing `entry.summary` (the one-liner) so readers get context before navigating. The list is built purely from live `data.thesesByConcept[entry.slug]` — fully dynamic.

### G. Dynamic Content Guarantee

The server function `loadContentIndex` in `content-loader.server.ts` reads all `.md` files in `public/contents/sources/` and `public/contents/concepts/` at startup. Every index, list, graph, timeline, and link is derived solely from these files:

- **Add a thesis**: drop `sources/new-thesis.md` with correct frontmatter → appears in theses list, timeline, departments, graph, and search automatically.
- **Add a concept**: drop `concepts/new-concept.md` with `sources:` frontmatter → appears in concepts list, graph nodes, and as a chip on linked theses.
- **Remove a file**: delete the `.md` → vanishes from all views on next server start.
- **Update `index.md`**: changes the one-liner summaries shown on cards and concept related-thesis rows.

No page, route, or component references any thesis or concept slug by name. All lists, maps, and indexes are computed from `ContentIndex` at render time.

Server cache (`serverCache` in content-loader) persists for the lifetime of the Node process. In development, restart the dev server to pick up new or changed files. (Hot reload of content files is out of scope.)

### H. Graph Page — `src/routes/graph.tsx`

- Default `minConnections` changes from `2` to `0` — first-load shows the full network.
- `CONCEPT_COLOR`, `THESIS_COLOR`, `FOCUSED_COLOR` constants are removed; values come from `config.graph.nodeColors` with hardcoded fallbacks.
- Legend dots use the same config-sourced colors so legend always matches graph.

---

## Files Changed

| File | Change |
|------|--------|
| `public/contents/config.json` | **Create** — full brand + nav + footer + theme + graph + home |
| `src/lib/use-config.ts` | **Create** — fetch/cache hook + `SiteConfig` type |
| `src/lib/wiki-links.ts` | **Create** — `[[slug]]` → markdown link preprocessor |
| `src/components/ConfigStyleInjector.tsx` | **Create** — applies CSS vars + font links + meta tags |
| `src/routes/__root.tsx` | Mount `<ConfigStyleInjector />` |
| `src/components/layout/TopNav.tsx` | Brand name/subtitle and nav links from `useConfig` |
| `src/components/layout/Footer.tsx` | Tagline, links, copyright from `useConfig` |
| `src/routes/index.tsx` | Hero heading/subtext from `useConfig` with count placeholders |
| `src/routes/theses.$slug.tsx` | Render `entry.content` via `resolveWikiLinks` |
| `src/routes/concepts.$slug.tsx` | Render `entry.content` via `resolveWikiLinks`; enrich related-theses list |
| `src/routes/graph.tsx` | `minConnections` default 0; colors from `useConfig` |

---

## Data Flow

```
public/contents/config.json ──fetch──► useConfig()
  ├── ConfigStyleInjector  → CSS vars on :root, <link> font injection, <title>
  ├── TopNav               → brand name, nav links
  ├── Footer               → tagline, links, copyright
  ├── index.tsx            → hero text with live counts
  └── graph.tsx            → node/link colors

public/contents/**/*.md ──server fn──► loadContentIndex()
  └── useContentData() → ContentIndex (fully dynamic)
        ├── theses.$slug.tsx  → entry.content ──resolveWikiLinks──► <ReactMarkdown>
        ├── concepts.$slug.tsx → entry.content ──resolveWikiLinks──► <ReactMarkdown>
        │                        + enriched related-theses list
        ├── theses.index.tsx  → data.theses   (dynamic, no hardcoding)
        ├── concepts.index.tsx → data.concepts (dynamic)
        ├── timeline.tsx      → data.thesesByYear (dynamic)
        ├── departments.tsx   → data.thesesByDept (dynamic)
        └── graph.tsx         → data.bySlug, data.concepts, data.theses (dynamic)
```

---

## Error Handling

| Scenario | Behaviour |
|----------|-----------|
| `config.json` fetch fails | `useConfig` returns `null`; all consumers use hardcoded fallbacks |
| Unknown `[[slug]]` in wiki-link | Preprocessor emits bare slug text; no broken link |
| `entry.content` absent | Fallback to `entry.summary ?? ""`  |
| No `sources:` in concept frontmatter | No links built; concept node appears isolated in graph |
| New `.md` file missing required frontmatter | Entry loads with `undefined` fields; appears in lists with placeholder title from filename |

---

## Out of Scope

- Hot reload of content files without server restart
- In-browser editing of markdown files
- PDF viewer or download (source_file paths are internal, not public URLs)
- Full-text search within section body text
- Mobile navigation drawer
- Internationalization / RTL support
