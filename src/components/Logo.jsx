export function Logo({ className = '' }) {
  return (
    <img
      src="/logo.png"
      alt="XenPlay"
      className={`object-contain ${className}`}
      draggable="false"
    />
  )
}
