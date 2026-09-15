import { CHECKOUT_URL } from "@/lib/constants";

type Props = {
  children: React.ReactNode;
  className?: string;
  size?: "md" | "lg";
};

export function CTAButton({ children, className = "", size = "lg" }: Props) {
  const sizes =
    size === "lg"
      ? "min-h-12 px-4 py-3 text-[0.82rem] sm:min-h-[58px] sm:px-7 sm:py-4 sm:text-[1.05rem]"
      : "min-h-12 px-4 py-3 text-sm";

  return (
    <a
      href={CHECKOUT_URL}
      className={`cta-button ${sizes} ${className}`}
    >
      <span>{children}</span>
      <span aria-hidden className="cta-button__arrow">
        →
      </span>
    </a>
  );
}
