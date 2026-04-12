import type { Metadata } from 'next'
import Link from 'next/link'
import { RESOURCES, RESOURCE_TYPES } from '@/data/resources'
import AdBanner from '@/components/AdBanner'

export const metadata: Metadata = {
  title: 'Free AI Resources — Ebooks, Cheat Sheets & Templates',
  description: 'Download free AI resources including ebooks, cheat sheets, prompt libraries and templates. No email required.',
  alternates: { canonical: 'https://aiprospace.com/resources' },
  openGraph: { title: 'Free AI Resources — Ebooks, Cheat Sheets & Templates', description: 'Free AI resources — no email required.' },
}

export default function ResourcesPage() {
  return (
    <div style={{ display: 'flex' }}>
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
        <h1 style={{ fontSize: 22, fontWeight: 700, color: 'var(--text)', marginBottom: 4 }}>Free Resources</h1>
        <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 24 }}>Download free — no email required</p>

        <AdBanner />

        <div style={{ marginTop: 24 }}>
          {RESOURCES.map(resource => (
            <div key={resource.id} className="resource-row">
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontWeight: 700, fontSize: 15, color: 'var(--text)', marginBottom: 4 }}>{resource.title}</p>
                <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.5 }}>{resource.description}</p>
                <span className="badge" style={{ marginTop: 8 }}>{resource.type}</span>
              </div>
              <a href={resource.url} className="btn btn-primary" style={{ flexShrink: 0 }}>
                Download Free →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
