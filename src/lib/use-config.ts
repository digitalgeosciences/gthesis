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
}

let _cached: SiteConfig | null = null;

export function initConfig(config: SiteConfig): void {
  _cached = config;
}

export function useConfig(): SiteConfig | null {
  return _cached;
}
