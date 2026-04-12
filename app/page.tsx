import type { Metadata } from 'next'
import Link from 'next/link'
import Newsletter from '@/components/Newsletter'
import AdBanner from '@/components/AdBanner'

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
  { title: 'Tools',        href: '/tools/ai-writing-tools',           desc: 'Find the right tool for any task'           },
  { title: 'Blog',         href: '/blog',                              desc: 'Latest AI news & in-depth reviews'          },
  { title: 'Guides',       href: '/guides',                            desc: 'Master popular AI tools step by step'       },
  { title: 'Resources',    href: '/resources',                         desc: 'Free ebooks & cheat sheets'                 },
  { title: 'Automation',   href: '/tools/ai-automation-tools',         desc: 'Automate your workflow with AI'             },
  { title: 'Make Money',   href: '/blog/make-money-ai-tools-2026',     desc: 'Earn online using AI tools'                 },
  { title: 'Courses',      href: '/courses/chatgpt',                   desc: 'Learn from top AI instructors'              },
  { title: 'Cheat Sheets', href: '/resources',                         desc: 'Get quick answers at a glance'              },
  { title: 'Glossary',     href: '/glossary',                          desc: 'Understand any AI term instantly'           },
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
          <svg viewBox="0 0 24 24" width="32" height="32" style={{ color: 'var(--text)', margin: '0 auto 20px' }}>
            <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.5"/>
            <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 12 12)"/>
            <circle cx="19" cy="9" r="1.5" fill="currentColor"/>
          </svg>
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
              <p className="card-title">{card.title}</p>
              <p className="card-desc">{card.desc}</p>
            </Link>
          ))}
        </div>

        <AdBanner className="mt-8" />

        <Newsletter />
      </div>
    </>
  )
}
