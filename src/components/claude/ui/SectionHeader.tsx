type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: Props) {
  return (
    <header className="cl-reveal" style={{ textAlign: align }}>
      {eyebrow ? <p className="cl-eyebrow">{eyebrow}</p> : null}
      <h2 className="cl-h2">{title}</h2>
      {subtitle ? <p className="cl-lead" style={{ marginTop: 16 }}>{subtitle}</p> : null}
    </header>
  );
}
