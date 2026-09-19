import Image from "next/image";
import { IMAGES } from "@/lib/constants";
import { appCallouts } from "@/content/offer";
import { CTAButton } from "@/components/ui/CTAButton";
import { Reveal } from "@/components/ui/Reveal";

export function AppSection() {
  return (
    <section className="sale" id="app">
      <div className="sale-wrap sale-wrap--wide">
        <Reveal>
          <h2 className="sale-title">
            Tudo que você precisa para colocar o método em prática,{" "}
            <span className="sale-olive">na palma da sua mão.</span>
          </h2>
          <p className="sale-sub">
            Receitas, organização e planejamento reunidos em um único lugar.
          </p>
        </Reveal>

        <div className="app-show">
          <Reveal>
            <Image
              src={IMAGES.appHome}
              alt="Aplicativo Semana Resolvida no celular"
              width={520}
              height={980}
              className="app-show__main"
              sizes="(max-width: 700px) 70vw, 280px"
              quality={70}
            />
          </Reveal>
        </div>

        <div className="callouts">
          {appCallouts.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <Reveal>
          <CTAButton href="#recursos">Quero organizar minha alimentação</CTAButton>
        </Reveal>
      </div>
    </section>
  );
}
