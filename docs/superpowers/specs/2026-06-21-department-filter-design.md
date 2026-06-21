# Design: Global Department Filter + "Theses Archive" Rename

**Date:** 2026-06-21
**Status:** Approved (pending spec review)

## Problem & Context

The site is branded as a Geosciences archive, but the dataset is multi-department.
Across the theses the `department` field (already in the data model and content
index) breaks down as:

- Petroleum Engineering — 274 (+ 2 mislabeled "Petroleum Engineering Department")
- Geosciences — 249
- Mechanical Engineering — 2

The department dimension is invisible in the UI. This work adds a **global,
persistent department selector** that filters every aggregate view, and rebrands
"Geosciences Archive" → "Theses Archive" so the naming matches the content.

The department data already flows into `content-index.json` via
`scripts/build-content.mjs` (`department: fm.department`), so this is primarily a
UI + small data-normalization task, not a data-modeling effort.

## Decisions (locked)

| Question | Decision |
|---|---|
| Filter scope | **Global, persistent** — one selector in the header filters all aggregate pages and persists across navigation. |
| Straggler handling | **Normalize + keep accurate** — fix the 2 "Petroleum Engineering Department" labels; keep the 2 Mechanical Engineering theses in their real department. |
| Dropdown options | **Data-derived** — built from distinct `department` values, sorted by thesis count desc, with "All departments" prepended. |
| State/propagation | **Context + localStorage** (option A). Not URL-encoded; the filter is a personal browsing preference. |
| Graph page | **In scope** — free under the chosen architecture (graph derives all data from the index and passes it as a prop). |

## Section 1 — Data normalization

Edit the two source markdown files in `public/contents/sources/` so
`department: "Petroleum Engineering Department"` → `department: "Petroleum Engineering"`:

- `2013-ahmed.md`
- `2022-algharbi.md`

Mechanical Engineering theses (`2014-jamil.md`, `2017-khan.md`) are **left
unchanged** — they keep their true department.

Re-run `node scripts/build-content.mjs` to regenerate `content-index.json`.
Resulting department set: **Petroleum Engineering (276), Geosciences (249),
Mechanical Engineering (2)**.

## Section 2 — Department state (context + localStorage)

New file `src/lib/department.tsx`:

- `DepartmentProvider` — holds `{ department, setDepartment }`. Default `"all"`.
  Initializes from `localStorage` key `geothesis:department` and writes back on
  change. Guards SSR (`typeof window` check) since the app builds to a static SPA.
- `useDepartment()` — hook returning the context value; throws if used outside the
  provider.
- A stored value that no longer matches any present department falls back to
  `"all"` (validated against available departments in the selector).

The provider mounts in `src/routes/__root.tsx` wrapping the app tree so the header
and every route share one source of truth.

## Section 3 — Selector UI

New component `src/components/layout/DepartmentSelect.tsx`, styled like the
existing `Select` on the theses page (`h-9/h-10 rounded-md border rule bg-card`).

- Reads `useContentData()` to derive options and `useDepartment()` for state.
- Options: `All departments` + each distinct `department` value, sorted by thesis
  count descending. Renders only `All departments` until data has loaded.
- Mounted in `src/components/layout/TopNav.tsx`:
  - **Desktop:** in the right-side toolbar, before the search button.
  - **Mobile:** as the first item inside the existing mobile dropdown menu.

## Section 4 — Applying the filter (one hook)

New hook `useFilteredContent()` in `src/lib/use-content-data.ts` (or a sibling
module):

- Reads `useContentData()` + `useDepartment()`.
- `department === "all"` → returns the index unchanged (no recompute cost).
- Otherwise rebuilds a filtered `ContentIndex` from the department's theses using
  the existing `buildIndex`-style derivation, so `theses`, `thesesByYear`,
  `thesesByConcept`, `years`, `advisors`, and `advisorsBySlug` all recompute
  consistently. `bySlug` stays **complete** so direct slug lookups still resolve.
- Memoized on `(data, department)`.

**Aggregate/listing pages** swap `useContentData()` → `useFilteredContent()`:

- `theses.index.tsx` — list filters by department.
- `advisors.index.tsx` — advisors recomputed from the department's theses.
- `concepts.index.tsx` — recomputed `thesesByConcept`; concepts with zero theses
  in the selected department are hidden.
- `timeline.tsx`, `trends.tsx` — aggregate over the filtered theses.
- `graph.tsx` — `data` (filtered) flows into `KnowledgeGraph`, `TimelineChart`,
  `DegreeChart`, `nodeCount`, and `yearBounds` automatically; no internal changes
  to those components. The graph's own year/degree/author filters compose on top.
- `index.tsx` (home) — hero counts (`thesisCount`/`conceptCount`) and the featured
  list reflect the filtered index.

**Detail pages keep full `useContentData()`** for their subject so a shared or
direct link always resolves regardless of the active filter:

- `theses.$slug.tsx`, `concepts.$slug.tsx`, `advisors.$slug.tsx`.

## Section 5 — "Theses Archive" rename + neutral copy

- `src/routes/index.tsx:57` — `KFUPM · Geosciences Archive` → `KFUPM · Theses Archive`.
- Meta titles `GeoThesis — Geosciences Research Archive` → `GeoThesis — Research Archive`
  in `src/routes/index.tsx:12` and `src/routes/__root.tsx:70`.
- `public/contents/config.json` — brand tagline (line 5) and footer tagline
  (line 21): `A curated archive of graduate theses in Geosciences Department, KFUPM.`
  → department-neutral `A curated archive of graduate theses at KFUPM.`

Left unchanged (intentionally):

- `src/routes/about.tsx` prose mentioning the Geosciences Department (historical
  description of the project's origin).
- "Digital Geosciences" — the developer/org name, not the archive scope.
- `src/routes/timeline.tsx` meta description mentioning "Geosciences research"
  may optionally be neutralized; treat as low priority.

## Testing & Verification

- `node scripts/build-content.mjs` regenerates the index; spot-check the three
  department counts.
- `bun run build` succeeds (static SPA, base `/gthesis/`).
- Manual:
  - Selector renders in the header (desktop toolbar + mobile menu).
  - Switching department filters theses, advisors, concepts, timeline, trends,
    graph, and home counts consistently.
  - Selection persists across reloads and navigation.
  - Detail pages (thesis/concept/advisor) remain reachable under any filter.
  - "Theses Archive" copy appears; no "Geosciences Archive" remains in chrome.

## Out of Scope (separate spec)

Removal of the Lovable build toolchain (`@lovable.dev/vite-tanstack-config`,
lockfile npm-mirror, `.gitignore` `.lovable` line). It is build-infrastructure
surgery, independent of this feature, and gets its own spec with full build +
deploy verification afterward. See memory note `deferred-lovable-toolchain-removal`.
