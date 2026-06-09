import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { useContentData } from "@/lib/use-content-data";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { BookOpen, Tag, User } from "lucide-react";

export function CommandSearch({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const data = useContentData();
  const navigate = useNavigate();
  const [q, setQ] = useState("");

  const results = useMemo(() => {
    if (!data) return { theses: [], concepts: [], advisors: [] };
    const term = q.trim().toLowerCase();
    const all = Object.values(data.bySlug);
    const match = (s?: string) => (s ?? "").toLowerCase().includes(term);
    const filt = term
      ? all.filter((e) => match(e.title) || match(e.author) || match(e.summary))
      : all.slice(0, 12);
    return {
      theses: filt.filter((e) => e.type === "source").slice(0, 8),
      concepts: filt.filter((e) => e.type === "concept").slice(0, 6),
      advisors: term
        ? data.advisors.filter((a) => a.name.toLowerCase().includes(term)).slice(0, 4)
        : [],
    };
  }, [q, data]);

  useEffect(() => {
    if (!open) setQ("");
  }, [open]);

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput
        value={q}
        onValueChange={setQ}
        placeholder="Search theses, concepts, advisors…"
      />
      <CommandList>
        <CommandEmpty>No results.</CommandEmpty>
        {results.advisors.length > 0 && (
          <CommandGroup heading="Advisors">
            {results.advisors.map((a) => (
              <CommandItem
                key={a.slug}
                value={a.slug + " " + a.name}
                onSelect={() => {
                  onOpenChange(false);
                  navigate({ to: "/advisors/$slug", params: { slug: a.slug } });
                }}
              >
                <User className="text-[var(--teal)]" />
                <div className="flex flex-col">
                  <span className="truncate">{a.name}</span>
                  <span className="text-xs text-muted-foreground">
                    {a.thesesSupervised.length + a.thesesOnCommittee.length} theses
                  </span>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        )}
        {results.concepts.length > 0 && (
          <CommandGroup heading="Concepts">
            {results.concepts.map((c) => (
              <CommandItem
                key={c.slug}
                value={c.slug + " " + c.title}
                onSelect={() => {
                  onOpenChange(false);
                  navigate({
                    to: "/concepts/$slug",
                    params: { slug: c.slug.replace("concepts/", "") },
                  });
                }}
              >
                <Tag className="text-[var(--teal)]" /> {c.title}
              </CommandItem>
            ))}
          </CommandGroup>
        )}
        {results.theses.length > 0 && (
          <CommandGroup heading="Theses">
            {results.theses.map((t) => (
              <CommandItem
                key={t.slug}
                value={t.slug + " " + t.title + " " + (t.author ?? "")}
                onSelect={() => {
                  onOpenChange(false);
                  navigate({
                    to: "/theses/$slug",
                    params: { slug: t.slug.replace("sources/", "") },
                  });
                }}
              >
                <BookOpen className="text-[var(--teal)]" />
                <div className="flex flex-col">
                  <span className="truncate">{t.title}</span>
                  <span className="text-xs text-muted-foreground">
                    {t.author} · {t.year} · {t.department}
                  </span>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        )}
      </CommandList>
    </CommandDialog>
  );
}
