'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Search } from 'lucide-react'
import Logo from './Logo'
import ThemeToggle from './ThemeToggle'
import SearchModal from './SearchModal'

const TABS = [
  { href: '/',          label: 'Welcome'   },
  { href: '/blog',      label: 'Blog'      },
  { href: '/tools',     label: 'Tools'     },
  { href: '/guides',    label: 'Guides'    },
  { href: '/resources', label: 'Resources' },
  { href: '/courses',   label: 'Courses'   },
  { href: '/glossary',  label: 'Glossary'  },
]

export default function Navbar() {
  const pathname = usePathname()
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        setSearchOpen(true)
      }
    }
    window.addEventListener('keydown', h)
    return () => window.removeEventListener('keydown', h)
  }, [])

  return (
    <>
      <header style={{ position: 'sticky', top: 0, zIndex: 50, background: 'var(--bg)', borderBottom: '1px solid var(--border)' }}>
        {/* Top row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, height: 56, padding: '0 24px', maxWidth: 1400, margin: '0 auto' }}>
          <Logo />
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <button
              onClick={() => setSearchOpen(true)}
              style={{
                display: 'flex', alignItems: 'center', gap: 8,
                background: 'var(--card-bg)', border: '1px solid var(--border)',
                borderRadius: 6, padding: '0 12px', height: 34,
                width: '100%', maxWidth: 400, cursor: 'pointer',
                fontSize: 13, color: 'var(--muted)', textAlign: 'left',
              }}
            >
              <Search size={13} style={{ flexShrink: 0 }} />
              <span style={{ flex: 1 }}>Search...</span>
              <span style={{ fontSize: 11, border: '1px solid var(--border)', borderRadius: 4, padding: '1px 5px', background: 'var(--bg)', color: 'var(--muted)' }}>⌘K</span>
            </button>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
            <Link href="/blog" style={{ fontSize: 13, color: 'var(--muted)', whiteSpace: 'nowrap' }}>
              Newsletter ›
            </Link>
            <ThemeToggle />
          </div>
        </div>
        {/* Tab row */}
        <div style={{ borderTop: '1px solid var(--border)' }}>
          <nav style={{ display: 'flex', alignItems: 'center', overflowX: 'auto', padding: '0 24px', maxWidth: 1400, margin: '0 auto', scrollbarWidth: 'none' }} className="no-scrollbar">
            {TABS.map(({ href, label }) => {
              const active = href === '/' ? pathname === '/' : pathname.startsWith(href)
              return (
                <Link key={href} href={href} className={`tab-item${active ? ' active' : ''}`}>
                  {label}
                </Link>
              )
            })}
          </nav>
        </div>
      </header>
      {searchOpen && <SearchModal onClose={() => setSearchOpen(false)} />}
    </>
  )
}
