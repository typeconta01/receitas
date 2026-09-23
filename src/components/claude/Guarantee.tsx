import { getClaudeCopy, type ClaudeLang } from "@/lib/claude-i18n";

export function Guarantee({ lang = "pt" }: { lang?: ClaudeLang }) {
  const t = getClaudeCopy(lang);

  return (
    <section className="cl-section cl-section--white">
      <div className="cl-wrap cl-wrap--copy cl-guarantee">
        <svg
          className="cl-shield"
          viewBox="0 0 64 64"
          fill="none"
          aria-hidden
        >
          <path
            d="M32 6 12 14v16c0 14 8.4 24.6 20 28 11.6-3.4 20-14 20-28V14L32 6z"
            stroke="currentColor"
            strokeWidth="2.4"
          />
          <path
            d="m22 32 7 7 13-14"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h2 className="cl-h2">{t.guarantee.title}</h2>
        <p className="cl-lead">{t.guarantee.text}</p>
      </div>
    </section>
  );
}
