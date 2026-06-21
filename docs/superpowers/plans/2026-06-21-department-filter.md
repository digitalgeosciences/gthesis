# Department Filter + "Theses Archive" Rename Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a global, persistent department selector to the header that filters every aggregate page, and rebrand "Geosciences Archive" → "Theses Archive".

**Architecture:** A `DepartmentProvider` (React context + localStorage) holds the selected department. A pure `filterIndexByDepartment()` rebuilds the content index for a department; a `useFilteredContent()` hook wraps `useContentData()` so aggregate pages adopt the filter with a one-line swap. Detail pages keep the full index so direct links always resolve.

**Tech Stack:** TanStack Start (static SPA), React 19, TypeScript, Vite, Tailwind v4, Bun.

> **Testing note (deviation from default TDD):** This codebase has **no test runner** (no vitest/jest, zero test files). Per the repo's conventions we do **not** introduce a harness for this UI feature. Verification is via `bun run build`, `bun run lint`, and the explicit manual browser checks in each task and Task 8. The core filter logic is isolated as a pure function (`filterIndexByDepartment`) so it is independently reviewable.

---

## File Structure

| File | Action | Responsibility |
|---|---|---|
| `public/contents/sources/2013-ahmed.md` | Modify | Normalize department label |
| `public/contents/sources/2022-algharbi.md` | Modify | Normalize department label |
| `src/lib/content.ts` | Modify | Add pure `filterIndexByDepartment()` |
| `src/lib/department.tsx` | Create | `DepartmentProvider` + `useDepartment()` (context + localStorage) |
| `src/lib/use-content-data.ts` | Modify | Add `useFilteredContent()` hook |
| `src/components/layout/DepartmentSelect.tsx` | Create | Header dropdown, data-derived options |
| `src/components/layout/TopNav.tsx` | Modify | Mount selector (desktop + mobile) |
| `src/routes/__root.tsx` | Modify | Mount `DepartmentProvider`; rename meta title |
| `src/routes/index.tsx` | Modify | Use filtered data; rename eyebrow + meta |
| `src/routes/concepts.index.tsx` | Modify | Use filtered data |
| `src/routes/advisors.index.tsx` | Modify | Use filtered data |
| `src/routes/timeline.tsx` | Modify | Use filtered data |
| `src/routes/trends.tsx` | Modify | Use filtered data |
| `src/routes/theses.index.tsx` | Modify | Use filtered data |
| `src/routes/graph.tsx` | Modify | Use filtered data |
| `public/contents/config.json` | Modify | Department-neutral taglines |

---

## Task 1: Normalize department data

**Files:**
- Modify: `public/contents/sources/2013-ahmed.md`
- Modify: `public/contents/sources/2022-algharbi.md`

- [ ] **Step 1: Fix the label in both files**

In each file, change the frontmatter line:

```yaml
department: "Petroleum Engineering Department"
```

to:

```yaml
department: "Petroleum Engineering"
```

- [ ] **Step 2: Rebuild the content index**

Run: `node scripts/build-content.mjs`
Expected: completes without error and regenerates `public/content-index.json`.

- [ ] **Step 3: Verify department counts**

Run:
```bash
grep -o '"department":"[^"]*"' public/content-index.json | sort | uniq -c | sort -rn
```
Expected (order/exact counts):
```
    276 "department":"Petroleum Engineering"
    249 "department":"Geosciences"
      2 "department":"Mechanical Engineering"
```
(No remaining "Petroleum Engineering Department".)

- [ ] **Step 4: Commit**

```bash
git add public/contents/sources/2013-ahmed.md public/contents/sources/2022-algharbi.md public/content-index.json
git commit -m "fix: normalize 'Petroleum Engineering Department' department labels"
```

---

## Task 2: Pure `filterIndexByDepartment()`

**Files:**
- Modify: `src/lib/content.ts` (append after `buildIndex`, before `jaccard`)

- [ ] **Step 1: Add the function**

Add to `src/lib/content.ts`:

