import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Moon, Sun, Search as SearchIcon, Network, Layers, X } from "lucide-react";
import { useTheme } from "@/lib/theme";
import { useConfig } from "@/lib/use-config";
import { DepartmentSelect } from "./DepartmentSelect";

export function TopNav({ onOpenSearch }: { onOpenSearch: () => void }) {
  const { theme, toggle } = useTheme();
  const config = useConfig();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = config?.nav.links ?? [];

  return (
    <>
      <header className="sticky top-0 z-40 border-b rule bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70">
        <div className="mx-auto flex h-14 max-w-6xl items-center gap-6 px-5">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-display text-xl tracking-tight text-foreground">{config?.brand.name}</span>
            <span className="hidden text-xs text-muted-foreground sm:inline">{config?.brand.subtitle}</span>
          </Link>
          <nav className="ml-4 hidden items-center gap-5 text-sm md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to as any}
                className="text-muted-foreground hover:text-foreground"
                activeProps={{ className: "text-foreground font-medium" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <DepartmentSelect className="hidden sm:block" />
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 rounded-md border rule bg-card px-3 py-1.5 text-xs text-muted-foreground hover:border-[var(--teal-soft)] hover:text-foreground"
            >
              <SearchIcon className="size-3.5" />
              <span className="hidden sm:inline">Search theses, concepts…</span>
              <span className="kbd ml-2 hidden sm:inline">/</span>
            </button>
            <Link
              to="/graph"
              className="rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
              aria-label="Knowledge graph"
            >
              <Network className="size-4" />
            </Link>
            {/* Mobile menu toggle — hidden on md+ */}
            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground md:hidden"
              aria-label="Navigation menu"
            >
              {mobileOpen ? <X className="size-4" /> : <Layers className="size-4" />}
            </button>
            <button
              onClick={toggle}
              className="rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <nav className="border-t rule bg-background px-5 py-3 md:hidden">
            <DepartmentSelect className="mb-3 w-full" />
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to as any}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                    activeProps={{ className: "block rounded-md px-3 py-2 text-sm bg-muted text-foreground font-medium" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>
    </>
  );
}
