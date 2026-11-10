import { useState } from 'react'
import { Sidebar } from './components/Sidebar'
import { Topbar } from './components/Topbar'
import { OverviewView } from './components/OverviewView'
import { ChampionsView } from './components/ChampionsView'
import { CollectionView } from './components/CollectionView'
import { FriendsPanel } from './components/FriendsPanel'
import { MatchHistory } from './components/MatchHistory'
import { ChampionModal } from './components/ChampionModal'
import { ToastProvider } from './components/ToastProvider'
import { useFavorites } from './hooks/useFavorites'
import { champions, getChampion } from './data/champions'

function buildStats() {
  const totalMastery = champions.reduce((s, c) => s + c.mastery.points, 0)
  const skins = champions.reduce((s, c) => s + c.skins.filter((k) => k.num !== 0).length, 0)
  const winRate = Math.round(
    champions.reduce((s, c) => s + c.winRate, 0) / champions.length,
  )
  return [
    { label: 'Mastery score', value: `${(totalMastery / 1_000_000).toFixed(1)}M`, tag: 'season', icon: 'star' },
    { label: 'Champions', value: champions.length, tag: 'owned', icon: 'sword' },
    { label: 'Skins', value: skins, tag: 'unlocked', icon: 'sparkle' },
    { label: 'Win rate', value: `${winRate}%`, tag: 'ranked', icon: 'trophy' },
  ]
}

const STATS = buildStats()

export default function App() {
  const [view, setView] = useState('overview')
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(null)
  const [featuredId, setFeaturedId] = useState('Ahri')
  const favorites = useFavorites()

  const featured = getChampion(featuredId)

  const shuffle = () => {
    const pool = champions.filter((c) => c.id !== featuredId)
    setFeaturedId(pool[Math.floor(Math.random() * pool.length)].id)
  }

  const openSearch = () => view !== 'champions' && setView('champions')

  return (
    <ToastProvider>
      <div className="min-h-screen bg-ink text-white/90">
        <Sidebar view={view} setView={setView} />

        <main className="px-5 py-6 sm:px-8 lg:ml-72 lg:px-10 lg:py-8">
          <Topbar view={view} query={query} setQuery={setQuery} onSearchFocus={openSearch} />

          <div className="mt-7">
            {view === 'overview' && (
              <OverviewView
                featured={featured}
                stats={STATS}
                favorites={favorites}
                onOpen={setSelected}
                onShuffle={shuffle}
              />
            )}
            {view === 'champions' && (
              <ChampionsView query={query} favorites={favorites} onOpen={setSelected} />
            )}
            {view === 'collection' && <CollectionView onOpen={setSelected} />}
            {view === 'friends' && (
              <div className="mx-auto max-w-2xl">
                <FriendsPanel />
              </div>
            )}
            {view === 'matches' && <MatchHistory onOpen={setSelected} />}
          </div>
        </main>

        {selected && (
          <ChampionModal
            key={selected}
            championId={selected}
            favorites={favorites}
            onClose={() => setSelected(null)}
          />
        )}
      </div>
    </ToastProvider>
  )
}
