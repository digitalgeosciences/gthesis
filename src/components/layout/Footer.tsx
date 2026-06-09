import { Link } from "@tanstack/react-router";
import { useConfig } from "@/lib/use-config";

export function Footer() {
  const config = useConfig();

  return (
    <footer className="mt-24 border-t rule">
      <div className="mx-auto max-w-6xl px-5 pt-4 pb-8 text-sm text-muted-foreground">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="font-display text-base text-foreground">{config?.brand.name}</span>
            <span className="mx-2">·</span>
            {config?.footer.tagline}
          </div>
          <div className="flex gap-5">
            {config?.footer.links.map((link) => (
              <Link key={link.to} to={link.to as any} className="hover:text-foreground">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <p className="mt-4 text-xs">
          {config?.footer.copyright}{" "}
          {config?.footer.developedBy ? (
            <a
              href={config.footer.developedBy.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground"
            >
              {config.footer.developedBy.label}
            </a>
          ) : null}
        </p>
        <p className="mt-2 text-xs">
          <span className="font-medium text-foreground">Disclaimer:</span> AI-assisted content may contain errors.{" "}
          <a href="mailto:info@digitalgeosciences.com" className="hover:text-foreground">
            Report inaccuracies to info@digitalgeosciences.com
          </a>
        </p>
      </div>
    </footer>
  );
}
