import { Button } from "@/components/claude/ui/Button";
import { CheckItem } from "@/components/claude/ui/CheckItem";
import { GuideMockup } from "@/components/claude/ui/GuideMockup";
import { PRODUCT_PRICE, PRODUCT_PRICE_FROM } from "@/lib/claude-config";
import { getClaudeCopy, type ClaudeLang } from "@/lib/claude-i18n";

function splitPrice(price: string) {
  const match = price.match(/^(.*?)\s+(\d+,\d+)$/);
  if (!match) return { prefix: "", amount: price };
  return { prefix: match[1], amount: match[2] };
}

export function Hero({ lang = "pt" }: { lang?: ClaudeLang }) {
  const t = getClaudeCopy(lang);
  const price = splitPrice(PRODUCT_PRICE);

  return (
    <section className="cl-hero" id="topo">
      <div className="cl-wrap cl-hero__inner">
        <div className="cl-hero__copy">
          <p className="cl-hero__brand">{t.hero.brand}</p>
          <h1 className="cl-h1 cl-hero__title">
            {t.hero.titleBefore}
            <span className="cl-hl">{t.hero.titleHighlight}</span>
          </h1>
          <p className="cl-hero__sub">{t.hero.sub}</p>
          <ul className="cl-hero__perks">
            {t.hero.perks.map((item) => (
              <li key={item}>
                <CheckItem>{item}</CheckItem>
              </li>
            ))}
          </ul>

          <div className="cl-hero__deal">
            <p className="cl-hero__launch">{t.hero.launch}</p>
            <p className="cl-hero__from">
              {t.hero.from} <s>{PRODUCT_PRICE_FROM}</s>
            </p>
            <p className="cl-hero__today">{t.hero.today}</p>
            <p className="cl-hero__price">
              <span>{price.prefix}</span> <strong>{price.amount}</strong>
            </p>
            <p className="cl-hero__once">{t.hero.once}</p>
          </div>

          <div className="cl-hero__cta">
            <Button>{t.hero.cta}</Button>
            <p className="cl-micro cl-hero__secure">
              <svg
                viewBox="0 0 16 16"
                width="14"
                height="14"
                fill="none"
                aria-hidden
              >
                <rect
                  x="3.2"
                  y="7"
                  width="9.6"
                  height="7"
                  rx="1.6"
                  stroke="currentColor"
                  strokeWidth="1.4"
                />
                <path
                  d="M5 7V5.2a3 3 0 0 1 6 0V7"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
              </svg>
              {t.hero.secure}
            </p>
          </div>
        </div>

        <div className="cl-hero__visual">
          <GuideMockup nodes={[...t.mapNodes]} />
        </div>
      </div>
    </section>
  );
}
