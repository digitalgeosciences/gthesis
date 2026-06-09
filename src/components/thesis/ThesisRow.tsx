import { Link } from "@tanstack/react-router";
import type { Entry } from "@/lib/content";

/** A compact list row linking to a thesis detail page. Used in advisor profiles. */
export function ThesisRow({ t }: { t: Entry }) {
  return (
    <Link
      to="/theses/$slug"
      params={{ slug: t.slug.replace("sources/", "") }}
      className="group block -mx-2 rounded px-2 py-4 hover:bg-muted/30"
    >
      <div className="flex items-baseline justify-between gap-4">
        <span className="text-sm font-medium text-foreground group-hover:text-[var(--teal)]">
          {t.title}
        </span>
        <span className="shrink-0 font-mono text-xs text-muted-foreground">{t.year}</span>
      </div>
      <div className="mt-0.5 text-xs text-muted-foreground">
        {t.author}
        {t.degree ? ` · ${t.degree}` : ""}
        {t.department ? ` · ${t.department}` : ""}
      </div>
    </Link>
  );
}
