import type { Metadata } from 'next'
import Link from 'next/link'
import { Wrench, GraduationCap, Rss, BookOpen, Lightbulb, Book, FileText, ALargeSmall, Cpu } from 'lucide-react'
import Newsletter from '@/components/Newsletter'
import AdBanner from '@/components/AdBanner'
import { OrbitIcon } from '@/components/Logo'

export const metadata: Metadata = {
  title: 'AIProSpace — #1 AI Tools & Resources Hub',
  description: 'Find the best AI tools, guides and courses — curated and reviewed by experts. 100% free, updated weekly.',
  openGraph: {
    title: 'AIProSpace — #1 AI Tools & Resources Hub',
    description: 'Find the best AI tools, guides and courses — curated and reviewed by experts. 100% free, updated weekly.',
    url: 'https://aiprospace.com',
  },
}

const CARDS = [
  { title: 'Tools',        href: '/tools/ai-writing-tools',       desc: 'Find the right tool for any task',          Icon: Wrench        },
  { title: 'Courses',      href: '/courses/chatgpt',              desc: 'Learn from top AI instructors',             Icon: GraduationCap },
  { title: 'Blog',         href: '/blog',                         desc: 'Latest AI news & in-depth reviews',         Icon: Rss           },
  { title: 'Guides',       href: '/guides',                       desc: 'Master popular AI tools step by step',      Icon: BookOpen      },
  { title: 'Resources',    href: '/resources',                    desc: 'Free ebooks & cheat sheets',                Icon: Lightbulb     },
  { title: 'Books',        href: '/books',                        desc: 'Best AI books curated & reviewed',          Icon: Book          },
  { title: 'Articles',     href: '/blog',                         desc: 'In-depth tutorials & analysis',             Icon: FileText      },
  { title: 'Glossary',     href: '/glossary',                     desc: 'Understand any AI term instantly',          Icon: ALargeSmall   },
  { title: 'AI Tools',     href: '/tools/ai-agent-builders',      desc: 'Automate your workflow with AI agents',     Icon: Cpu           },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'AIProSpace',
  url: 'https://aiprospace.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://aiprospace.com/tools/ai-writing-tools?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '64px 40px' }}>
        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
            <div className="logo-badge" style={{ width: 48, height: 48, borderRadius: 10 }}>
              <OrbitIcon size={22} />
            </div>
          </div>
          <h1 style={{ fontSize: 28, fontWeight: 700, color: 'var(--text)', marginBottom: 12, lineHeight: 1.3 }}>
            Welcome to AIProSpace
          </h1>
          <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.7, maxWidth: 480, margin: '0 auto 12px' }}>
            Your #1 resource hub for all things AI. Find the best tools, guides, and more — curated and reviewed by experts.
          </p>
          <p style={{ fontSize: 12, color: 'var(--muted)' }}>
            100% free · No affiliate links · Updated weekly
          </p>
        </div>

        <AdBanner />

        {/* 9-card grid */}
        <div className="home-grid" style={{ marginTop: 32 }}>
          {CARDS.map(card => (
            <Link key={card.href + card.title} href={card.href} className="card">
              <card.Icon size={18} style={{ color: 'var(--muted)', marginBottom: 8, flexShrink: 0 }} />
              <p className="card-title">{card.title}</p>
              <p className="card-desc">{card.desc}</p>
            </Link>
          ))}
        </div>

        <div style={{ marginTop: 40 }}><AdBanner /></div>

        <Newsletter />
      </div>
    </>
  )
}
