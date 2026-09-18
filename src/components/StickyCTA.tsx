"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { CHECKOUT_URL } from "@/lib/constants";

export function StickyCTA() {
  const [mounted, setMounted] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [offerInView, setOfferInView] = useState(false);

  useEffect(() => {
    setMounted(true);

    const hero = document.querySelector(".hero");
    const offer = document.getElementById("oferta");

    const heroObserver = hero
      ? new IntersectionObserver(
          ([entry]) => setPastHero(!entry.isIntersecting && entry.boundingClientRect.top < 0),
          { threshold: 0 },
        )
      : null;

    const offerObserver = offer
      ? new IntersectionObserver(([entry]) => setOfferInView(entry.isIntersecting), {
          threshold: 0.15,
        })
      : null;

    if (hero && heroObserver) heroObserver.observe(hero);
    if (offer && offerObserver) offerObserver.observe(offer);

    return () => {
      heroObserver?.disconnect();
      offerObserver?.disconnect();
    };
  }, []);

  if (!mounted) return null;

  const visible = pastHero && !offerInView;

  return createPortal(
    <div className={`sticky-cta ${visible ? "is-visible" : ""}`}>
      <a
        href={CHECKOUT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="sticky-cta__btn"
      >
        Quero começar
      </a>
    </div>,
    document.body,
  );
}
