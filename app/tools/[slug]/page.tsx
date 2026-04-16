import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { TOOL_CATEGORIES, SIDEBAR_POPULAR, SIDEBAR_MORE } from '@/data/tools'
import AdBanner from '@/components/AdBanner'
import { MobileSidebar } from '@/components/MobileSidebar'

type Props = { params: { slug: string } }

export async function generateStaticParams() {
  return TOOL_CATEGORIES.map(c => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cat = TOOL_CATEGORIES.find(c => c.slug === params.slug)
  if (!cat) return {}
  return {
    title: cat.metaTitle,
    description: cat.metaDescription,
    alternates: { canonical: `https://aiprospace.com/tools/${cat.slug}` },
    openGraph: { title: cat.metaTitle, description: cat.metaDescription, url: `https://aiprospace.com/tools/${cat.slug}` },
  }
}

export default function ToolCategoryPage({ params }: Props) {
  const cat = TOOL_CATEGORIES.find(c => c.slug === params.slug)
  if (!cat) notFound()

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: cat.h1,
    numberOfItems: cat.tools.length,
    itemListElement: cat.tools.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: t.name,
      url: t.url,
    })),
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: cat.faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div style={{ display: 'flex' }}>
        <MobileSidebar>
          <div style={{ padding: '4px 12px 20px' }}>
            <p style={{ fontWeight: 700, fontSize: 14, color: 'var(--text)', padding: '0 8px', marginBottom: 16 }}>Tools</p>
            <div style={{ height: 1, background: 'var(--border)', marginBottom: 16 }} />
            <span className="sidebar-label" style={{ marginBottom: 6 }}>POPULAR TOOLS</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 1, marginBottom: 20 }}>
              {SIDEBAR_POPULAR.map(item => (
                <Link key={item.slug} href={`/tools/${item.slug}`}
                  className={`sidebar-item${params.slug === item.slug ? ' active' : ''}`}>
                  {item.label}
                </Link>
              ))}
            </div>
            <span className="sidebar-label" style={{ marginBottom: 6 }}>MORE TOOLS</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {SIDEBAR_MORE.map(item => (
                <Link key={item.slug} href={`/tools/${item.slug}`}
                  className={`sidebar-item${params.slug === item.slug ? ' active' : ''}`}>
                  {item.label}
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
          <p style={{ fontWeight: 700, fontSize: 14, color: 'var(--text)', padding: '0 8px', marginBottom: 16 }}>Tools</p>
          <div style={{ height: 1, background: 'var(--border)', marginBottom: 16 }} />

          <span className="sidebar-label" style={{ marginBottom: 6 }}>POPULAR TOOLS</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 1, marginBottom: 24 }}>
            {SIDEBAR_POPULAR.map(item => (
              <Link key={item.slug} href={`/tools/${item.slug}`}
                className={`sidebar-item${params.slug === item.slug ? ' active' : ''}`}>
                {item.label}
              </Link>
            ))}
          </div>

          <span className="sidebar-label" style={{ marginBottom: 6 }}>MORE TOOLS</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {SIDEBAR_MORE.map(item => (
              <Link key={item.slug} href={`/tools/${item.slug}`}
                className={`sidebar-item${params.slug === item.slug ? ' active' : ''}`}>
                {item.label}
              </Link>
            ))}
          </div>
        </aside>

        {/* Main */}
        <div style={{ flex: 1, padding: 40, maxWidth: 860, minWidth: 0 }}>
          <p style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 12 }}>
            By AIProSpace Team · Updated Apr 2026
          </p>
          <h1 style={{ fontSize: 26, fontWeight: 700, color: 'var(--text)', marginBottom: 12, lineHeight: 1.3 }}>{cat.h1}</h1>
          <p style={{ fontSize: 14, color: 'var(--muted)', marginBottom: 24, lineHeight: 1.7 }}>{cat.intro}</p>

          <AdBanner />

          {/* Tools table */}
          <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--text)', margin: '28px 0 14px' }}>
            Best {cat.label} Tools
          </h2>
          <div style={{ overflowX: 'auto' }}>
            <table className="data-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Tool</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                {cat.tools.map((tool, i) => (
                  <tr key={tool.name}>
                    <td>{i + 1}</td>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={`https://www.google.com/s2/favicons?domain=${tool.domain}&sz=32`}
                          alt={`${tool.name} logo`}
                          width={24} height={24}
                          style={{ borderRadius: 4, flexShrink: 0 }}
                        />
                        <div>
                          <a href={tool.url} target="_blank" rel="noopener noreferrer"
                            className="tool-link"
                          >
                            {tool.name} ↗
                          </a>
                          <p style={{ fontSize: 12, color: 'var(--muted)', marginTop: 1 }}>{tool.description.slice(0, 80)}…</p>
                        </div>
                      </div>
                    </td>
                    <td><span className="badge">{tool.type}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Tool detail sections */}
          {cat.tools.map((tool, i) => (
            <div key={tool.name} style={{ marginTop: 40, paddingTop: 32, borderTop: i === 0 ? '1px solid var(--border)' : 'none' }}>
              {i > 0 && <div style={{ height: 1, background: 'var(--border)', marginBottom: 32 }} />}
              <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--text)', marginBottom: 10 }}>
                {i + 1}.{' '}
                <a href={tool.url} target="_blank" rel="noopener noreferrer"
                  style={{ color: 'var(--text)', textDecoration: 'none' }}>
                  {tool.name} ↗
                </a>
              </h2>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`https://www.google.com/s2/favicons?domain=${tool.domain}&sz=64`} alt={`${tool.name} logo`} width={32} height={32} style={{ borderRadius: 6 }} />
                <span className="badge">{tool.type}</span>
                <span className="badge">{tool.pricing}</span>
              </div>
              <p style={{ fontSize: 14, color: 'var(--text)', lineHeight: 1.75, marginBottom: 12 }}>{tool.description}</p>
            </div>
          ))}

          <div style={{ marginTop: 40 }}><AdBanner /></div>

          {/* FAQ */}
          <h2 style={{ fontSize: 20, fontWeight: 700, color: 'var(--text)', margin: '40px 0 16px' }}>
            Frequently Asked Questions
          </h2>
          <div>
            {cat.faqs.map(faq => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="faq-item" style={{ cursor: 'pointer' }}>
      <summary className="faq-question">{q}</summary>
      <p className="faq-answer">{a}</p>
    </details>
  )
}
