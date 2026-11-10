import { PiMagnifyingGlassDuotone, PiBellDuotone } from 'react-icons/pi'

export function Topbar() {
  return (
    <header className="flex items-center justify-between gap-4">
      <div>
        <p className="text-sm text-white/45">Bienvenido de vuelta 👋</p>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Panel de juego</h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.03] px-3.5 py-2.5 transition-colors focus-within:border-violet/40 sm:flex">
          <PiMagnifyingGlassDuotone className="text-white/40" />
          <input
            placeholder="Buscar juegos…"
            className="w-40 bg-transparent text-sm outline-none placeholder:text-white/30"
          />
        </div>
        <button className="relative grid h-11 w-11 place-items-center rounded-xl border border-white/[0.07] bg-white/[0.03] text-white/70 transition-all hover:border-violet/40 hover:text-white">
          <PiBellDuotone />
          <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-cyan ring-2 ring-ink" />
        </button>
      </div>
    </header>
  )
}
