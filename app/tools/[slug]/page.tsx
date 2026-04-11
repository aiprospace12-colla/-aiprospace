import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ExternalLink, Check, X, ChevronLeft, Layers } from 'lucide-react'
import { TOOLS } from '@/data/tools'
import AdBanner from '@/components/AdBanner'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return TOOLS.map(t => ({ slug: t.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tool = TOOLS.find(t => t.slug === params.slug)
  if (!tool) return {}
  return { title: `${tool.name} Review 2026`, description: tool.description }
}

const STARS: Record<number, string> = { 5: '★★★★★', 4: '★★★★☆', 3: '★★★☆☆' }

export default function ToolPage({ params }: Props) {
  const tool = TOOLS.find(t => t.slug === params.slug)
  if (!tool) notFound()

  const similar = TOOLS.filter(t => t.slug !== params.slug && t.category === tool.category).slice(0, 3)

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-60 flex-shrink-0 border-r border-border px-3 py-5 sticky top-[97px] self-start h-[calc(100vh-97px)] overflow-y-auto">
        <p className="text-base font-bold text-tx px-3 mb-3">AI Tools</p>
        <div className="divider mb-4" />
        <span className="sidebar-label mb-2">NAVIGATION</span>
        <div className="flex flex-col gap-0.5 mb-5">
          <Link href="/tools" className="sidebar-item"><Layers size={16} />All Tools</Link>
        </div>
        {similar.length > 0 && (
          <>
            <span className="sidebar-label mb-2">SIMILAR TOOLS</span>
            <div className="flex flex-col gap-0.5">
              {TOOLS.filter(t => t.category === tool.category && t.slug !== tool.slug).slice(0, 6).map(t => (
                <Link key={t.slug} href={`/tools/${t.slug}`} className="sidebar-item text-[13px]">
                  <span className="w-5 h-5 rounded bg-card border border-border flex items-center justify-center text-[10px] font-bold flex-shrink-0">
                    {t.logo.slice(0, 1)}
                  </span>
                  {t.name}
                </Link>
              ))}
            </div>
          </>
        )}
      </aside>

      {/* Main */}
      <div className="flex-1 px-8 py-8 max-w-3xl">
        <Link href="/tools" className="inline-flex items-center gap-1 text-[12px] text-muted hover:text-tx transition-colors mb-6">
          <ChevronLeft size={13} />Back to Tools
        </Link>

        {/* Header */}
        <div className="flex items-start gap-4 mb-6 pb-6 border-b border-border">
          <div className="w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center font-bold text-lg text-tx flex-shrink-0">
            {tool.logo.slice(0, 2)}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <h1 className="text-2xl font-bold text-tx">{tool.name}</h1>
              <span className="badge">{tool.category}</span>
              <span className={tool.price === 'Free' ? 'badge badge-free' : 'badge'}>{tool.price}</span>
            </div>
            <p className="text-sm text-muted">{tool.description}</p>
            <p className="text-yellow-500 mt-2 text-sm">{STARS[tool.rating] ?? '★★★★☆'}</p>
          </div>
          <a href={tool.url} target="_blank" rel="noopener noreferrer nofollow" className="btn btn-primary flex-shrink-0 gap-1.5">
            Visit <ExternalLink size={12} />
          </a>
        </div>

        <AdBanner height={90} />

        <div className="mt-6 space-y-8">
          <div>
            <h2 className="text-lg font-bold text-tx mb-3">Overview</h2>
            <p className="text-sm text-muted leading-relaxed">{tool.longDescription}</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-tx mb-3">Key Features</h2>
            <ul className="grid sm:grid-cols-2 gap-2">
              {tool.features.map(f => (
                <li key={f} className="flex items-center gap-2 text-sm text-muted">
                  <Check size={13} className="text-tx flex-shrink-0" />{f}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-tx mb-2">Best For</h2>
            <p className="text-sm text-muted">{tool.bestFor}</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-tx mb-3">Pros &amp; Cons</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="border border-border rounded-lg p-4">
                <p className="text-xs font-semibold text-tx uppercase tracking-wide mb-3">Pros</p>
                <ul className="space-y-2">
                  {tool.pros.map(p => (
                    <li key={p} className="flex items-start gap-2 text-sm text-muted">
                      <Check size={12} className="text-tx mt-0.5 flex-shrink-0" />{p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border border-border rounded-lg p-4">
                <p className="text-xs font-semibold text-tx uppercase tracking-wide mb-3">Cons</p>
                <ul className="space-y-2">
                  {tool.cons.map(c => (
                    <li key={c} className="flex items-start gap-2 text-sm text-muted">
                      <X size={12} className="text-muted mt-0.5 flex-shrink-0" />{c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {similar.length > 0 && (
            <div>
              <h2 className="text-lg font-bold text-tx mb-3">Similar Tools</h2>
              <div className="grid sm:grid-cols-3 gap-3">
                {similar.map(t => (
                  <Link key={t.slug} href={`/tools/${t.slug}`} className="card p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-7 h-7 rounded bg-hover border border-border flex items-center justify-center text-xs font-bold text-tx">
                        {t.logo.slice(0, 1)}
                      </span>
                      <span className="text-sm font-semibold text-tx">{t.name}</span>
                    </div>
                    <p className="text-xs text-muted line-clamp-2">{t.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        <AdBanner height={90} />
      </div>
    </div>
  )
}
