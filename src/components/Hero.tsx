import Image from "next/image";
import { IMAGES } from "@/lib/constants";
import { CTAButton } from "@/components/ui/CTAButton";

const trustItems = [
  "Acesso imediato",
  "Receitas práticas",
  "7 dias de garantia",
];

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__media">
        <Image
          src={IMAGES.hero}
          alt="Semana Resolvida™ — mulher, refeições organizadas e aplicativo de cardápio"
          width={1207}
          height={1303}
          className="hero__photo"
          priority
          sizes="100vw"
        />
      </div>

      <div className="hero__content">
        <h1 className="hero__title">
          <span className="hero__hl-olive">Organize sua alimentação,</span>
          <br />
          coma gostoso e fique
          <br />
          cada vez mais perto do
          <br />
          <span className="hero__hl-coral">corpo que você deseja.</span>
        </h1>

        <p className="hero__sub">
          Com o nosso <strong>aplicativo</strong> e o Método Semana Resolvida™,
          você aprende a <strong>planejar</strong> e <strong>organizar</strong>{" "}
          suas refeições de forma simples, prática e gostosa.
        </p>

        <p className="hero__note">
          Mesmo que hoje não saiba o que preparar ou tenha pouco tempo para
          cozinhar.
        </p>

        <p className="hero__method">
          <strong>Planeje. Prepare. Organize.</strong>
          Sem começar do zero todos os dias.
        </p>

        <CTAButton className="hero__cta">
          Quero organizar minha alimentação
        </CTAButton>

        <ul className="hero__trust">
          {trustItems.map((item) => (
            <li key={item}>✓ {item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
