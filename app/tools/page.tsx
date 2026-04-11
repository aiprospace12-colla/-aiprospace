'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Star } from 'lucide-react'
import { TOOLS, TOOL_CATEGORIES, PRICE_FILTERS } from '@/data/tools'

export default function ToolsPage() {
  const [activeCategory, setActiveCategory] = useState('All Tools')
  const [activePrice, setActivePrice] = useState('All')

  const filtered = TOOLS.filter(t => {
    const matchCat  = activeCategory === 'All Tools' || t.category === activeCategory
    const matchPrice = activePrice === 'All' || t.price === activePrice
    return matchCat && matchPrice
  })

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex gap-12">
        {/* Sidebar */}
        <aside className="hidden md:block w-48 flex-shrink-0">
          <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">Category</p>
          <div className="flex flex-col gap-0.5 mb-6">
            {TOOL_CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`sidebar-item ${activeCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
          <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">Price</p>
          <div className="flex flex-col gap-0.5">
            {PRICE_FILTERS.map(p => (
              <button
                key={p}
                onClick={() => setActivePrice(p)}
                className={`sidebar-item ${activePrice === p ? 'active' : ''}`}
              >
                {p}
              </button>
            ))}
          </div>
        </aside>

        {/* Main */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-lg font-bold text-tx">AI Tools Directory</h1>
            <span className="text-xs text-muted">{filtered.length} tools</span>
          </div>

          {/* Table header */}
          <div className="hidden sm:grid grid-cols-[1fr_120px_80px_100px] gap-4 px-3 py-2 text-xs font-semibold text-muted uppercase tracking-wider border-b border-border mb-1">
            <span>Tool</span>
            <span>Category</span>
            <span>Price</span>
            <span>Rating</span>
          </div>

          {/* Rows */}
          <div>
            {filtered.map(tool => (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="grid sm:grid-cols-[1fr_120px_80px_100px] gap-4 items-center px-3 py-3 border-b border-border hover:bg-hover transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-md bg-card border border-border flex items-center justify-center text-xs font-bold text-tx flex-shrink-0">
                    {tool.logo}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-tx group-hover:underline underline-offset-2">{tool.name}</p>
                    <p className="text-xs text-muted leading-snug line-clamp-1 hidden sm:block">{tool.description}</p>
                  </div>
                </div>
                <span className="hidden sm:inline text-xs text-muted">{tool.category}</span>
                <span className="hidden sm:inline">
                  <span className="badge">{tool.price}</span>
                </span>
                <div className="hidden sm:flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={11}
                      className={i < tool.rating ? 'fill-tx text-tx' : 'text-border'}
                      fill={i < tool.rating ? 'currentColor' : 'none'}
                    />
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
