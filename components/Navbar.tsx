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
  { href: '/books',     label: 'Books'     },
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
      <header className="navbar">
        {/* Top row */}
        <div className="navbar-top">
          {/* Left: Logo */}
          <Logo />

          {/* Center: Search */}
          <button className="navbar-search" onClick={() => setSearchOpen(true)}>
            <Search size={15} style={{ flexShrink: 0 }} />
            <span style={{ flex: 1, textAlign: 'left', fontSize: 14 }}>Search...</span>
            <span style={{
              fontSize: 11, fontWeight: 500, border: '1px solid var(--border)',
              borderRadius: 4, padding: '1px 5px', background: 'var(--hover-bg)', color: 'var(--muted)',
            }}>Ctrl K</span>
          </button>

          {/* Right */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexShrink: 0 }}>
            <Link href="/blog"
              className="navbar-newsletter"
              style={{ fontSize: 14, fontWeight: 500, color: 'var(--muted)', whiteSpace: 'nowrap' }}
              onMouseOver={e => ((e.target as HTMLElement).style.color = 'var(--text)')}
              onMouseOut={e => ((e.target as HTMLElement).style.color = 'var(--muted)')}
            >
              Newsletter ›
            </Link>
            <ThemeToggle />
          </div>
        </div>

        {/* Tab row */}
        <div className="navbar-tabs">
          <nav className="navbar-tabs-inner no-scrollbar">
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
