import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { BOOKS, BOOK_TOPICS } from '@/data/books'
import AdBanner from '@/components/AdBanner'
import { MobileSidebar } from '@/components/MobileSidebar'

type Props = { params: { category: string } }

const TOPIC_MAP: Record<string, string> = {
  'ai-books':    'all',
  'ai-future':   'AI & Future',
  'ai-business': 'AI & Business',
  'ai-coding':   'AI & Coding',
  'learning-ai': 'Learning AI',
}

const META: Record<string, { title: string; description: string; h1: string; intro: string }> = {
  'ai-books': {
    title: '26 Best AI Books in 2026 (Ranked & Reviewed) | AIProSpace',
    description: 'The best AI books to read in 2026. Curated and reviewed by our team — covering AI safety, business, future of work, and more.',
    h1: '26 Best AI Books in 2026 (Ranked & Reviewed)',
    intro: "I've read every major AI book published in the last decade so you don't have to. This list covers the 26 books that actually changed how I think about artificial intelligence — from technical deep dives to accessible introductions, from optimistic visions to serious warnings.",
  },
  'ai-future': {
    title: 'Best AI & Future Books in 2026 (Ranked) | AIProSpace',
    description: 'The best books about AI and the future of humanity. Ranked and reviewed by our team.',
    h1: 'Best AI & Future Books in 2026',
    intro: "These books tackle the biggest questions about where AI is taking us — from superintelligence to surveillance capitalism. Each one will change how you think about the future.",
  },
  'ai-business': {
    title: 'Best AI & Business Books in 2026 (Ranked) | AIProSpace',
    description: 'The best AI business books for executives, managers, and entrepreneurs. Ranked and reviewed.',
    h1: 'Best AI & Business Books in 2026',
    intro: "Whether you're leading a team or running a company, these are the AI business books worth reading. Focused on strategy, economics, and real-world application.",
  },
  'ai-coding': {
    title: 'Best AI & Coding Books in 2026 (Ranked) | AIProSpace',
    description: 'The best books on AI, machine learning, and coding. For developers and technical readers.',
    h1: 'Best AI & Coding Books in 2026',
    intro: "For developers and technical readers who want to understand the foundations and applications of AI in software development.",
  },
  'learning-ai': {
    title: 'Best Books to Learn AI in 2026 (Ranked) | AIProSpace',
    description: 'The best books for learning AI from scratch. From beginner to advanced — ranked and reviewed.',
    h1: 'Best Books to Learn AI in 2026',
    intro: "Starting your AI learning journey? These books will take you from curious beginner to confident practitioner — no PhD required.",
  },
}

