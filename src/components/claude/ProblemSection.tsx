import { SectionHeader } from "@/components/claude/ui/SectionHeader";
import { getClaudeCopy, type ClaudeLang } from "@/lib/claude-i18n";

export function ProblemSection({ lang = "pt" }: { lang?: ClaudeLang }) {
  const t = getClaudeCopy(lang);

  return (
    <section className="cl-section cl-section--white">
      <div className="cl-wrap cl-wrap--copy">
        <SectionHeader title={t.problem.title} />
        <div className="cl-copy" style={{ marginTop: 20 }}>
          <p>{t.problem.p1}</p>
          <p className="cl-quote">{t.problem.quote}</p>
          <p>{t.problem.no}</p>
          <p>{t.problem.p2}</p>
          <p>
            {t.problem.steps.split("\n").map((line, i, arr) => (
              <span key={line}>
                {line}
                {i < arr.length - 1 ? <br /> : null}
              </span>
            ))}
          </p>
          <p>{t.problem.p3}</p>
        </div>

        <div className="cl-flow">
          <div className="cl-flow__col">
            <p className="cl-flow__label">{t.problem.basicLabel}</p>
            <ol>
              {t.problem.basic.map((item) => (
                <li key={item}>
                  {item}
                  <span>↓</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="cl-flow__col cl-flow__col--win">
            <p className="cl-flow__label">{t.problem.practicalLabel}</p>
            <ol>
              {t.problem.practical.map((item) => (
                <li key={item}>
                  {item}
                  <span>↓</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
