import { useEffect } from "react";
import { useConfig } from "@/lib/use-config";

function injectFontLink(url: string): void {
  if (!url || typeof document === "undefined") {
    return;
  }

  const linkExists = document.querySelector(`link[href="${url}"]`);
  if (linkExists) {
    return;
  }

  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = url;
  document.head.appendChild(link);
}

export function ConfigStyleInjector() {
  const config = useConfig();

  useEffect(() => {
    if (!config) {
      return;
    }

    // Apply CSS custom properties for fonts
    if (config.theme.fonts.display) {
      document.documentElement.style.setProperty(
        "--font-display",
        config.theme.fonts.display
      );
    }

    if (config.theme.fonts.body) {
      document.documentElement.style.setProperty(
        "--font-body",
        config.theme.fonts.body
      );
    }

    if (config.theme.fonts.mono) {
      document.documentElement.style.setProperty(
        "--font-mono",
        config.theme.fonts.mono
      );
    }

    // Apply CSS custom properties for colors
    if (config.theme.colors.teal) {
      document.documentElement.style.setProperty(
        "--teal",
        config.theme.colors.teal
      );
    }

    if (config.theme.colors.tealSoft) {
      document.documentElement.style.setProperty(
        "--teal-soft",
        config.theme.colors.tealSoft
      );
    }

    // Apply other color properties
    for (const [key, value] of Object.entries(config.theme.colors)) {
      if (key !== "teal" && key !== "tealSoft" && value) {
        document.documentElement.style.setProperty(`--color-${key}`, value);
      }
    }

    // Apply base font size
    if (config.theme.sizes.base) {
      document.documentElement.style.fontSize = config.theme.sizes.base;
    }

    // Inject font stylesheets
    injectFontLink(config.theme.fonts.displayUrl);
    injectFontLink(config.theme.fonts.bodyUrl);

    // Update document title
    if (config.brand.siteTitle) {
      document.title = config.brand.siteTitle;
    }
  }, [config]);

  return null;
}