```ts
/**
 * Returns a ContentIndex narrowed to a single department. `bySlug` is kept
 * complete so direct slug lookups (detail pages, link targets) still resolve;
 * every derived collection is recomputed from the department's theses.
 * `department === "all"` returns the original index unchanged.
 */
export function filterIndexByDepartment(index: ContentIndex, department: string): ContentIndex {
  if (department === "all") return index;

  const theses = index.theses.filter((t) => t.department === department);

  const thesesByYear: Record<number, Entry[]> = {};
  const thesesByConcept: Record<string, Entry[]> = {};
  for (const t of theses) {
    if (t.year) (thesesByYear[t.year] ||= []).push(t);
    for (const l of t.links) {
      if (index.bySlug[l]?.type === "concept") (thesesByConcept[l] ||= []).push(t);
    }
  }

  const years = Object.keys(thesesByYear).map(Number).sort((a, b) => a - b);
  const concepts = index.concepts.filter((c) => (thesesByConcept[c.slug]?.length ?? 0) > 0);

  const advisors = buildAdvisorIndex(theses);
  const advisorsBySlug: Record<string, AdvisorProfile> = {};
  for (const a of advisors) advisorsBySlug[a.slug] = a;

  return { bySlug: index.bySlug, theses, concepts, thesesByYear, thesesByConcept, years, advisors, advisorsBySlug };
}

/** Distinct department values present in the index, sorted by thesis count desc. */
export function departmentsByCount(index: ContentIndex): Array<{ name: string; count: number }> {
  const counts = new Map<string, number>();
  for (const t of index.theses) {
    if (t.department) counts.set(t.department, (counts.get(t.department) ?? 0) + 1);
  }
  return [...counts.entries()]
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}
```

- [ ] **Step 2: Type-check**

Run: `bunx tsc --noEmit`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/lib/content.ts
git commit -m "feat: add filterIndexByDepartment and departmentsByCount helpers"
```

---

## Task 3: Department context + provider

**Files:**
- Create: `src/lib/department.tsx`
- Modify: `src/routes/__root.tsx`

- [ ] **Step 1: Create the provider**

Create `src/lib/department.tsx`:

```tsx
import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

const STORAGE_KEY = "geothesis:department";

interface DepartmentContextValue {
  department: string;
  setDepartment: (d: string) => void;
}

const DepartmentContext = createContext<DepartmentContextValue | null>(null);

function readStored(): string {
  if (typeof window === "undefined") return "all";
  try {
    return localStorage.getItem(STORAGE_KEY) || "all";
  } catch {
    return "all";
  }
}

export function DepartmentProvider({ children }: { children: ReactNode }) {
  const [department, setDepartmentState] = useState<string>(readStored);

  const setDepartment = useCallback((d: string) => {
    setDepartmentState(d);
    try {
      if (typeof window !== "undefined") localStorage.setItem(STORAGE_KEY, d);
    } catch {
      /* ignore quota / privacy-mode errors */
    }
  }, []);

  return (
    <DepartmentContext.Provider value={{ department, setDepartment }}>
      {children}
    </DepartmentContext.Provider>
  );
}

export function useDepartment(): DepartmentContextValue {
  const ctx = useContext(DepartmentContext);
  if (!ctx) throw new Error("DepartmentProvider missing");
  return ctx;
}
```

- [ ] **Step 2: Mount the provider in the root**

In `src/routes/__root.tsx`, add the import after line 14 (`import { useConfig }...`):

```tsx
import { DepartmentProvider } from "@/lib/department";
```

Then wrap `AppShell` in `RootComponent` (replace the existing return body):

```tsx
function RootComponent() {
  // Config is fetched client-side (static SPA — no SSR loader). useConfig()
  // triggers the load and re-renders consumers once it resolves.
  useConfig();
  return (
    <>
      <ConfigStyleInjector />
      <DepartmentProvider>
        <AppShell>
          <Outlet />
        </AppShell>
      </DepartmentProvider>
    </>
  );
}
```

- [ ] **Step 3: Type-check**

Run: `bunx tsc --noEmit`
Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add src/lib/department.tsx src/routes/__root.tsx
git commit -m "feat: add DepartmentProvider (context + localStorage) and mount in root"
```

---

## Task 4: `useFilteredContent()` hook

**Files:**
- Modify: `src/lib/use-content-data.ts`

- [ ] **Step 1: Add the hook**

In `src/lib/use-content-data.ts`, update the top imports:

```ts
import { useEffect, useMemo, useState } from "react";
import { buildIndex, filterIndexByDepartment, type ContentIndex, type Entry } from "./content";
import { useDepartment } from "./department";
```

Then add, after the existing `useContentData` function:

```ts
/**
 * Department-aware view of the content index. Returns the full index when the
 * selected department is "all"; otherwise a recomputed, narrowed index.
 */
export function useFilteredContent(): ContentIndex | null {
  const data = useContentData();
  const { department } = useDepartment();
  return useMemo(
    () => (data ? filterIndexByDepartment(data, department) : null),
    [data, department],
  );
}
```

- [ ] **Step 2: Type-check**

Run: `bunx tsc --noEmit`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/lib/use-content-data.ts
git commit -m "feat: add useFilteredContent hook"
```

---

## Task 5: Department selector in the header

**Files:**
- Create: `src/components/layout/DepartmentSelect.tsx`
- Modify: `src/components/layout/TopNav.tsx`

- [ ] **Step 1: Create the selector component**

Create `src/components/layout/DepartmentSelect.tsx`:

```tsx
import { useEffect, useMemo } from "react";
import { useContentData } from "@/lib/use-content-data";
import { departmentsByCount } from "@/lib/content";
import { useDepartment } from "@/lib/department";

