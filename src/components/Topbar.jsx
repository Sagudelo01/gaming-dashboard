import { PiMagnifyingGlassBold, PiBellDuotone, PiXBold } from 'react-icons/pi'
import { useToast } from '../hooks/useToast'

const TITLES = {
  overview: 'Overview',
  champions: 'Champions',
  collection: 'Collection',
  friends: 'Friends',
  matches: 'Match history',
}

export function Topbar({ view, query, setQuery, onSearchFocus }) {
  const notify = useToast()

  return (
    <header className="flex items-center justify-between gap-4">
      <div>
        <p className="text-sm text-white/45">Welcome back, Summoner</p>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">{TITLES[view]}</h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 rounded-xl border border-white/8 bg-white/3 px-3.5 py-2.5 transition-colors focus-within:border-accent/50">
          <PiMagnifyingGlassBold className="text-white/40" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={onSearchFocus}
            placeholder="Search champions…"
            className="w-32 bg-transparent text-sm outline-hidden placeholder:text-white/30 sm:w-44"
          />
          {query && (
            <button onClick={() => setQuery('')} aria-label="Clear search">
              <PiXBold className="text-white/40 transition-colors hover:text-white" />
            </button>
          )}
        </div>
        <button
          onClick={() => notify('You have no new notifications')}
          className="relative grid h-11 w-11 place-items-center rounded-xl border border-white/8 bg-white/3 text-white/70 transition-all hover:border-accent/50 hover:text-white"
          aria-label="Notifications"
        >
          <PiBellDuotone />
          <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-accent ring-2 ring-ink" />
        </button>
      </div>
    </header>
  )
}
