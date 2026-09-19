"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { testimonials } from "@/content/offer";

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const total = testimonials.length;

  const goTo = useCallback((next: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = (next + total) % total;
    track.scrollTo({ left: clamped * track.clientWidth, behavior: "smooth" });
  }, [total]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onScroll = () => {
      const i = Math.round(track.scrollLeft / Math.max(track.clientWidth, 1));
      setIndex(Math.min(Math.max(i, 0), total - 1));
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, [total]);

  return (
    <section className="sale">
      <div className="sale-wrap">
        <h2 className="sale-title">
          Veja o que está mudando na rotina de quem{" "}
          <span className="sale-olive">começou a se organizar.</span>
        </h2>

        <div className="wa-carousel">
          <div className="wa-track" ref={trackRef}>
            {testimonials.map((item) => (
              <figure key={item.name} className="wa-slide">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={852}
                  height={1600}
                  sizes="(max-width: 480px) 92vw, 400px"
                  quality={70}
                />
                <figcaption className="sr-only">{item.name}</figcaption>
              </figure>
            ))}
          </div>

          <div className="wa-nav">
            <button
              type="button"
              className="wa-arrow"
              aria-label="Depoimento anterior"
              onClick={() => goTo(index - 1)}
            >
              ‹
            </button>
            <div className="wa-dots" role="tablist" aria-label="Depoimentos">
              {testimonials.map((item, i) => (
                <button
                  key={item.name}
                  type="button"
                  role="tab"
                  aria-selected={index === i}
                  aria-label={`Ver depoimento de ${item.name}`}
                  className={index === i ? "is-active" : ""}
                  onClick={() => goTo(i)}
                />
              ))}
            </div>
            <button
              type="button"
              className="wa-arrow"
              aria-label="Próximo depoimento"
              onClick={() => goTo(index + 1)}
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
