import { useEffect, useState, lazy, Suspense, type ReactNode } from "react";
import { useNavigate } from "@tanstack/react-router";
import { TopNav } from "./TopNav";
import { AnnouncementBanner } from "./AnnouncementBanner";
import { Footer } from "./Footer";
import { useContentData } from "@/lib/use-content-data";

// CommandSearch pulls in cmdk + the Radix dialog primitives (~tens of KB). It
// only ever renders behind the "/" or ⌘K palette, so keep it out of the initial
// bundle and load it the first time the palette is opened.
const CommandSearch = lazy(() =>
  import("@/components/search/CommandSearch").then((m) => ({ default: m.CommandSearch })),
);

export function AppShell({ children }: { children: ReactNode }) {
  const [searchOpen, setSearchOpen] = useState(false);
  // Once the palette has been opened we keep the component mounted so its
  // close animation and internal state survive subsequent toggles.
  const [searchLoaded, setSearchLoaded] = useState(false);
  const data = useContentData();
  const navigate = useNavigate();

  useEffect(() => {
    if (searchOpen) setSearchLoaded(true);
  }, [searchOpen]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const target = e.target as HTMLElement;
      if (target?.tagName === "INPUT" || target?.tagName === "TEXTAREA" || target?.isContentEditable) return;
      if (e.key === "/" && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        setSearchOpen(true);
      } else if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setSearchOpen(true);
      } else if (e.key === "g") {
        navigate({ to: "/graph" });
      } else if (e.key === "r" && data) {
        const t = data.theses[Math.floor(Math.random() * data.theses.length)];
        navigate({ to: "/theses/$slug", params: { slug: t.slug.replace("sources/", "") } });
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [data, navigate]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopNav onOpenSearch={() => setSearchOpen(true)} />
      <AnnouncementBanner />
      <main>{children}</main>
      <Footer />
      {searchLoaded && (
        <Suspense fallback={null}>
          <CommandSearch open={searchOpen} onOpenChange={setSearchOpen} />
        </Suspense>
      )}
    </div>
  );
}
