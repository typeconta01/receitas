"use client";

import { getCheckoutUrl } from "@/lib/claude-config";
import { resolveCheckoutUrl, track } from "@/lib/claude-tracking";
import type { ClaudeLang } from "@/lib/claude-i18n";

type Props = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  lang?: ClaudeLang;
};

export function Button({
  children,
  className = "",
  href,
  lang = "pt",
}: Props) {
  const checkout = href ?? getCheckoutUrl(lang);
  const fallback = resolveCheckoutUrl(checkout);

  return (
    <a
      href={fallback}
      className={`cl-btn ${className}`}
      onClick={(event) => {
        track("InitiateCheckout");
        const next = resolveCheckoutUrl(checkout);
        if (next.startsWith("#")) return;
        event.preventDefault();
        window.location.assign(next);
      }}
    >
      {children}
    </a>
  );
}
