import Image from "next/image";
import { desirePhotos, desireWords } from "@/content/offer";
import { Reveal } from "@/components/ui/Reveal";

export function Desire() {
  return (
    <section className="sale sale--paper">
      <div className="sale-wrap sale-wrap--wide">
        <Reveal>
          <h2 className="sale-title">
            Quem disse que cuidar da alimentação precisa ser{" "}
            <span className="sale-coral">sem graça?</span>
          </h2>
        </Reveal>

        <div className="food-mosaic">
          {desirePhotos.map((item) => (
            <Image
              key={item.src}
              src={item.src}
              alt={item.alt}
              width={400}
              height={300}
              sizes="(max-width: 700px) 46vw, 220px"
              quality={70}
            />
          ))}
        </div>

        <Reveal>
          <p className="sale-sub">Uma alimentação que cabe na vida real precisa ser:</p>
          <div className="word-row">
            {desireWords.map((word) => (
              <span key={word}>{word}</span>
            ))}
          </div>
          <p className="sale-spotlight">
            Porque não adianta seguir uma rotina perfeita por 5 dias...
            <br />
            se você não consegue continuar no sexto.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
