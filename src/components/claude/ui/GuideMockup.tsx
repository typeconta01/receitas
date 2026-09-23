import { GUIDE_COVER_SRC } from "@/lib/claude-config";

type Props = {
  size?: "md" | "lg";
  nodes?: string[];
};

const defaultNodes = [
  "Pesquisar",
  "Escrever",
  "Planejar",
  "Analisar",
  "Negócios",
  "Rotina",
  "Documentos",
  "Ideias",
];

export function GuideMockup({ size = "md", nodes = defaultNodes }: Props) {
  if (GUIDE_COVER_SRC) {
    return (
      <div className={size === "lg" ? "cl-mock cl-mock--lg" : "cl-mock"}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={GUIDE_COVER_SRC}
          alt="Capa do Guia Prático do Claude AI"
          width={380}
          height={507}
        />
      </div>
    );
  }

  return (
    <div
      className={size === "lg" ? "cl-orb cl-orb--lg" : "cl-orb"}
      role="img"
      aria-label="Mapa animado do que o Claude AI pode fazer"
    >
      <div className="cl-orb__map" aria-hidden>
        <svg
          className="cl-orb__links"
          viewBox="0 0 200 200"
          preserveAspectRatio="xMidYMid meet"
        >
          <ellipse
            className="cl-orb__orbit"
            cx="100"
            cy="100"
            rx="34"
            ry="21"
            transform="rotate(-28 100 100)"
          />
          <circle className="cl-orb__orbit cl-orb__orbit--soft" cx="100" cy="100" r="26" />
          {nodes.map((_, i) => {
            const angle = ((i / nodes.length) * 360 - 90) * (Math.PI / 180);
            const x1 = 100 + Math.cos(angle) * 30;
            const y1 = 100 + Math.sin(angle) * 30;
            const x2 = 100 + Math.cos(angle) * 92;
            const y2 = 100 + Math.sin(angle) * 92;
            return (
              <line
                key={i}
                x1={x1.toFixed(1)}
                y1={y1.toFixed(1)}
                x2={x2.toFixed(1)}
                y2={y2.toFixed(1)}
              />
            );
          })}
        </svg>
        {nodes.map((label, i) => (
          <span
            key={label}
            className="cl-orb__node"
            style={{ "--i": i } as React.CSSProperties}
          >
            {label}
          </span>
        ))}
      </div>

      <div className="cl-orb__scene">
        <div className="cl-orb__logo">
          <span className="cl-orb__glow" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/claude-symbol.svg"
            alt=""
            width={160}
            height={160}
          />
        </div>
      </div>
    </div>
  );
}
