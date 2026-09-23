import {
  CHECKOUT_URL,
  GA_MEASUREMENT_ID,
  getMetaPixelId,
} from "@/lib/claude-config";
import type { ClaudeLang } from "@/lib/claude-i18n";

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "fbclid",
  "gclid",
] as const;

type TrackEvent = "PageView" | "ViewContent" | "InitiateCheckout";

type TrackingWindow = Window & {
  fbq?: (...args: unknown[]) => void;
  gtag?: (...args: unknown[]) => void;
};

export function resolveCheckoutUrl(base: string = CHECKOUT_URL): string {
  const fallback = !base || base === "#" ? "#oferta" : base;

  if (typeof window === "undefined") return fallback;
  if (fallback.startsWith("#")) return fallback;

  try {
    const url = new URL(fallback, window.location.origin);
    const params = new URLSearchParams(window.location.search);
    for (const key of UTM_KEYS) {
      const value = params.get(key);
      if (value) url.searchParams.set(key, value);
    }
    return url.toString();
  } catch {
    return fallback;
  }
}

export function track(event: TrackEvent) {
  if (typeof window === "undefined") return;

  const w = window as TrackingWindow;
  w.fbq?.("track", event);

  if (!w.gtag) return;
  if (event === "PageView") w.gtag("event", "page_view");
  if (event === "ViewContent") w.gtag("event", "view_item");
  if (event === "InitiateCheckout") w.gtag("event", "begin_checkout");
}

export function trackingReady(lang: ClaudeLang = "pt") {
  return {
    meta: Boolean(getMetaPixelId(lang)),
    ga: Boolean(GA_MEASUREMENT_ID),
  };
}
