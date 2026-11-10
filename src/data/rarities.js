// Skin rarity tiers. Riot's Data Dragon does not expose rarity, so these
// labels and the visual treatment below are defined here.
export const RARITIES = {
  common: { label: 'Common', text: 'text-slate-300', ring: 'ring-slate-400/40', chip: 'bg-slate-400/15 text-slate-300', glow: 'from-slate-500/40' },
  epic: { label: 'Epic', text: 'text-sky-300', ring: 'ring-sky-400/50', chip: 'bg-sky-400/15 text-sky-300', glow: 'from-sky-500/40' },
  legendary: { label: 'Legendary', text: 'text-orange-300', ring: 'ring-orange-400/50', chip: 'bg-orange-400/15 text-orange-300', glow: 'from-orange-500/40' },
  mythic: { label: 'Mythic', text: 'text-fuchsia-300', ring: 'ring-fuchsia-400/50', chip: 'bg-fuchsia-400/15 text-fuchsia-300', glow: 'from-fuchsia-500/40' },
  ultimate: { label: 'Ultimate', text: 'text-amber-300', ring: 'ring-amber-400/60', chip: 'bg-amber-400/15 text-amber-300', glow: 'from-amber-500/40' },
}

export const RARITY_ORDER = ['ultimate', 'mythic', 'legendary', 'epic', 'common']
