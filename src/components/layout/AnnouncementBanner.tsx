import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { useConfig } from "@/lib/use-config";

const STORAGE_PREFIX = "geothesis:announcement-dismissed:";

// Split a message into text and email segments so emails render as mailto links.
const EMAIL_RE = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
const isEmail = (s: string) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(s);

function renderMessage(message: string) {
  return message.split(EMAIL_RE).map((part, i) =>
    isEmail(part) ? (
      <a
        key={i}
        href={`mailto:${part}`}
        className="font-medium text-[var(--teal)] underline underline-offset-2 hover:no-underline"
      >
        {part}
      </a>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

export function AnnouncementBanner() {
  const config = useConfig();
  const announcement = config?.announcement;
  const version = announcement?.version ?? "default";

  // Start hidden, then reveal after mount once localStorage is checked — avoids
  // a flash of the banner before a prior dismissal is known (and hydration mismatch).
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    if (!announcement?.enabled) return;
    try {
      setDismissed(localStorage.getItem(STORAGE_PREFIX + version) === "1");
    } catch {
      setDismissed(false);
    }
  }, [announcement?.enabled, version]);

  if (!announcement?.enabled || !announcement.message || dismissed) return null;

  const dismiss = () => {
    setDismissed(true);
    try {
      localStorage.setItem(STORAGE_PREFIX + version, "1");
    } catch {
      // localStorage unavailable (private mode) — dismiss for this session only.
    }
  };

  return (
    <div className="border-b rule bg-[color-mix(in_oklab,var(--highlight)_70%,transparent)]">
      <div className="mx-auto flex max-w-6xl items-start gap-3 px-5 py-2.5">
        <p className="flex-1 text-xs leading-relaxed text-muted-foreground">
          {renderMessage(announcement.message)}
        </p>
        {announcement.dismissible !== false && (
          <button
            onClick={dismiss}
            aria-label="Dismiss announcement"
            className="-mr-1 shrink-0 rounded-md p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <X className="size-4" />
          </button>
        )}
      </div>
    </div>
  );
}
