import { createContext, useContext } from "react";

export type EntryType = "source" | "concept";

export interface Entry {
  type: EntryType;
  slug: string;
  title: string;
  author?: string;
  year?: number;
  department?: string;
  degree?: string;
  supervisor?: string;
  committee?: string[];
  category?: string;
  url?: string;
  summary?: string;
  content?: string;
  aliases?: string[];
  links: string[];
  backlinks: string[];
}

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
    const all = [...new Map([...supervised, ...committee].map((t) => [t.slug, t])).values()];
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

export interface ContentIndex {
  bySlug: Record<string, Entry>;
  theses: Entry[];
  concepts: Entry[];
  thesesByYear: Record<number, Entry[]>;
  thesesByConcept: Record<string, Entry[]>;
  years: number[];
  advisors: AdvisorProfile[];
  advisorsBySlug: Record<string, AdvisorProfile>;
}

export function buildIndex(raw: Record<string, Entry>): ContentIndex {
  const bySlug = raw;
  const all = Object.values(raw);
  const theses = all.filter((e) => e.type === "source");
  const concepts = all.filter((e) => e.type === "concept");
  const thesesByYear: Record<number, Entry[]> = {};
  const thesesByConcept: Record<string, Entry[]> = {};
  for (const t of theses) {
    if (t.year) (thesesByYear[t.year] ||= []).push(t);
    for (const l of t.links) {
      if (raw[l]?.type === "concept") (thesesByConcept[l] ||= []).push(t);
    }
  }
  const years = Object.keys(thesesByYear).map(Number).sort((a, b) => a - b);
  const advisors = buildAdvisorIndex(theses);
  const advisorsBySlug: Record<string, AdvisorProfile> = {};
  for (const a of advisors) {
    if (advisorsBySlug[a.slug]) {
      console.warn(`[GeoThesis] Advisor slug collision: "${a.slug}" (names: "${advisorsBySlug[a.slug].name}" vs "${a.name}")`);
    }
    advisorsBySlug[a.slug] = a;
  }
  return { bySlug, theses, concepts, thesesByYear, thesesByConcept, years, advisors, advisorsBySlug };
}

/**
 * Returns a ContentIndex narrowed to a single department. Every collection —
 * including `bySlug` — is recomputed from the department's theses, so consumers
 * that iterate `bySlug` (e.g. KnowledgeGraph) respect the filter. Detail pages
 * read the full, unfiltered index via `useContentData`, so they are unaffected.
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

  const bySlug: Record<string, Entry> = {};
  for (const t of theses) bySlug[t.slug] = t;
  for (const c of concepts) bySlug[c.slug] = c;

  return { bySlug, theses, concepts, thesesByYear, thesesByConcept, years, advisors, advisorsBySlug };
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

export function jaccard(a: string[], b: string[]): number {
  const A = new Set(a);
  const B = new Set(b);
  let inter = 0;
  A.forEach((x) => B.has(x) && inter++);
  const uni = A.size + B.size - inter;
  return uni === 0 ? 0 : inter / uni;
}

export function similarTheses(target: Entry, all: Entry[], n = 6): Entry[] {
  const scored = all
    .filter((e) => e.slug !== target.slug && e.type === "source")
    .map((e) => ({ e, s: jaccard(target.links, e.links) }))
    .filter((x) => x.s > 0)
    .sort((a, b) => b.s - a.s)
    .slice(0, n);
  return scored.map((x) => x.e);
}

export interface ConceptDebut {
  slug: string;
  title: string;
  category: string;
  aliases: string[];
  firstYear: number;
  totalMentions: number;
}

/**
 * For each concept, the year it was first mentioned by a thesis and how many
 * theses mention it in total. Concepts whose theses carry no usable year (or
 * that are mentioned by no thesis) are omitted — they can't be placed on a
 * time axis.
 */
export function buildConceptDebuts(data: ContentIndex): ConceptDebut[] {
  const debuts: ConceptDebut[] = [];
  for (const c of data.concepts) {
    const theses = data.thesesByConcept[c.slug] ?? [];
    const years = theses.map((t) => t.year).filter((y): y is number => y != null);
    if (years.length === 0) continue;
    debuts.push({
      slug: c.slug,
      title: c.title,
      category: c.category ?? "",
      aliases: c.aliases ?? [],
      firstYear: Math.min(...years),
      totalMentions: theses.length,
    });
  }
  return debuts;
}

export const ContentContext = createContext<ContentIndex | null>(null);
export function useContent(): ContentIndex {
  const c = useContext(ContentContext);
  if (!c) throw new Error("ContentProvider missing");
  return c;
}
