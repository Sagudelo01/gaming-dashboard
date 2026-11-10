import { PiHeartFill, PiHeartStraight, PiStarFill } from 'react-icons/pi'
import { championSquare } from '../lib/ddragon'

export function ChampionCard({ champion, isFavorite, onToggleFavorite, onOpen }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/6 bg-panel/60 transition-all hover:-translate-y-1 hover:border-accent/40">
      <button
        onClick={() => onToggleFavorite(champion.id)}
        aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        className="absolute right-2.5 top-2.5 z-10 grid h-8 w-8 place-items-center rounded-full bg-black/40 text-white backdrop-blur transition-colors hover:bg-black/60"
      >
        {isFavorite ? (
          <PiHeartFill className="text-rose-400" />
        ) : (
          <PiHeartStraight className="text-white/70" />
        )}
      </button>

      <button onClick={() => onOpen(champion.id)} className="block w-full text-left">
        <div className="relative aspect-square overflow-hidden">
          <img
            src={championSquare(champion.id)}
            alt={champion.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-t from-panel via-panel/20 to-transparent" />
          <div className="absolute bottom-2 left-3 flex items-center gap-1 text-xs font-semibold text-gold">
            <PiStarFill /> {champion.mastery.level}
          </div>
        </div>

        <div className="p-3.5">
          <h4 className="font-semibold tracking-tight">{champion.name}</h4>
          <p className="truncate text-xs text-white/45">{champion.title}</p>
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {champion.roles.map((r) => (
              <span
                key={r}
                className="rounded-md bg-white/6 px-2 py-0.5 text-[11px] font-medium text-white/60"
              >
                {r}
              </span>
            ))}
          </div>
        </div>
      </button>
    </article>
  )
}
