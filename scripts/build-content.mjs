// Build-time content generator.
//
// GitHub Pages is static-only, so the runtime server functions that used to
// read public/contents at request time can't run there. This script does the
// same parsing at BUILD time and emits a single static JSON file
// (public/content-index.json) that the client fetches. Keep the output shape
// identical to what loadContentIndex() returned — buildIndex() consumes it
// unchanged on the client.

import { readdir, readFile, writeFile, mkdir, rm } from "node:fs/promises";
import { resolve, join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const base = resolve(root, "public/contents");
const outPath = resolve(root, "public/content-index.json");
const bodyDir = resolve(root, "public/entry");

async function loadNameMap(baseDir) {
  const map = new Map();
  try {
    const raw = await readFile(join(baseDir, "supervisors.csv"), "utf8");
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

function normalizeName(name, map) {
  const trimmed = name.trim();
  return map.get(trimmed.toLowerCase()) ?? trimmed;
}

async function parseIndexSummaries(indexPath) {
  let raw;
  try {
    raw = await readFile(indexPath, "utf8");
  } catch {
    return {};
  }
  const summaries = {};
  const pattern = /^- \[\[([^\]]+)\]\] — (.+)$/gm;
  let m;
  while ((m = pattern.exec(raw)) !== null) {
    summaries[m[1]] = m[2].trim();
  }
  return summaries;
}

async function parseDir(dir, entryType, prefix, category) {
  let files;
  try {
    files = await readdir(dir);
  } catch {
    return {};
  }
  const entries = {};
  await Promise.all(
    files
      .filter((f) => f.endsWith(".md"))
      .map(async (file) => {
        const slug = `${prefix}/${file.replace(/\.md$/, "")}`;
        let fm;
        let content;
        try {
          const raw = await readFile(join(dir, file), "utf8");
          ({ data: fm, content } = matter(raw));
        } catch (err) {
          console.error(`[GeoThesis] Skipping ${join(dir, file)}: ${err.message.split("\n")[0]}`);
          return;
        }
        const entry = {
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

function buildLinks(all) {
  const fileToSlug = {};
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
    let m;
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

async function main() {
  const [summaries, nameMap] = await Promise.all([
    parseIndexSummaries(join(base, "index.md")),
    loadNameMap(base),
  ]);
  const topLevel = await readdir(base, { withFileTypes: true });
  const conceptDirs = topLevel
    .filter((e) => e.isDirectory() && e.name !== "sources")
    .map((e) => e.name);

  const [sourcesEntries, ...conceptChunks] = await Promise.all([
    parseDir(join(base, "sources"), "source", "sources"),
    ...conceptDirs.map((dir) => parseDir(join(base, dir), "concept", "concepts", dir)),
  ]);

  const all = Object.assign({}, sourcesEntries, ...conceptChunks);

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

  // Split the heavy markdown bodies out of the index. The index keeps only
  // metadata (title, year, links, summary, …) so list/graph/search pages load
  // a ~0.5MB file instead of ~4.5MB. Each entry's body goes to a per-slug file
  // that the detail routes fetch on demand.
  await rm(bodyDir, { recursive: true, force: true });
  await Promise.all([
    mkdir(join(bodyDir, "sources"), { recursive: true }),
    mkdir(join(bodyDir, "concepts"), { recursive: true }),
  ]);
  const index = {};
  await Promise.all(
    Object.entries(all).map(async ([slug, entry]) => {
      const { content, ...meta } = entry;
      index[slug] = meta;
      if (content) {
        await writeFile(join(bodyDir, `${slug}.json`), JSON.stringify({ content }), "utf8");
      }
    }),
  );

  await writeFile(outPath, JSON.stringify(index), "utf8");
  const counts = Object.values(all).reduce(
    (acc, e) => ((acc[e.type] = (acc[e.type] ?? 0) + 1), acc),
    {},
  );
  console.log(
    `[GeoThesis] Wrote ${outPath} — ${counts.source ?? 0} sources, ${counts.concept ?? 0} concepts`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
