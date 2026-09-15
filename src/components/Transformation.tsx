import { afterItems, beforeItems } from "@/content/offer";
import { Reveal } from "@/components/ui/Reveal";

export function Transformation() {
  return (
    <section className="sale sale--paper">
      <div className="sale-wrap">
        <Reveal>
          <h2 className="sale-title">Imagine trocar isso...</h2>
        </Reveal>

        <div className="compare">
          <Reveal>
            <article className="compare__col compare__col--before">
              <p className="compare__label">Antes</p>
              <ul>
                {beforeItems.map((item) => (
                  <li key={item}>❌ {item}</li>
                ))}
              </ul>
            </article>
          </Reveal>

          <p className="compare__mid" aria-hidden>
            Por isso ↓
          </p>

          <Reveal delay={80}>
            <article className="compare__col compare__col--after">
              <p className="compare__label">Depois</p>
              <ul>
                {afterItems.map((item) => (
                  <li key={item}>✓ {item}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>

        <Reveal>
          <p className="sale-spotlight">
            Não é sobre ter uma rotina perfeita.
            <br />
            É sobre ter uma rotina que você{" "}
            <span className="sale-coral">consegue manter</span>.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
