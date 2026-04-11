import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import BlogCard from '@/components/BlogCard'
import FeaturedTool from '@/components/FeaturedTool'
import NewsletterBanner from '@/components/NewsletterBanner'
import EmailCapture from '@/components/EmailCapture'
import { getAllPosts } from '@/lib/mdx'
import CategoriesGrid from './CategoriesGrid'
import EbookSection from './EbookSection'

export const metadata: Metadata = {
  title: 'AIProSpace — Master AI Tools, Automate Everything, Make Money',
  description:
    'The #1 AI tools resource. Weekly reviews, automation tutorials, and real strategies to earn more with AI. Join 12,400+ readers.',
}

export default function HomePage() {
  const posts = getAllPosts().slice(0, 6)

  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Categories Grid */}
      <CategoriesGrid />

      {/* Latest Blog Posts */}
      <section className="section">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2
                className="text-3xl md:text-4xl font-extrabold text-text-primary"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                Latest from the Blog
              </h2>
              <p className="text-text-muted mt-2">
                In-depth reviews, guides and strategies, updated weekly.
              </p>
            </div>
            <Link
              href="/blog"
              className="hidden sm:flex items-center gap-2 text-purple-light hover:text-purple-DEFAULT font-medium text-sm transition-colors group"
            >
              View all posts
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {posts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {posts.map((post, i) => (
                <BlogCard key={post.slug} post={post} index={i} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {Array.from({ length: 3 }).map((_, i) => (
                <PlaceholderBlogCard key={i} index={i} />
              ))}
            </div>
          )}

          <div className="text-center">
            <Link href="/blog" className="btn-secondary inline-flex">
              View All Posts →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Tool */}
      <FeaturedTool />

      {/* eBook Section */}
      <EbookSection />

      {/* Newsletter */}
      <NewsletterBanner />
    </>
  )
}

function PlaceholderBlogCard({ index }: { index: number }) {
  const IMAGES = [
    'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&auto=format&fit=crop&q=80',
  ]
  const TITLES = [
    '10 Best AI Writing Tools in 2025 (Tested & Ranked)',
    'How to Automate Your Instagram with AI (Step by Step)',
    'How to Make $5,000/Month with AI Tools',
  ]
  const CATEGORIES = ['AI Tools', 'Automation', 'Make Money']
  const EXCERPTS = [
    "We tested 30+ AI writing tools so you don't have to. Here are the top 10 for bloggers, marketers and entrepreneurs.",
    'Complete guide to automating your Instagram content strategy using AI tools — save hours every week.',
    'Real strategies from real people making serious money with AI tools in 2025. No fluff, just results.',
  ]
  const SLUGS = [
    'best-ai-tools-2025',
    'how-to-automate-instagram-with-ai',
    'make-money-with-ai-tools',
  ]
  const CAT_COLORS: Record<string, { bg: string; text: string; border: string }> = {
    'AI Tools': { bg: 'rgba(249,115,22,0.15)', text: '#fb923c', border: 'rgba(249,115,22,0.3)' },
    Automation: { bg: 'rgba(168,85,247,0.12)', text: '#c084fc', border: 'rgba(168,85,247,0.3)' },
    'Make Money': { bg: 'rgba(251,191,36,0.12)', text: '#fbbf24', border: 'rgba(251,191,36,0.3)' },
  }

  const cat = CAT_COLORS[CATEGORIES[index]]

  return (
    <Link href={`/blog/${SLUGS[index]}`} className="block group">
      <article
        className="h-full rounded-2xl overflow-hidden card-hover"
        style={{ background: 'var(--card-bg)', border: '1px solid var(--border)' }}
      >
        <div className="relative w-full h-48 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={IMAGES[index]} alt={TITLES[index]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <div className="absolute top-3 left-3">
            <span
              className="text-xs font-semibold px-2.5 py-1 rounded-full"
              style={{ background: cat.bg, color: cat.text, border: `1px solid ${cat.border}`, backdropFilter: 'blur(10px)' }}
            >
              {CATEGORIES[index]}
            </span>
          </div>
        </div>
        <div className="p-5">
          <h3
            className="text-base font-bold mb-2 leading-snug line-clamp-2 group-hover:opacity-80 transition-opacity"
            style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text-primary)' }}
          >
            {TITLES[index]}
          </h3>
          <p className="text-sm leading-relaxed mb-4 line-clamp-2" style={{ color: 'var(--text-muted)' }}>
            {EXCERPTS[index]}
          </p>
          <div className="flex items-center justify-between text-xs" style={{ color: 'var(--text-muted)', opacity: 0.7 }}>
            <span>Jan 15, 2025</span>
            <span>8 min read</span>
          </div>
        </div>
        <div className="px-5 pb-4 flex items-center gap-1 text-xs font-medium" style={{ color: 'var(--text-muted)' }}>
          <span className="group-hover:text-[var(--primary)] transition-colors">Read article</span>
          <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform group-hover:text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </article>
    </Link>
  )
}
