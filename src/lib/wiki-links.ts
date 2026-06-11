import type { Entry } from "./content";
import { toTitleCase } from "./utils";

function extractLastName(name: string): string {
  if (!name) return "";
  if (name.includes(",")) return name.split(",")[0].trim();
  const parts = name.trim().split(/\s+/);
  return parts[parts.length - 1];
}

// BASE_URL accounts for the GitHub Pages subpath (e.g. "/gthesis/"). Prepend it
// so the plain anchors ReactMarkdown emits resolve to the deployed base, not root.
const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

export function resolveWikiLinks(
  markdown: string,
  bySlug: Record<string, Entry>,
): string {
  return markdown.replace(/\[\[([^\]]+)\]\]/g, (_, inner: string) => {
    const [slug, ...displayParts] = inner.split("|");
    const display = displayParts.join("|");
    const sourceEntry = bySlug[`sources/${slug}`];
    if (sourceEntry) {
      if (display) return `[${display}](${BASE}/theses/${slug})`;
      const lastName = sourceEntry.author ? extractLastName(sourceEntry.author) : null;
      const year = sourceEntry.year ? `(${sourceEntry.year})` : null;
      const label = lastName
        ? `${lastName}${year ? ` ${year}` : ""}`
        : toTitleCase(sourceEntry.title);
      return `[${label}](${BASE}/theses/${slug})`;
    }
    const conceptEntry = bySlug[`concepts/${slug}`];
    if (conceptEntry) {
      return `[${display || conceptEntry.title}](${BASE}/concepts/${slug})`;
    }
    return display || slug;
  });
}
