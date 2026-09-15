import { whoIsFor } from "@/content/offer";
import { Reveal } from "@/components/ui/Reveal";

export function WhoIsFor() {
  return (
    <section className="sale sale--paper">
      <div className="sale-wrap">
        <Reveal>
          <h2 className="sale-title">
            Talvez o Semana Resolvida™ tenha sido{" "}
            <span className="sale-olive">feito para você.</span>
          </h2>
        </Reveal>

        <div className="id-grid">
          {whoIsFor.map((item, i) => (
            <Reveal key={item} delay={i * 40}>
              <article className="id-card">{item}</article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="sale-spotlight">
            Se você se identificou com 2 ou mais situações...
            <br />
            provavelmente não precisa de mais força de vontade.
            <br />
            Precisa de uma rotina <span className="sale-coral">mais fácil de seguir</span>.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
