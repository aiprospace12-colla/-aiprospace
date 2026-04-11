'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import EmailCapture from '@/components/EmailCapture'

const resources = [
  {
    id: 1,
    title: 'The AI Automation Playbook 2025',
    description: '10 AI tools and automation workflows to make money online. Step-by-step guides, real income numbers, and 5 copy-paste templates.',
    price: 'FREE',
    pages: '48 pages',
    format: 'PDF',
    image: 'https://images.unsplash.com/photo-1485988412941-77a35537dae4?w=600&auto=format&fit=crop&q=80',
    tag: '⭐ Most Popular',
    tagColor: '#fbbf24',
    requiresEmail: true,
    category: 'eBook',
  },
  {
    id: 2,
    title: 'ChatGPT Prompt Templates for Business',
    description: '100+ proven ChatGPT prompts for marketing, sales, content creation, and productivity. Copy, paste, and customize.',
    price: 'FREE',
    pages: '32 pages',
    format: 'PDF + Notion',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&auto=format&fit=crop&q=80',
    tag: '🆕 New',
    tagColor: '#34d399',
    requiresEmail: true,
    category: 'Templates',
  },
  {
    id: 3,
    title: 'AI Content Creation Blueprint',
    description: 'Create a full week of content in 2 hours using AI. Includes content calendar, tool stack, and ready-to-run workflow automations.',
    price: 'FREE',
    pages: '24 pages',
    format: 'PDF',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&auto=format&fit=crop&q=80',
    tag: '🔥 Popular',
    tagColor: '#f97316',
    requiresEmail: true,
    category: 'Blueprint',
  },
  {
    id: 4,
    title: 'AI SEO Masterclass — Rank #1 on Google',
    description: 'The complete system to rank your content on Google using AI tools. Covers keyword research, on-page SEO, link building and content clusters.',
    price: 'FREE',
    pages: '36 pages',
    format: 'PDF',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&auto=format&fit=crop&q=80',
    tag: '🔍 New',
    tagColor: '#a855f7',
    requiresEmail: true,
    category: 'eBook',
  },
  {
    id: 5,
    title: 'n8n Automation Workflow Pack',
    description: '15 ready-to-import n8n workflows for social media, lead generation, email marketing, and business automation. Just import and run.',
    price: '$29',
    pages: '15 workflows',
    format: 'JSON files',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=80',
    tag: '⚡ Premium',
    tagColor: '#fbbf24',
    requiresEmail: false,
    category: 'Templates',
  },
  {
    id: 6,
    title: 'AI Freelancing Mastery Guide',
    description: 'How to offer AI-powered freelancing services and charge premium rates. Client scripts, pricing templates, and portfolio guide included.',
    price: '$19',
    pages: '62 pages',
    format: 'PDF',
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=600&auto=format&fit=crop&q=80',
    tag: '💰 Top Seller',
    tagColor: '#fb923c',
    requiresEmail: false,
    category: 'eBook',
  },
  {
    id: 7,
    title: 'YouTube Automation with AI — Full Guide',
    description: 'Build a faceless YouTube channel using AI for scripts, voiceovers, thumbnails and editing. Real channel case studies included.',
    price: 'FREE',
    pages: '28 pages',
    format: 'PDF',
    image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=600&auto=format&fit=crop&q=80',
    tag: '📺 Trending',
    tagColor: '#f43f5e',
    requiresEmail: true,
    category: 'Blueprint',
  },
  {
    id: 8,
    title: 'AI Side Hustle Starter Kit',
    description: '7 AI-powered side hustles you can start this week with zero investment. Includes step-by-step launch plans and income projections.',
    price: 'FREE',
    pages: '20 pages',
    format: 'PDF + Checklist',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&auto=format&fit=crop&q=80',
    tag: '🚀 Quick Start',
    tagColor: '#34d399',
    requiresEmail: true,
    category: 'Blueprint',
  },
]

type DownloadModalProps = {
  resource: typeof resources[0]
  onClose: () => void
}

