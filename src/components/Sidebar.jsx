import { useState } from 'react'
import {
  PiHouseSimpleDuotone,
  PiGameControllerDuotone,
  PiBookBookmarkDuotone,
  PiUsersFourDuotone,
  PiBroadcastDuotone,
  PiChartLineUpDuotone,
  PiGearSixDuotone,
  PiListBold,
  PiXBold,
} from 'react-icons/pi'

const MAIN = [
  { icon: PiHouseSimpleDuotone, label: 'Inicio', active: true },
  { icon: PiGameControllerDuotone, label: 'Juegos' },
  { icon: PiBookBookmarkDuotone, label: 'Biblioteca' },
  { icon: PiUsersFourDuotone, label: 'Amigos' },
  { icon: PiBroadcastDuotone, label: 'En vivo' },
  { icon: PiChartLineUpDuotone, label: 'Estadísticas' },
]

function NavLink({ icon: Icon, label, active }) {
  return (
    <a
      href="#"
      className={`group relative flex items-center gap-3.5 rounded-xl px-4 py-3 text-sm font-medium transition-all ${
        active
          ? 'bg-white/[0.06] text-white'
          : 'text-white/55 hover:bg-white/[0.04] hover:text-white'
      }`}
    >
      {active && (
        <span className="absolute left-0 top-1/2 h-5 w-1 -translate-y-1/2 rounded-r-full bg-gradient-to-b from-violet to-cyan" />
      )}
      <Icon className="text-lg transition-transform group-hover:scale-110" />
      {label}
    </a>
  )
}

export function Sidebar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-violet to-cyan text-white shadow-lg shadow-violet/40 transition-transform active:scale-90 lg:hidden"
        aria-label="Menú"
      >
        {open ? <PiXBold /> : <PiListBold />}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 z-40 flex h-full w-72 flex-col justify-between border-r border-white/[0.06] bg-panel/80 p-6 backdrop-blur-xl transition-all duration-300 ${
          open ? 'left-0' : '-left-full'
        } lg:left-0`}
      >
        <div>
          <div className="mb-10 flex items-center gap-3 px-2">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-violet to-cyan shadow-lg shadow-violet/30">
              <PiGameControllerDuotone className="text-xl text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight">
              NOVA<span className="text-violet">play</span>
            </span>
          </div>

          <nav className="flex flex-col gap-1">
            {MAIN.map((item) => (
              <NavLink key={item.label} {...item} />
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-1">
          <NavLink icon={PiGearSixDuotone} label="Ajustes" />
          <div className="mt-3 flex items-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-3">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-violet to-cyan text-sm font-bold text-white">
              SA
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold">Santiago A.</p>
              <p className="truncate text-xs text-violet">Nivel 72 · Élite</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
