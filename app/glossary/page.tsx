import type { Metadata } from 'next'
import { GLOSSARY } from '@/data/glossary'

export const metadata: Metadata = {
  title: 'AI Glossary 2026 — 50+ AI Terms Explained in Plain English | AIProSpace',
  description: 'The complete AI glossary for 2026. 50+ terms explained in plain English — LLMs, RAG, neural networks, prompt engineering, and more. No jargon, no fluff.',
  alternates: { canonical: 'https://aiprospace.com/glossary' },
  openGraph: { title: 'AI Glossary 2026 — 50+ Terms Explained | AIProSpace', description: 'The complete AI glossary for 2026. 50+ AI terms explained in plain English. No jargon, no fluff.' },
}

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

export default function GlossaryPage() {
  const presentLetters = Array.from(new Set(GLOSSARY.map(t => t.letter))).sort()
  const grouped = GLOSSARY.reduce<Record<string, typeof GLOSSARY>>((acc, t) => {
    if (!acc[t.letter]) acc[t.letter] = []
    acc[t.letter].push(t)
    return acc
  }, {})

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    name: 'AI Glossary',
    url: 'https://aiprospace.com/glossary',
    hasDefinedTerm: GLOSSARY.map(t => ({
      '@type': 'DefinedTerm',
      name: t.term,
      description: t.definition,
      url: `https://aiprospace.com/glossary#${t.id}`,
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div style={{ display: 'flex' }}>
        {/* Sidebar */}
        <aside style={{
          width: 240, flexShrink: 0, borderRight: '1px solid var(--border)',
          padding: '20px 12px', position: 'sticky', top: 97,
          height: 'calc(100vh - 97px)', overflowY: 'auto', background: 'var(--sidebar-bg)',
        }} className="hidden md:block">
          <p style={{ fontWeight: 700, fontSize: 14, color: 'var(--text)', padding: '0 8px', marginBottom: 16 }}>Glossary</p>
          <div style={{ height: 1, background: 'var(--border)', marginBottom: 16 }} />
          <span className="sidebar-label" style={{ marginBottom: 6 }}>BY LETTER</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <a href="#top" className="sidebar-item">All Terms</a>
            {LETTERS.filter(l => presentLetters.includes(l)).map(letter => (
              <a key={letter} href={`#letter-${letter}`} className="sidebar-item">{letter}</a>
            ))}
          </div>
        </aside>

        {/* Main */}
        <div id="top" style={{ flex: 1, padding: 40, maxWidth: 800, minWidth: 0 }}>
          <h1 style={{ fontSize: 24, fontWeight: 700, color: 'var(--text)', marginBottom: 6 }}>AI Glossary</h1>
          <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 40 }}>
            {GLOSSARY.length}+ AI terms explained in simple language
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
            {presentLetters.map(letter => (
              <div key={letter} id={`letter-${letter}`}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                  <span style={{ fontSize: 20, fontWeight: 700, color: 'var(--text)' }}>{letter}</span>
                  <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  {grouped[letter]?.map(term => (
                    <div key={term.id} id={term.id}>
                      <p style={{ fontWeight: 600, fontSize: 15, color: 'var(--text)', marginBottom: 4 }}>{term.term}</p>
                      <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.75 }}>{term.definition}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
