import { createServerFn } from "@tanstack/react-start";
import { readdir, readFile } from "node:fs/promises";
import { resolve, join } from "node:path";
import matter from "gray-matter";
import type { Entry } from "./content";

let serverCache: Record<string, Entry> | null = null;

type RawEntry = Entry & { _sourceFile?: string; _sources?: string[] };

async function loadBlockedIds(base: string): Promise<Set<string>> {
  const blocked = new Set<string>();
  try {
    const raw = await readFile(join(base, "blocked.csv"), "utf8");
    const [, ...lines] = raw.replace(/\r\n/g, "\n").split("\n");
    for (const line of lines) {
      if (!line.trim()) continue;
      const id = line.split(",")[0].trim();
      if (id) blocked.add(id);
    }
  } catch {
    // CSV missing — no entries blocked
  }
  return blocked;
}

async function loadNameMap(base: string): Promise<Map<string, string>> {
  const map = new Map<string, string>();
  try {
    const raw = await readFile(join(base, "supervisors.csv"), "utf8");
    const [, ...lines] = raw.replace(/\r\n/g, "\n").split("\n");
    for (const line of lines) {
      if (!line.trim()) continue;
      // format: First Last,"Variant One; Variant Two; ..."
      const commaIdx = line.indexOf(",");
      if (commaIdx === -1) continue;
      const canonical = line.slice(0, commaIdx).trim();
      if (!canonical) continue;
      map.set(canonical.toLowerCase(), canonical);
      let rest = line.slice(commaIdx + 1).trim();
      if (rest.endsWith(",")) rest = rest.slice(0, -1);
      if (rest.startsWith('"') && rest.endsWith('"')) {
        rest = rest.slice(1, -1);
      }
      for (const variant of rest.split(";")) {
        const v = variant.trim();
        if (v) map.set(v.toLowerCase(), canonical);
      }
    }
  } catch {
    // CSV missing or unreadable — skip normalization
  }
  return map;
}

function normalizeName(name: string, map: Map<string, string>): string {
  const trimmed = name.trim();
  return map.get(trimmed.toLowerCase()) ?? trimmed;
}

async function parseIndexSummaries(indexPath: string): Promise<Record<string, string>> {
  let raw: string;
  try {
    raw = await readFile(indexPath, "utf8");
  } catch {
    return {};
  }
  const summaries: Record<string, string> = {};
  const pattern = /^- \[\[([^\]]+)\]\] — (.+)$/gm;
  let m: RegExpExecArray | null;
  while ((m = pattern.exec(raw)) !== null) {
    summaries[m[1]] = m[2].trim();
  }
  return summaries;
}

async function parseDir(
  dir: string,
  entryType: "source" | "concept",
  prefix: "sources" | "concepts",
  blockedIds: Set<string> = new Set(),
  category?: string,
): Promise<Record<string, RawEntry>> {
  let files: string[];
  try {
    files = await readdir(dir);
  } catch {
    return {};
  }
  const entries: Record<string, RawEntry> = {};
  await Promise.all(
    files
      .filter((f) => f.endsWith(".md"))
      .map(async (file) => {
        const slug = `${prefix}/${file.replace(/\.md$/, "")}`;
        let fm: matter.GrayMatterFile<string>["data"];
        let content: string;
        try {
          const raw = await readFile(join(dir, file), "utf8");
          ({ data: fm, content } = matter(raw));
        } catch (err) {
          // Malformed frontmatter (or unreadable file) — skip this entry so one
          // bad file can't crash the entire content load.
          console.error(`[GeoThesis] Skipping ${join(dir, file)}: ${(err as Error).message.split("\n")[0]}`);
          return;
        }
        if (fm.id && blockedIds.has(String(fm.id))) return;
        const entry: RawEntry = {
          type: entryType,
          slug,
          title: String(fm.title ?? file.replace(/\.md$/, "").replace(/-/g, " ")),
          author: fm.author ? String(fm.author) : undefined,
          year: fm.year ? Number(fm.year) : undefined,
          department: fm.department ? String(fm.department) : undefined,
          degree: fm.degree ? String(fm.degree) : undefined,
          supervisor: fm.supervisor ? String(fm.supervisor) : undefined,
          committee: Array.isArray(fm.committee_members) ? fm.committee_members.map(String) : undefined,
          category: category,
          url: fm.url ? String(fm.url) : undefined,
          summary: undefined,
          content,
          aliases: Array.isArray(fm.aliases) ? fm.aliases.map(String) : undefined,
          links: [],
          backlinks: [],
        };
        if (entryType === "source" && fm.source_file) {
          entry._sourceFile = String(fm.source_file);
        }
        if (entryType === "concept" && Array.isArray(fm.sources)) {
          entry._sources = fm.sources.map(String);
        }
        entries[slug] = entry;
      }),
  );
  return entries;
}

