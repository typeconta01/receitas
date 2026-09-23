type Props = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: Props) {
  return <article className={`cl-card ${className}`}>{children}</article>;
}
