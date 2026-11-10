import { PiPlayFill, PiStarFill, PiUsersThreeFill } from 'react-icons/pi'
import { featured } from '../data'

export function Hero() {
  return (
    <section
      className={`rise relative overflow-hidden rounded-3xl bg-gradient-to-br ${featured.cover} p-8 sm:p-10`}
    >
      <div className="grid-bg absolute inset-0 opacity-40" />
      <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-white/20 blur-3xl" />

      <div className="relative">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-black/25 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/90 backdrop-blur">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan" />
          Destacado de la semana
        </span>

        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
          {featured.title}
        </h2>
        <p className="mt-1 text-white/80">{featured.genre}</p>

        <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-white/90">
          <span className="inline-flex items-center gap-1.5">
            <PiStarFill className="text-amber-300" /> {featured.rating}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <PiUsersThreeFill /> {featured.players} jugando
          </span>
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          <button className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-gray-900 shadow-lg transition-transform hover:scale-105 active:scale-95">
            <PiPlayFill /> Jugar ahora
          </button>
          <button className="rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20">
            Detalles
          </button>
        </div>
      </div>
    </section>
  )
}
