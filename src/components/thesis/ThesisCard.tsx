import { Link } from "@tanstack/react-router";
import { User } from "lucide-react";
import type { Entry } from "@/lib/content";
import { toTitleCase } from "@/lib/utils";

export function ThesisCard({ t }: { t: Entry }) {
  const sub = t.summary?.replace(/^#+.*$/gm, "").replace(/\s+/g, " ").trim().slice(0, 180);
  const slug = t.slug.replace("sources/", "");
  return (
    <Link to="/theses/$slug" params={{ slug }} className="thesis-card block">
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="font-display text-lg leading-snug text-foreground">{toTitleCase(t.title)}</h3>
        <span className="font-mono text-xs text-muted-foreground">{t.year}</span>
      </div>
      <div className="mt-1 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
        <User className="size-3 shrink-0" />
        {t.author} · {t.degree} · {t.department}
      </div>
      {sub && <p className="mt-3 line-clamp-2 text-sm text-muted-foreground">{sub}…</p>}
      <div className="mt-3 flex flex-wrap gap-1.5">
        {t.links.slice(0, 4).map((l) => (
          <span key={l} className="chip" style={{ pointerEvents: "none" }}>
            {l.replace("concepts/", "").replace(/-/g, " ")}
          </span>
        ))}
        {t.links.length > 4 && (
          <span className="text-xs text-muted-foreground">+{t.links.length - 4}</span>
        )}
      </div>
    </Link>
  );
}
