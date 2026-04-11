import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getPostBySlug, getAllPosts } from '@/lib/mdx'
import AdBanner from '@/components/AdBanner'

type Props = { params: { slug: string } }

export async function generateStaticParams() {
  return getAllPosts().map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.excerpt,
  }
}

const mdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="text-xl font-bold text-tx mt-8 mb-3 scroll-mt-20" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-base font-semibold text-tx mt-6 mb-2 scroll-mt-20" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-sm leading-relaxed text-tx opacity-90 mb-4" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-tx underline underline-offset-2 hover:opacity-70" target="_blank" rel="noopener noreferrer" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc pl-5 mb-4 space-y-1 text-sm opacity-90" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal pl-5 mb-4 space-y-1 text-sm opacity-90" {...props} />
  ),
  li: (props: React.LiHTMLAttributes<HTMLLIElement>) => (
    <li className="text-tx" {...props} />
  ),
  blockquote: (props: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="border-l-2 border-border pl-4 my-4 text-muted italic text-sm" {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold text-tx" {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code className="text-xs bg-card border border-border rounded px-1 py-0.5 font-mono" {...props} />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre className="bg-card border border-border rounded-lg p-4 overflow-x-auto text-xs mb-4" {...props} />
  ),
  hr: () => <hr className="border-border my-6" />,
}

export default async function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const { frontmatter, readingTime, content } = post
  const dateFormatted = new Date(frontmatter.date).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  })

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex gap-12">
        {/* Article */}
        <article className="flex-1 min-w-0 max-w-2xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs text-muted mb-6">
            <Link href="/blog" className="hover:text-tx transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-tx truncate">{frontmatter.title}</span>
          </nav>

          {/* Title */}
          <h1 className="text-2xl font-bold text-tx leading-tight mb-4">{frontmatter.title}</h1>

          {/* Meta */}
          <div className="flex items-center gap-3 text-xs text-muted mb-6 pb-6 border-b border-border">
            <span>{dateFormatted}</span>
            <span>·</span>
            <span>{readingTime}</span>
            <span>·</span>
            <span className="badge">{frontmatter.category}</span>
          </div>

          {/* Ad — top */}
          <AdBanner height={90} />

          {/* MDX Content */}
          <div className="prose mt-6">
            <MDXRemote source={content} components={mdxComponents} />
          </div>

          {/* Ad — bottom */}
          <AdBanner height={90} />

          {/* Back link */}
          <div className="mt-8 pt-6 border-t border-border">
            <Link href="/blog" className="text-xs text-muted hover:text-tx transition-colors">
              ← Back to Blog
            </Link>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="hidden lg:block w-56 flex-shrink-0">
          <div className="sticky top-20 space-y-6">
            <AdBanner height={250} label="Ad" />
            <div className="card p-4">
              <p className="text-xs font-semibold text-tx mb-3">More posts</p>
              <div className="space-y-2">
                {getAllPosts().filter(p => p.slug !== params.slug).slice(0, 4).map(p => (
                  <Link key={p.slug} href={`/blog/${p.slug}`} className="block text-xs text-muted hover:text-tx transition-colors leading-snug">
                    {p.frontmatter.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
