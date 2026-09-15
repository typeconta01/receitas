import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Contato | Semana Resolvida™",
  robots: { index: false, follow: true },
};

export default function ContatoPage() {
  return (
    <LegalShell title="Contato">
      <p>
        Precisa de ajuda com acesso, pagamento ou garantia? Fale com o
        suporte.
      </p>
      <p>
        E-mail:{" "}
        <a href="mailto:suporte@semanaresolvida.com.br">
          suporte@semanaresolvida.com.br
        </a>
      </p>
      <p>
        Substitua este e-mail pelo canal oficial antes de publicar a página.
      </p>
    </LegalShell>
  );
}
