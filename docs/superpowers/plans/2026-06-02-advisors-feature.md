# Advisors Feature Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a `/advisors` section with listing + profile pages, derive all advisor data from thesis frontmatter, and make the global search include advisors.

**Architecture:** A new `AdvisorProfile` type and `buildAdvisorIndex()` function extend the existing `ContentIndex` at build time. Two new TanStack route files provide the listing and profile pages. `CommandSearch` gains a third result group. No new data files — everything derived from `supervisor` and `committee_members` fields already normalized via `supervisors.csv`.

**Tech Stack:** TanStack Start SSR (v1.167), React 19, Tailwind CSS 4, TypeScript 5. TanStack Router auto-generates `routeTree.gen.ts` on dev start — never edit it manually.

---

## File Map

| File | Action | Responsibility |
|---|---|---|
| `src/lib/content.ts` | Modify | Add `AdvisorProfile` type, `slugify()`, `buildAdvisorIndex()`, extend `ContentIndex` and `buildIndex()` |
| `src/routes/advisors.index.tsx` | Create | Listing page — all advisors, sortable |
| `src/routes/advisors.$slug.tsx` | Create | Profile page — theses by role + collaborators |
| `src/components/search/CommandSearch.tsx` | Modify | Add Advisors result group, update placeholder text |
| `public/contents/config.json` | Modify | Add Advisors nav link |

---

## Task 1 — Extend the data layer (`content.ts`)

**Files:**
- Modify: `src/lib/content.ts`

- [ ] **Step 1: Add `AdvisorProfile` type and `slugify` helper**

  Open `src/lib/content.ts`. After the closing brace of the `Entry` interface (line 19), add:

  ```ts
  export function slugify(name: string): string {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }

  export interface AdvisorProfile {
    name: string;
    slug: string;
    thesesSupervised: Entry[];
    thesesOnCommittee: Entry[];
    departments: string[];
    yearsActive: [number, number] | null;
    collaborators: Array<{ name: string; slug: string; count: number }>;
  }
  ```

- [ ] **Step 2: Add `buildAdvisorIndex()` function**

  After the `slugify` and `AdvisorProfile` additions, add this function before `buildIndex`:

  ```ts
  export function buildAdvisorIndex(theses: Entry[]): AdvisorProfile[] {
    const map = new Map<string, { supervised: Entry[]; committee: Entry[] }>();

    for (const t of theses) {
      if (t.supervisor) {
        const e = map.get(t.supervisor) ?? { supervised: [], committee: [] };
        e.supervised.push(t);
        map.set(t.supervisor, e);
      }
      for (const m of t.committee ?? []) {
        const e = map.get(m) ?? { supervised: [], committee: [] };
        e.committee.push(t);
        map.set(m, e);
      }
    }

    const profiles: AdvisorProfile[] = [];

    for (const [name, { supervised, committee }] of map.entries()) {
      const all = [...supervised, ...committee];
      const years = all.map((t) => t.year).filter((y): y is number => y != null);
      const depts = [...new Set(all.map((t) => t.department).filter((d): d is string => d != null))];

      const coCount = new Map<string, number>();
      for (const t of all) {
        const people = [t.supervisor, ...(t.committee ?? [])].filter(
          (p): p is string => !!p && p !== name,
        );
        for (const p of people) {
          coCount.set(p, (coCount.get(p) ?? 0) + 1);
        }
      }

      const collaborators = [...coCount.entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, 8)
        .map(([n, count]) => ({ name: n, slug: slugify(n), count }));

      profiles.push({
        name,
        slug: slugify(name),
        thesesSupervised: supervised,
        thesesOnCommittee: committee,
        departments: depts,
        yearsActive: years.length ? [Math.min(...years), Math.max(...years)] : null,
        collaborators,
      });
    }

    return profiles.sort(
      (a, b) =>
        b.thesesSupervised.length +
        b.thesesOnCommittee.length -
        (a.thesesSupervised.length + a.thesesOnCommittee.length),
    );
  }
  ```

