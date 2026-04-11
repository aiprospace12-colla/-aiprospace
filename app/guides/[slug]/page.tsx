import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Clock, ChevronLeft, BookOpen } from 'lucide-react'
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
    <div className="flex">
      <aside className="hidden md:flex flex-col w-60 flex-shrink-0 border-r border-border px-3 py-5 sticky top-[97px] self-start h-[calc(100vh-97px)] overflow-y-auto">
        <p className="text-base font-bold text-tx px-3 mb-3">Guides</p>
        <div className="divider mb-4" />
        <Link href="/guides" className="sidebar-item"><BookOpen size={16} />All Guides</Link>
      </aside>

      <div className="flex-1 px-8 py-8 max-w-2xl">
        <Link href="/guides" className="inline-flex items-center gap-1 text-[12px] text-muted hover:text-tx transition-colors mb-6">
          <ChevronLeft size={13} />Back to Guides
        </Link>
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span className="badge">{guide.topic}</span>
          <span className="badge">{guide.difficulty}</span>
          <span className="flex items-center gap-1 text-[12px] text-muted"><Clock size={11} />{guide.readTime} read</span>
        </div>
        <h1 className="text-2xl font-bold text-tx mb-3">{guide.title}</h1>
        <p className="text-sm text-muted mb-8">{guide.description}</p>
        <div className="border border-border rounded-lg p-6 text-center">
          <p className="text-sm text-muted">Full guide content coming soon.</p>
          <Link href="/guides" className="text-xs text-muted hover:text-tx mt-2 inline-block underline">
            Browse all guides
          </Link>
        </div>
      </div>
    </div>
  )
}
