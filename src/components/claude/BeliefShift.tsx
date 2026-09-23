import { getClaudeCopy, type ClaudeLang } from "@/lib/claude-i18n";

export function BeliefShift({ lang = "pt" }: { lang?: ClaudeLang }) {
  const t = getClaudeCopy(lang);

  return (
    <section className="cl-section cl-section--dark">
      <div className="cl-wrap cl-wrap--copy">
        <p className="cl-eyebrow">{t.belief.eyebrow}</p>
        <h2 className="cl-h2">{t.belief.title}</h2>
        <div className="cl-copy" style={{ marginTop: 20 }}>
          {t.belief.lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <p className="cl-callout">
          {t.belief.callout.split("\n").map((line, i, arr) => (
            <span key={line}>
              {line}
              {i < arr.length - 1 ? <br /> : null}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
