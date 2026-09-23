import { Badge } from "@/components/claude/ui/Badge";
import { Button } from "@/components/claude/ui/Button";
import { Card } from "@/components/claude/ui/Card";
import { FULL_VALUE, PRODUCT_PRICE } from "@/lib/claude-config";
import { getClaudeCopy, type ClaudeLang } from "@/lib/claude-i18n";

export function Offer({ lang = "pt" }: { lang?: ClaudeLang }) {
  const t = getClaudeCopy(lang);

  return (
    <section className="cl-section cl-section--soft" id="oferta">
      <div className="cl-wrap" style={{ textAlign: "center" }}>
        <Badge>{t.offer.badge}</Badge>
        <h2 className="cl-h2" style={{ marginTop: 16 }}>
          {t.offer.title}
        </h2>
        <Card className="cl-offer-card">
          <h3 className="cl-h3">{t.offer.cardTitle}</h3>
          <p className="cl-lead cl-offer__intro">{t.offer.intro}</p>

          <ul className="cl-offer__stack">
            {t.offer.valued.map((item) => (
              <li key={item.name}>
                <div className="cl-offer__row">
                  <p className="cl-check">
                    <i aria-hidden>✓</i>
                    <span>{item.name}</span>
                  </p>
                  <s>{item.value}</s>
                </div>
                <span className="cl-offer__tag">{item.badge}</span>
              </li>
            ))}
            {t.offer.included.map((item) => (
              <li key={item} className="cl-offer__included">
                <div className="cl-offer__row">
                  <p className="cl-check">
                    <i aria-hidden>✓</i>
                    <span>{item}</span>
                  </p>
                  <em>{t.offer.includedLabel}</em>
                </div>
              </li>
            ))}
          </ul>

          <hr className="cl-offer__rule" />

          <p className="cl-offer__sep">{t.offer.sep}</p>
          <p className="cl-offer__full">
            <s>{FULL_VALUE}</s>
          </p>
          <p className="cl-offer__contrast">{t.offer.contrast}</p>
          <p className="cl-offer__from">{t.offer.from}</p>
          <p className="cl-offer__price">{PRODUCT_PRICE}</p>
          <p className="cl-offer__once">{t.offer.once}</p>
          <Button lang={lang}>{t.offer.cta}</Button>
          <p className="cl-micro">{t.offer.secure}</p>
        </Card>
      </div>
    </section>
  );
}
