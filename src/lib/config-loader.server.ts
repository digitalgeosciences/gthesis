import { createServerFn } from "@tanstack/react-start";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import type { SiteConfig } from "./use-config";

export const loadConfig = createServerFn({ method: "GET" }).handler(async () => {
  const path = resolve(process.cwd(), "public/contents/config.json");
  const raw = await readFile(path, "utf8");
  return JSON.parse(raw) as SiteConfig;
});
