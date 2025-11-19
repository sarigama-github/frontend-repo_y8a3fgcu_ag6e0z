import React from 'react'
import Header from './components/Header'
import Gallery from './components/Gallery'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.12),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(168,85,247,0.1),transparent_30%),radial-gradient(circle_at_40%_80%,rgba(34,197,94,0.08),transparent_30%)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 pb-20">
        <Header />
        <Gallery />

        <footer className="mt-16 text-center text-blue-200/60 text-sm">
          4K mobile + desktop anime wallpapers • Built for speed
        </footer>
      </div>
    </div>
  )
}

export default App
