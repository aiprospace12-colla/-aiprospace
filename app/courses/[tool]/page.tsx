import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { COURSE_CATEGORIES, COURSE_TOOLS } from '@/data/courses'
import AdBanner from '@/components/AdBanner'
import { MobileSidebar } from '@/components/MobileSidebar'

type Props = { params: { tool: string } }

export async function generateStaticParams() {
  return COURSE_CATEGORIES.map(c => ({ tool: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cat = COURSE_CATEGORIES.find(c => c.slug === params.tool)
  if (!cat) return {}
  return {
    title: cat.metaTitle,
    description: cat.metaDescription,
    alternates: { canonical: `https://aiprospace.com/courses/${cat.slug}` },
    openGraph: { title: cat.metaTitle, description: cat.metaDescription },
  }
}

const STARS: Record<string, string> = { '4.9': '★★★★★', '4.8': '★★★★★', '4.7': '★★★★☆', '4.6': '★★★★☆', '4.5': '★★★★☆' }

export default function CoursePage({ params }: Props) {
  const cat = COURSE_CATEGORIES.find(c => c.slug === params.tool)
  if (!cat) notFound()

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: cat.faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: cat.h1,
    numberOfItems: cat.courses.length,
    itemListElement: cat.courses.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.title,
      url: c.url,
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <div style={{ display: 'flex' }}>
        <MobileSidebar>
          <div style={{ padding: '4px 12px 20px' }}>
            <p style={{ fontWeight: 700, fontSize: 14, color: 'var(--text)', padding: '0 8px', marginBottom: 16 }}>Courses</p>
            <div style={{ height: 1, background: 'var(--border)', marginBottom: 16 }} />
            <span className="sidebar-label" style={{ marginBottom: 6 }}>BY TOOL</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {COURSE_TOOLS.map(item => (
                <Link key={item.slug} href={`/courses/${item.slug}`}
                  className={`sidebar-item${params.tool === item.slug ? ' active' : ''}`}>
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
          <p style={{ fontWeight: 700, fontSize: 14, color: 'var(--text)', padding: '0 8px', marginBottom: 16 }}>Courses</p>
          <div style={{ height: 1, background: 'var(--border)', marginBottom: 16 }} />
          <span className="sidebar-label" style={{ marginBottom: 6 }}>BY TOOL</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 1, marginBottom: 24 }}>
            {COURSE_TOOLS.map(item => (
              <Link key={item.slug} href={`/courses/${item.slug}`}
                className={`sidebar-item${params.tool === item.slug ? ' active' : ''}`}>
                {item.label}
              </Link>
            ))}
          </div>
        </aside>

        {/* Main */}
        <div style={{ flex: 1, padding: 40, maxWidth: 860, minWidth: 0 }}>
          <p style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 10 }}>By AIProSpace Team · Updated Apr 2026</p>
          <h1 style={{ fontSize: 24, fontWeight: 700, color: 'var(--text)', marginBottom: 10, lineHeight: 1.3 }}>{cat.h1}</h1>
          <p style={{ fontSize: 14, color: 'var(--muted)', marginBottom: 24, lineHeight: 1.7 }}>{cat.intro}</p>

          <AdBanner />

          <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--text)', margin: '28px 0 14px' }}>
            Best {cat.label} Courses
          </h2>

          <div style={{ overflowX: 'auto' }}>
            <table className="data-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Course</th>
                  <th>Rating</th>
                  <th>Duration</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {cat.courses.map(course => (
                  <tr key={course.rank}>
                    <td>{course.rank}</td>
                    <td>
                      <a href={course.url} target="_blank" rel="noopener noreferrer"
                        style={{ fontWeight: 600, fontSize: 14, color: 'var(--text)', display: 'block', marginBottom: 2 }}>
                        {course.title}
                      </a>
                      <span style={{ fontSize: 12, color: 'var(--muted)' }}>{course.provider}</span>
                    </td>
                    <td style={{ color: '#f59e0b', whiteSpace: 'nowrap', fontSize: 12 }}>
                      {STARS[course.rating] || '★★★★☆'} {course.rating}
                    </td>
                    <td style={{ fontSize: 13, color: 'var(--muted)', whiteSpace: 'nowrap' }}>{course.duration}</td>
                    <td><span className="badge">{course.price}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Course details */}
          {cat.courses.map(course => (
            <div key={course.rank} style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--text)', marginBottom: 6 }}>
                {course.rank}.{' '}
                <a href={course.url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text)' }}>
                  {course.title} ↗
                </a>
              </h3>
              <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                <span className="badge">{course.provider}</span>
                <span className="badge">{course.price}</span>
                <span className="badge">{course.duration}</span>
              </div>
              <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.7 }}>{course.description}</p>
            </div>
          ))}

          <div style={{ marginTop: 40 }}><AdBanner /></div>

          <h2 style={{ fontSize: 20, fontWeight: 700, color: 'var(--text)', margin: '40px 0 16px' }}>
            Frequently Asked Questions
          </h2>
          {cat.faqs.map(faq => (
            <details key={faq.q} className="faq-item">
              <summary className="faq-question">{faq.q}</summary>
              <p className="faq-answer">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </>
  )
}
