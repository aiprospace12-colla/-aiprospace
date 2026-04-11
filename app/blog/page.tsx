'use client'

import { useState } from 'react'
import Link from 'next/link'
import BlogCard from '@/components/BlogCard'
import EmailCapture from '@/components/EmailCapture'
import type { PostMeta } from '@/lib/mdx'

const PLACEHOLDER_POSTS: PostMeta[] = [
  {
    slug: 'best-ai-tools-2025',
    frontmatter: {
      title: '10 Best AI Writing Tools in 2025 (Tested & Ranked)',
      excerpt: "We tested 30+ AI writing tools so you don't have to. Here are the top 10 for bloggers, marketers and entrepreneurs.",
      date: '2025-01-15',
      category: 'AI Tools',
      tags: ['AI tools', 'writing', 'content creation'],
      thumbnail: '',
      author: 'AIProSpace Team',
    },
    readingTime: '8 min read',
  },
  {
    slug: 'how-to-automate-instagram-with-ai',
    frontmatter: {
      title: 'How to Automate Your Instagram with AI (Step by Step)',
      excerpt: 'Complete guide to automating your Instagram content strategy using AI tools — save hours every week and grow faster.',
      date: '2025-01-22',
      category: 'Automation',
      tags: ['automation', 'instagram', 'social media'],
      thumbnail: '',
      author: 'AIProSpace Team',
    },
    readingTime: '10 min read',
  },
  {
    slug: 'make-money-with-ai-tools',
    frontmatter: {
      title: 'How to Make $5,000/Month with AI Tools',
      excerpt: 'Real strategies from real people making serious money with AI tools in 2025. No fluff, just results and actionable steps.',
      date: '2025-01-29',
      category: 'Make Money',
      tags: ['make money', 'AI income', 'side hustle'],
      thumbnail: '',
      author: 'AIProSpace Team',
    },
    readingTime: '12 min read',
  },
]

const CATEGORIES = ['All', 'AI Tools', 'Automation', 'Make Money', 'News']

const TOP_POSTS = [
  { title: '10 Best AI Writing Tools in 2025', slug: 'best-ai-tools-2025', views: '24k views' },
  { title: 'Automate Instagram with AI', slug: 'how-to-automate-instagram-with-ai', views: '18k views' },
  { title: 'Make $5k/Month with AI Tools', slug: 'make-money-with-ai-tools', views: '31k views' },
]

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filtered = PLACEHOLDER_POSTS.filter((p) => {
    const matchCat = activeCategory === 'All' || p.frontmatter.category === activeCategory
    const matchSearch =
      !searchQuery ||
      p.frontmatter.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.frontmatter.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <div className="pt-20 min-h-screen" style={{ background: '#06060f' }}>
      {/* Hero */}
      <div className="relative py-20 px-4 text-center overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(123,94,167,0.12) 0%, transparent 100%)',
          }}
        />
        <div className="relative max-w-3xl mx-auto">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
            style={{
              background: 'rgba(123,94,167,0.15)',
              border: '1px solid rgba(123,94,167,0.3)',
              color: '#c084fc',
            }}
          >
            📝 The Blog
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary mb-4"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            The AIProSpace Blog
          </h1>
          <p className="text-text-muted text-xl leading-relaxed">
            In-depth AI tool reviews, automation guides, and real strategies to earn more online.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main content */}
          <div className="flex-1">
            {/* Category filters */}
            <div className="flex flex-wrap gap-2 mb-8">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    activeCategory === cat
                      ? 'bg-purple-DEFAULT text-white shadow-glow-sm-purple'
                      : 'text-text-muted hover:text-text-primary'
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

            {/* Posts grid */}
            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {filtered.map((post, i) => (
                  <BlogCard key={post.slug} post={post} index={i} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 text-text-muted">
                <p className="text-lg">No posts found for &quot;{searchQuery}&quot;</p>
                <button
                  onClick={() => { setSearchQuery(''); setActiveCategory('All') }}
                  className="mt-4 text-purple-light hover:underline text-sm"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:w-80 flex-shrink-0 space-y-6">
            {/* Search */}
            <div
              className="p-5 rounded-2xl"
              style={{ background: 'rgba(13,13,26,0.8)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <h3 className="text-text-primary font-semibold mb-3 text-sm" style={{ fontFamily: 'Syne, sans-serif' }}>
                Search
              </h3>
              <div className="relative">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="search"
                  placeholder="Search posts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="input-dark pl-10 text-sm"
                />
              </div>
            </div>

            {/* Top posts */}
            <div
              className="p-5 rounded-2xl"
              style={{ background: 'rgba(13,13,26,0.8)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <h3 className="text-text-primary font-semibold mb-4 text-sm" style={{ fontFamily: 'Syne, sans-serif' }}>
                🔥 Top Posts This Week
              </h3>
              <div className="space-y-3">
                {TOP_POSTS.map((post, i) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="flex items-start gap-3 group">
                    <span className="text-2xl font-black text-white/10 leading-none mt-0.5 w-6 flex-shrink-0">
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-text-primary text-sm font-medium leading-snug group-hover:text-cyan-DEFAULT transition-colors line-clamp-2">
                        {post.title}
                      </p>
                      <p className="text-text-muted/60 text-xs mt-0.5">{post.views}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Affiliate banner */}
            <div
              className="p-5 rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(123,94,167,0.15), rgba(0,212,255,0.08))',
                border: '1px solid rgba(123,94,167,0.25)',
              }}
            >
              <p className="text-xs text-text-muted/60 mb-2 uppercase tracking-wide font-medium">Sponsored</p>
              <h4 className="text-text-primary font-bold mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>
                Try Jasper AI Free
              </h4>
              <p className="text-text-muted text-xs mb-4 leading-relaxed">
                The #1 AI writing tool used by 100,000+ marketers. Get 7 days free.
              </p>
              <a
                href="https://jasper.ai"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="block text-center btn-primary text-sm py-2.5"
              >
                Start Free Trial →
              </a>
            </div>

            {/* Email signup */}
            <div
              className="p-5 rounded-2xl"
              style={{ background: 'rgba(13,13,26,0.8)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <h3 className="text-text-primary font-semibold mb-2 text-sm" style={{ fontFamily: 'Syne, sans-serif' }}>
                Get Weekly Updates
              </h3>
              <p className="text-text-muted text-xs mb-4 leading-relaxed">
                New tool reviews and automation guides every week. No spam.
              </p>
              <EmailCapture source="blog_sidebar" placeholder="your@email.com" buttonText="Subscribe" className="flex-col gap-2" />
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
