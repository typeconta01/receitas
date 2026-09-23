import { Card } from "@/components/claude/ui/Card";
import { SectionHeader } from "@/components/claude/ui/SectionHeader";
import { getClaudeCopy, type ClaudeLang } from "@/lib/claude-i18n";

export function MechanismSteps({ lang = "pt" }: { lang?: ClaudeLang }) {
  const t = getClaudeCopy(lang);

  return (
    <section className="cl-section cl-section--white">
      <div className="cl-wrap">
        <SectionHeader title={t.steps.title} align="center" />
        <div className="cl-steps">
          {t.steps.items.map((step) => (
            <Card key={step.num} className="cl-step">
              <strong>{step.num}</strong>
              <h3 className="cl-h3">{step.title}</h3>
              <p>{step.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
