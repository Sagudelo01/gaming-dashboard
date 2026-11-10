import { PiPlayFill } from 'react-icons/pi'
import { library } from '../data'

function GameCard({ game }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/[0.06] bg-panel/60 transition-all hover:-translate-y-1 hover:border-violet/30">
      <div className={`relative h-28 bg-gradient-to-br ${game.cover}`}>
        <div className="grid-bg absolute inset-0 opacity-30" />
        <button className="absolute inset-0 grid place-items-center opacity-0 transition-opacity group-hover:opacity-100">
          <span className="grid h-12 w-12 place-items-center rounded-full bg-white/90 text-gray-900 shadow-lg transition-transform group-hover:scale-110">
            <PiPlayFill />
          </span>
        </button>
      </div>
      <div className="p-4">
        <h4 className="font-semibold tracking-tight">{game.title}</h4>
        <p className="text-xs text-white/45">{game.genre}</p>
        <div className="mt-3 flex items-center gap-2">
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/[0.08]">
            <div
              className="h-full rounded-full bg-gradient-to-r from-violet to-cyan"
              style={{ width: `${game.progress}%` }}
            />
          </div>
          <span className="text-xs font-medium text-white/50">{game.progress}%</span>
        </div>
      </div>
    </article>
  )
}

export function Library() {
  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-bold tracking-tight">Tu biblioteca</h3>
        <a href="#" className="text-sm font-medium text-violet transition-colors hover:text-cyan">
          Ver todo
        </a>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {library.map((g) => (
          <GameCard key={g.title} game={g} />
        ))}
      </div>
    </section>
  )
}
