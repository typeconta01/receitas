"use client";

import { useState } from "react";
import { faqs } from "@/content/offer";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="sale" id="faq">
      <div className="sale-wrap sale-wrap--narrow">
        <h2 className="sale-title">Ainda ficou alguma dúvida?</h2>

        <div className="faq">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <article key={item.q} className={isOpen ? "is-open" : ""}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span>{item.q}</span>
                  <i aria-hidden>{isOpen ? "−" : "+"}</i>
                </button>
                <div hidden={!isOpen}>
                  <p>{item.a}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
