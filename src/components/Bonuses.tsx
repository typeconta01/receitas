import Image from "next/image";
import { bonuses } from "@/content/offer";
import { Reveal } from "@/components/ui/Reveal";

export function Bonuses() {
  return (
    <section className="sale sale--olive">
      <div className="sale-wrap sale-wrap--wide">
        <Reveal>
          <h2 className="sale-title">
            E entrando hoje, você ainda recebe{" "}
            <span className="sale-coral">3 bônus.</span>
          </h2>
        </Reveal>

        <div className="bonus-row">
          {bonuses.map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <article className="bonus">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={640}
                  height={400}
                  sizes="(max-width: 800px) 92vw, 300px"
                  quality={70}
                />
                <p className="bonus__tag">Bônus #{item.number}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <div className="bonus__price">
                  <s>R${item.value}</s>
                  <strong>Grátis</strong>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
