'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { Search, X, ArrowRight } from 'lucide-react'
import { TOOL_CATEGORIES } from '@/data/tools'
import { GUIDES } from '@/data/guides'
import { GLOSSARY } from '@/data/glossary'
import { POSTS } from '@/data/blog'
import { COURSE_CATEGORIES } from '@/data/courses'
import { BOOKS } from '@/data/books'

type Result = { label: string; href: string; group: string }

function buildIndex(): Result[] {
  const results: Result[] = []
  POSTS.forEach(p => results.push({ label: p.title, href: `/blog/${p.slug}`, group: 'Blog' }))
  TOOL_CATEGORIES.forEach(cat => {
    cat.tools.forEach(t => results.push({ label: t.name, href: `/tools/${cat.slug}`, group: 'Tools' }))
  })
  COURSE_CATEGORIES.forEach(c => results.push({ label: c.h1, href: `/courses/${c.slug}`, group: 'Courses' }))
  GUIDES.forEach(g => results.push({ label: g.title, href: `/guides/${g.slug}`, group: 'Guides' }))
  GLOSSARY.forEach(g => results.push({ label: g.term, href: `/glossary#${g.id}`, group: 'Glossary' }))
  BOOKS.forEach(b => results.push({ label: b.title, href: `/books/ai-books#${b.slug}`, group: 'Books' }))
  return results
}

const INDEX = buildIndex()

export default function SearchModal({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(0)
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => { inputRef.current?.focus() }, [])
  useEffect(() => {
    const h = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', h)
    return () => window.removeEventListener('keydown', h)
  }, [onClose])

  const q = query.toLowerCase().trim()
  const filtered = q.length < 2 ? [] : INDEX.filter(r => r.label.toLowerCase().includes(q)).slice(0, 12)

  // Group results
  const groups: Record<string, Result[]> = {}
  filtered.forEach(r => {
    if (!groups[r.group]) groups[r.group] = []
    groups[r.group].push(r)
  })

  const flat = Object.values(groups).flat()

  useEffect(() => { setSelected(0) }, [query])

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === 'ArrowDown') { e.preventDefault(); setSelected(s => Math.min(s + 1, flat.length - 1)) }
    if (e.key === 'ArrowUp') { e.preventDefault(); setSelected(s => Math.max(s - 1, 0)) }
    if (e.key === 'Enter' && flat[selected]) { router.push(flat[selected].href); onClose() }
  }

  let globalIdx = 0

  return (
    <div className="search-overlay" onClick={onClose}>
      <div className="search-box" style={{ margin: '0 16px' }} onClick={e => e.stopPropagation()}>
        {/* Input */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 16px', borderBottom: '1px solid var(--border)' }}>
          <Search size={16} style={{ color: 'var(--muted)', flexShrink: 0 }} />
          <input
            ref={inputRef}
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Search tools, courses, guides..."
            style={{ flex: 1, background: 'none', border: 'none', outline: 'none', fontSize: 16, color: 'var(--text)', fontFamily: 'inherit' }}
          />
          {query
            ? <button onClick={() => setQuery('')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--muted)', display: 'flex' }}><X size={14} /></button>
            : <span style={{ fontSize: 11, border: '1px solid var(--border)', borderRadius: 4, padding: '1px 5px', color: 'var(--muted)' }}>ESC</span>
          }
        </div>

        {/* Results */}
        <div style={{ maxHeight: 380, overflowY: 'auto' }}>
          {filtered.length > 0 ? (
            Object.entries(groups).map(([group, items]) => (
              <div key={group}>
                <span className="search-group-label">{group}</span>
                {items.map(r => {
                  const idx = globalIdx++
                  return (
                    <button
                      key={r.href + r.label}
                      onClick={() => { router.push(r.href); onClose() }}
                      onMouseEnter={() => setSelected(idx)}
                      style={{
                        width: '100%', display: 'flex', alignItems: 'center', gap: 10,
                        padding: '9px 16px', background: idx === selected ? 'var(--hover-bg)' : 'none',
                        border: 'none', cursor: 'pointer', textAlign: 'left',
                      }}
                    >
                      <span style={{ flex: 1, fontSize: 14, color: 'var(--text)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{r.label}</span>
                      <ArrowRight size={13} style={{ color: 'var(--muted)', flexShrink: 0 }} />
                    </button>
                  )
                })}
              </div>
            ))
          ) : query.length >= 2 ? (
            <p style={{ padding: '28px 16px', fontSize: 14, color: 'var(--muted)', textAlign: 'center' }}>
              No results for &quot;{query}&quot;
            </p>
          ) : (
            <p style={{ padding: '28px 16px', fontSize: 13, color: 'var(--muted)', textAlign: 'center' }}>
              Type at least 2 characters to search
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
