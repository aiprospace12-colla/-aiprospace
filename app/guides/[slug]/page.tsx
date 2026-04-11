import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Clock, ChevronLeft } from 'lucide-react'
import { GUIDES } from '@/data/guides'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return GUIDES.map(g => ({ slug: g.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const guide = GUIDES.find(g => g.slug === params.slug)
  if (!guide) return {}
  return { title: guide.title, description: guide.description }
}

export default function GuidePage({ params }: Props) {
  const guide = GUIDES.find(g => g.slug === params.slug)
  if (!guide) notFound()

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <Link href="/guides" className="inline-flex items-center gap-1 text-xs text-muted hover:text-tx transition-colors mb-6">
        <ChevronLeft size={13} />
        Back to Guides
      </Link>

      <div className="flex items-center gap-2 mb-3">
        <span className="badge">{guide.topic}</span>
        <span className="badge">{guide.difficulty}</span>
        <span className="flex items-center gap-1 text-xs text-muted">
          <Clock size={11} /> {guide.readTime} read
        </span>
      </div>

      <h1 className="text-2xl font-bold text-tx mb-3 leading-tight">{guide.title}</h1>
      <p className="text-sm text-muted mb-8">{guide.description}</p>

      <div className="card p-6 text-center">
        <p className="text-sm text-muted">Full guide content coming soon.</p>
        <p className="text-xs text-muted mt-2">Check back shortly or browse the <Link href="/guides" className="underline underline-offset-2">guides index</Link>.</p>
      </div>
    </div>
  )
}
