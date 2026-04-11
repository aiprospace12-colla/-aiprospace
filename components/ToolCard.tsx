'use client'

import { motion } from 'framer-motion'

export type Tool = {
  id: number
  name: string
  description: string
  category: string
  price: 'Free' | 'Paid' | 'Freemium'
  rating: number
  affiliateUrl: string
  editorsPick?: boolean
  logo?: string
  tags?: string[]
}

const PRICE_STYLES = {
  Free: { bg: 'rgba(34,197,94,0.12)', text: '#4ade80', border: 'rgba(34,197,94,0.3)' },
  Paid: { bg: 'rgba(255,107,107,0.1)', text: '#ff6b6b', border: 'rgba(255,107,107,0.25)' },
  Freemium: { bg: 'rgba(0,212,255,0.1)', text: '#00d4ff', border: 'rgba(0,212,255,0.25)' },
}

const LOGO_GRADIENTS: Record<string, string> = {
  'Jasper AI': 'linear-gradient(135deg, #7b5ea7, #c084fc)',
  Midjourney: 'linear-gradient(135deg, #1e40af, #00d4ff)',
  n8n: 'linear-gradient(135deg, #ea580c, #fbbf24)',
  'Surfer SEO': 'linear-gradient(135deg, #0891b2, #4ade80)',
  ChatGPT: 'linear-gradient(135deg, #10b981, #00d4ff)',
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-3.5 h-3.5 ${star <= rating ? 'text-amber-400' : 'text-white/15'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-text-muted text-xs ml-1">{rating}.0</span>
    </div>
  )
}

type Props = { tool: Tool; index?: number }

export default function ToolCard({ tool, index = 0 }: Props) {
  const price = PRICE_STYLES[tool.price]
  const logoGradient = LOGO_GRADIENTS[tool.name] || 'linear-gradient(135deg, #7b5ea7, #00d4ff)'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="relative"
    >
      {tool.editorsPick && (
        <div
          className="absolute -top-3 left-4 z-10 text-xs font-bold px-3 py-1 rounded-full"
          style={{
            background: 'linear-gradient(135deg, #f59e0b, #fbbf24)',
            color: '#06060f',
          }}
        >
          ⭐ Editor&apos;s Pick
        </div>
      )}

      <div
        className="h-full rounded-2xl p-5 card-hover flex flex-col"
        style={{
          background: 'rgba(13,13,26,0.9)',
          border: tool.editorsPick
            ? '1px solid rgba(245,158,11,0.3)'
            : '1px solid rgba(255,255,255,0.07)',
        }}
      >
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          {/* Logo */}
          <div
            className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center text-white font-bold text-lg"
            style={{ background: logoGradient }}
          >
            {tool.name[0]}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <h3
                className="text-base font-semibold text-text-primary"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                {tool.name}
              </h3>
            </div>
            <StarRating rating={tool.rating} />
          </div>

          {/* Price badge */}
          <span
            className="flex-shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full"
            style={{
              background: price.bg,
              color: price.text,
              border: `1px solid ${price.border}`,
            }}
          >
            {tool.price}
          </span>
        </div>

        {/* Category */}
        <span
          className="self-start text-xs px-2.5 py-1 rounded-full mb-3"
          style={{
            background: 'rgba(123,94,167,0.12)',
            color: '#c084fc',
            border: '1px solid rgba(123,94,167,0.25)',
          }}
        >
          {tool.category}
        </span>

        {/* Description */}
        <p className="text-text-muted text-sm leading-relaxed mb-5 flex-1">
          {tool.description}
        </p>

        {/* CTA */}
        <a
          href={tool.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-medium text-cyan-DEFAULT transition-all duration-300 hover:bg-cyan-DEFAULT/10 group"
          style={{ border: '1px solid rgba(0,212,255,0.25)' }}
        >
          Visit Tool
          <svg
            className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </motion.div>
  )
}
