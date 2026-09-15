import { finalStack } from "@/content/offer";
import { SITE } from "@/lib/constants";
import { Reveal } from "@/components/ui/Reveal";

export function FinalStack() {
  const total = finalStack.reduce((sum, item) => sum + item.value, 0);

  return (
    <section className="sale">
      <div className="sale-wrap sale-wrap--narrow">
        <Reveal>
          <h2 className="sale-title">
            Se fosse comprar cada parte <span className="sale-olive">separada</span>
          </h2>
        </Reveal>

        <Reveal>
          <div className="bill">
            {finalStack.map((item) => (
              <p key={item.name}>
                <span>{item.name}</span>
                <strong>R${item.value}</strong>
              </p>
            ))}
            <p className="bill__total">
              <span>Total</span>
              <s>R${total}</s>
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="deny">
            <p>
              Mas você não vai pagar <span className="sale-coral">R${SITE.priceFull}</span>.
            </p>
            <p>Nem R${SITE.priceMid}.</p>
            <p>Nem R${SITE.priceAlt}.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
