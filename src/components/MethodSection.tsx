import Image from "next/image";
import { methodSteps } from "@/content/offer";
import { CTAButton } from "@/components/ui/CTAButton";
import { Reveal } from "@/components/ui/Reveal";

export function MethodSection() {
  return (
    <section className="sale" id="metodo">
      <div className="sale-wrap sale-wrap--wide">
        <Reveal>
          <h2 className="sale-title">
            Conheça o Método
            <br />
            <span className="sale-olive">Semana Resolvida™</span>
          </h2>
          <p className="sale-sub">
            Uma forma simples de organizar suas refeições antes que a correria
            da semana decida por você.
          </p>
        </Reveal>

        <div className="method-cards">
          {methodSteps.map((step, i) => (
            <Reveal key={step.title} delay={i * 70}>
              <article className="method-visual">
                <Image
                  src={step.image}
                  alt={step.title}
                  width={640}
                  height={420}
                  className="method-visual__img"
                  sizes="(max-width: 800px) 92vw, 300px"
                />
                <span className="method-visual__num">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="method-line">
            <span>Planeje</span>
            <i>→</i>
            <span>Prepare</span>
            <i>→</i>
            <span>Aproveite</span>
          </p>
          <CTAButton>Quero organizar minha semana</CTAButton>
        </Reveal>
      </div>
    </section>
  );
}
