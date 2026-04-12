'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { Search, X } from 'lucide-react'
import { TOOL_CATEGORIES } from '@/data/tools'
import { GUIDES } from '@/data/guides'
import { GLOSSARY } from '@/data/glossary'
import { POSTS } from '@/data/blog'

type Result = { label: string; href: string; type: string }

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

  const allTools = TOOL_CATEGORIES.flatMap(cat =>
    cat.tools.map(t => ({ label: t.name, href: `/tools/${cat.slug}`, type: 'Tool' }))
  )

  const results: Result[] = q.length < 2 ? [] : [
    ...POSTS.filter(p => p.title.toLowerCase().includes(q)).slice(0, 3).map(p => ({
      label: p.title, href: `/blog/${p.slug}`, type: 'Blog',
    })),
    ...allTools.filter(t => t.label.toLowerCase().includes(q)).slice(0, 3),
    ...GUIDES.filter(g => g.title.toLowerCase().includes(q)).slice(0, 2).map(g => ({
      label: g.title, href: `/guides/${g.slug}`, type: 'Guide',
    })),
    ...GLOSSARY.filter(g => g.term.toLowerCase().includes(q)).slice(0, 2).map(g => ({
      label: g.term, href: `/glossary#${g.id}`, type: 'Glossary',
    })),
  ]

  useEffect(() => { setSelected(0) }, [query])

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === 'ArrowDown') { e.preventDefault(); setSelected(s => Math.min(s + 1, results.length - 1)) }
    if (e.key === 'ArrowUp')   { e.preventDefault(); setSelected(s => Math.max(s - 1, 0)) }
    if (e.key === 'Enter' && results[selected]) { router.push(results[selected].href); onClose() }
  }

  const typeColor = (type: string) => {
    const map: Record<string, string> = { Blog: '#888', Tool: '#888', Guide: '#888', Glossary: '#888' }
    return map[type] || '#888'
  }

  return (
    <div className="search-overlay" onClick={onClose}>
      <div className="search-box" style={{ margin: '0 16px' }} onClick={e => e.stopPropagation()}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px', borderBottom: '1px solid var(--border)' }}>
          <Search size={14} style={{ color: 'var(--muted)', flexShrink: 0 }} />
          <input
            ref={inputRef}
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Search tools, posts, guides, glossary..."
            style={{ flex: 1, background: 'none', border: 'none', outline: 'none', fontSize: 14, color: 'var(--text)', fontFamily: 'inherit' }}
          />
          {query
            ? <button onClick={() => setQuery('')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--muted)', display: 'flex' }}><X size={13} /></button>
            : <span style={{ fontSize: 11, border: '1px solid var(--border)', borderRadius: 4, padding: '1px 5px', color: 'var(--muted)' }}>ESC</span>
          }
        </div>
        {results.length > 0 ? (
          <ul style={{ listStyle: 'none', padding: '6px 0', maxHeight: 320, overflowY: 'auto' }}>
            {results.map((r, i) => (
              <li key={r.href + i}>
                <button
                  onClick={() => { router.push(r.href); onClose() }}
                  onMouseEnter={() => setSelected(i)}
                  style={{
                    width: '100%', display: 'flex', alignItems: 'center', gap: 10,
                    padding: '9px 16px', background: i === selected ? 'var(--hover-bg)' : 'none',
                    border: 'none', cursor: 'pointer', textAlign: 'left',
                  }}
                >
                  <span style={{ flex: 1, fontSize: 13, color: 'var(--text)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{r.label}</span>
                  <span style={{ fontSize: 10, color: typeColor(r.type), border: '1px solid var(--border)', borderRadius: 100, padding: '1px 7px', flexShrink: 0 }}>{r.type}</span>
                </button>
              </li>
            ))}
          </ul>
        ) : query.length >= 2 ? (
          <p style={{ padding: '24px 16px', fontSize: 13, color: 'var(--muted)', textAlign: 'center' }}>No results for &quot;{query}&quot;</p>
        ) : (
          <p style={{ padding: '24px 16px', fontSize: 12, color: 'var(--muted)', textAlign: 'center' }}>Type at least 2 characters to search</p>
        )}
      </div>
    </div>
  )
}
