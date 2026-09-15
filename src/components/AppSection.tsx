import Image from "next/image";
import { IMAGES } from "@/lib/constants";
import { appCallouts } from "@/content/offer";
import { CTAButton } from "@/components/ui/CTAButton";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
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
          <Reveal delay={40}>
            <div className="app-show__side">
              <PhoneMockup
                src={IMAGES.appRecipes}
                alt="Tela de receitas do aplicativo"
              />
            </div>
          </Reveal>
          <Reveal>
            <Image
              src={IMAGES.appHome}
              alt="Aplicativo Semana Resolvida no celular"
              width={520}
              height={980}
              className="app-show__main"
              sizes="(max-width: 700px) 70vw, 280px"
            />
          </Reveal>
          <Reveal delay={80}>
            <div className="app-show__side app-show__side--last">
              <PhoneMockup
                src={IMAGES.appMenu}
                alt="Tela de cardápio semanal"
              />
            </div>
          </Reveal>
        </div>

        <div className="callouts">
          {appCallouts.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <Reveal>
          <CTAButton>Quero organizar minha alimentação</CTAButton>
        </Reveal>
      </div>
    </section>
  );
}