export function DepartmentSelect({ className = "" }: { className?: string }) {
  const data = useContentData();
  const { department, setDepartment } = useDepartment();

  const departments = useMemo(
    () => (data ? departmentsByCount(data).map((d) => d.name) : []),
    [data],
  );

  // Reset to "all" if a stored department is no longer present in the data.
  useEffect(() => {
    if (department !== "all" && departments.length > 0 && !departments.includes(department)) {
      setDepartment("all");
    }
  }, [department, departments, setDepartment]);

  return (
    <select
      value={department}
      onChange={(e) => setDepartment(e.target.value)}
      aria-label="Filter by department"
      className={`h-9 rounded-md border rule bg-card px-3 text-sm text-muted-foreground outline-none focus:border-[var(--teal-soft)] ${className}`}
    >
      <option value="all">All departments</option>
      {departments.map((d) => (
        <option key={d} value={d}>{d}</option>
      ))}
    </select>
  );
}
```

- [ ] **Step 2: Mount in the desktop toolbar**

In `src/components/layout/TopNav.tsx`, add the import after line 5 (`import { useConfig }...`):

```tsx
import { DepartmentSelect } from "./DepartmentSelect";
```

Then, inside the right-side toolbar `<div className="ml-auto flex items-center gap-2">` (currently starting at line 34), add the selector as the **first** child, before the search `<button>`:

```tsx
          <div className="ml-auto flex items-center gap-2">
            <DepartmentSelect className="hidden sm:block" />
            <button
              onClick={onOpenSearch}
```

- [ ] **Step 3: Mount in the mobile dropdown**

In the same file, inside the mobile dropdown `<nav>` (the `{mobileOpen && (...)}` block), add the selector as the first item above the `<ul>`:

```tsx
          <nav className="border-t rule bg-background px-5 py-3 md:hidden">
            <DepartmentSelect className="mb-3 w-full" />
            <ul className="flex flex-col gap-1">
