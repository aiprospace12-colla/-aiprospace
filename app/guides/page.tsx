import type { Metadata } from 'next'
import Link from 'next/link'
import { GUIDES, GUIDE_TOPICS } from '@/data/guides'

export const metadata: Metadata = {
  title: 'AI Guides — Step by Step Tutorials',
  description: 'Master AI tools with our step by step guides. From beginners to advanced — free tutorials for ChatGPT, Claude, n8n and more.',
  alternates: { canonical: 'https://aiprospace.com/guides' },
  openGraph: { title: 'AI Guides — Step by Step Tutorials', description: 'Free step-by-step AI tutorials for every skill level.' },
}

const DIFF_COLOR: Record<string, string> = {
  Beginner: 'var(--muted)',
  Intermediate: 'var(--muted)',
  Advanced: 'var(--muted)',
}

export default function GuidesPage() {
  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar */}
      <aside style={{
        width: 240, flexShrink: 0, borderRight: '1px solid var(--border)',
        padding: '20px 12px', position: 'sticky', top: 97,
        height: 'calc(100vh - 97px)', overflowY: 'auto', background: 'var(--sidebar-bg)',
      }} className="hidden md:block">
        <p style={{ fontWeight: 700, fontSize: 14, color: 'var(--text)', padding: '0 8px', marginBottom: 16 }}>Guides</p>
        <div style={{ height: 1, background: 'var(--border)', marginBottom: 16 }} />
        <span className="sidebar-label" style={{ marginBottom: 6 }}>BY TOPIC</span>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Link href="/guides" className="sidebar-item active">All Guides</Link>
          {GUIDE_TOPICS.map(topic => (
            <Link key={topic.slug} href={`/guides?topic=${topic.slug}`} className="sidebar-item">
              {topic.label}
            </Link>
          ))}
        </div>
      </aside>

      {/* Main */}
      <div style={{ flex: 1, padding: 40, maxWidth: 900, minWidth: 0 }}>
        <h1 style={{ fontSize: 22, fontWeight: 700, color: 'var(--text)', marginBottom: 4 }}>AI Guides</h1>
        <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 32 }}>Step by step tutorials for every skill level</p>

        <div className="guide-grid">
          {GUIDES.map(guide => (
            <Link key={guide.slug} href={`/guides/${guide.slug}`} className="card">
              <p className="card-title">{guide.title}</p>
              <p className="card-desc" style={{ marginBottom: 14 }}>{guide.description}</p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span className="badge" style={{ color: DIFF_COLOR[guide.difficulty] }}>{guide.difficulty}</span>
                <span style={{ fontSize: 12, color: 'var(--muted)' }}>{guide.readTime}</span>
              </div>
              <p style={{ fontSize: 13, color: 'var(--text)', marginTop: 12 }}>Read Guide →</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
