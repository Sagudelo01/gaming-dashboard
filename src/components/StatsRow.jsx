import {
  PiStarDuotone,
  PiSwordDuotone,
  PiSparkleDuotone,
  PiTrophyDuotone,
} from 'react-icons/pi'

const ICONS = {
  star: PiStarDuotone,
  sword: PiSwordDuotone,
  sparkle: PiSparkleDuotone,
  trophy: PiTrophyDuotone,
}

export function StatsRow({ stats }) {
  return (
    <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {stats.map((s, i) => {
        const Icon = ICONS[s.icon]
        return (
          <div
            key={s.label}
            className="rise group rounded-2xl border border-white/6 bg-panel/60 p-5 transition-all hover:-translate-y-1 hover:border-accent/30"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className="flex items-center justify-between">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent/15 text-accent transition-colors group-hover:bg-accent/25">
                <Icon className="text-lg" />
              </div>
              <span className="rounded-full bg-white/5 px-2 py-0.5 text-xs font-medium text-gold">
                {s.tag}
              </span>
            </div>
            <p className="mt-4 text-2xl font-bold tracking-tight">{s.value}</p>
            <p className="text-sm text-white/45">{s.label}</p>
          </div>
        )
      })}
    </section>
  )
}
