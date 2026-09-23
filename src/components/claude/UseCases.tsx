import { Button } from "@/components/claude/ui/Button";
import { Card } from "@/components/claude/ui/Card";
import { SectionHeader } from "@/components/claude/ui/SectionHeader";
import { getClaudeCopy, type ClaudeLang } from "@/lib/claude-i18n";

const icons = [
  <svg key="s" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="11" cy="11" r="6" />
    <path d="m20 20-3.5-3.5" />
  </svg>,
  <svg key="w" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M4 20h4L19 9l-4-4L4 16v4z" />
  </svg>,
  <svg key="p" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="4" y="5" width="16" height="15" rx="2" />
    <path d="M8 3v4M16 3v4M4 10h16" />
  </svg>,
  <svg key="a" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M5 19V9M12 19V5M19 19v-7" />
  </svg>,
  <svg key="b" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M4 17h16M6 17V9h4v8M14 17V7h4v10" />
  </svg>,
  <svg key="r" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="5" y="4" width="14" height="16" rx="2" />
    <path d="M8 9h8M8 13h8M8 17h5" />
  </svg>,
  <svg key="d" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M7 3h8l5 5v13H7z" />
    <path d="M15 3v5h5" />
  </svg>,
  <svg key="i" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M9 18h6M10 21h4M12 3a6 6 0 0 1 3.6 10.8c-.8.6-1.6 1.6-1.6 2.7H10c0-1.1-.8-2.1-1.6-2.7A6 6 0 0 1 12 3z" />
  </svg>,
];

export function UseCases({ lang = "pt" }: { lang?: ClaudeLang }) {
  const t = getClaudeCopy(lang);

  return (
    <section className="cl-section cl-section--soft">
      <div className="cl-wrap">
        <SectionHeader title={t.uses.title} align="center" />
        <div className="cl-uses">
          {t.uses.items.map((item, i) => (
            <Card key={item.title} className="cl-use">
              {icons[i]}
              <h3 className="cl-h3">{item.title.toUpperCase()}</h3>
              <p>{item.text}</p>
            </Card>
          ))}
        </div>
        <p className="cl-after">{t.uses.after}</p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button lang={lang}>{t.uses.cta}</Button>
        </div>
      </div>
    </section>
  );
}
