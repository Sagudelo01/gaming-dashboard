import { Sidebar } from './components/Sidebar'
import { Topbar } from './components/Topbar'
import { Hero } from './components/Hero'
import { StatsRow } from './components/StatsRow'
import { Library } from './components/Library'
import { FriendsPanel } from './components/FriendsPanel'

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-white/90">
      <Sidebar />

      <main className="px-5 py-6 sm:px-8 lg:ml-72 lg:px-10 lg:py-8">
        <Topbar />

        <div className="mt-7 grid grid-cols-1 gap-7 xl:grid-cols-[1fr_320px]">
          <div className="flex flex-col gap-7">
            <Hero />
            <StatsRow />
            <Library />
          </div>

          <aside className="xl:sticky xl:top-8 xl:self-start">
            <FriendsPanel />
          </aside>
        </div>
      </main>
    </div>
  )
}
