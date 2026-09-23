import Link from "next/link";

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
        <p>
          <Link href="/claude">← Voltar</Link>
        </p>
        <h1>{title}</h1>
        {children}
      </div>
    </main>
  );
}
