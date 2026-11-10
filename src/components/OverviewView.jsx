import { Hero } from './Hero'
import { StatsRow } from './StatsRow'
import { MatchHistory } from './MatchHistory'
import { FriendsPanel } from './FriendsPanel'
import { ChampionCard } from './ChampionCard'
import { champions } from '../data/champions'

const topMastery = [...champions]
  .sort((a, b) => b.mastery.points - a.mastery.points)
  .slice(0, 4)

export function OverviewView({ featured, stats, favorites, onOpen, onShuffle }) {
  return (
    <div className="flex flex-col gap-7">
      <Hero champion={featured} onOpen={onOpen} onShuffle={onShuffle} />
      <StatsRow stats={stats} />

      <div className="grid grid-cols-1 gap-7 xl:grid-cols-[1fr_320px]">
        <div className="flex flex-col gap-7">
          <section>
            <h3 className="mb-4 text-lg font-bold tracking-tight">Top mastery</h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {topMastery.map((c) => (
                <ChampionCard
                  key={c.id}
                  champion={c}
                  isFavorite={favorites.has(c.id)}
                  onToggleFavorite={favorites.toggle}
                  onOpen={onOpen}
                />
              ))}
            </div>
          </section>

          <section>
            <h3 className="mb-4 text-lg font-bold tracking-tight">Recent matches</h3>
            <MatchHistory limit={4} onOpen={onOpen} />
          </section>
        </div>

        <aside className="xl:sticky xl:top-8 xl:self-start">
          <FriendsPanel compact />
        </aside>
      </div>
    </div>
  )
}
