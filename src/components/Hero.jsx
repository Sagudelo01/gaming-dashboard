import { PiEyeDuotone, PiShuffleBold, PiStarFill } from 'react-icons/pi'
import { splash } from '../lib/ddragon'
import { RARITY_ORDER } from '../data/rarities'
import { RarityBadge } from './RarityBadge'

function bestSkin(champion) {
  return [...champion.skins].sort(
    (a, b) => RARITY_ORDER.indexOf(a.rarity) - RARITY_ORDER.indexOf(b.rarity),
  )[0]
}

export function Hero({ champion, onOpen, onShuffle }) {
  const skin = bestSkin(champion)

  return (
    <section className="rise relative overflow-hidden rounded-3xl border border-white/6">
      <img
        src={splash(champion.id, skin.num)}
        alt={`${skin.name} splash art`}
        className="absolute inset-0 h-full w-full object-cover object-top"
      />
      <div className="absolute inset-0 bg-linear-to-r from-ink via-ink/85 to-ink/30" />
      <div className="absolute inset-0 bg-linear-to-t from-ink to-transparent" />

      <div className="relative p-8 sm:p-10">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-black/35 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/90 backdrop-blur">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            Featured champion
          </span>
          <RarityBadge rarity={skin.rarity} />
        </div>

        <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-6xl">
          {champion.name}
        </h2>
        <p className="mt-1 text-lg text-white/70">{champion.title}</p>

        <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-white/85">
          <span className="inline-flex items-center gap-1.5 text-gold">
            <PiStarFill /> Mastery {champion.mastery.level}
          </span>
          <span>{champion.region}</span>
          <span>{champion.winRate}% win rate</span>
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          <button
            onClick={() => onOpen(champion.id)}
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-bold text-ink shadow-lg shadow-accent/30 transition-transform hover:scale-105 active:scale-95"
          >
            <PiEyeDuotone /> View champion
          </button>
          <button
            onClick={onShuffle}
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
          >
            <PiShuffleBold /> Shuffle
          </button>
        </div>
      </div>
    </section>
  )
}