function buildLinks(all: Record<string, RawEntry>): void {
  const fileToSlug: Record<string, string> = {};
  for (const [slug, e] of Object.entries(all)) {
    if (e.type === "source" && e._sourceFile) {
      fileToSlug[e._sourceFile] = slug;
    }
  }
  for (const [conceptSlug, e] of Object.entries(all)) {
    if (e.type === "concept" && e._sources) {
      for (const srcFile of e._sources) {
        const srcSlug = fileToSlug[srcFile];
        if (srcSlug && all[srcSlug]) {
          if (!all[srcSlug].links.includes(conceptSlug)) all[srcSlug].links.push(conceptSlug);
          if (!e.backlinks.includes(srcSlug)) e.backlinks.push(srcSlug);
        }
      }
    }
  }
  // Also link via [[wiki-links]] in thesis markdown content
  const wikiLinkRe = /\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g;
  for (const [thesisSlug, e] of Object.entries(all)) {
    if (e.type !== "source" || !e.content) continue;
    wikiLinkRe.lastIndex = 0;
    let m: RegExpExecArray | null;
    while ((m = wikiLinkRe.exec(e.content)) !== null) {
      const conceptSlug = `concepts/${m[1].trim()}`;
      if (all[conceptSlug]) {
        if (!e.links.includes(conceptSlug)) e.links.push(conceptSlug);
        if (!all[conceptSlug].backlinks.includes(thesisSlug)) all[conceptSlug].backlinks.push(thesisSlug);
      }
    }
  }

  for (const e of Object.values(all)) {
    delete e._sourceFile;
    delete e._sources;
  }
}

export const loadContentIndex = createServerFn({ method: "GET" }).handler(async () => {
  if (serverCache) return serverCache;

  const base = resolve(process.cwd(), "public/contents");
  const [summaries, blockedIds, nameMap] = await Promise.all([
    parseIndexSummaries(join(base, "index.md")),
    loadBlockedIds(base),
    loadNameMap(base),
  ]);
  const topLevel = await readdir(base, { withFileTypes: true });
  const conceptDirs = topLevel
    .filter((e) => e.isDirectory() && e.name !== "sources")
    .map((e) => e.name);

  const [sourcesEntries, ...conceptChunks] = await Promise.all([
    parseDir(join(base, "sources"), "source", "sources", blockedIds),
    ...conceptDirs.map((dir) => parseDir(join(base, dir), "concept", "concepts", new Set(), dir)),
  ]);

  const all: Record<string, RawEntry> = Object.assign({}, sourcesEntries, ...conceptChunks);

  // Normalize supervisor and committee names using supervisors.csv
  for (const entry of Object.values(all)) {
    if (entry.supervisor) entry.supervisor = normalizeName(entry.supervisor, nameMap);
    if (entry.committee) entry.committee = entry.committee.map((m) => normalizeName(m, nameMap));
  }

  for (const [bareSlug, summary] of Object.entries(summaries)) {
    if (all[`sources/${bareSlug}`]) all[`sources/${bareSlug}`].summary = summary;
    if (all[`concepts/${bareSlug}`]) all[`concepts/${bareSlug}`].summary = summary;
  }

  buildLinks(all);

  serverCache = all as Record<string, Entry>;
  return serverCache;
});
