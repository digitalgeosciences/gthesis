import { useEffect, useState, type ReactNode } from "react";
import { useNavigate } from "@tanstack/react-router";
import { TopNav } from "./TopNav";
import { AnnouncementBanner } from "./AnnouncementBanner";
import { Footer } from "./Footer";
import { CommandSearch } from "@/components/search/CommandSearch";
import { useContentData } from "@/lib/use-content-data";

export function AppShell({ children }: { children: ReactNode }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const data = useContentData();
  const navigate = useNavigate();

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
      <CommandSearch open={searchOpen} onOpenChange={setSearchOpen} />
    </div>
  );
}
