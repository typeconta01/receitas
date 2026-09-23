import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { PRODUCT_NAME } from "@/lib/claude-config";
import "./claude.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const title = "Guia Prático do Claude AI | Do Zero à Prática";
const description =
  "Aprenda passo a passo como começar a usar Claude AI e aplicar a ferramenta na rotina, trabalho e negócios.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#F7F5F2",
};

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    locale: "pt_BR",
    siteName: PRODUCT_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ClaudeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={`${inter.variable} ${inter.className} claude-lp`}>{children}</div>;
}
