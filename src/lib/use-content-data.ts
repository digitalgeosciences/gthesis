import { useEffect, useMemo, useState } from "react";
import { buildIndex, filterIndexByDepartment, type ContentIndex, type Entry } from "./content";
import { useDepartment } from "./department";

let cached: ContentIndex | null = null;
let inflight: Promise<ContentIndex> | null = null;

async function load(): Promise<ContentIndex> {
  if (cached) return cached;
  if (inflight) return inflight;
  // Static JSON pre-generated at build time by scripts/build-content.mjs.
  // BASE_URL accounts for the GitHub Pages subpath (/gthesis/).
  inflight = fetch(`${import.meta.env.BASE_URL}content-index.json`)
    .then((res) => {
      if (!res.ok) throw new Error(`Failed to load content index: ${res.status}`);
      return res.json() as Promise<Record<string, Entry>>;
    })
    .then((raw) => {
      cached = buildIndex(raw);
      return cached;
    });
  return inflight;
}

export function useContentData(): ContentIndex | null {
  const [data, setData] = useState<ContentIndex | null>(cached);
  useEffect(() => {
    if (!cached) load().then(setData);
  }, []);
  return data;
}

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

const bodyCache = new Map<string, string>();

// Fetch a single entry's markdown body on demand. Bodies live in per-slug files
// (public/entry/<slug>.json) so the shared index stays metadata-only.
function loadBody(slug: string): Promise<string> {
  const hit = bodyCache.get(slug);
  if (hit != null) return Promise.resolve(hit);
  return fetch(`${import.meta.env.BASE_URL}entry/${slug}.json`)
    .then((res) => (res.ok ? (res.json() as Promise<{ content: string }>) : { content: "" }))
    .then(({ content }) => {
      bodyCache.set(slug, content ?? "");
      return content ?? "";
    })
    .catch(() => "");
}

export function useEntryContent(slug: string | undefined): string | null {
  const [body, setBody] = useState<string | null>(slug ? bodyCache.get(slug) ?? null : "");
  useEffect(() => {
    if (!slug) {
      setBody("");
      return;
    }
    const cachedBody = bodyCache.get(slug);
    if (cachedBody != null) {
      setBody(cachedBody);
      return;
    }
    let alive = true;
    setBody(null);
    loadBody(slug).then((c) => alive && setBody(c));
    return () => {
      alive = false;
    };
  }, [slug]);
  return body;
}
