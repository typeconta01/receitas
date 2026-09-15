import { SITE } from "@/lib/constants";
import { Reveal } from "@/components/ui/Reveal";

export function PriceJustification() {
  return (
    <section className="sale">
      <div className="sale-wrap sale-wrap--narrow">
        <Reveal>
          <h2 className="sale-title">Pense comigo por alguns segundos...</h2>
          <div className="ask-list">
            <p>Quanto você já gastou pedindo comida porque não sabia o que preparar?</p>
            <p>Quantos ingredientes comprou e não usou?</p>
            <p>Quantas vezes começou e desistiu porque a rotina ficou difícil demais?</p>
          </div>
          <p className="sale-spotlight">
            Agora compare isso com{" "}
            <span className="sale-coral">R${SITE.price}</span> para ter uma
            ferramenta que você consulta sempre que precisar.
          </p>
          <p className="sale-sub">
            Não estamos prometendo que um aplicativo muda seu corpo sozinho.
            Estamos tornando mais simples organizar a sua alimentação.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
