import { decisionLoop } from "@/content/offer";
import { Reveal } from "@/components/ui/Reveal";

export function DecisionLoop() {
  return (
    <section className="sale sale--paper">
      <div className="sale-wrap">
        <Reveal>
          <h2 className="sale-title">
            O problema não é apenas
            <br />
            <span className="sale-olive">o que você come...</span>
            <br />
            é precisar decidir tudo
            <br />
            <span className="sale-coral">todos os dias.</span>
          </h2>
        </Reveal>

        <div className="cycle">
          {decisionLoop.map((item, i) => (
            <Reveal key={item} delay={i * 50}>
              <div className="cycle__item">
                <p>{item}</p>
                {i < decisionLoop.length - 1 ? (
                  <span className="cycle__arrow" aria-hidden>
                    ↓
                  </span>
                ) : (
                  <span className="cycle__back" aria-hidden>
                    ↺ de volta ao início
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="sale-lead">
            E algumas horas depois... tudo começa novamente.
          </p>
          <p className="sale-spotlight">
            Foi para quebrar esse ciclo que criamos o{" "}
            <strong>Método Semana Resolvida™</strong>.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
