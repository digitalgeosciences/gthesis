import { useState } from "react";
import { X } from "lucide-react";
import { useConfig } from "@/lib/use-config";

// Split a message into text and email segments so emails render as mailto links.
const EMAIL_RE = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
const isEmail = (s: string) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(s);

function renderMessage(message: string, linkColor?: string) {
  return message.split(EMAIL_RE).map((part, i) =>
    isEmail(part) ? (
      <a
        key={i}
        href={`mailto:${part}`}
        className="font-medium text-[var(--teal)] underline underline-offset-2 hover:no-underline"
        style={linkColor ? { color: linkColor } : undefined}
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

  // Dismissal is in-memory only — closing hides it for the current view, and
  // the banner reappears on every page refresh.
  const [dismissed, setDismissed] = useState(false);

  if (!announcement?.enabled || !announcement.message || dismissed) return null;

  const { background, textColor, linkColor } = announcement;

  return (
    <div
      className="border-b rule bg-[color-mix(in_oklab,var(--highlight)_70%,transparent)]"
      style={background ? { background } : undefined}
    >
      <div
        className="mx-auto flex max-w-6xl items-start gap-3 px-5 py-2.5"
        style={textColor ? { color: textColor } : undefined}
      >
        <p className="flex-1 text-xs leading-relaxed text-muted-foreground" style={textColor ? { color: textColor } : undefined}>
          {renderMessage(announcement.message, linkColor)}
        </p>
        {announcement.dismissible !== false && (
          <button
            onClick={() => setDismissed(true)}
            aria-label="Dismiss announcement"
            className="-mr-1 shrink-0 rounded-md p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
            style={textColor ? { color: textColor } : undefined}
          >
            <X className="size-4" />
          </button>
        )}
      </div>
    </div>
  );
}
