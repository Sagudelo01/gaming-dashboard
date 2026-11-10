export function Logo({ className = '' }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <rect
        x="1"
        y="1"
        width="30"
        height="30"
        rx="8"
        className="stroke-accent/30"
        strokeWidth="1.5"
      />
      <path
        d="M11 11L21 21M21 11L11 21"
        className="stroke-accent"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
    </svg>
  )
}
