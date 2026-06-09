import type { Entry } from "./content";
import { toTitleCase } from "./utils";

function extractLastName(name: string): string {
  if (!name) return "";
  if (name.includes(",")) return name.split(",")[0].trim();
  const parts = name.trim().split(/\s+/);
  return parts[parts.length - 1];
}

export function resolveWikiLinks(
  markdown: string,
  bySlug: Record<string, Entry>,
): string {
  return markdown.replace(/\[\[([^\]]+)\]\]/g, (_, inner: string) => {
    const [slug, ...displayParts] = inner.split("|");
    const display = displayParts.join("|");
    const sourceEntry = bySlug[`sources/${slug}`];
    if (sourceEntry) {
      if (display) return `[${display}](/theses/${slug})`;
      const lastName = sourceEntry.author ? extractLastName(sourceEntry.author) : null;
      const year = sourceEntry.year ? `(${sourceEntry.year})` : null;
      const label = lastName
        ? `${lastName}${year ? ` ${year}` : ""}`
        : toTitleCase(sourceEntry.title);
      return `[${label}](/theses/${slug})`;
    }
    const conceptEntry = bySlug[`concepts/${slug}`];
    if (conceptEntry) {
      return `[${display || conceptEntry.title}](/concepts/${slug})`;
    }
    return display || slug;
  });
}
