import Link from 'next/link'

const LINKS = [
  { href: '/blog',      label: 'Blog'      },
  { href: '/tools',     label: 'Tools'     },
  { href: '/guides',    label: 'Guides'    },
  { href: '/resources', label: 'Resources' },
  { href: '/about',     label: 'About'     },
  { href: '/contact',   label: 'Contact'   },
]

export default function Footer() {
  return (
    <footer className="border-t border-border mt-16">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted">© {new Date().getFullYear()} AIProSpace. All rights reserved.</p>
        <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
          {LINKS.map(l => (
            <Link key={l.href} href={l.href} className="text-xs text-muted hover:text-tx transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  )
}
