import { Button } from "@/components/claude/ui/Button";
import { getClaudeCopy, type ClaudeLang } from "@/lib/claude-i18n";

export function FinalCTA({ lang = "pt" }: { lang?: ClaudeLang }) {
  const t = getClaudeCopy(lang);

  return (
    <section className="cl-section cl-section--dark">
      <div className="cl-wrap cl-wrap--copy cl-final">
        <h2 className="cl-h2">{t.final.title}</h2>
        <p className="cl-final__alt">{t.final.alt}</p>
        <div className="cl-copy">
          {t.final.lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <Button lang={lang}>{t.final.cta}</Button>
        <p className="cl-micro" style={{ color: "#c8c3bd" }}>
          {t.final.note}
        </p>
      </div>
    </section>
  );
}
