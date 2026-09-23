import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Termos de Uso | Guia Prático do Claude AI",
  robots: { index: false, follow: true },
};

export default function TermosPage() {
  return (
    <LegalShell title="Termos de Uso">
      <p>
        Ao adquirir o Guia Prático do Claude AI, você concorda com estes
        termos. O produto é educacional e entregue em formato digital.
      </p>
      <p>
        O acesso é pessoal e intransferível. É proibido copiar, revender,
        compartilhar login ou redistribuir o conteúdo sem autorização.
      </p>
      <p>
        O período de acesso, a forma de pagamento e a garantia seguem as
        condições apresentadas na página de checkout no momento da compra.
      </p>
      <p>
        Estes termos podem ser atualizados para refletir mudanças no produto
        ou na legislação aplicável.
      </p>
    </LegalShell>
  );
}
