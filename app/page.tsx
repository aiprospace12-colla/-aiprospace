import type { Metadata } from 'next'
import Link from 'next/link'
import { Wrench, BookOpen, GraduationCap, Download, Zap, TrendingUp, Play, FileText, BookMarked } from 'lucide-react'
import AdBanner from '@/components/AdBanner'
import Newsletter from '@/components/Newsletter'

export const metadata: Metadata = {
  title: 'AIProSpace — AI Tools, Guides & Resources',
  description: 'Your #1 resource hub for all things AI. Find the best tools, guides, and strategies — curated and reviewed by experts.',
}

const CARDS = [
  { icon: Wrench,        title: 'AI Tools',    desc: 'Find the right tool for any task',        href: '/tools'                   },
  { icon: BookOpen,      title: 'Blog',         desc: 'Latest AI news & in-depth reviews',       href: '/blog'                    },
  { icon: GraduationCap, title: 'Guides',       desc: 'Step by step AI tutorials',               href: '/guides'                  },
  { icon: Download,      title: 'Resources',    desc: 'Free ebooks & cheat sheets',              href: '/resources'               },
  { icon: Zap,           title: 'Automation',   desc: 'Automate your workflow with AI',          href: '/guides?topic=Automation' },
  { icon: TrendingUp,    title: 'Make Money',   desc: 'Earn online using AI tools',              href: '/guides?topic=Make+Money' },
  { icon: Play,          title: 'Courses',      desc: 'Learn from top AI instructors',           href: '/courses'                 },
  { icon: FileText,      title: 'Cheat Sheets', desc: 'Quick AI reference guides',               href: '/resources'               },
  { icon: BookMarked,    title: 'Glossary',     desc: 'Understand any AI term instantly',        href: '/glossary'                },
]

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Hero */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-5">
          <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-tx">
            <ellipse cx="12" cy="12" rx="10" ry="4" />
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-60 12 12)" />
            <circle cx="19" cy="9" r="1.5" fill="currentColor" stroke="none" />
          </svg>
        </div>
        <h1 className="text-[28px] font-bold text-tx mb-3">Welcome to AIProSpace</h1>
        <p className="text-base text-muted max-w-[500px] mx-auto leading-relaxed mb-3">
          Your #1 resource hub for all things AI. Find the best tools, guides, and strategies
          — curated and reviewed by experts.
        </p>
        <p className="text-[13px] text-muted">100% free · No affiliate links · Updated weekly</p>
      </div>

      <AdBanner height={90} />

      {/* Category grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-2">
        {CARDS.map(({ icon: Icon, title, desc, href }) => (
          <Link key={title} href={href} className="card group relative p-5">
            <div className="absolute top-4 right-4 text-muted text-base opacity-0 group-hover:opacity-100 transition-opacity">→</div>
            <Icon size={20} className="text-tx" />
            <p className="text-[15px] font-semibold text-tx mt-3 mb-1">{title}</p>
            <p className="text-[13px] text-muted">{desc}</p>
          </Link>
        ))}
      </div>

      <AdBanner height={90} />

      <Newsletter />
    </div>
  )
}
