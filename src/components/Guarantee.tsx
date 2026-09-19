import Image from "next/image";
import { IMAGES } from "@/lib/constants";
import { CTAButton } from "@/components/ui/CTAButton";
import { Reveal } from "@/components/ui/Reveal";

export function Guarantee() {
  return (
    <section className="sale sale--paper">
      <div className="sale-wrap sale-wrap--narrow">
        <Reveal>
          <Image
            src={IMAGES.seal}
            alt="Selo de 7 dias de garantia"
            width={180}
            height={180}
            className="seal"
            sizes="180px"
            quality={70}
          />
          <h2 className="sale-title">
            Você tem <span className="sale-olive">7 dias</span> para conhecer o
            Semana Resolvida.
          </h2>
          <p className="sale-sub">
            Entre, explore o aplicativo, conheça as receitas e veja se o método
            faz sentido para sua rotina.
          </p>
          <p className="sale-sub">
            Se dentro do prazo você perceber que não é para você, poderá
            solicitar o reembolso conforme as condições da garantia.
          </p>
          <CTAButton>Quero experimentar por 7 dias</CTAButton>
        </Reveal>
      </div>
    </section>
  );
}
