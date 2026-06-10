import { useEffect, useState } from "react";
import { buildIndex, type ContentIndex, type Entry } from "./content";

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
