type Props = { className?: string };

/**
 * Jemimah mark — an italic "J" with a small stem-dove.
 * Monochrome, currentColor stroke, works at 24px and 200px.
 */
export function Logo({ className }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-label="Jemimah"
    >
      {/* Top serif */}
      <path d="M9 7h14" />
      {/* Stem */}
      <path d="M16 7v13" />
      {/* Curl — the dove's wing */}
      <path d="M16 20a4 4 0 0 1-4 4 3 3 0 0 1-3-3" />
      {/* Tiny accent dot */}
      <circle cx="22" cy="11" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}
