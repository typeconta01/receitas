import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const title =
  "Semana Resolvida™ | Organize sua alimentação e coma gostoso";
const description =
  "Com o aplicativo e o Método Semana Resolvida™, você planeja, prepara e organiza refeições práticas e gostosas — sem recomeçar do zero todos os dias.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#f7f3ec",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://semanaresolvida.com.br"),
  title,
  description,
  keywords: [
    "organização alimentar",
    "cardápio semanal",
    "receitas práticas",
    "método semana resolvida",
    "planejamento de refeições",
  ],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "pt_BR",
    siteName: "Semana Resolvida™",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Aplicativo Semana Resolvida ao lado de um prato organizado",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${fraunces.variable} ${jakarta.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
