import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { GUIDES } from '@/data/guides'
import AdBanner from '@/components/AdBanner'

type Props = { params: { slug: string } }

export async function generateStaticParams() {
  return GUIDES.map(g => ({ slug: g.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const guide = GUIDES.find(g => g.slug === params.slug)
  if (!guide) return {}
  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    alternates: { canonical: `https://aiprospace.com/guides/${guide.slug}` },
    openGraph: { title: guide.metaTitle, description: guide.metaDescription },
  }
}

export default function GuideDetailPage({ params }: Props) {
  const guide = GUIDES.find(g => g.slug === params.slug)
  if (!guide) notFound()
  const others = GUIDES.filter(g => g.slug !== params.slug).slice(0, 6)

  return (
    <div style={{ display: 'flex' }}>
      <aside style={{
        width: 240, flexShrink: 0, borderRight: '1px solid var(--border)',
        padding: '20px 12px', position: 'sticky', top: 97,
        height: 'calc(100vh - 97px)', overflowY: 'auto', background: 'var(--sidebar-bg)',
      }} className="hidden md:block">
        <Link href="/guides" style={{ fontWeight: 700, fontSize: 14, color: 'var(--text)', padding: '0 8px', marginBottom: 16, display: 'block' }}>← All Guides</Link>
        <div style={{ height: 1, background: 'var(--border)', marginBottom: 16 }} />
        <span className="sidebar-label" style={{ marginBottom: 6 }}>MORE GUIDES</span>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {others.map(g => (
            <Link key={g.slug} href={`/guides/${g.slug}`}
              className={`sidebar-item${params.slug === g.slug ? ' active' : ''}`}
              style={{ fontSize: 13 }}>
              {g.title.slice(0, 32)}…
            </Link>
          ))}
        </div>
      </aside>

      <div style={{ flex: 1, padding: 40, maxWidth: 720, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'var(--muted)', marginBottom: 16 }}>
          <Link href="/">Home</Link><span>/</span>
          <Link href="/guides">Guides</Link><span>/</span>
          <span style={{ color: 'var(--text)' }}>{guide.topic}</span>
        </div>

        <h1 style={{ fontSize: 26, fontWeight: 700, color: 'var(--text)', lineHeight: 1.35, marginBottom: 12 }}>{guide.title}</h1>
        <div style={{ display: 'flex', gap: 10, marginBottom: 24, alignItems: 'center' }}>
          <span className="badge">{guide.difficulty}</span>
          <span className="badge">{guide.readTime}</span>
          <span style={{ fontSize: 12, color: 'var(--muted)' }}>By AIProSpace Team · Apr 2026</span>
        </div>
        <div style={{ height: 1, background: 'var(--border)', marginBottom: 24 }} />

        <AdBanner />

        <div className="prose" style={{ marginTop: 24 }}>
          <h2>Introduction</h2>
          <p>{guide.description} This guide walks through everything step by step, with real examples you can apply immediately.</p>
          <h2>What You&apos;ll Learn</h2>
          <p>By the end of this guide you&apos;ll have a solid foundation in {guide.topic.toLowerCase()} using AI tools, practical workflows you can adapt to your situation, and the knowledge to continue learning independently.</p>
          <h2>Getting Started</h2>
          <p>Before diving in, make sure you have access to the tools mentioned. Most have free tiers that are sufficient to follow along. We recommend working through the examples as you read rather than reading all at once.</p>
          <h2>Key Concepts</h2>
          <p>Understanding the fundamentals will help you apply these techniques beyond the specific examples in this guide. The principles remain consistent even as individual tools evolve.</p>
          <h2>Practical Application</h2>
          <p>The real value comes from applying these concepts to your actual work. After reading each section, take 10-15 minutes to try the technique on a real task you need to accomplish.</p>
          <h2>Next Steps</h2>
          <p>Once you&apos;ve worked through this guide, explore the related tools and resources in our <Link href="/tools/ai-writing-tools">Tools</Link> section and check out the <Link href="/courses/chatgpt">Courses</Link> for deeper learning.</p>
        </div>

        <div style={{ marginTop: 40 }}><AdBanner /></div>
      </div>
    </div>
  )
}
