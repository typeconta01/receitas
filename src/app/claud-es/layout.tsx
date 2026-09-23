import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { getClaudeCopy } from "@/lib/claude-i18n";
import "../claude/claude.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const copy = getClaudeCopy("es");

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#F7F5F2",
};

export const metadata: Metadata = {
  title: copy.metaTitle,
  description: copy.metaDescription,
  openGraph: {
    title: copy.metaTitle,
    description: copy.metaDescription,
    type: "website",
    locale: "es_ES",
    siteName: copy.productName,
  },
  twitter: {
    card: "summary_large_image",
    title: copy.metaTitle,
    description: copy.metaDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ClaudeEsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      lang="es"
      className={`${inter.variable} ${inter.className} claude-lp`}
    >
      {children}
    </div>
  );
}
