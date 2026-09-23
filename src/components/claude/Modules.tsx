import { Card } from "@/components/claude/ui/Card";
import { SectionHeader } from "@/components/claude/ui/SectionHeader";
import { getClaudeCopy, type ClaudeLang } from "@/lib/claude-i18n";

export function Modules({ lang = "pt" }: { lang?: ClaudeLang }) {
  const t = getClaudeCopy(lang);

  return (
    <section className="cl-section cl-section--white">
      <div className="cl-wrap">
        <SectionHeader title={t.modules.title} align="center" />
        <div className="cl-modules">
          {t.modules.items.map((item) => (
            <Card key={item.num} className="cl-module">
              <span className="cl-module__num">{item.num.toUpperCase()}</span>
              <h3 className="cl-h3">{item.title}</h3>
              <ul>
                {item.items.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