```

- [ ] **Step 4: Type-check + lint**

Run: `bunx tsc --noEmit && bun run lint`
Expected: no errors.

- [ ] **Step 5: Commit**

```bash
git add src/components/layout/DepartmentSelect.tsx src/components/layout/TopNav.tsx
git commit -m "feat: add department selector to header (desktop + mobile)"
```

---

## Task 6: Apply the filter on aggregate pages

Each sub-step is a one-line swap of the data hook. Detail pages (`theses.$slug`, `concepts.$slug`, `advisors.$slug`) are intentionally **not** changed.

- [ ] **Step 1: theses.index.tsx**

In `src/routes/theses.index.tsx`:
- Change import line 3 from `import { useContentData } from "@/lib/use-content-data";` to `import { useFilteredContent } from "@/lib/use-content-data";`
- Change line 25 from `const data = useContentData();` to `const data = useFilteredContent();`

- [ ] **Step 2: advisors.index.tsx**

In `src/routes/advisors.index.tsx`:
- Change import line 3 to `import { useFilteredContent } from "@/lib/use-content-data";`
- Change line 18 `const data = useContentData();` → `const data = useFilteredContent();`

- [ ] **Step 3: concepts.index.tsx**

In `src/routes/concepts.index.tsx`:
- Change import line 2 to `import { useFilteredContent } from "@/lib/use-content-data";`
- Change line 12 `const data = useContentData();` → `const data = useFilteredContent();`

- [ ] **Step 4: timeline.tsx**

In `src/routes/timeline.tsx`:
- Change import line 2 to `import { useFilteredContent } from "@/lib/use-content-data";`
- Change line 13 `const data = useContentData();` → `const data = useFilteredContent();`
- Guard the empty-department case: replace line 15
  `const max = Math.max(...data.years.map((y) => data.thesesByYear[y].length));`
  with:
  ```tsx
  if (data.years.length === 0)
    return <div className="mx-auto max-w-6xl px-5 py-12 text-sm text-muted-foreground">No theses in this department.</div>;
  const max = Math.max(...data.years.map((y) => data.thesesByYear[y].length));
  ```

- [ ] **Step 5: trends.tsx**

In `src/routes/trends.tsx`:
- Change import line 3 to `import { useFilteredContent } from "@/lib/use-content-data";`
- Change line 19 `const data = useContentData();` → `const data = useFilteredContent();`

- [ ] **Step 6: graph.tsx**

In `src/routes/graph.tsx`:
- Change import line 5 to `import { useFilteredContent } from "@/lib/use-content-data";`
- Change line 31 `const data = useContentData();` → `const data = useFilteredContent();`

- [ ] **Step 7: index.tsx (home)**

In `src/routes/index.tsx`:
- Change import line 2 to `import { useFilteredContent } from "@/lib/use-content-data";`
- Change line 20 `const data = useContentData();` → `const data = useFilteredContent();`

- [ ] **Step 8: Type-check + lint**

Run: `bunx tsc --noEmit && bun run lint`
Expected: no errors.

- [ ] **Step 9: Commit**

```bash
git add src/routes/theses.index.tsx src/routes/advisors.index.tsx src/routes/concepts.index.tsx src/routes/timeline.tsx src/routes/trends.tsx src/routes/graph.tsx src/routes/index.tsx
git commit -m "feat: apply department filter to all aggregate pages"
```

---

## Task 7: "Theses Archive" rename + neutral copy

**Files:**
- Modify: `src/routes/index.tsx`
- Modify: `src/routes/__root.tsx`
- Modify: `public/contents/config.json`

- [ ] **Step 1: Home eyebrow + meta**

In `src/routes/index.tsx`:
- Line 12: `{ title: "GeoThesis — Geosciences Research Archive" },` → `{ title: "GeoThesis — Research Archive" },`
- Line 57: `...KFUPM · Geosciences Archive</p>` → `...KFUPM · Theses Archive</p>`

- [ ] **Step 2: Root meta title**

In `src/routes/__root.tsx` line 70:
`{ title: "GeoThesis — Geosciences Research Archive" },` → `{ title: "GeoThesis — Research Archive" },`

- [ ] **Step 3: Config taglines**

In `public/contents/config.json`, change both tagline lines (line 5 `brand.tagline` and line 21 `footer.tagline`):
`"A curated archive of graduate theses in Geosciences Department, KFUPM."`
→ `"A curated archive of graduate theses at KFUPM."`

- [ ] **Step 4: Confirm no stray "Geosciences Archive" remains in chrome**

Run: `grep -rn "Geosciences Archive\|Geosciences Research Archive" src public/contents/config.json`
Expected: no matches.

- [ ] **Step 5: Type-check**

Run: `bunx tsc --noEmit`
Expected: no errors.

- [ ] **Step 6: Commit**

```bash
git add src/routes/index.tsx src/routes/__root.tsx public/contents/config.json
git commit -m "feat: rebrand 'Geosciences Archive' to 'Theses Archive' with neutral taglines"
```

---

## Task 8: Full build + manual verification

**Files:** none (verification only)

- [ ] **Step 1: Production build**

Run: `bun run build`
Expected: build completes with no errors (runs `build-content.mjs` then `vite build`).

- [ ] **Step 2: Preview and manual checks**

Run: `bun run preview`
Then in the browser verify:
- Department selector appears in the header on desktop (toolbar, before search) and inside the mobile menu.
- Options read: `All departments`, `Petroleum Engineering`, `Geosciences`, `Mechanical Engineering`.
- Selecting **Petroleum Engineering** updates: theses list count, advisors list, concepts list, timeline, trends chart, graph nodes, and the home hero counts/featured — all consistently.
- Selecting **Mechanical Engineering** shows the 2 theses and does not error on timeline (years present).
- Reloading the page preserves the selection (localStorage).
- A thesis/concept/advisor **detail page** opened by direct URL still renders while a non-"all" department is active.
- The hero eyebrow reads **"KFUPM · Theses Archive"** and the footer tagline is department-neutral.

- [ ] **Step 3: Final commit (if any verification fixups were needed)**

```bash
git add -A
git commit -m "chore: department filter verification fixups"
```
(Skip if nothing changed.)

---

## Self-Review (completed by plan author)

- **Spec coverage:** §1 data normalization → Task 1. §2 context/localStorage → Task 3. §3 selector UI → Task 5. §4 filter hook + page swaps → Tasks 2, 4, 6. §5 rename → Task 7. Testing/verification → Task 8. All spec sections mapped.
- **Placeholder scan:** No TBD/TODO; every code step shows complete code; every command has expected output.
- **Type consistency:** `filterIndexByDepartment(index, department)` and `departmentsByCount(index)` (Task 2) are consumed with matching signatures in Tasks 4 and 5; `useFilteredContent()` (Task 4) is the exact symbol swapped in Task 6; `useDepartment()`/`DepartmentProvider` (Task 3) consumed in Tasks 4 and 5; `STORAGE_KEY` is internal to `department.tsx`.
- **Added beyond spec:** empty-department guard on timeline (Task 6 Step 4) and a stale-value reset in the selector (Task 5) — both defensive, consistent with the spec's "stored value falls back to all".
```
