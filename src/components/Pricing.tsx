import Image from "next/image";
import { pricePerks } from "@/content/offer";
import { IMAGES, SITE } from "@/lib/constants";
import { CTAButton } from "@/components/ui/CTAButton";
import { Reveal } from "@/components/ui/Reveal";

export function Pricing() {
  return (
    <section className="sale sale--paper" id="oferta">
      <div className="sale-wrap sale-wrap--narrow">
        <Reveal>
          <article className="offer">
            <h2 className="sale-title">
              Comece hoje a organizar sua alimentação.
            </h2>

            <Image
              src={IMAGES.hero}
              alt="Mockup completo do Semana Resolvida"
              width={720}
              height={780}
              className="offer__mock"
              sizes="(max-width: 700px) 88vw, 420px"
              quality={70}
              fetchPriority="low"
            />

            <p className="offer__from">
              De <s>R${SITE.priceFull}</s>
            </p>
            <p className="offer__now">Hoje por</p>
            <p className="offer__price">
              <span>R$</span>
              {SITE.price}
            </p>
            <p className="offer__once">Pagamento único</p>

            <CTAButton>Sim! Quero organizar minha alimentação</CTAButton>

            <ul className="offer__perks">
              {pricePerks.map((item) => (
                <li key={item.text}>
                  {item.icon} {item.text}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
