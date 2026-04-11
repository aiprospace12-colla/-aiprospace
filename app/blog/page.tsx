'use client'

import { useState } from 'react'
import Link from 'next/link'
import AdBanner from '@/components/AdBanner'

const POSTS = [
  { slug: 'best-ai-writing-tools-2026',       title: '10 Best AI Writing Tools in 2026 (Free & Paid)',        date: 'Apr 10, 2026', readTime: '9 min',  category: 'AI Tools'   },
  { slug: 'chatgpt-vs-claude-vs-gemini-2026', title: 'ChatGPT vs Claude vs Gemini: Full Comparison 2026',     date: 'Apr 7, 2026',  readTime: '12 min', category: 'Reviews'    },
  { slug: 'automate-social-media-n8n-guide',  title: 'How to Automate Social Media with n8n',                  date: 'Apr 3, 2026',  readTime: '10 min', category: 'Automation' },
  { slug: 'beginners-guide-ai-tools-2026',    title: "Complete Beginner's Guide to AI Tools in 2026",          date: 'Mar 28, 2026', readTime: '8 min',  category: 'Guides'     },
  { slug: 'use-ai-save-time-productivity',    title: 'How to Use AI to Save 10 Hours Per Week',                date: 'Mar 22, 2026', readTime: '7 min',  category: 'Productivity' },
]

const CATEGORIES = ['All', 'AI Tools', 'Automation', 'Reviews', 'Guides', 'Productivity']

export default function BlogPage() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? POSTS : POSTS.filter(p => p.category === active)

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex gap-12">
        {/* Sidebar */}
        <aside className="hidden md:block w-48 flex-shrink-0">
          <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">Category</p>
          <div className="flex flex-col gap-0.5">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`sidebar-item ${active === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </aside>

        {/* Main */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-lg font-bold text-tx">Blog</h1>
            <span className="text-xs text-muted">{filtered.length} posts</span>
          </div>

          <AdBanner height={90} label="Advertisement" />

          <div className="mt-4">
            {filtered.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="post-row block">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="post-row-title text-sm font-medium text-tx leading-snug">{post.title}</p>
                    <span className="text-[11px] text-muted mt-1 inline-block">{post.category}</span>
                  </div>
                  <div className="flex-shrink-0 flex items-center gap-3 text-xs text-muted whitespace-nowrap">
                    <span>{post.readTime}</span>
                    <span className="hidden sm:inline">{post.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
