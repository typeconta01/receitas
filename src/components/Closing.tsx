import Image from "next/image";
import { closingChecks } from "@/content/offer";
import { IMAGES } from "@/lib/constants";
import { CTAButton } from "@/components/ui/CTAButton";
import { Reveal } from "@/components/ui/Reveal";

export function Closing() {
  return (
    <section className="sale sale--paper">
      <div className="sale-wrap">
        <Reveal>
          <h2 className="sale-title">
            Sua próxima semana pode <span className="sale-olive">começar diferente.</span>
          </h2>
        </Reveal>

        <div className="today-tomorrow">
          <article>
            <p>Hoje</p>
            <strong>“O que eu vou comer?”</strong>
          </article>
          <article>
            <p>Amanhã</p>
            <strong>“Já sei o que vou preparar.”</strong>
          </article>
        </div>

        <Reveal>
          <Image
            src={IMAGES.hero}
            alt="Aplicativo Semana Resolvida e refeições organizadas"
            width={1000}
            height={1080}
            className="sale-photo sale-photo--full"
            sizes="(max-width: 800px) 92vw, 560px"
            quality={70}
            fetchPriority="low"
          />
        </Reveal>

        <Reveal>
          <h3 className="sale-title">
            <span className="sale-olive">Organize sua alimentação,</span>
            <br />
            coma gostoso e fique
            <br />
            cada vez mais perto do
            <br />
            <span className="sale-coral">corpo que você deseja.</span>
          </h3>
          <CTAButton>Quero começar agora</CTAButton>
          <ul className="end-checks">
            {closingChecks.map((item) => (
              <li key={item}>✓ {item}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
