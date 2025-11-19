import React from 'react'

function SearchBar({ query, setQuery, onSearch, premiumOnly, setPremiumOnly }) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center w-full">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by title, anime, or tags..."
        className="flex-1 bg-slate-800/60 border border-slate-700 text-white placeholder:text-slate-400 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <label className="flex items-center gap-2 text-blue-200/80 text-sm">
        <input type="checkbox" checked={premiumOnly} onChange={(e) => setPremiumOnly(e.target.checked)} />
        Premium only
      </label>
      <button
        onClick={onSearch}
        className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-semibold shadow-lg shadow-blue-600/20 transition"
      >
        Search
      </button>
    </div>
  )
}

export default SearchBar
