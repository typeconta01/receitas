import Image from "next/image";
import { IMAGES } from "@/lib/constants";
import { bodyFlow } from "@/content/offer";
import { CTAButton } from "@/components/ui/CTAButton";
import { Reveal } from "@/components/ui/Reveal";

export function BodyGoals() {
  return (
    <section className="sale">
      <div className="sale-wrap">
        <Reveal>
          <h2 className="sale-title">
            Fique cada vez mais perto
            <br />
            do <span className="sale-coral">corpo que você deseja.</span>
          </h2>
          <p className="sale-sub">
            Seu corpo não muda por causa de uma única refeição.
            <br />
            Ele responde ao que você consegue fazer de forma consistente.
          </p>
        </Reveal>

        <Reveal>
          <Image
            src={IMAGES.mealPrep}
            alt="Rotina alimentar organizada, sem promessa de transformação milagrosa"
            width={900}
            height={680}
            className="sale-photo"
            sizes="(max-width: 800px) 92vw, 720px"
          />
        </Reveal>

        <div className="flow">
          {bodyFlow.map((item, i) => (
            <Reveal key={item} delay={i * 40}>
              <div className="flow__item">
                <p>{item}</p>
                {i < bodyFlow.length - 1 ? <span aria-hidden>↓</span> : null}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="sale-spotlight">
            Não é mágica.
            <br />
            É tornar mais fácil <span className="sale-olive">continuar</span>.
          </p>
          <CTAButton>Quero organizar minha alimentação</CTAButton>
        </Reveal>
      </div>
    </section>
  );
}
