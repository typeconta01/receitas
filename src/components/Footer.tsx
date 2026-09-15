import Image from "next/image";
import Link from "next/link";
import { IMAGES, SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="sale-wrap">
        <Image
          src={IMAGES.logo}
          alt={SITE.name}
          width={180}
          height={58}
          className="site-footer__logo"
        />
        <nav className="site-footer__nav" aria-label="Informações legais">
          <Link href="/termos">Termos de Uso</Link>
          <Link href="/privacidade">Política de Privacidade</Link>
          <Link href="/contato">Contato</Link>
        </nav>
        <p className="site-footer__legal">
          O Semana Resolvida é um produto educacional e de organização
          alimentar. Não substitui orientação médica ou nutricional
          individualizada. Resultados variam de pessoa para pessoa.
        </p>
        <p className="site-footer__copy">
          © {new Date().getFullYear()} {SITE.shortName}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
