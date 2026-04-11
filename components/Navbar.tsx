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
        {/* Top row: logo + search + right actions */}
        <div className="max-w-[1400px] mx-auto px-4 h-14 flex items-center gap-4">
          <Logo />

          {/* Center search */}
          <div className="flex-1 flex justify-center">
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 w-full max-w-md h-9 px-3 rounded-md border border-border bg-card text-muted text-sm hover:border-muted transition-colors text-left"
            >
              <Search size={14} className="flex-shrink-0" />
              <span className="flex-1 text-left">Search...</span>
              <kbd className="text-[10px] border border-border rounded px-1.5 py-0.5 bg-bg text-muted">Ctrl K</kbd>
            </button>
          </div>

          {/* Right */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <Link href="/blog" className="hidden sm:block text-sm text-muted hover:text-tx transition-colors whitespace-nowrap">
              Newsletter ›
            </Link>
            <ThemeToggle />
          </div>
        </div>

        {/* Tab row */}
        <div className="border-t border-border">
          <div className="max-w-[1400px] mx-auto px-4 flex items-center overflow-x-auto no-scrollbar">
            {TABS.map(({ href, label }) => {
              const active = href === '/' ? pathname === '/' : pathname.startsWith(href)
              return (
                <Link key={href} href={href} className={`tab-item ${active ? 'active' : ''}`}>
                  {label}
                </Link>
              )
            })}
          </div>
        </div>
      </header>

      {searchOpen && <SearchModal onClose={() => setSearchOpen(false)} />}
    </>
  )
}
