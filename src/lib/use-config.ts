import { useEffect, useState } from "react";

export interface NavLink {
  label: string;
  to: string;
}

export interface SiteConfig {
  brand: {
    name: string;
    subtitle: string;
    tagline: string;
    institution: string;
    siteTitle: string;
    siteDescription: string;
  };
  nav: { links: NavLink[] };
  footer: {
    tagline: string;
    links: NavLink[];
    copyright: string;
    developedBy?: { label: string; url: string };
  };
  theme: {
    fonts: {
      display: string;
      body: string;
      mono: string;
      displayUrl: string;
      bodyUrl: string;
    };
    sizes: { base: string };
    colors: {
      teal: string;
      tealSoft: string;
      [key: string]: string;
    };
  };
  graph: {
    nodeColors: { concept: string; thesis: string; focused: string };
    linkOpacity: number;
    linkWidth: number;
  };
  home: {
    heroHeading: string;
    heroSubtext: string;
    featuredSort: "recent" | "linked";
    featuredCount: number;
  };
  announcement?: {
    enabled: boolean;
    message: string;
    /** Show the X close button. Defaults to true. */
    dismissible?: boolean;
    /** Bump to re-show the banner to users who previously dismissed it. */
    version?: string;
  };
}

let _cached: SiteConfig | null = null;
let _inflight: Promise<SiteConfig> | null = null;
const _listeners = new Set<(config: SiteConfig) => void>();

export function initConfig(config: SiteConfig): void {
  _cached = config;
  for (const listener of _listeners) listener(config);
}

function loadConfigClient(): Promise<SiteConfig> {
  if (_cached) return Promise.resolve(_cached);
  if (_inflight) return _inflight;
  // Static config served from public/contents/config.json. BASE_URL accounts
  // for the GitHub Pages subpath (/gthesis/).
  _inflight = fetch(`${import.meta.env.BASE_URL}contents/config.json`)
    .then((res) => {
      if (!res.ok) throw new Error(`Failed to load config: ${res.status}`);
      return res.json() as Promise<SiteConfig>;
    })
    .then((config) => {
      initConfig(config);
      return config;
    });
  return _inflight;
}

export function useConfig(): SiteConfig | null {
  const [config, setConfig] = useState<SiteConfig | null>(_cached);
  useEffect(() => {
    if (_cached) {
      setConfig(_cached);
      return;
    }
    const listener = (c: SiteConfig) => setConfig(c);
    _listeners.add(listener);
    void loadConfigClient();
    return () => {
      _listeners.delete(listener);
    };
  }, []);
  return config;
}