function DownloadModal({ resource, onClose }: DownloadModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl p-8"
        style={{ background: '#0d0d1a', border: '1px solid rgba(123,94,167,0.3)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <h3
          className="text-xl font-bold text-text-primary mb-2"
          style={{ fontFamily: 'Syne, sans-serif' }}
        >
          Get Instant Access
        </h3>
        <p className="text-text-muted text-sm mb-6 leading-relaxed">
          Enter your email to download <strong className="text-text-primary">{resource.title}</strong> for free.
        </p>
        <EmailCapture
          source={`resource_${resource.id}`}
          placeholder="your@email.com"
          buttonText="Download Free →"
        />
        <button
          onClick={onClose}
          className="mt-4 w-full text-text-muted/60 text-xs hover:text-text-muted transition-colors"
        >
          Cancel
        </button>
      </div>
    </div>
  )
}

export default function ResourcesPage() {
  const [activeModal, setActiveModal] = useState<typeof resources[0] | null>(null)
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = ['All', 'eBook', 'Templates', 'Blueprint']
  const filtered =
    activeCategory === 'All'
      ? resources
      : resources.filter((r) => r.category === activeCategory)

  return (
    <div className="pt-20 min-h-screen" style={{ background: '#06060f' }}>
      {/* Hero */}
      <div className="relative py-20 px-4 text-center overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(34,197,94,0.08) 0%, transparent 100%)',
          }}
        />
        <div className="relative max-w-3xl mx-auto">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
            style={{
              background: 'rgba(34,197,94,0.12)',
              border: '1px solid rgba(34,197,94,0.3)',
              color: '#4ade80',
            }}
          >
            📚 Free Resources
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary mb-4"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Free Resources & eBooks
          </h1>
          <p className="text-text-muted text-xl leading-relaxed">
            eBooks, templates, workflows and playbooks to supercharge your AI journey.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-20">
        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeCategory === cat ? 'bg-purple-DEFAULT text-white shadow-glow-sm-purple' : 'text-text-muted hover:text-text-primary'
              }`}
              style={
                activeCategory !== cat
                  ? { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }
                  : {}
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Resources grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((resource, i) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative"
            >
              {resource.tag && (
                <div
                  className="absolute -top-3 left-5 z-10 text-xs font-bold px-3 py-1 rounded-full"
                  style={{ background: 'rgba(6,6,15,0.9)', color: resource.tagColor, border: `1px solid ${resource.tagColor}40` }}
                >
                  {resource.tag}
                </div>
              )}

              <div
                className="h-full rounded-2xl overflow-hidden card-hover flex flex-col"
                style={{ background: 'rgba(13,13,26,0.9)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                {/* Cover */}
                <div className="h-44 relative overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={resource.image} alt={resource.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <span
                      className="text-xs font-bold px-2.5 py-1 rounded-full"
                      style={{
                        background: resource.price === 'FREE' ? 'rgba(34,197,94,0.2)' : 'rgba(255,255,255,0.15)',
                        color: resource.price === 'FREE' ? '#4ade80' : '#f0f0ff',
                        backdropFilter: 'blur(8px)',
                        border: resource.price === 'FREE' ? '1px solid rgba(34,197,94,0.3)' : '1px solid rgba(255,255,255,0.2)',
                      }}
                    >
                      {resource.price}
                    </span>
                    <span
                      className="text-xs px-2.5 py-1 rounded-full"
                      style={{ background: 'rgba(0,0,0,0.3)', color: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(8px)' }}
                    >
                      {resource.format}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3
                    className="text-base font-bold text-text-primary mb-2 leading-snug"
                    style={{ fontFamily: 'Syne, sans-serif' }}
                  >
                    {resource.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-4 flex-1">
                    {resource.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-text-muted/60 mb-4">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    {resource.pages}
                  </div>

                  <button
                    onClick={() => resource.requiresEmail ? setActiveModal(resource) : undefined}
                    className={resource.requiresEmail ? 'btn-primary w-full justify-center' : 'btn-secondary w-full justify-center'}
                  >
                    {resource.requiresEmail ? (
                      <>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                        </svg>
                        Download Free
                      </>
                    ) : (
                      <>Buy for {resource.price}</>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeModal && (
        <DownloadModal resource={activeModal} onClose={() => setActiveModal(null)} />
      )}
    </div>
  )
}
