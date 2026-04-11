import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ExternalLink, Star, ChevronLeft, Check, X } from 'lucide-react'
import { TOOLS } from '@/data/tools'
import AdBanner from '@/components/AdBanner'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return TOOLS.map(t => ({ slug: t.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tool = TOOLS.find(t => t.slug === params.slug)
  if (!tool) return {}
  return { title: `${tool.name} Review`, description: tool.description }
}

export default function ToolPage({ params }: Props) {
  const tool = TOOLS.find(t => t.slug === params.slug)
  if (!tool) notFound()

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex gap-12">
        {/* Main */}
        <div className="flex-1 min-w-0">
          <Link href="/tools" className="inline-flex items-center gap-1 text-xs text-muted hover:text-tx transition-colors mb-6">
            <ChevronLeft size={13} />
            Back to Tools
          </Link>

          {/* Header */}
          <div className="flex items-start gap-4 mb-6 pb-6 border-b border-border">
            <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center text-base font-bold text-tx flex-shrink-0">
              {tool.logo}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-xl font-bold text-tx">{tool.name}</h1>
                <span className="badge">{tool.price}</span>
                <span className="badge">{tool.category}</span>
              </div>
              <p className="text-sm text-muted mt-1">{tool.description}</p>
              <div className="flex items-center gap-1 mt-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={13}
                    className={i < tool.rating ? 'fill-tx text-tx' : 'text-border'}
                    fill={i < tool.rating ? 'currentColor' : 'none'}
                  />
                ))}
                <span className="text-xs text-muted ml-1">{tool.rating}/5</span>
              </div>
            </div>
            <a
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="btn btn-primary flex-shrink-0 gap-1.5"
            >
              Visit site
              <ExternalLink size={12} />
            </a>
          </div>

          <AdBanner height={90} />

          {/* Description */}
          <div className="mt-6 mb-6">
            <h2 className="text-base font-semibold text-tx mb-2">Overview</h2>
            <p className="text-sm text-muted leading-relaxed">{tool.longDescription}</p>
          </div>

          {/* Features */}
          <div className="mb-6">
            <h2 className="text-base font-semibold text-tx mb-3">Key features</h2>
            <ul className="grid sm:grid-cols-2 gap-1.5">
              {tool.features.map(f => (
                <li key={f} className="flex items-center gap-2 text-sm text-muted">
                  <Check size={13} className="text-tx flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Pros & Cons */}
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="card p-4">
              <p className="text-xs font-semibold text-tx uppercase tracking-wider mb-3">Pros</p>
              <ul className="space-y-2">
                {tool.pros.map(p => (
                  <li key={p} className="flex items-start gap-2 text-xs text-muted">
                    <Check size={12} className="text-tx mt-0.5 flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card p-4">
              <p className="text-xs font-semibold text-tx uppercase tracking-wider mb-3">Cons</p>
              <ul className="space-y-2">
                {tool.cons.map(c => (
                  <li key={c} className="flex items-start gap-2 text-xs text-muted">
                    <X size={12} className="text-muted mt-0.5 flex-shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Best for */}
          <div className="card p-4 mb-6">
            <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-1">Best for</p>
            <p className="text-sm text-tx">{tool.bestFor}</p>
          </div>

          <AdBanner height={90} />
        </div>

        {/* Sidebar */}
        <aside className="hidden lg:block w-56 flex-shrink-0">
          <div className="sticky top-20 space-y-4">
            <AdBanner height={250} label="Ad" />
            <div className="card p-4">
              <p className="text-xs font-semibold text-tx mb-3">More tools</p>
              <div className="space-y-2">
                {TOOLS.filter(t => t.slug !== params.slug).slice(0, 5).map(t => (
                  <Link key={t.slug} href={`/tools/${t.slug}`} className="flex items-center gap-2 group">
                    <span className="text-xs w-5 h-5 rounded bg-hover border border-border flex items-center justify-center font-bold text-muted flex-shrink-0">
                      {t.logo.slice(0, 1)}
                    </span>
                    <span className="text-xs text-muted group-hover:text-tx transition-colors truncate">{t.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
