import { useMemo, useState } from 'react'
import { loadingArt } from '../lib/ddragon'
import { champions } from '../data/champions'
import { RARITIES, RARITY_ORDER } from '../data/rarities'
import { RarityBadge } from './RarityBadge'

const ALL_SKINS = champions.flatMap((c) =>
  c.skins
    .filter((s) => s.num !== 0)
    .map((s) => ({ ...s, champId: c.id, champName: c.name })),
)

export function CollectionView({ onOpen }) {
  const [rarity, setRarity] = useState('all')

  const list = useMemo(
    () => (rarity === 'all' ? ALL_SKINS : ALL_SKINS.filter((s) => s.rarity === rarity)),
    [rarity],
  )

  return (
    <section className="rise flex flex-col gap-5">
      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={() => setRarity('all')}
          className={`rounded-lg px-3.5 py-1.5 text-sm font-medium transition-all ${
            rarity === 'all'
              ? 'bg-accent text-ink'
              : 'border border-white/8 bg-white/3 text-white/60 hover:text-white'
          }`}
        >
          All skins
        </button>
        {RARITY_ORDER.map((r) => (
          <button
            key={r}
            onClick={() => setRarity(r)}
            className={`rounded-lg px-3.5 py-1.5 text-sm font-medium transition-all ${
              rarity === r
                ? 'bg-accent text-ink'
                : 'border border-white/8 bg-white/3 text-white/60 hover:text-white'
            }`}
          >
            {RARITIES[r].label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">
        {list.map((s) => (
          <button
            key={`${s.champId}-${s.num}`}
            onClick={() => onOpen(s.champId)}
            className={`group relative overflow-hidden rounded-2xl border border-white/6 text-left ring-1 ${RARITIES[s.rarity].ring} transition-all hover:-translate-y-1`}
          >
            <div className="relative aspect-3/5 overflow-hidden">
              <img
                src={loadingArt(s.champId, s.num)}
                alt={s.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/40 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <RarityBadge rarity={s.rarity} className="mb-1.5" />
                <p className="truncate text-sm font-semibold text-white">{s.name}</p>
                <p className="truncate text-xs text-white/50">{s.champName}</p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}
