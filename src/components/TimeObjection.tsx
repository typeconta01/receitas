import Image from "next/image";
import { IMAGES } from "@/lib/constants";
import { Reveal } from "@/components/ui/Reveal";

export function TimeObjection() {
  return (
    <section className="sale">
      <div className="sale-wrap">
        <Reveal>
          <h2 className="sale-title">
            Mas eu <span className="sale-coral">não tenho tempo</span> para
            isso...
          </h2>
        </Reveal>

        <Reveal>
          <Image
            src={IMAGES.painRush}
            alt="Rotina corrida no dia a dia"
            width={900}
            height={680}
            className="sale-photo"
            sizes="(max-width: 800px) 92vw, 720px"
            quality={70}
          />
        </Reveal>

        <Reveal>
          <p className="sale-lead">É justamente por isso que o método existe.</p>
        </Reveal>

        <div className="versus">
          <article className="versus__col">
            <p className="versus__label">Sem organização</p>
            <ol>
              <li>Pensar</li>
              <li>Comprar</li>
              <li>Preparar</li>
              <li>Cozinhar</li>
              <li>Organizar</li>
            </ol>
            <strong>Todo dia.</strong>
          </article>
          <article className="versus__col versus__col--win">
            <p className="versus__label">Semana Resolvida</p>
            <ol>
              <li>Planejar</li>
              <li>Adiantar</li>
              <li>Organizar</li>
            </ol>
            <strong>E facilitar vários dias.</strong>
          </article>
        </div>

        <Reveal>
          <p className="sale-spotlight">
            Você não precisa necessariamente cozinhar mais.
            <br />
            Precisa cozinhar de forma <span className="sale-olive">mais estratégica</span>.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
