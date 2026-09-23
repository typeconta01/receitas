import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Contato | Guia Prático do Claude AI",
  robots: { index: false, follow: true },
};

export default function ContatoPage() {
  return (
    <LegalShell title="Contato">
      <p>
        Precisa de ajuda com acesso, pagamento ou garantia? Fale com o
        suporte pelo canal informado no checkout após a compra.
      </p>
    </LegalShell>
  );
}
