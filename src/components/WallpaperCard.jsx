import React from 'react'

function Badge({ children, color = 'blue' }) {
  const map = {
    blue: 'bg-blue-500/20 text-blue-300 border-blue-400/30',
    amber: 'bg-amber-500/20 text-amber-300 border-amber-400/30',
    green: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/30'
  }
  return (
    <span className={`px-2 py-1 rounded-md border text-xs ${map[color]}`}>{children}</span>
  )
}

function WallpaperCard({ item, onDownload }) {
  return (
    <div className="group bg-slate-800/60 border border-slate-700 rounded-2xl overflow-hidden hover:border-blue-500/40 transition shadow hover:shadow-blue-500/10">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={item.thumbnail_url}
          alt={item.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
        />
        <div className="absolute top-2 left-2 flex gap-2">
          {item.is_premium && <Badge color="amber">Premium</Badge>}
          <Badge>{item.aspect_ratio || '4K'}</Badge>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between gap-2">
          <div>
            <h3 className="text-white font-semibold line-clamp-1">{item.title}</h3>
            <p className="text-blue-200/70 text-sm line-clamp-1">{item.anime}</p>
          </div>
          <div className="text-blue-200/70 text-sm">⬇ {item.downloads || 0}</div>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {item.tags && item.tags.slice(0, 3).map((t) => (
            <span key={t} className="text-xs text-blue-200/70">#{t}</span>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <button
            onClick={() => onDownload(item.id, 'mobile')}
            className="px-3 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-white text-sm"
          >
            Mobile
          </button>
          <button
            onClick={() => onDownload(item.id, 'desktop')}
            className="px-3 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm"
          >
            4K
          </button>
        </div>
      </div>
    </div>
  )
}

export default WallpaperCard
