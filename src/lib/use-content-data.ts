import { useEffect, useState } from "react";
import { buildIndex, type ContentIndex, type Entry } from "./content";
import { loadContentIndex } from "./content-loader.server";

let cached: ContentIndex | null = null;
let inflight: Promise<ContentIndex> | null = null;

async function load(): Promise<ContentIndex> {
  if (cached) return cached;
  if (inflight) return inflight;
  inflight = loadContentIndex().then((raw: Record<string, Entry>) => {
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