- [ ] **Step 3: Extend `ContentIndex` and `buildIndex()`**

  In the `ContentIndex` interface, add two fields after `departments: string[]`:

  ```ts
  advisors: AdvisorProfile[];
  advisorsBySlug: Record<string, AdvisorProfile>;
  ```

  In `buildIndex()`, after the line `const departments = Object.keys(thesesByDept).sort();`, add:

  ```ts
  const advisors = buildAdvisorIndex(theses);
  const advisorsBySlug: Record<string, AdvisorProfile> = {};
  for (const a of advisors) advisorsBySlug[a.slug] = a;
  ```

  Update the return statement to include the two new fields:

  ```ts
  return { bySlug, theses, concepts, thesesByYear, thesesByDept, thesesByConcept, years, departments, advisors, advisorsBySlug };
  ```

- [ ] **Step 4: Verify TypeScript compiles**

  Run:
  ```bash
  bun tsc --noEmit 2>&1 | head -30
  ```

  Expected: no errors (or only pre-existing unrelated errors). Fix any type errors before proceeding.

- [ ] **Step 5: Commit**

  ```bash
  git add src/lib/content.ts
  git commit -m "feat: add AdvisorProfile type and buildAdvisorIndex to content layer"
  ```

---

## Task 2 — Advisors listing page (`/advisors`)

**Files:**
- Create: `src/routes/advisors.index.tsx`

- [ ] **Step 1: Create `src/routes/advisors.index.tsx`**

  ```tsx
  import { createFileRoute, Link } from "@tanstack/react-router";
  import { useMemo, useState } from "react";
  import { useContentData } from "@/lib/use-content-data";
  import { User } from "lucide-react";
  import { PageLoader } from "@/components/ui/PageLoader";

  export const Route = createFileRoute("/advisors/")({
    head: () => ({
      meta: [
        { title: "Advisors — GeoThesis" },
        { name: "description", content: "Browse all thesis supervisors and committee members in the KFUPM archive." },
      ],
    }),
    component: AdvisorsPage,
  });

  function AdvisorsPage() {
    const data = useContentData();
    const [sort, setSort] = useState<"count" | "az">("count");

    const sorted = useMemo(() => {
      if (!data) return [];
      return [...data.advisors].sort((a, b) =>
        sort === "az"
          ? a.name.localeCompare(b.name)
          : b.thesesSupervised.length + b.thesesOnCommittee.length -
            (a.thesesSupervised.length + a.thesesOnCommittee.length),
      );
    }, [data, sort]);

    if (!data) return <PageLoader />;

    return (
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex items-baseline justify-between">
          <div>
            <h1 className="font-display text-4xl">Advisors</h1>
            <p className="mt-1 text-sm text-muted-foreground">{data.advisors.length} advisors</p>
          </div>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as "count" | "az")}
            className="h-9 rounded-md border rule bg-card px-3 text-sm outline-none focus:border-[var(--teal-soft)]"
          >
            <option value="count">Most theses</option>
            <option value="az">A → Z</option>
          </select>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sorted.map((a) => (
            <Link
              key={a.slug}
              to="/advisors/$slug"
              params={{ slug: a.slug }}
              className="thesis-card group"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2">
                  <User className="size-4 shrink-0 text-[var(--teal)]" />
                  <span className="font-medium text-foreground group-hover:text-[var(--teal)]">
                    {a.name}
                  </span>
                </div>
                <span className="shrink-0 font-mono text-xs text-muted-foreground">
                  {a.thesesSupervised.length + a.thesesOnCommittee.length}
                </span>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                {a.thesesSupervised.length} supervised · {a.thesesOnCommittee.length} committee
              </p>
              {a.departments.length > 0 && (
                <p className="mt-1 truncate text-xs text-muted-foreground">
                  {a.departments.join(", ")}
                </p>
              )}
              {a.yearsActive && (
                <p className="mt-1 font-mono text-xs text-muted-foreground">
                  {a.yearsActive[0]}–{a.yearsActive[1]}
                </p>
              )}
            </Link>
          ))}
        </div>
      </div>
    );
  }
  ```

