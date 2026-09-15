import Image from "next/image";
import { IMAGES } from "@/lib/constants";
import { painPills } from "@/content/offer";
import { Reveal } from "@/components/ui/Reveal";

export function PainSection() {
  return (
    <section className="sale">
      <div className="sale-wrap">
        <Reveal>
          <h2 className="sale-title">
            <span className="sale-olive">Comer melhor</span> não precisa
            significar viver de{" "}
            <span className="sale-coral">comida sem graça.</span>
          </h2>
        </Reveal>

        <div className="pill-grid">
          {painPills.map((item, i) => (
            <Reveal key={item} delay={i * 40}>
              <p className="pill">{item}</p>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <Image
            src={IMAGES.painFridge}
            alt="Mulher na cozinha, em dúvida sobre o que preparar"
            width={900}
            height={680}
            className="sale-photo"
            sizes="(max-width: 800px) 92vw, 720px"
          />
        </Reveal>

        <Reveal>
          <p className="sale-lead">
            Talvez o problema não seja falta de vontade.
          </p>
          <p className="sale-spotlight">
            Talvez esteja faltando uma forma mais simples de{" "}
            <strong>organizar sua alimentação</strong> dentro da sua rotina.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
