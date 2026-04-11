'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FileText, Star, Zap, DollarSign, Newspaper, BookOpen, GitCompare, Play } from 'lucide-react'
import AdBanner from '@/components/AdBanner'

const POSTS = [
  { slug: 'best-ai-writing-tools-2026',       title: '10 Best AI Writing Tools in 2026 (Free & Paid)',      excerpt: 'Discover the top AI writing tools tested and ranked by our team for 2026.',              date: 'Apr 10, 2026', readTime: '8 min',  category: 'AI Tools Reviews'   },
  { slug: 'automate-social-media-n8n-guide',  title: 'How to Automate Social Media with n8n',               excerpt: 'Complete step-by-step guide to automating your social media workflow with n8n.',       date: 'Apr 3, 2026',  readTime: '12 min', category: 'Automation Guides'  },
  { slug: 'chatgpt-vs-claude-vs-gemini-2026', title: 'ChatGPT vs Claude vs Gemini: Full Comparison 2026',   excerpt: 'We tested all three AI models extensively to find the winner in 2026.',                date: 'Mar 28, 2026', readTime: '10 min', category: 'Comparisons'        },
  { slug: 'beginners-guide-ai-tools-2026',    title: "Complete Beginner's Guide to AI Tools in 2026",       excerpt: 'Everything you need to know to get started with AI tools today.',                    date: 'Mar 22, 2026', readTime: '15 min', category: 'Beginner Guides'    },
  { slug: 'use-ai-save-time-productivity',    title: 'How to Save 10 Hours/Week Using AI',                  excerpt: 'The exact AI tools and workflows that save the most time every week.',                date: 'Mar 15, 2026', readTime: '7 min',  category: 'Make Money with AI' },
]

const SIDEBAR = [
  { label: 'All Posts',          icon: FileText,   cat: 'All'             },
  { label: 'AI Tools Reviews',   icon: Star,       cat: 'AI Tools Reviews' },
  { label: 'Automation Guides',  icon: Zap,        cat: 'Automation Guides'},
  { label: 'Make Money with AI', icon: DollarSign, cat: 'Make Money with AI'},
  { label: 'AI News',            icon: Newspaper,  cat: 'AI News'         },
  { label: 'Beginner Guides',    icon: BookOpen,   cat: 'Beginner Guides' },
  { label: 'Comparisons',        icon: GitCompare, cat: 'Comparisons'     },
  { label: 'Tutorials',          icon: Play,       cat: 'Tutorials'       },
]

export default function BlogPage() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? POSTS : POSTS.filter(p => p.category === active)

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-60 flex-shrink-0 border-r border-border px-3 py-5 sticky top-[97px] self-start h-[calc(100vh-97px)] overflow-y-auto">
        <p className="text-base font-bold text-tx px-3 mb-3">Blog</p>
        <div className="divider mb-4" />
        <span className="sidebar-label mb-2">BY CATEGORY</span>
        <div className="flex flex-col gap-0.5">
          {SIDEBAR.map(({ label, icon: Icon, cat }) => (
            <button key={cat} onClick={() => setActive(cat)} className={`sidebar-item ${active === cat ? 'active' : ''}`}>
              <Icon size={16} />
              {label}
            </button>
          ))}
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 px-8 py-8 max-w-3xl">
        <h1 className="text-2xl font-bold text-tx mb-1">Blog</h1>
        <p className="text-sm text-muted mb-4">Latest AI news, reviews and guides</p>
        <AdBanner height={90} />
        <div className="mt-4">
          {filtered.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="post-row">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="badge">{post.category}</span>
              </div>
              <p className="post-title text-[15px] font-semibold text-tx leading-snug">{post.title}</p>
              <p className="text-[13px] text-muted mt-1 line-clamp-1">{post.excerpt}</p>
              <p className="text-[12px] text-muted mt-2">{post.date} · {post.readTime} read</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
