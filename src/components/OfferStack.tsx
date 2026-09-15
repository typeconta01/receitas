import Image from "next/image";
import { stackItems } from "@/content/offer";
import { Reveal } from "@/components/ui/Reveal";

export function OfferStack() {
  return (
    <section className="sale sale--paper">
      <div className="sale-wrap sale-wrap--wide">
        <Reveal>
          <h2 className="sale-title">
            Tudo isso para tornar sua alimentação{" "}
            <span className="sale-olive">mais simples.</span>
          </h2>
        </Reveal>

        <div className="value-grid">
          {stackItems.map((item, i) => (
            <Reveal key={item.title} delay={i * 50}>
              <article className="value-card">
                <div className={`value-card__media value-card__media--${item.kind}`}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={520}
                    sizes="(max-width: 800px) 70vw, 220px"
                  />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <strong>R${item.value}</strong>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