export async function generateStaticParams() {
  return BOOK_TOPICS.map(t => ({ category: t.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const meta = META[params.category]
  if (!meta) return {}
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: `https://aiprospace.com/books/${params.category}` },
    openGraph: { title: meta.title, description: meta.description, url: `https://aiprospace.com/books/${params.category}` },
  }
}

export default function BooksPage({ params }: Props) {
  const topic = TOPIC_MAP[params.category]
  if (!topic) notFound()

  const meta = META[params.category]
  if (!meta) notFound()

  const books = topic === 'all'
    ? BOOKS
    : BOOKS.filter(b => b.topic === topic).length > 0
      ? BOOKS.filter(b => b.topic === topic)
      : BOOKS.slice(0, 10)

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: meta.h1,
    numberOfItems: books.length,
    itemListElement: books.map((b, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: b.title,
      url: b.amazonUrl,
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <div style={{ display: 'flex' }}>
        <MobileSidebar>
          <div style={{ padding: '4px 12px 20px' }}>
            <p style={{ fontWeight: 700, fontSize: 14, color: 'var(--text)', padding: '0 8px', marginBottom: 16 }}>Books</p>
            <div style={{ height: 1, background: 'var(--border)', marginBottom: 16 }} />
            <span className="sidebar-label" style={{ marginBottom: 6 }}>BY TOPIC</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {BOOK_TOPICS.map(t => (
                <Link key={t.slug} href={`/books/${t.slug}`}
                  className={`sidebar-item${params.category === t.slug ? ' active' : ''}`}>
                  {t.label}
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
          <p style={{ fontWeight: 700, fontSize: 14, color: 'var(--text)', padding: '0 8px', marginBottom: 16 }}>Books</p>
          <div style={{ height: 1, background: 'var(--border)', marginBottom: 16 }} />
          <span className="sidebar-label" style={{ marginBottom: 6 }}>BY TOPIC</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {BOOK_TOPICS.map(t => (
              <Link key={t.slug} href={`/books/${t.slug}`}
                className={`sidebar-item${params.category === t.slug ? ' active' : ''}`}>
                {t.label}
              </Link>
            ))}
          </div>
        </aside>

        {/* Main */}
        <div style={{ flex: 1, padding: 40, maxWidth: 860, minWidth: 0 }}>
          <p style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 12 }}>
            By AIProSpace Team · Updated Apr 13, 2026
          </p>
          <h1 style={{ fontSize: 26, fontWeight: 700, color: 'var(--text)', marginBottom: 12, lineHeight: 1.3 }}>
            {meta.h1}
          </h1>
          <p style={{ fontSize: 14, color: 'var(--muted)', marginBottom: 24, lineHeight: 1.7 }}>
            {meta.intro}
          </p>

          <AdBanner />

          {/* Table */}
          <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--text)', margin: '28px 0 14px' }}>
            Best AI Books — Quick Reference Table
          </h2>
          <div style={{ overflowX: 'auto', marginBottom: 40 }}>
            <table className="data-table">
              <thead>
                <tr>
                  <th style={{ width: 40 }}>#</th>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                {books.map((book, i) => (
                  <tr key={book.slug}>
                    <td style={{ color: 'var(--muted)', fontSize: 13 }}>{i + 1}</td>
                    <td>
                      <a href={`#${book.slug}`}
                        style={{ fontWeight: 600, fontSize: 14, color: 'var(--text)', textDecoration: 'none' }}>
                        {book.title}
                      </a>
                    </td>
                    <td style={{ fontSize: 13, color: 'var(--muted)' }}>{book.author}</td>
                    <td style={{ fontSize: 13, color: '#f59e0b', whiteSpace: 'nowrap' }}>
                      {book.rating} ★
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Book cards */}
          {books.map((book, i) => (
            <div key={book.slug} id={book.slug}
              style={{ marginTop: i === 0 ? 0 : 40, paddingTop: i === 0 ? 0 : 40, borderTop: i === 0 ? 'none' : '1px solid var(--border)' }}>

              <div style={{ display: 'flex', gap: 20, marginBottom: 16 }}>
                {/* Cover */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={book.coverImage}
                  alt={`${book.title} cover`}
                  width={80}
                  height={120}
                  style={{ borderRadius: 6, objectFit: 'cover', flexShrink: 0, border: '1px solid var(--border)' }}
                />
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 4 }}>#{i + 1}</p>
                  <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--text)', marginBottom: 4, lineHeight: 1.3 }}>
                    {book.title}
                  </h2>
                  <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 8 }}>
                    by {book.author} · {book.published}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span style={{ fontSize: 13, color: '#f59e0b' }}>{book.rating} ★ ({book.ratingCount} reviews)</span>
                    <span className="badge">{book.topic}</span>
                  </div>
                </div>
              </div>

              <p style={{ fontSize: 14, color: 'var(--text)', lineHeight: 1.75, marginBottom: 12 }}>
                {book.description}
              </p>

              {/* My Take */}
              <div style={{
                background: 'var(--card-bg)', border: '1px solid var(--border)',
                borderRadius: 8, padding: '14px 16px', marginBottom: 16,
              }}>
                <p style={{ fontSize: 12, fontWeight: 700, color: 'var(--muted)', marginBottom: 8, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  My Take
                </p>
                <p style={{ fontSize: 14, color: 'var(--text)', lineHeight: 1.75 }}>
                  {book.myTake}
                </p>
              </div>

              <div style={{ display: 'flex', gap: 10 }}>
                <a href={book.amazonUrl} target="_blank" rel="noopener noreferrer nofollow"
                  className="btn btn-primary">
                  Buy on Amazon ↗
                </a>
              </div>
            </div>
          ))}

          <div style={{ marginTop: 48 }}><AdBanner /></div>

          {/* FAQ */}
          <div style={{ marginTop: 48 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: 'var(--text)', marginBottom: 16 }}>
              Frequently Asked Questions
            </h2>
            {[
              { q: 'What is the best AI book for beginners?', a: "The Worlds I See by Fei-Fei Li is the best starting point — it tells the story of modern AI through a deeply personal memoir that requires no technical background. AI: A Guide for Thinking Humans by Melanie Mitchell is the best purely explanatory book for non-technical readers." },
              { q: 'Which AI books are actually worth reading?', a: "From this list, the essential reads are: The Worlds I See (for history and humanity), The Alignment Problem (for safety), Prediction Machines (for business strategy), Life 3.0 (for big-picture thinking), and Machines of Loving Grace (for what's happening right now)." },
              { q: 'What AI books do AI researchers recommend?', a: "Researchers consistently recommend: Human Compatible (Stuart Russell) for foundational thinking on alignment, The Alignment Problem (Brian Christian) for an accessible deep dive, and Superintelligence (Nick Bostrom) for historical context on how safety concerns developed." },
              { q: 'Are there good free AI books?', a: "Several excellent AI books are freely available online. 'Artificial Intelligence: A Modern Approach' has partial content available. Many academic AI papers and textbooks are freely accessible on arXiv. The books on this list require purchase, but most are available at public libraries." },
            ].map(faq => (
              <details key={faq.q} className="faq-item">
                <summary className="faq-question">{faq.q}</summary>
                <p className="faq-answer">{faq.a}</p>
              </details>
            ))}
          </div>

          {/* Prev/Next */}
          {(() => {
            const idx = BOOK_TOPICS.findIndex(t => t.slug === params.category)
            const prev = idx > 0 ? BOOK_TOPICS[idx - 1] : null
            const next = idx < BOOK_TOPICS.length - 1 ? BOOK_TOPICS[idx + 1] : null
            return (
              <div className="page-nav">
                {prev ? <Link href={`/books/${prev.slug}`}>← {prev.label}</Link> : <span />}
                {next ? <Link href={`/books/${next.slug}`}>{next.label} →</Link> : <span />}
              </div>
            )
          })()}
        </div>
      </div>
    </>
  )
}
