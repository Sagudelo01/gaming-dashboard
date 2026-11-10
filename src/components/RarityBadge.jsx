import { RARITIES } from '../data/rarities'

export function RarityBadge({ rarity, className = '' }) {
  const meta = RARITIES[rarity]
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold ${meta.chip} ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {meta.label}
    </span>
  )
}
