'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'
import type { PostMeta } from '@/lib/mdx'

const CATEGORY_STYLES: Record<string, { bg: string; text: string; border: string }> = {
  'AI Tools':   { bg: 'rgba(249,115,22,0.15)',  text: '#fb923c', border: 'rgba(249,115,22,0.3)'  },
  Automation:   { bg: 'rgba(168,85,247,0.12)',  text: '#c084fc', border: 'rgba(168,85,247,0.3)'  },
  'Make Money': { bg: 'rgba(251,191,36,0.12)',  text: '#fbbf24', border: 'rgba(251,191,36,0.3)'  },
  News:         { bg: 'rgba(239,68,68,0.1)',    text: '#f87171', border: 'rgba(239,68,68,0.25)'  },
}

const GRADIENT_FALLBACKS = [
  'linear-gradient(135deg, #f97316 0%, #a855f7 100%)',
  'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)',
  'linear-gradient(135deg, #fbbf24 0%, #f97316 100%)',
  'linear-gradient(135deg, #3b82f6 0%, #a855f7 100%)',
  'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)',
  'linear-gradient(135deg, #f43f5e 0%, #a855f7 100%)',
]

type Props = { post: PostMeta; index?: number }

export default function BlogCard({ post, index = 0 }: Props) {
  const { slug, frontmatter, readingTime } = post
  const cat = CATEGORY_STYLES[frontmatter.category] || {
    bg: 'rgba(255,255,255,0.07)', text: '#9490b0', border: 'rgba(255,255,255,0.1)',
  }
  const fallbackGradient = GRADIENT_FALLBACKS[index % GRADIENT_FALLBACKS.length]

  const dateFormatted = new Date(frontmatter.date).toLocaleDateString('en-US', {
    year: 'numeric', month: 'short', day: 'numeric',
  })

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="h-full"
    >
      <Link href={`/blog/${slug}`} className="block group h-full">
        <article
          className="h-full rounded-2xl overflow-hidden card-hover flex flex-col"
          style={{ background: 'var(--card-bg)', border: '1px solid var(--border)' }}
        >
          {/* Thumbnail */}
          <div className="relative w-full h-52 overflow-hidden flex-shrink-0">
            {frontmatter.thumbnail ? (
              <Image
                src={frontmatter.thumbnail}
                alt={frontmatter.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            ) : (
              <div className="w-full h-full" style={{ background: fallbackGradient }} />
            )}

            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

            {/* Category pill */}
            <div className="absolute top-3 left-3 z-10">
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full"
                style={{
                  background: cat.bg,
                  color: cat.text,
                  border: `1px solid ${cat.border}`,
                  backdropFilter: 'blur(10px)',
                }}
              >
                {frontmatter.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-5 flex flex-col flex-1">
            <h3
              className="text-base font-bold mb-2 leading-snug line-clamp-2 transition-colors duration-200"
              style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text-primary)' }}
            >
              {frontmatter.title}
            </h3>
            <p className="text-sm leading-relaxed mb-4 line-clamp-2 flex-1" style={{ color: 'var(--text-muted)' }}>
              {frontmatter.excerpt}
            </p>

            <div className="flex items-center justify-between text-xs" style={{ color: 'var(--text-muted)', opacity: 0.7 }}>
              <span>{dateFormatted}</span>
              <span className="flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" />
                  <circle cx="12" cy="12" r="9" strokeWidth={2} />
                </svg>
                {readingTime}
              </span>
            </div>
          </div>

          {/* Read more */}
          <div
            className="px-5 pb-4 flex items-center gap-1 text-xs font-medium transition-colors duration-200"
            style={{ color: 'var(--text-muted)' }}
          >
            <span className="group-hover:text-[var(--primary)] transition-colors">Read article</span>
            <svg
              className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200 group-hover:text-[var(--primary)]"
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </article>
      </Link>
    </motion.div>
  )
}
