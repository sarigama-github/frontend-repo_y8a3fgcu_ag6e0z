import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import WallpaperCard from './WallpaperCard'

const BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Gallery() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState('')
  const [premiumOnly, setPremiumOnly] = useState(false)

  const fetchWallpapers = async () => {
    setLoading(true)
    try {
      const params = new URLSearchParams()
      if (query) params.set('q', query)
      if (premiumOnly) params.set('is_premium', 'true')
      const res = await fetch(`${BASE_URL}/api/wallpapers?${params.toString()}`)
      const data = await res.json()
      setItems(data.items || [])
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  const handleDownload = async (id, device) => {
    try {
      const res = await fetch(`${BASE_URL}/api/wallpapers/${id}/download`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ device })
      })
      const data = await res.json()
      if (data.url) {
        window.open(data.url, '_blank')
      }
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    fetchWallpapers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section className="mt-8">
      <div className="mb-6">
        <SearchBar
          query={query}
          setQuery={setQuery}
          premiumOnly={premiumOnly}
          setPremiumOnly={setPremiumOnly}
          onSearch={fetchWallpapers}
        />
      </div>

      {loading ? (
        <div className="text-blue-200/80">Loading wallpapers...</div>
      ) : items.length === 0 ? (
        <div className="text-blue-200/80">No wallpapers found. Try a different search.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item) => (
            <WallpaperCard key={item.id} item={item} onDownload={handleDownload} />
          ))}
        </div>
      )}
    </section>
  )
}

export default Gallery
