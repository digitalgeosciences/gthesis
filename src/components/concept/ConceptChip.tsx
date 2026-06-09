import { Link } from "@tanstack/react-router";

export function ConceptChip({ slug, label }: { slug: string; label?: string }) {
  const name = (label ?? slug.replace("concepts/", "")).replace(/-/g, " ");
  const param = slug.replace("concepts/", "");
  return (
    <Link to="/concepts/$slug" params={{ slug: param }} className="chip">
      {name}
    </Link>
  );
}
