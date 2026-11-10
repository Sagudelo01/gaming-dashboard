import { useState } from 'react'
import {
  PiSquaresFourDuotone,
  PiSwordDuotone,
  PiSparkleDuotone,
  PiUsersThreeDuotone,
  PiScrollDuotone,
  PiGearSixDuotone,
  PiListBold,
  PiXBold,
} from 'react-icons/pi'
import { Logo } from './Logo'

const NAV = [
  { id: 'overview', label: 'Overview', icon: PiSquaresFourDuotone },
  { id: 'champions', label: 'Champions', icon: PiSwordDuotone },
  { id: 'collection', label: 'Collection', icon: PiSparkleDuotone },
  { id: 'friends', label: 'Friends', icon: PiUsersThreeDuotone },
  { id: 'matches', label: 'Matches', icon: PiScrollDuotone },
]

function NavButton({ item, active, onClick }) {
  const Icon = item.icon
  return (
    <button
      onClick={onClick}
      className={`group relative flex w-full items-center gap-3.5 rounded-xl px-4 py-3 text-sm font-medium transition-all ${
        active ? 'bg-white/6 text-white' : 'text-white/55 hover:bg-white/4 hover:text-white'
      }`}
    >
      {active && (
        <span className="absolute left-0 top-1/2 h-5 w-1 -translate-y-1/2 rounded-r-full bg-accent" />
      )}
      <Icon className="text-lg transition-transform group-hover:scale-110" />
      {item.label}
    </button>
  )
}

export function Sidebar({ view, setView }) {
  const [open, setOpen] = useState(false)

  const go = (id) => {
    setView(id)
    setOpen(false)
  }

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-2xl bg-accent text-white shadow-lg shadow-accent/40 transition-transform active:scale-90 lg:hidden"
        aria-label="Menu"
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
        className={`fixed top-0 z-40 flex h-full w-72 flex-col justify-between border-r border-white/6 bg-panel/80 p-6 backdrop-blur-xl transition-all duration-300 ${
          open ? 'left-0' : '-left-full'
        } lg:left-0`}
      >
        <div>
          <div className="mb-10 flex items-center gap-3 px-2">
            <Logo className="h-9 w-9" />
            <span className="text-lg font-bold tracking-tight">
              Xen<span className="text-accent">Play</span>
            </span>
          </div>

          <nav className="flex flex-col gap-1">
            {NAV.map((item) => (
              <NavButton
                key={item.id}
                item={item}
                active={view === item.id}
                onClick={() => go(item.id)}
              />
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-1">
          <button className="flex w-full items-center gap-3.5 rounded-xl px-4 py-3 text-sm font-medium text-white/55 transition-all hover:bg-white/4 hover:text-white">
            <PiGearSixDuotone className="text-lg" />
            Settings
          </button>
          <div className="mt-3 flex items-center gap-3 rounded-2xl border border-white/6 bg-white/3 p-3">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-accent/20 text-sm font-bold text-accent">
              SA
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold">Santiago A.</p>
              <p className="truncate text-xs text-accent">Diamond IV · LAN</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
