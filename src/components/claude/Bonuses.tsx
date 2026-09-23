import { Badge } from "@/components/claude/ui/Badge";
import { getClaudeCopy, type ClaudeLang } from "@/lib/claude-i18n";

export function Bonuses({ lang = "pt" }: { lang?: ClaudeLang }) {
  const t = getClaudeCopy(lang);

  return (
    <section className="cl-section cl-section--dark">
      <div className="cl-wrap">
        <div style={{ textAlign: "center" }}>
          <Badge tone="dark">{t.bonuses.badge}</Badge>
          <h2 className="cl-h2" style={{ marginTop: 16 }}>
            {t.bonuses.title}
          </h2>
        </div>
        <div className="cl-bonus-grid">
          {t.bonuses.items.map((item) => (
            <article key={item.tag} className="cl-card cl-bonus">
              <span>{item.tag.toUpperCase()}</span>
              <h3 className="cl-h3">{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
