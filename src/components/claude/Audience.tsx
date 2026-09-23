import { CheckItem } from "@/components/claude/ui/CheckItem";
import { SectionHeader } from "@/components/claude/ui/SectionHeader";
import { getClaudeCopy, type ClaudeLang } from "@/lib/claude-i18n";

export function Audience({ lang = "pt" }: { lang?: ClaudeLang }) {
  const t = getClaudeCopy(lang);

  return (
    <section className="cl-section">
      <div className="cl-wrap cl-wrap--copy">
        <SectionHeader title={t.audience.title} />
        <ul className="cl-audience">
          {t.audience.items.map((item) => (
            <li key={item}>
              <CheckItem>{item}</CheckItem>
            </li>
          ))}
        </ul>
        <p className="cl-audience-note">{t.audience.note}</p>
      </div>
    </section>
  );
}
