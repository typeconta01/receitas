"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/claude/ui/Button";
import { getClaudeCopy, type ClaudeLang } from "@/lib/claude-i18n";

export function MobileStickyCTA({ lang = "pt" }: { lang?: ClaudeLang }) {
  const t = getClaudeCopy(lang);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("topo");
    const offer = document.getElementById("oferta");
    if (!hero || !offer) return;

    let pastHero = false;
    let offerInView = false;

    const update = () => setVisible(pastHero && !offerInView);

    const heroObs = new IntersectionObserver(
      ([entry]) => {
        pastHero = !entry.isIntersecting && entry.boundingClientRect.bottom < 0;
        update();
      },
      { threshold: 0 },
    );

    const offerObs = new IntersectionObserver(
      ([entry]) => {
        offerInView = entry.isIntersecting;
        update();
      },
      { threshold: 0.18 },
    );

    heroObs.observe(hero);
    offerObs.observe(offer);
    return () => {
      heroObs.disconnect();
      offerObs.disconnect();
    };
  }, []);

  return (
    <div className={`cl-sticky${visible ? "" : " is-hidden"}`}>
      <Button lang={lang}>{t.sticky}</Button>
    </div>
  );
}
