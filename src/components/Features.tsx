import Image from "next/image";
import { features } from "@/content/offer";
import { Reveal } from "@/components/ui/Reveal";

export function Features() {
  return (
    <section className="sale sale--paper" id="recursos">
      <div className="sale-wrap sale-wrap--wide">
        <Reveal>
          <h2 className="sale-title">
            O que você encontra <span className="sale-olive">no aplicativo</span>
          </h2>
        </Reveal>

        <div className="feat-grid">
          {features.map((item, i) => (
            <Reveal key={item.title} delay={i * 50}>
              <article className="feat-card">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={640}
                  height={400}
                  className="feat-card__img"
                  sizes="(max-width: 800px) 92vw, 300px"
                />
                <div className="feat-card__body">
                  <p className="feat-card__emoji" aria-hidden>
                    {item.emoji}
                  </p>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
