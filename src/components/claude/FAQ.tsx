import { SectionHeader } from "@/components/claude/ui/SectionHeader";
import { getClaudeCopy, type ClaudeLang } from "@/lib/claude-i18n";

export function FAQ({ lang = "pt" }: { lang?: ClaudeLang }) {
  const t = getClaudeCopy(lang);

  return (
    <section className="cl-section" id="faq">
      <div className="cl-wrap cl-wrap--copy">
        <SectionHeader title={t.faq.title} align="center" />
        <div className="cl-faq">
          {t.faq.items.map((item) => (
            <details key={item.q}>
              <summary>
                <span>{item.q}</span>
                <i aria-hidden />
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
