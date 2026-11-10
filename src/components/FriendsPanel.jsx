import { friends } from '../data'

export function FriendsPanel() {
  return (
    <section className="rounded-2xl border border-white/[0.06] bg-panel/60 p-5">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-bold tracking-tight">Amigos</h3>
        <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-xs font-medium text-emerald-400">
          {friends.filter((f) => f.online).length} en línea
        </span>
      </div>

      <ul className="flex flex-col gap-1">
        {friends.map((f) => (
          <li
            key={f.name}
            className="flex items-center gap-3 rounded-xl px-2 py-2 transition-colors hover:bg-white/[0.04]"
          >
            <div className="relative">
              <div
                className={`grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br ${f.avatar} text-sm font-bold text-white`}
              >
                {f.name[0]}
              </div>
              <span
                className={`absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full ring-2 ring-panel ${
                  f.online ? 'bg-emerald-400' : 'bg-white/25'
                }`}
              />
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-medium">{f.name}</p>
              <p className="truncate text-xs text-white/40">{f.game}</p>
            </div>
          </li>
        ))}
      </ul>

      <button className="mt-4 w-full rounded-xl border border-white/[0.08] py-2.5 text-sm font-medium text-white/70 transition-colors hover:border-violet/40 hover:text-white">
        Invitar amigos
      </button>
    </section>
  )
}
