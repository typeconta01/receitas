import Image from "next/image";
import Link from "next/link";
import { IMAGES, SITE } from "@/lib/constants";

export function LegalShell({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <main className="legal-page">
      <div className="container narrow">
        <Link href="/">
          <Image src={IMAGES.logo} alt={SITE.name} width={180} height={58} />
        </Link>
        <p>
          <Link href="/">← Voltar para a oferta</Link>
        </p>
        <h1>{title}</h1>
        {children}
      </div>
    </main>
  );
}
