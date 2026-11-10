import { useMemo, useState } from 'react'
import { PiHeartFill, PiMagnifyingGlassBold } from 'react-icons/pi'
import { champions as ALL, ROLES } from '../data/champions'
import { ChampionCard } from './ChampionCard'

export function ChampionsView({ query, favorites, onOpen }) {
  const [role, setRole] = useState('All')
  const [favsOnly, setFavsOnly] = useState(false)

  const list = useMemo(() => {
    const q = query.trim().toLowerCase()
    return ALL.filter((c) => {
      const matchesQuery =
        !q || c.name.toLowerCase().includes(q) || c.title.toLowerCase().includes(q)
      const matchesRole = role === 'All' || c.roles.includes(role)
      const matchesFav = !favsOnly || favorites.has(c.id)
      return matchesQuery && matchesRole && matchesFav
    })
  }, [query, role, favsOnly, favorites])

  return (
    <section className="rise flex flex-col gap-5">
      <div className="flex flex-wrap items-center gap-2">
        {['All', ...ROLES].map((r) => (
          <button
            key={r}
            onClick={() => setRole(r)}
            className={`rounded-lg px-3.5 py-1.5 text-sm font-medium transition-all ${
              role === r
                ? 'bg-accent text-ink'
                : 'border border-white/8 bg-white/3 text-white/60 hover:border-accent/40 hover:text-white'
            }`}
          >
            {r}
          </button>
        ))}

        <button
          onClick={() => setFavsOnly((v) => !v)}
          className={`ml-auto inline-flex items-center gap-2 rounded-lg px-3.5 py-1.5 text-sm font-medium transition-all ${
            favsOnly
              ? 'bg-rose-500/20 text-rose-300 ring-1 ring-rose-400/40'
              : 'border border-white/8 bg-white/3 text-white/60 hover:text-white'
          }`}
        >
          <PiHeartFill className={favsOnly ? 'text-rose-400' : 'text-white/40'} />
          Favorites
        </button>
      </div>

      {list.length === 0 ? (
        <div className="flex flex-col items-center gap-2 rounded-2xl border border-dashed border-white/10 py-16 text-center">
          <PiMagnifyingGlassBold className="text-2xl text-white/30" />
          <p className="font-semibold">No champions found</p>
          <p className="text-sm text-white/45">Try another name, role or clear the filters.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">
          {list.map((c) => (
            <ChampionCard
              key={c.id}
              champion={c}
              isFavorite={favorites.has(c.id)}
              onToggleFavorite={favorites.toggle}
              onOpen={onOpen}
            />
          ))}
        </div>
      )}
    </section>
  )
}
