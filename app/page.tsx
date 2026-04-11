import type { Metadata } from 'next'
import Link from 'next/link'
import { Pen, Wrench, BookOpen, Box, Code2, Search, Video, Mic, DollarSign } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AIProSpace — AI Tools Reviews & Guides',
  description: 'In-depth AI tool reviews, automation guides, and strategies to use AI effectively. Updated weekly.',
}

const CATEGORIES = [
  { icon: Pen,        label: 'Writing & Content', href: '/tools?cat=Writing+%26+Content',  count: 3 },
  { icon: Box,        label: 'Image Generation',  href: '/tools?cat=Image+Generation',      count: 2 },
  { icon: Video,      label: 'Video Creation',    href: '/tools?cat=Video+Creation',         count: 1 },
  { icon: Wrench,     label: 'Automation',        href: '/tools?cat=Automation',             count: 1 },
  { icon: Code2,      label: 'Coding & Dev',      href: '/tools?cat=Coding+%26+Dev',         count: 1 },
  { icon: Search,     label: 'Research',          href: '/tools?cat=Research',               count: 1 },
  { icon: Mic,        label: 'Productivity',      href: '/tools?cat=Productivity',           count: 2 },
  { icon: DollarSign, label: 'Make Money',        href: '/guides?topic=Make+Money',          count: 2 },
  { icon: BookOpen,   label: 'Guides',            href: '/guides',                           count: 12 },
]

const RECENT_POSTS = [
  { slug: 'best-ai-writing-tools-2026',       title: '10 Best AI Writing Tools in 2026 (Free & Paid)',        date: 'Apr 10, 2026', readTime: '9 min' },
  { slug: 'chatgpt-vs-claude-vs-gemini-2026', title: 'ChatGPT vs Claude vs Gemini: Full Comparison 2026',     date: 'Apr 7, 2026',  readTime: '12 min' },
  { slug: 'automate-social-media-n8n-guide',  title: 'How to Automate Social Media with n8n',                  date: 'Apr 3, 2026',  readTime: '10 min' },
  { slug: 'beginners-guide-ai-tools-2026',    title: "Complete Beginner's Guide to AI Tools in 2026",          date: 'Mar 28, 2026', readTime: '8 min' },
  { slug: 'use-ai-save-time-productivity',    title: 'How to Use AI to Save 10 Hours Per Week',                date: 'Mar 22, 2026', readTime: '7 min' },
]

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Hero */}
      <div className="max-w-2xl mb-16">
        <h1 className="text-3xl font-bold text-tx mb-3 leading-tight">
          The practical guide to AI tools
        </h1>
        <p className="text-muted text-base leading-relaxed">
          Honest reviews, step-by-step guides, and automation workflows — updated weekly.
          No hype, just what actually works.
        </p>
      </div>

      {/* Categories */}
      <section className="mb-16">
        <h2 className="text-xs font-semibold text-muted uppercase tracking-wider mb-4">Browse by category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
          {CATEGORIES.map(({ icon: Icon, label, href, count }) => (
            <Link
              key={label}
              href={href}
              className="card flex flex-col gap-3 p-4 rounded-xl"
            >
              <Icon size={16} className="text-muted" />
              <div>
                <p className="text-sm font-medium text-tx leading-snug">{label}</p>
                <p className="text-xs text-muted mt-0.5">{count} {count === 1 ? 'item' : 'items'}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Recent Posts */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xs font-semibold text-muted uppercase tracking-wider">Recent posts</h2>
          <Link href="/blog" className="text-xs text-muted hover:text-tx transition-colors">View all →</Link>
        </div>
        <div>
          {RECENT_POSTS.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="post-row block">
              <div className="flex items-start justify-between gap-4">
                <p className="post-row-title text-sm font-medium text-tx leading-snug">{post.title}</p>
                <div className="flex-shrink-0 flex items-center gap-3 text-xs text-muted whitespace-nowrap">
                  <span>{post.readTime}</span>
                  <span className="hidden sm:inline">{post.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
