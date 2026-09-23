import { Badge } from "@/components/claude/ui/Badge";
import { GuideMockup } from "@/components/claude/ui/GuideMockup";
import { getClaudeCopy, type ClaudeLang } from "@/lib/claude-i18n";

export function Mechanism({ lang = "pt" }: { lang?: ClaudeLang }) {
  const t = getClaudeCopy(lang);

  return (
    <section className="cl-section">
      <div className="cl-wrap cl-wrap--copy" style={{ textAlign: "center" }}>
        <Badge>{t.mechanism.badge}</Badge>
        <h2 className="cl-h2" style={{ marginTop: 16 }}>
          {t.mechanism.title}
        </h2>
        <p className="cl-lead" style={{ marginTop: 16 }}>
          {t.mechanism.sub}
        </p>
        <div className="cl-copy cl-mechanism__copy">
          <p>{t.mechanism.p1}</p>
          <p>{t.mechanism.p2}</p>
          <p>
            {t.mechanism.list.split("\n").map((line, i, arr) => (
              <span key={line}>
                {line}
                {i < arr.length - 1 ? <br /> : null}
              </span>
            ))}
          </p>
        </div>
        <div className="cl-mechanism__mock">
          <GuideMockup size="lg" nodes={[...t.mapNodes]} />
        </div>
        <p className="cl-mechanism__line">{t.mechanism.line}</p>
      </div>
    </section>
  );
}
