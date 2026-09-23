"use client";

import { CHECKOUT_URL } from "@/lib/claude-config";
import { resolveCheckoutUrl, track } from "@/lib/claude-tracking";

type Props = {
  children: React.ReactNode;
  className?: string;
  href?: string;
};

export function Button({ children, className = "", href = CHECKOUT_URL }: Props) {
  const fallback = resolveCheckoutUrl(href);

  return (
    <a
      href={fallback}
      className={`cl-btn ${className}`}
      onClick={(event) => {
        track("InitiateCheckout");
        const next = resolveCheckoutUrl(href);
        if (next.startsWith("#")) return;
        event.preventDefault();
        window.location.assign(next);
      }}
    >
      {children}
    </a>
  );
}
