import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getPostBySlug, getAllPosts } from '@/lib/mdx'
import EmailCapture from '@/components/EmailCapture'
import BlogCard from '@/components/BlogCard'
import ShareButtons from './ShareButtons'
import TableOfContents from './TableOfContents'

type Props = { params: { slug: string } }

const CATEGORY_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  'AI Tools': { bg: 'rgba(123,94,167,0.15)', text: '#c084fc', border: 'rgba(123,94,167,0.3)' },
  Automation: { bg: 'rgba(0,212,255,0.1)', text: '#00d4ff', border: 'rgba(0,212,255,0.25)' },
  'Make Money': { bg: 'rgba(34,197,94,0.1)', text: '#4ade80', border: 'rgba(34,197,94,0.25)' },
  News: { bg: 'rgba(255,107,107,0.1)', text: '#ff6b6b', border: 'rgba(255,107,107,0.25)' },
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) return {}

  const { title, excerpt, category } = post.frontmatter
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aiprospace.com'

  return {
    title,
    description: excerpt,
    keywords: [category, 'AI tools', 'automation', ...(post.frontmatter.tags || [])],
    openGraph: {
      title,
      description: excerpt,
      type: 'article',
      publishedTime: post.frontmatter.date,
      authors: [post.frontmatter.author],
      url: `${siteUrl}/blog/${params.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: excerpt,
    },
  }
}

const mdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="text-2xl font-extrabold text-text-primary mt-10 mb-4 scroll-mt-24"
      style={{ fontFamily: 'Syne, sans-serif' }}
      {...props}
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="text-xl font-bold text-text-primary mt-8 mb-3 scroll-mt-24"
      style={{ fontFamily: 'Syne, sans-serif' }}
      {...props}
    />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-text-muted leading-relaxed mb-5" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-cyan-DEFAULT hover:underline" target="_blank" rel="noopener noreferrer" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-none space-y-2 mb-5" {...props} />
  ),
  li: (props: React.LiHTMLAttributes<HTMLLIElement>) => (
    <li className="flex items-start gap-2 text-text-muted">
      <span className="text-purple-light mt-1 flex-shrink-0">▸</span>
      <span {...props} />
    </li>
  ),
  blockquote: (props: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="border-l-4 border-purple-DEFAULT pl-5 my-6 text-text-muted italic"
      style={{ background: 'rgba(123,94,167,0.07)', borderRadius: '0 12px 12px 0', padding: '16px 20px' }}
      {...props}
    />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="text-text-primary font-semibold" {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code
      className="text-cyan-DEFAULT text-sm px-1.5 py-0.5 rounded"
      style={{ background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.15)' }}
      {...props}
    />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className="rounded-xl p-5 overflow-x-auto text-sm mb-6"
      style={{ background: '#0d0d1a', border: '1px solid rgba(255,255,255,0.07)' }}
      {...props}
    />
  ),
}

// Affiliate box to inject mid-content
function AffiliateBox() {
  return (
    <div
      className="my-10 p-6 rounded-2xl"
      style={{
        background: 'linear-gradient(135deg, rgba(123,94,167,0.12), rgba(0,212,255,0.06))',
        border: '1px solid rgba(123,94,167,0.25)',
      }}
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="text-amber-400 text-sm font-bold">⭐ Recommended Tool</span>
      </div>
      <h4 className="text-text-primary font-bold mb-1" style={{ fontFamily: 'Syne, sans-serif' }}>
        Jasper AI — Best AI Writing Tool
      </h4>
      <p className="text-text-muted text-sm mb-4 leading-relaxed">
        Used by 100,000+ marketers to create blog posts, ads and social content in minutes. 7-day free trial available.
      </p>
      <a
        href="https://jasper.ai"
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="inline-flex items-center gap-2 btn-primary text-sm"
      >
        Try Jasper Free →
      </a>
    </div>
  )
}

export default async function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const { frontmatter, readingTime, content } = post
  const allPosts = getAllPosts()
  const relatedPosts = allPosts
    .filter((p) => p.slug !== params.slug && p.frontmatter.category === frontmatter.category)
    .slice(0, 3)

  const dateFormatted = new Date(frontmatter.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const cat = CATEGORY_COLORS[frontmatter.category] || {
    bg: 'rgba(255,255,255,0.05)',
    text: '#8888aa',
    border: 'rgba(255,255,255,0.1)',
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aiprospace.com'
  const postUrl = `${siteUrl}/blog/${params.slug}`

  // JSON-LD schema
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: frontmatter.title,
    description: frontmatter.excerpt,
    author: { '@type': 'Person', name: frontmatter.author },
    datePublished: frontmatter.date,
    publisher: {
      '@type': 'Organization',
      name: 'AIProSpace',
      url: siteUrl,
    },
    url: postUrl,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="pt-20 min-h-screen" style={{ background: '#06060f' }}>
        {/* Hero image */}
        <div
          className="w-full h-72 md:h-96 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #7b5ea7 0%, #00d4ff 50%, #7b5ea7 100%)',
          }}
        >
          <div className="absolute inset-0 opacity-20 bg-grid-pattern" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4">
              <span
                className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-4"
                style={{ background: cat.bg, color: cat.text, border: `1px solid ${cat.border}` }}
              >
                {frontmatter.category}
              </span>
              <h1
                className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white max-w-4xl leading-tight"
                style={{ fontFamily: 'Syne, sans-serif', textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}
              >
                {frontmatter.title}
              </h1>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Article */}
            <article className="flex-1 max-w-3xl">
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 mb-8 pb-8 border-b border-white/5">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                    style={{ background: 'linear-gradient(135deg, #7b5ea7, #00d4ff)' }}
                  >
                    {frontmatter.author[0]}
                  </div>
                  <div>
                    <p className="text-text-primary text-sm font-medium">{frontmatter.author}</p>
                    <p className="text-text-muted text-xs">{frontmatter.authorTitle || 'AIProSpace Team'}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-text-muted text-sm">
                  <span>{dateFormatted}</span>
                  <span>·</span>
                  <span>{readingTime}</span>
                </div>
                <div className="ml-auto">
                  <ShareButtons title={frontmatter.title} url={postUrl} />
                </div>
              </div>

              {/* MDX content */}
              <div className="prose prose-invert max-w-none">
                <MDXRemote source={content} components={mdxComponents} />
              </div>

              {/* Mid-content affiliate */}
              <AffiliateBox />

              {/* eBook CTA */}
              <div
                className="my-10 p-6 md:p-8 rounded-2xl"
                style={{
                  background: 'rgba(13,13,26,0.9)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <div
                  className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-3"
                  style={{ background: 'rgba(34,197,94,0.12)', color: '#4ade80', border: '1px solid rgba(34,197,94,0.3)' }}
                >
                  📥 FREE DOWNLOAD
                </div>
                <h3
                  className="text-xl font-bold text-text-primary mb-2"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  Get The AI Automation Playbook — Free
                </h3>
                <p className="text-text-muted text-sm mb-4 leading-relaxed">
                  10 AI tools and workflows to make money online. Join 12,400+ readers.
                </p>
                <EmailCapture source="blog_post_cta" placeholder="your@email.com" buttonText="Get Free Access" />
              </div>

              {/* Ad placeholder */}
              <div className="ad-placeholder h-24 my-8">
                <p>Advertisement</p>
              </div>

              {/* Author bio */}
              <div
                className="mt-12 p-6 rounded-2xl flex items-start gap-5"
                style={{ background: 'rgba(13,13,26,0.8)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div
                  className="w-16 h-16 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xl font-bold"
                  style={{ background: 'linear-gradient(135deg, #7b5ea7, #00d4ff)' }}
                >
                  {frontmatter.author[0]}
                </div>
                <div>
                  <h4 className="text-text-primary font-semibold mb-1" style={{ fontFamily: 'Syne, sans-serif' }}>
                    {frontmatter.author}
                  </h4>
                  <p className="text-text-muted/60 text-xs mb-2">{frontmatter.authorTitle || 'AI Tools & Automation Expert'}</p>
                  <p className="text-text-muted text-sm leading-relaxed">
                    The AIProSpace team tests and reviews the latest AI tools, automation workflows, and strategies to help you work smarter and earn more online.
                  </p>
                </div>
              </div>

              {/* Related posts */}
              {relatedPosts.length > 0 && (
                <div className="mt-16">
                  <h3
                    className="text-2xl font-bold text-text-primary mb-6"
                    style={{ fontFamily: 'Syne, sans-serif' }}
                  >
                    Related Posts
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                    {relatedPosts.map((p, i) => (
                      <BlogCard key={p.slug} post={p} index={i} />
                    ))}
                  </div>
                </div>
              )}
            </article>

            {/* Sidebar — Table of Contents */}
            <aside className="hidden lg:block lg:w-64 flex-shrink-0">
              <div className="sticky top-28 space-y-6">
                <TableOfContents content={content} />

                {/* Affiliate banner */}
                <div
                  className="p-5 rounded-2xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(123,94,167,0.12), rgba(0,212,255,0.06))',
                    border: '1px solid rgba(123,94,167,0.25)',
                  }}
                >
                  <p className="text-xs text-text-muted/60 mb-2 font-medium uppercase tracking-wide">Sponsored</p>
                  <h4 className="text-text-primary font-bold text-sm mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>
                    Try Jasper AI Free
                  </h4>
                  <p className="text-text-muted text-xs mb-3 leading-relaxed">
                    Write better content 10x faster with the #1 AI writing tool.
                  </p>
                  <a
                    href="https://jasper.ai"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="block text-center btn-primary text-xs py-2"
                  >
                    Start Free Trial
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  )
}
