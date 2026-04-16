import type { Metadata } from 'next'
import Link from 'next/link'
import { RESOURCES, RESOURCE_TYPES } from '@/data/resources'
import AdBanner from '@/components/AdBanner'
import DownloadGate from '@/components/DownloadGate'
import { MobileSidebar } from '@/components/MobileSidebar'

export const metadata: Metadata = {
  title: 'Free AI Resources — Ebooks, Cheat Sheets & Templates | AIProSpace',
  description: 'Download free AI resources: cheat sheets, prompt libraries, ebooks, and automation templates. Enter your email for instant access — no spam.',
  alternates: { canonical: 'https://aiprospace.com/resources' },
  openGraph: { title: 'Free AI Resources — Ebooks, Cheat Sheets & Templates | AIProSpace', description: 'Free AI cheat sheets, ebooks, prompt libraries and templates. Enter your email for instant access.' },
}

export default function ResourcesPage() {
  return (
    <div style={{ display: 'flex' }}>
      <MobileSidebar>
        <div style={{ padding: '4px 12px 20px' }}>
          <p style={{ fontWeight: 700, fontSize: 14, color: 'var(--text)', padding: '0 8px', marginBottom: 16 }}>Resources</p>
          <div style={{ height: 1, background: 'var(--border)', marginBottom: 16 }} />
          <span className="sidebar-label" style={{ marginBottom: 6 }}>BY TYPE</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {RESOURCE_TYPES.map(type => (
              <Link key={type} href="/resources" className={`sidebar-item${type === 'All' ? ' active' : ''}`}>
                {type === 'All' ? 'All Resources' : type}
              </Link>
            ))}
          </div>
        </div>
      </MobileSidebar>
      {/* Sidebar */}
      <aside style={{
        width: 240, flexShrink: 0, borderRight: '1px solid var(--border)',
        padding: '20px 12px', position: 'sticky', top: 97,
        height: 'calc(100vh - 97px)', overflowY: 'auto', background: 'var(--sidebar-bg)',
      }} className="hidden md:block">
        <p style={{ fontWeight: 700, fontSize: 14, color: 'var(--text)', padding: '0 8px', marginBottom: 16 }}>Resources</p>
        <div style={{ height: 1, background: 'var(--border)', marginBottom: 16 }} />
        <span className="sidebar-label" style={{ marginBottom: 6 }}>BY TYPE</span>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {RESOURCE_TYPES.map(type => (
            <Link key={type} href="/resources" className={`sidebar-item${type === 'All' ? ' active' : ''}`}>
              {type === 'All' ? 'All Resources' : type}
            </Link>
          ))}
        </div>
      </aside>

      {/* Main */}
      <div style={{ flex: 1, padding: 40, maxWidth: 860, minWidth: 0 }}>
        <h1 style={{ fontSize: 22, fontWeight: 700, color: 'var(--text)', marginBottom: 4 }}>Free AI Resources</h1>
        <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 24 }}>
          Cheat sheets, ebooks, and templates — free with your email address.
        </p>

        <AdBanner />

        <div style={{ marginTop: 24 }}>
          {RESOURCES.map(resource => (
            <div key={resource.id} className="resource-row" style={{ alignItems: 'flex-start' }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontWeight: 700, fontSize: 15, color: 'var(--text)', marginBottom: 4 }}>{resource.title}</p>
                <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.5 }}>{resource.description}</p>
                <span className="badge" style={{ marginTop: 8 }}>{resource.type}</span>
              </div>
              <DownloadGate
                resourceId={resource.id}
                filename={resource.filename}
                label="Download Free"
              />
            </div>
          ))}
        </div>

        <div style={{ marginTop: 48 }}>
          <AdBanner />
        </div>

        {/* FAQ */}
        <div style={{ marginTop: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: 'var(--text)', marginBottom: 16 }}>
            Frequently Asked Questions
          </h2>
          {[
            { q: 'Are these resources really free?', a: 'Yes — all resources are completely free. We ask for your email so we can send you the download link and occasional updates about new resources. You can unsubscribe at any time.' },
            { q: 'What format are the downloads?', a: 'All resources are delivered as PDF files, optimized for both screen reading and printing. They open in any standard PDF viewer.' },
            { q: 'Will I get spam after downloading?', a: 'No. We send the download link and a weekly digest of new AI tools and guides. Every email has a one-click unsubscribe link.' },
            { q: 'Can I share these resources with my team?', a: 'Yes — all resources are free to share internally within your organization. We just ask that you don\'t redistribute them commercially.' },
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
