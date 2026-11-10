import {
  PiClockDuotone,
  PiTrophyDuotone,
  PiLightningDuotone,
  PiUsersFourDuotone,
} from 'react-icons/pi'
import { stats } from '../data'

const ICONS = {
  clock: PiClockDuotone,
  trophy: PiTrophyDuotone,
  bolt: PiLightningDuotone,
  users: PiUsersFourDuotone,
}

export function StatsRow() {
  return (
    <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {stats.map((s, i) => {
        const Icon = ICONS[s.icon]
        return (
          <div
            key={s.label}
            className="rise group rounded-2xl border border-white/[0.06] bg-panel/60 p-5 transition-all hover:-translate-y-1 hover:border-violet/30"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className="flex items-center justify-between">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-violet/15 text-violet transition-colors group-hover:bg-violet/25">
                <Icon className="text-lg" />
              </div>
              <span className="rounded-full bg-white/[0.05] px-2 py-0.5 text-xs font-medium text-cyan">
                {s.delta}
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
