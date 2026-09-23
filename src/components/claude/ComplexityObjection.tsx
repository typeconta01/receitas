import { getClaudeCopy, type ClaudeLang } from "@/lib/claude-i18n";

export function ComplexityObjection({ lang = "pt" }: { lang?: ClaudeLang }) {
  const t = getClaudeCopy(lang);

  return (
    <section className="cl-section cl-section--dark">
      <div className="cl-wrap cl-wrap--copy cl-complexity">
        <h2 className="cl-h2">{t.complexity.title}</h2>
        <div className="cl-copy">
          {t.complexity.lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <div className="cl-complexity__stack">
          {t.complexity.stack.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
