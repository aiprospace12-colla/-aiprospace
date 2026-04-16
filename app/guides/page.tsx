import type { Metadata } from 'next'
import Link from 'next/link'
import { GUIDES, GUIDE_TOPICS } from '@/data/guides'
import { MobileSidebar } from '@/components/MobileSidebar'

export const metadata: Metadata = {
  title: 'Free AI Guides & Tutorials 2026 — ChatGPT, Claude, n8n & More | AIProSpace',
  description: 'Step-by-step AI guides for every skill level. Learn ChatGPT, Claude, Midjourney, n8n, and more — free, practical tutorials updated for 2026.',
  alternates: { canonical: 'https://aiprospace.com/guides' },
  openGraph: { title: 'Free AI Guides & Tutorials 2026 | AIProSpace', description: 'Step-by-step AI guides for ChatGPT, Claude, n8n, Midjourney and more. Free tutorials updated for 2026.' },
}

const DIFF_COLOR: Record<string, string> = {
  Beginner: 'var(--muted)',
  Intermediate: 'var(--muted)',
  Advanced: 'var(--muted)',
}

export default function GuidesPage() {
  const sidebarContent = (
    <div style={{ padding: '4px 12px 20px' }}>
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
    </div>
  )

  return (
    <div style={{ display: 'flex' }}>
      <MobileSidebar>{sidebarContent}</MobileSidebar>
      {/* Sidebar */}
      <aside style={{
        width: 240, flexShrink: 0, borderRight: '1px solid var(--border)',
        padding: '20px 12px', position: 'sticky', top: 97,
        height: 'calc(100vh - 97px)', overflowY: 'auto', background: 'var(--sidebar-bg)',
      }} className="hidden md:block">
        {sidebarContent}
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

        {/* FAQ */}
        <div style={{ marginTop: 48 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: 'var(--text)', marginBottom: 16 }}>Frequently Asked Questions</h2>
          {[
            { q: 'What AI tools do these guides cover?', a: 'Our guides cover the most popular AI tools in 2026: ChatGPT, Claude, Midjourney, n8n, Stable Diffusion, Perplexity, and more. We add new guides every month as new tools emerge.' },
            { q: 'Are these guides free?', a: 'Yes — all guides on AIProSpace are 100% free. No email required, no paywall, no hidden upsells. We earn through ads so you never have to pay to access our content.' },
            { q: 'How long does it take to complete a guide?', a: 'Most guides take 20–60 minutes to read through. Hands-on guides with exercises take longer depending on how much you practice. We recommend following along in real-time rather than just reading.' },
            { q: 'Are the guides updated for 2026?', a: 'Yes — all guides are reviewed and updated quarterly. AI tools change rapidly and we make sure our instructions reflect the current interface and capabilities of each tool.' },
          ].map(faq => (
            <details key={faq.q} className="faq-item">
              <summary className="faq-question">{faq.q}</summary>
              <p className="faq-answer">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  )
}
