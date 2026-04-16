'use client'

import { useState } from 'react'
import Link from 'next/link'
import { POSTS, BLOG_CATEGORIES } from '@/data/blog'
import AdBanner from '@/components/AdBanner'
import { MobileSidebar } from '@/components/MobileSidebar'

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('')

  const filtered = activeCategory
    ? POSTS.filter(p => p.category.toLowerCase().includes(activeCategory))
    : POSTS

  const categorySidebar = (
    <div style={{ padding: '4px 12px 20px' }}>
      <p style={{ fontWeight: 700, fontSize: 14, color: 'var(--text)', padding: '0 8px', marginBottom: 16 }}>Blog</p>
      <div style={{ height: 1, background: 'var(--border)', marginBottom: 16 }} />
      <span className="sidebar-label" style={{ marginBottom: 6 }}>CATEGORIES</span>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 1, marginTop: 4 }}>
        {BLOG_CATEGORIES.map(cat => (
          <button
            key={cat.slug}
            onClick={() => setActiveCategory(cat.slug)}
            className={`sidebar-item${activeCategory === cat.slug ? ' active' : ''}`}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  )

  return (
    <div style={{ display: 'flex' }}>
      <MobileSidebar>{categorySidebar}</MobileSidebar>
      {/* Sidebar */}
      <aside style={{
        width: 240, flexShrink: 0, borderRight: '1px solid var(--border)',
        padding: '20px 12px', position: 'sticky', top: 97,
        height: 'calc(100vh - 97px)', overflowY: 'auto', background: 'var(--sidebar-bg)',
      }} className="hidden md:block">
        {categorySidebar}
      </aside>

      {/* Main */}
      <div style={{ flex: 1, padding: 40, maxWidth: 860, minWidth: 0 }}>
        <h1 style={{ fontSize: 22, fontWeight: 700, color: 'var(--text)', marginBottom: 4 }}>Blog</h1>
        <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 20 }}>Latest AI reviews, guides and strategies</p>

        <AdBanner />

        <div style={{ marginTop: 20 }}>
          {filtered.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="post-row">
              <span className="post-category">{post.category}</span>
              <span className="post-title">{post.title}</span>
              <span className="post-excerpt">{post.excerpt}</span>
              <span className="post-meta">{post.date} · {post.readTime}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
