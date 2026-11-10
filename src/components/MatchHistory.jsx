import { championSquare } from '../lib/ddragon'
import { matches } from '../data/matches'
import { getChampion } from '../data/champions'

export function MatchHistory({ limit, onOpen }) {
  const rows = limit ? matches.slice(0, limit) : matches

  return (
    <ul className="flex flex-col gap-2.5">
      {rows.map((m) => {
        const win = m.result === 'win'
        const champ = getChampion(m.champion)
        return (
          <li
            key={m.id}
            className={`flex items-center gap-4 rounded-2xl border bg-panel/60 p-3.5 transition-all hover:-translate-y-0.5 ${
              win ? 'border-emerald-500/20 hover:border-emerald-400/40' : 'border-rose-500/20 hover:border-rose-400/40'
            }`}
          >
            <span className={`h-10 w-1 rounded-full ${win ? 'bg-emerald-400' : 'bg-rose-400'}`} />
            <button
              onClick={() => champ && onOpen(m.champion)}
              className="shrink-0"
              aria-label={m.champion}
            >
              <img
                src={championSquare(m.champion)}
                alt={m.champion}
                loading="lazy"
                className="h-11 w-11 rounded-xl object-cover transition-transform hover:scale-105"
              />
            </button>
            <div className="min-w-0 flex-1">
              <p className="font-semibold tracking-tight">
                {m.champion}{' '}
                <span className={`text-sm font-medium ${win ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {win ? 'Victory' : 'Defeat'}
                </span>
              </p>
              <p className="truncate text-xs text-white/45">
                {m.queue} · {m.duration} · {m.when}
              </p>
            </div>
            <div className="hidden text-right sm:block">
              <p className="text-sm font-bold">
                {m.kills}/{m.deaths}/{m.assists}
              </p>
              <p className="text-xs text-white/45">
                {((m.kills + m.assists) / Math.max(1, m.deaths)).toFixed(1)} KDA
              </p>
            </div>
            <div className="hidden text-right md:block">
              <p className="text-sm font-bold">{m.cs}</p>
              <p className="text-xs text-white/45">CS</p>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