- [ ] **Step 2: Start dev server and verify the listing page**

  ```bash
  bun run dev
  ```

  Navigate to `http://localhost:3000/advisors`. Confirm:
  - Advisor cards appear with name, thesis counts, departments, and year range
  - Sort dropdown switches between "Most theses" and "A → Z"
  - `routeTree.gen.ts` was auto-regenerated (the file's timestamp changes)

- [ ] **Step 3: Commit**

  ```bash
  git add src/routes/advisors.index.tsx
  git commit -m "feat: add /advisors listing page"
  ```

---

## Task 3 — Advisor profile page (`/advisors/$slug`)

**Files:**
- Create: `src/routes/advisors.$slug.tsx`

- [ ] **Step 1: Create `src/routes/advisors.$slug.tsx`**

  ```tsx
  import { createFileRoute, Link, notFound } from "@tanstack/react-router";
  import { useContentData } from "@/lib/use-content-data";
  import type { Entry } from "@/lib/content";
  import { User, ArrowLeft } from "lucide-react";
  import { PageLoader } from "@/components/ui/PageLoader";

  export const Route = createFileRoute("/advisors/$slug")({
    head: ({ params }) => ({
      meta: [
        { title: `${params.slug.replace(/-/g, " ")} — GeoThesis Advisors` },
        { name: "description", content: "Advisor profile: supervised theses, committee roles, and frequent collaborators." },
      ],
    }),
    component: AdvisorProfilePage,
  });

  function AdvisorProfilePage() {
    const { slug } = Route.useParams();
    const data = useContentData();

    if (!data) return <PageLoader />;
    const advisor = data.advisorsBySlug[slug];
    if (!advisor) throw notFound();

    return (
      <div className="mx-auto max-w-3xl px-5 py-12">
        <Link
          to="/advisors"
          className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="size-3" /> All advisors
        </Link>

        <div className="mt-4 flex items-center gap-3">
          <User className="size-6 shrink-0 text-[var(--teal)]" />
          <h1 className="font-display text-4xl">{advisor.name}</h1>
        </div>

        <p className="mt-2 font-mono text-xs text-muted-foreground">
          {advisor.thesesSupervised.length} supervised · {advisor.thesesOnCommittee.length} committee
          {advisor.departments.length > 0 && ` · ${advisor.departments.join(", ")}`}
          {advisor.yearsActive && ` · ${advisor.yearsActive[0]}–${advisor.yearsActive[1]}`}
        </p>

        {advisor.thesesSupervised.length > 0 && (
          <section className="mt-10">
            <h2 className="font-display text-2xl">As main supervisor</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {advisor.thesesSupervised.length}{" "}
              {advisor.thesesSupervised.length === 1 ? "thesis" : "theses"}
            </p>
            <ThesisList theses={advisor.thesesSupervised} />
          </section>
        )}

        {advisor.thesesOnCommittee.length > 0 && (
          <section className="mt-10">
            <h2 className="font-display text-2xl">As committee member</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {advisor.thesesOnCommittee.length}{" "}
              {advisor.thesesOnCommittee.length === 1 ? "thesis" : "theses"}
            </p>
            <ThesisList theses={advisor.thesesOnCommittee} />
          </section>
        )}

        {advisor.collaborators.length > 0 && (
          <section className="mt-10 border-t rule pt-8">
            <h2 className="font-display text-2xl">Frequent collaborators</h2>
            <ul className="mt-4 divide-y rule">
              {advisor.collaborators.map((c) => (
                <li key={c.slug}>
                  <Link
                    to="/advisors/$slug"
                    params={{ slug: c.slug }}
                    className="group flex items-center justify-between py-3 hover:text-[var(--teal)]"
                  >
                    <span className="flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-[var(--teal)]">
                      <User className="size-3.5 shrink-0 text-muted-foreground" />
                      {c.name}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">{c.count} shared</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    );
  }

  function ThesisList({ theses }: { theses: Entry[] }) {
    return (
      <ul className="mt-4 divide-y rule">
        {theses.map((t) => (
          <li key={t.slug}>
            <Link
              to="/theses/$slug"
              params={{ slug: t.slug.replace("sources/", "") }}
              className="group block -mx-2 rounded px-2 py-4 hover:bg-muted/30"
            >
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-sm font-medium text-foreground group-hover:text-[var(--teal)]">
                  {t.title}
                </span>
                <span className="shrink-0 font-mono text-xs text-muted-foreground">{t.year}</span>
              </div>
              <div className="mt-0.5 text-xs text-muted-foreground">
                {t.author}
                {t.degree ? ` · ${t.degree}` : ""}
                {t.department ? ` · ${t.department}` : ""}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    );
  }
  ```

- [ ] **Step 2: Verify the profile page in browser**

  While dev server is running, click any advisor card from `/advisors`. Confirm:
  - Name, stats bar, "As main supervisor" section, "As committee member" section render correctly
  - Clicking a thesis title navigates to the correct thesis detail page
  - "Frequent collaborators" section appears and each name links to that advisor's profile
  - Navigating to a non-existent slug (e.g. `/advisors/nobody`) shows the 404 page

- [ ] **Step 3: Commit**

  ```bash
  git add src/routes/advisors.$slug.tsx
  git commit -m "feat: add /advisors/:slug profile page with theses by role and collaborators"
  ```

---

## Task 4 — Universal search: add Advisors group

**Files:**
- Modify: `src/components/search/CommandSearch.tsx`

- [ ] **Step 1: Replace `src/components/search/CommandSearch.tsx`**

  ```tsx
  import { useEffect, useMemo, useState } from "react";
  import { useNavigate } from "@tanstack/react-router";
  import { useContentData } from "@/lib/use-content-data";
  import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
  } from "@/components/ui/command";
  import { BookOpen, Tag, User } from "lucide-react";

  export function CommandSearch({
    open,
    onOpenChange,
  }: {
    open: boolean;
    onOpenChange: (v: boolean) => void;
  }) {
    const data = useContentData();
    const navigate = useNavigate();
    const [q, setQ] = useState("");

    const results = useMemo(() => {
      if (!data) return { theses: [], concepts: [], advisors: [] };
      const term = q.trim().toLowerCase();
      const all = Object.values(data.bySlug);
      const match = (s?: string) => (s ?? "").toLowerCase().includes(term);
      const filt = term
        ? all.filter((e) => match(e.title) || match(e.author) || match(e.summary))
        : all.slice(0, 12);
      return {
        theses: filt.filter((e) => e.type === "source").slice(0, 8),
        concepts: filt.filter((e) => e.type === "concept").slice(0, 6),
        advisors: term
          ? data.advisors.filter((a) => a.name.toLowerCase().includes(term)).slice(0, 4)
          : [],
      };
    }, [q, data]);

    useEffect(() => {
      if (!open) setQ("");
    }, [open]);

    return (
      <CommandDialog open={open} onOpenChange={onOpenChange}>
        <CommandInput
          value={q}
          onValueChange={setQ}
          placeholder="Search theses, concepts, advisors…"
        />
        <CommandList>
          <CommandEmpty>No results.</CommandEmpty>
          {results.advisors.length > 0 && (
            <CommandGroup heading="Advisors">
              {results.advisors.map((a) => (
                <CommandItem
                  key={a.slug}
                  value={a.slug + " " + a.name}
                  onSelect={() => {
                    onOpenChange(false);
                    navigate({ to: "/advisors/$slug", params: { slug: a.slug } });
                  }}
                >
                  <User className="text-[var(--teal)]" />
                  <div className="flex flex-col">
                    <span className="truncate">{a.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {a.thesesSupervised.length + a.thesesOnCommittee.length} theses
                    </span>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          )}
          {results.concepts.length > 0 && (
            <CommandGroup heading="Concepts">
              {results.concepts.map((c) => (
                <CommandItem
                  key={c.slug}
                  value={c.slug + " " + c.title}
                  onSelect={() => {
                    onOpenChange(false);
                    navigate({
                      to: "/concepts/$slug",
                      params: { slug: c.slug.replace("concepts/", "") },
                    });
                  }}
                >
                  <Tag className="text-[var(--teal)]" /> {c.title}
                </CommandItem>
              ))}
            </CommandGroup>
          )}
          {results.theses.length > 0 && (
            <CommandGroup heading="Theses">
              {results.theses.map((t) => (
                <CommandItem
                  key={t.slug}
                  value={t.slug + " " + t.title + " " + (t.author ?? "")}
                  onSelect={() => {
                    onOpenChange(false);
                    navigate({
                      to: "/theses/$slug",
                      params: { slug: t.slug.replace("sources/", "") },
                    });
                  }}
                >
                  <BookOpen className="text-[var(--teal)]" />
                  <div className="flex flex-col">
                    <span className="truncate">{t.title}</span>
                    <span className="text-xs text-muted-foreground">
                      {t.author} · {t.year} · {t.department}
                    </span>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          )}
        </CommandList>
      </CommandDialog>
    );
  }
  ```

- [ ] **Step 2: Verify universal search in browser**

  Press `/` to open the search dialog. Type a known advisor name (e.g. a surname visible on a thesis detail page). Confirm:
  - "Advisors" group appears above Concepts and Theses
  - Selecting the result navigates to `/advisors/$slug`
  - Placeholder text now reads "Search theses, concepts, advisors…"
  - Theses and concepts still work as before

- [ ] **Step 3: Commit**

  ```bash
  git add src/components/search/CommandSearch.tsx
  git commit -m "feat: add advisors to universal search results"
  ```

---

## Task 5 — Add Advisors nav link

**Files:**
- Modify: `public/contents/config.json`

- [ ] **Step 1: Add Advisors link to nav in `public/contents/config.json`**

  Change the `nav.links` array from:

  ```json
  "links": [
    { "label": "Theses",   "to": "/theses" },
    { "label": "Concepts", "to": "/concepts" },
    { "label": "Timeline", "to": "/timeline" },
    { "label": "About",    "to": "/about" }
  ]
  ```

  To:

  ```json
  "links": [
    { "label": "Theses",   "to": "/theses" },
    { "label": "Concepts", "to": "/concepts" },
    { "label": "Advisors", "to": "/advisors" },
    { "label": "Timeline", "to": "/timeline" },
    { "label": "About",    "to": "/about" }
  ]
  ```

- [ ] **Step 2: Verify nav in browser**

  Reload any page. Confirm "Advisors" appears in the top nav and the mobile dropdown, and clicking it navigates to `/advisors`.

- [ ] **Step 3: Commit**

  ```bash
  git add public/contents/config.json
  git commit -m "feat: add Advisors to nav links"
  ```

---

## Self-Review

**Spec coverage:**
- `AdvisorProfile` type + `slugify` + `buildAdvisorIndex` → Task 1 ✓
- `ContentIndex.advisors` + `ContentIndex.advisorsBySlug` → Task 1 ✓
- `/advisors` listing with sort → Task 2 ✓
- `/advisors/$slug` with supervised, committee, collaborators → Task 3 ✓
- Universal search includes advisors → Task 4 ✓
- Nav link → Task 5 ✓

**Placeholder scan:** All steps contain complete code. No TBDs. ✓

**Type consistency:**
- `AdvisorProfile.slug` is a `string` — used as `params: { slug: a.slug }` in Tasks 2, 3, 4 ✓
- `data.advisors` (array) used in Tasks 2, 4; `data.advisorsBySlug` (record) used in Task 3 ✓
- `ThesisList` accepts `Entry[]` — `advisor.thesesSupervised` and `advisor.thesesOnCommittee` are both `Entry[]` ✓
- `collaborators` entries have `{ name, slug, count }` — accessed as `c.name`, `c.slug`, `c.count` in Task 3 ✓
