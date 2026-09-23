import { Card } from "@/components/claude/ui/Card";
import { CheckItem } from "@/components/claude/ui/CheckItem";
import { SectionHeader } from "@/components/claude/ui/SectionHeader";
import { getClaudeCopy, type ClaudeLang } from "@/lib/claude-i18n";

export function BeforeAfter({ lang = "pt" }: { lang?: ClaudeLang }) {
  const t = getClaudeCopy(lang);

  return (
    <section className="cl-section">
      <div className="cl-wrap">
        <SectionHeader title={t.beforeAfter.title} align="center" />
        <div className="cl-compare">
          <Card>
            <h3 className="cl-h3">{t.beforeAfter.beforeTitle}</h3>
            <ul>
              {t.beforeAfter.before.map((item) => (
                <li key={item}>
                  <CheckItem variant="cross">{item}</CheckItem>
                </li>
              ))}
            </ul>
          </Card>
          <Card>
            <h3 className="cl-h3">{t.beforeAfter.afterTitle}</h3>
            <ul>
              {t.beforeAfter.after.map((item) => (
                <li key={item}>
                  <CheckItem>{item}</CheckItem>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}
