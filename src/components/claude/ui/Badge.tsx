type Props = {
  children: React.ReactNode;
  tone?: "light" | "dark";
};

export function Badge({ children, tone = "light" }: Props) {
  return (
    <span className={tone === "dark" ? "cl-badge cl-badge--dark" : "cl-badge"}>
      {children}
    </span>
  );
}
