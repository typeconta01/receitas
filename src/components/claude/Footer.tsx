import {
  COPYRIGHT_NAME,
  PRIVACY_URL,
  SUPPORT_URL,
  TERMS_URL,
} from "@/lib/claude-config";
import { getClaudeCopy, type ClaudeLang } from "@/lib/claude-i18n";

export function Footer({ lang = "pt" }: { lang?: ClaudeLang }) {
  const t = getClaudeCopy(lang);

  return (
    <footer className="cl-foot">
      <div className="cl-wrap">
        <nav aria-label={t.footer.navLabel}>
          <a href={TERMS_URL}>{t.footer.terms}</a>
          <a href={PRIVACY_URL}>{t.footer.privacy}</a>
          <a href={SUPPORT_URL}>{t.footer.contact}</a>
        </nav>
        <p>{t.footer.disclaimer}</p>
        <p>
          © {new Date().getFullYear()} {COPYRIGHT_NAME}. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
