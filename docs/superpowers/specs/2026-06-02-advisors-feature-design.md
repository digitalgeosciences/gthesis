# Advisors Feature Design

**Date:** 2026-06-02
**Status:** Approved

## Goal

Add a dedicated `/advisors` section to GeoThesis Explorer with:
1. A listing page of all advisors (supervisors + committee members)
2. Individual profile pages at `/advisors/$slug` showing their students, roles, stats, and frequent collaborators
3. Universal search that includes advisors in the `CommandSearch` popup

All data is derived at runtime from thesis frontmatter — no new data files required.

---

## Data Layer

### New type: `AdvisorProfile`

Add to `src/lib/content.ts`:

```ts
export interface AdvisorProfile {
  name: string;           // canonical name (already normalized via supervisors.csv)
  slug: string;           // url-safe: lowercase, spaces→hyphens
  thesesSupervised: Entry[];   // theses where this person is `supervisor`
  thesesOnCommittee: Entry[];  // theses where this person is in `committee_members`
  departments: string[];       // distinct departments across all their theses
  yearsActive: [number, number] | null;  // [min, max] year
  collaborators: Array<{ name: string; slug: string; count: number }>; // co-advisors ranked by co-occurrence
}
```

### New function: `buildAdvisorIndex(theses: Entry[]): AdvisorProfile[]`

Add to `src/lib/content.ts`. Algorithm:

1. Collect all unique canonical names from `supervisor` and `committee_members` fields across all theses.
2. For each name, build `thesesSupervised` and `thesesOnCommittee` by scanning all theses.
3. Derive `departments` (distinct), `yearsActive` (min/max year across all their theses).
4. Build `collaborators`: for each thesis the advisor is on, collect all other people on that thesis (supervisor + committee); count co-occurrences; sort descending; strip self.
5. Sort result by total thesis count descending.

Slug generation: `name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")`.

### Extended `ContentIndex`

Add two fields:

```ts
export interface ContentIndex {
  // ... existing fields ...
  advisors: AdvisorProfile[];
  advisorsBySlug: Record<string, AdvisorProfile>;
}
```

`buildIndex()` calls `buildAdvisorIndex(theses)` and populates both fields.

---

## Routes

| Route | File | Purpose |
|---|---|---|
| `/advisors` | `src/routes/advisors.index.tsx` | Listing of all advisors |
| `/advisors/$slug` | `src/routes/advisors.$slug.tsx` | Individual advisor profile |

TanStack Router auto-generates `routeTree.gen.ts` on dev/build — no manual changes needed there.

---

## `/advisors` Listing Page (`advisors.index.tsx`)

- Heading: "Advisors" with subtitle showing total count
- Sort control: "Most theses" (default) | "A → Z"
- Grid of advisor cards (2-col on tablet, 3-col on desktop), each showing:
  - Name (links to profile)
  - Badge row: `N supervised · M committee`
  - Departments (comma-separated, truncated)
  - Years active span
- Nav link "Advisors" added to `config.json` nav links

---

## `/advisors/$slug` Profile Page (`advisors.$slug.tsx`)

### Header
- Back link: `← All advisors`
- Name as `h1`
- Stats bar (monospace, muted): `{N} supervised · {M} committee · {depts} · {yearMin}–{yearMax}`

### Theses section
Two labeled groups rendered in order:

**"As main supervisor"** (if any)
- Each item: thesis title (link to `/theses/$slug`), author, year, degree — same style as thesis list in `concepts.$slug.tsx`

**"As committee member"** (if any)
- Same item style, different heading

### Frequent collaborators section
- Heading: "Frequent collaborators"
- Ranked list: advisor name (link to their profile) + co-occurrence count badge
- Only shown if collaborators exist
- Capped at 8 entries

### 404 handling
`throw notFound()` if slug doesn't match any advisor.

---

## Universal Search (`CommandSearch`)

### Change
The existing `match` function currently checks `title`, `author`, `summary`. No change to that logic.

Add a new **Advisors** result group:

```ts
advisors: term
  ? data.advisors.filter(a => a.name.toLowerCase().includes(term)).slice(0, 4)
  : []
```

Rendered as a `CommandGroup` heading "Advisors" with `User` icon, showing name + thesis count. `onSelect` navigates to `/advisors/$slug`.

The group is only shown when the result set is non-empty (same pattern as existing Concepts/Theses groups).

---

## Navigation

Add `{ "label": "Advisors", "to": "/advisors" }` to the `nav.links` array in `public/contents/config.json`.

---

## Files Changed / Created

| File | Change |
|---|---|
| `src/lib/content.ts` | Add `AdvisorProfile` type, `buildAdvisorIndex()`, extend `ContentIndex` and `buildIndex()` |
| `src/routes/advisors.index.tsx` | New — listing page |
| `src/routes/advisors.$slug.tsx` | New — profile page |
| `src/components/search/CommandSearch.tsx` | Add Advisors result group |
| `public/contents/config.json` | Add Advisors nav link |

---

## Constraints & Non-Goals

- No new data files — everything derived from existing thesis frontmatter
- No bio/photo fields in this iteration (can be added later via optional `advisors.json`)
- No pagination on profile pages — advisor thesis counts are small enough to show all
- `routeTree.gen.ts` is auto-generated; never edited manually
