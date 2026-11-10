import { useMemo, useState } from 'react'
import { PiPaperPlaneRightFill, PiCheckBold, PiMagnifyingGlassBold } from 'react-icons/pi'
import { friends as ALL } from '../data/friends'
import { championSquare } from '../lib/ddragon'
import { useToast } from '../hooks/useToast'

export function FriendsPanel({ compact = false }) {
  const notify = useToast()
  const [query, setQuery] = useState('')
  const [onlineOnly, setOnlineOnly] = useState(false)
  const [invited, setInvited] = useState([])

  const list = useMemo(() => {
    const q = query.trim().toLowerCase()
    return ALL.filter(
      (f) => (!onlineOnly || f.online) && (!q || f.name.toLowerCase().includes(q)),
    )
  }, [query, onlineOnly])

  const invite = (f) => {
    if (invited.includes(f.id)) return
    setInvited((prev) => [...prev, f.id])
    notify(`Invite sent to ${f.name}`)
  }

  const onlineCount = ALL.filter((f) => f.online).length
  const rows = compact ? list.filter((f) => f.online).slice(0, 4) : list

  return (
    <section className="rounded-2xl border border-white/6 bg-panel/60 p-5">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-bold tracking-tight">Friends</h3>
        <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-xs font-medium text-emerald-400">
          {onlineCount} online
        </span>
      </div>

      {!compact && (
        <div className="mb-4 flex flex-col gap-2 sm:flex-row">
          <div className="flex flex-1 items-center gap-2 rounded-xl border border-white/8 bg-white/3 px-3 py-2 focus-within:border-accent/50">
            <PiMagnifyingGlassBold className="text-white/40" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search friends…"
              className="w-full bg-transparent text-sm outline-hidden placeholder:text-white/30"
            />
          </div>
          <button
            onClick={() => setOnlineOnly((v) => !v)}
            className={`rounded-xl px-3.5 py-2 text-sm font-medium transition-all ${
              onlineOnly
                ? 'bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-400/40'
                : 'border border-white/8 bg-white/3 text-white/60 hover:text-white'
            }`}
          >
            Online
          </button>
        </div>
      )}

      <ul className="flex flex-col gap-1">
        {rows.map((f) => (
          <li
            key={f.id}
            className="flex items-center gap-3 rounded-xl px-2 py-2 transition-colors hover:bg-white/4"
          >
            <div className="relative">
              <img
                src={championSquare(f.main)}
                alt={f.name}
                loading="lazy"
                className="h-10 w-10 rounded-full object-cover"
              />
              <span
                className={`absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full ring-2 ring-panel ${
                  f.online ? 'bg-emerald-400' : 'bg-white/25'
                }`}
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">
                {f.name} <span className="text-white/35">{f.tag}</span>
              </p>
              <p className="truncate text-xs text-white/40">{f.status}</p>
            </div>
            <button
              onClick={() => invite(f)}
              disabled={invited.includes(f.id)}
              aria-label={`Invite ${f.name}`}
              className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg transition-colors ${
                invited.includes(f.id)
                  ? 'text-emerald-400'
                  : 'text-white/45 hover:bg-accent/15 hover:text-accent'
              }`}
            >
              {invited.includes(f.id) ? <PiCheckBold /> : <PiPaperPlaneRightFill />}
            </button>
          </li>
        ))}
      </ul>

      {compact && (
        <p className="mt-3 text-center text-xs text-white/35">
          Open Friends to see everyone
        </p>
      )}
    </section>
  )
}
