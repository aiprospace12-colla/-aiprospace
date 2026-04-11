'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { Search, FileText, Wrench, BookOpen, X } from 'lucide-react'
import { TOOLS } from '@/data/tools'
import { GUIDES } from '@/data/guides'

const POSTS = [
  { slug: 'best-ai-writing-tools-2026',        title: '10 Best AI Writing Tools in 2026 (Free & Paid)',           type: 'Blog' },
  { slug: 'automate-social-media-n8n-guide',   title: 'How to Automate Social Media with n8n',                   type: 'Blog' },
  { slug: 'chatgpt-vs-claude-vs-gemini-2026',  title: 'ChatGPT vs Claude vs Gemini: Full Comparison 2026',       type: 'Blog' },
  { slug: 'beginners-guide-ai-tools-2026',     title: "Complete Beginner's Guide to AI Tools in 2026",           type: 'Blog' },
  { slug: 'use-ai-save-time-productivity',     title: 'How to Use AI to Save 10 Hours Per Week',                 type: 'Blog' },
]

type Result = { label: string; href: string; type: string }

export default function SearchModal({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(0)
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => { inputRef.current?.focus() }, [])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  const q = query.toLowerCase().trim()
  const results: Result[] = q.length < 2 ? [] : [
    ...POSTS.filter(p => p.title.toLowerCase().includes(q)).slice(0, 3).map(p => ({
      label: p.title, href: `/blog/${p.slug}`, type: 'Post',
    })),
    ...TOOLS.filter(t => t.name.toLowerCase().includes(q) || t.description.toLowerCase().includes(q)).slice(0, 3).map(t => ({
      label: t.name, href: `/tools/${t.slug}`, type: 'Tool',
    })),
    ...GUIDES.filter(g => g.title.toLowerCase().includes(q)).slice(0, 3).map(g => ({
      label: g.title, href: `/guides/${g.slug}`, type: 'Guide',
    })),
  ]

  useEffect(() => { setSelected(0) }, [query])

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === 'ArrowDown') { e.preventDefault(); setSelected(s => Math.min(s + 1, results.length - 1)) }
    if (e.key === 'ArrowUp')   { e.preventDefault(); setSelected(s => Math.max(s - 1, 0)) }
    if (e.key === 'Enter' && results[selected]) { router.push(results[selected].href); onClose() }
  }

  const icon = (type: string) => {
    if (type === 'Post') return <FileText size={13} className="text-muted flex-shrink-0" />
    if (type === 'Tool') return <Wrench size={13} className="text-muted flex-shrink-0" />
    return <BookOpen size={13} className="text-muted flex-shrink-0" />
  }

  return (
    <div className="search-overlay" onClick={onClose}>
      <div className="search-box mx-4" onClick={e => e.stopPropagation()}>
        {/* Input */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
          <Search size={15} className="text-muted flex-shrink-0" />
          <input
            ref={inputRef}
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Search posts, tools, guides..."
            className="flex-1 bg-transparent outline-none text-sm text-tx placeholder:text-muted"
          />
          {query && (
            <button onClick={() => setQuery('')} className="text-muted hover:text-tx">
              <X size={13} />
            </button>
          )}
          <kbd className="text-[10px] text-muted border border-border rounded px-1.5 py-0.5">ESC</kbd>
        </div>

        {/* Results */}
        {results.length > 0 ? (
          <ul className="py-2 max-h-80 overflow-y-auto">
            {results.map((r, i) => (
              <li key={r.href}>
                <button
                  onClick={() => { router.push(r.href); onClose() }}
                  onMouseEnter={() => setSelected(i)}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                    i === selected ? 'bg-hover' : ''
                  }`}
                >
                  {icon(r.type)}
                  <span className="text-sm text-tx flex-1 truncate">{r.label}</span>
                  <span className="text-[10px] text-muted border border-border rounded px-1.5 py-0.5 flex-shrink-0">{r.type}</span>
                </button>
              </li>
            ))}
          </ul>
        ) : query.length >= 2 ? (
          <p className="px-4 py-6 text-sm text-muted text-center">No results for &quot;{query}&quot;</p>
        ) : (
          <p className="px-4 py-6 text-xs text-muted text-center">Type at least 2 characters to search</p>
        )}
      </div>
    </div>
  )
}
