'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle'
import SearchModal from './SearchModal'
import { Search, Menu, X } from 'lucide-react'

const NAV = [
  { href: '/',          label: 'Home'      },
  { href: '/blog',      label: 'Blog'      },
  { href: '/tools',     label: 'Tools'     },
  { href: '/guides',    label: 'Guides'    },
  { href: '/resources', label: 'Resources' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [searchOpen, setSearchOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        setSearchOpen(true)
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return (
    <>
      <header className="sticky top-0 z-40 bg-bg border-b border-border">
        <div className="max-w-6xl mx-auto px-4 h-12 flex items-center justify-between gap-4">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0 font-bold text-sm text-tx">
            AIProSpace
          </Link>

          {/* Center nav — desktop */}
          <nav className="hidden md:flex items-center gap-0.5">
            {NAV.map(({ href, label }) => {
              const active = href === '/' ? pathname === '/' : pathname.startsWith(href)
              return (
                <Link key={href} href={href} className={`nav-item ${active ? 'active' : ''}`}>
                  {label}
                </Link>
              )
            })}
          </nav>

          {/* Right — search + theme */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={() => setSearchOpen(true)}
              className="hidden md:flex items-center gap-2 px-3 h-7 rounded-md border border-border bg-card text-muted text-xs hover:border-muted transition-colors"
            >
              <Search size={12} />
              <span>Search</span>
              <span className="ml-2 text-[10px] opacity-50">Ctrl K</span>
            </button>
            <button
              onClick={() => setSearchOpen(true)}
              className="md:hidden flex items-center justify-center w-7 h-7 rounded-md text-muted hover:text-tx hover:bg-hover"
            >
              <Search size={15} />
            </button>
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex items-center justify-center w-7 h-7 rounded-md text-muted hover:text-tx hover:bg-hover"
            >
              {mobileOpen ? <X size={15} /> : <Menu size={15} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border bg-bg px-4 py-3 flex flex-col gap-1">
            {NAV.map(({ href, label }) => {
              const active = href === '/' ? pathname === '/' : pathname.startsWith(href)
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={`nav-item w-full ${active ? 'active' : ''}`}
                >
                  {label}
                </Link>
              )
            })}
          </div>
        )}
      </header>

      {searchOpen && <SearchModal onClose={() => setSearchOpen(false)} />}
    </>
  )
}
