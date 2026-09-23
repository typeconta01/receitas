type Props = {
  children: React.ReactNode;
  variant?: "check" | "cross";
};

export function CheckItem({ children, variant = "check" }: Props) {
  const isCheck = variant === "check";
  return (
    <p className={isCheck ? "cl-check" : "cl-x"}>
      <i aria-hidden>{isCheck ? "✓" : "✕"}</i>
      <span>{children}</span>
    </p>
  );
}
