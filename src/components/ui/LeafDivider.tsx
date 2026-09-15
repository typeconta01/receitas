export function LeafDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`leaf-divider ${className}`} aria-hidden>
      <span />
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M5 19C8 8 16 5 21 4C20 9 16 17 5 19Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path
          d="M8.5 15.5C11 13 15 9.5 18.5 7"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
      <span />
    </div>
  );
}
