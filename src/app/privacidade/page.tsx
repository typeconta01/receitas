import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Política de Privacidade | Semana Resolvida™",
  robots: { index: false, follow: true },
};

export default function PrivacidadePage() {
  return (
    <LegalShell title="Política de Privacidade">
      <p>
        Coletamos apenas os dados necessários para processar a compra, liberar
        o acesso e prestar suporte — como nome, e-mail e informações de
        pagamento tratadas pelo checkout.
      </p>
      <p>
        Esses dados não são vendidos. Podem ser compartilhados apenas com
        plataformas essenciais de pagamento, hospedagem e comunicação.
      </p>
      <p>
        Cookies podem ser usados para medir anúncios, lembrar preferências e
        melhorar a experiência da página.
      </p>
      <p>
        Para solicitar atualização ou exclusão dos seus dados, use a página de
        contato.
      </p>
    </LegalShell>
  );
}
