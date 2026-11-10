import { useEffect, useState } from 'react'
import {
  PiXBold,
  PiHeartFill,
  PiHeartStraight,
  PiStarFill,
} from 'react-icons/pi'
import { splash } from '../lib/ddragon'
import { getChampion } from '../data/champions'
import { RarityBadge } from './RarityBadge'
import { useToast } from '../hooks/useToast'

const MASTERY_MAX = 450_000

export function ChampionModal({ championId, onClose, favorites }) {
  const champion = getChampion(championId)
  const [skinIndex, setSkinIndex] = useState(0)
  const notify = useToast()

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  if (!champion) return null
  const skin = champion.skins[skinIndex]
  const fav = favorites.has(champion.id)
  const masteryPct = Math.min(100, Math.round((champion.mastery.points / MASTERY_MAX) * 100))

  return (
    <div
      className="fade-in fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-t-3xl border border-white/10 bg-panel sm:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-56 shrink-0 sm:h-72">
          <img
            src={splash(champion.id, skin.num)}
            alt={`${skin.name} splash art`}
            className="h-full w-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-linear-to-t from-panel via-panel/30 to-transparent" />

          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-black/50 text-white backdrop-blur transition-colors hover:bg-black/70"
          >
            <PiXBold />
          </button>

          <div className="absolute bottom-4 left-5 right-5">
            <RarityBadge rarity={skin.rarity} />
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white">{champion.name}</h2>
            <p className="text-sm text-white/70">{champion.title}</p>
          </div>
        </div>

        <div className="hide-scrollbar flex-1 overflow-y-auto p-5 sm:p-6">
          <div className="flex flex-wrap items-center gap-2">
            {champion.roles.map((r) => (
              <span key={r} className="rounded-md bg-white/6 px-2.5 py-1 text-xs font-medium text-white/70">
                {r}
              </span>
            ))}
            <span className="rounded-md bg-white/6 px-2.5 py-1 text-xs font-medium text-white/70">
              {champion.region}
            </span>
            <button
              onClick={() => {
                favorites.toggle(champion.id)
                notify(fav ? `Removed ${champion.name} from favorites` : `Added ${champion.name} to favorites`)
              }}
              className="ml-auto inline-flex items-center gap-2 rounded-lg border border-white/8 bg-white/3 px-3 py-1.5 text-sm font-medium transition-colors hover:border-rose-400/40"
            >
              {fav ? <PiHeartFill className="text-rose-400" /> : <PiHeartStraight />}
              {fav ? 'Favorited' : 'Favorite'}
            </button>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-3">
            <Stat label="Win rate" value={`${champion.winRate}%`} />
            <Stat label="Games" value={champion.games} />
            <Stat label="Avg KDA" value={champion.kda} />
          </div>

          <div className="mt-5 rounded-2xl border border-white/6 bg-white/3 p-4">
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="inline-flex items-center gap-1.5 font-semibold text-gold">
                <PiStarFill /> Mastery {champion.mastery.level}
              </span>
              <span className="text-white/50">{champion.mastery.points.toLocaleString()} pts</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/8">
              <div
                className="h-full rounded-full bg-linear-to-r from-accent to-gold"
                style={{ width: `${masteryPct}%` }}
              />
            </div>
          </div>

          <div className="mt-6">
            <h3 className="mb-3 text-sm font-semibold text-white/70">
              Skins · {champion.skins.length}
            </h3>
            <div className="grid grid-cols-4 gap-3">
              {champion.skins.map((s, i) => (
                <button
                  key={s.num}
                  onClick={() => setSkinIndex(i)}
                  className={`overflow-hidden rounded-xl border text-left transition-all ${
                    i === skinIndex
                      ? 'border-accent ring-1 ring-accent/50'
                      : 'border-white/6 hover:border-white/20'
                  }`}
                >
                  <div className="relative aspect-square">
                    <img
                      src={splash(champion.id, s.num)}
                      alt={s.name}
                      loading="lazy"
                      className="h-full w-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
                    <span className={`absolute bottom-1 left-1.5 h-2 w-2 rounded-full ${RARITY_DOT[s.rarity]}`} />
                  </div>
                </button>
              ))}
            </div>
            <p className="mt-2 text-sm text-white/60">{skin.name}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const RARITY_DOT = {
  common: 'bg-slate-300',
  epic: 'bg-sky-400',
  legendary: 'bg-orange-400',
  mythic: 'bg-fuchsia-400',
  ultimate: 'bg-amber-400',
}

function Stat({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/6 bg-white/3 p-3.5 text-center">
      <p className="text-xl font-bold tracking-tight">{value}</p>
      <p className="text-xs text-white/45">{label}</p>
    </div>
  )
}
