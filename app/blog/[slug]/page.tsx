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
  return { title: post.frontmatter.title, description: post.frontmatter.excerpt }
}

const mdx = {
  h2: (p: React.HTMLAttributes<HTMLHeadingElement>) => <h2 className="text-xl font-bold text-tx mt-8 mb-3" {...p} />,
  h3: (p: React.HTMLAttributes<HTMLHeadingElement>) => <h3 className="text-base font-semibold text-tx mt-6 mb-2" {...p} />,
  p:  (p: React.HTMLAttributes<HTMLParagraphElement>) => <p className="text-[15px] leading-[1.8] text-tx mb-4" style={{ opacity: 0.9 }} {...p} />,
  a:  (p: React.AnchorHTMLAttributes<HTMLAnchorElement>) => <a className="text-tx underline underline-offset-2 hover:opacity-70" target="_blank" rel="noopener noreferrer" {...p} />,
  ul: (p: React.HTMLAttributes<HTMLUListElement>) => <ul className="list-disc pl-5 mb-4 space-y-1" {...p} />,
  ol: (p: React.HTMLAttributes<HTMLOListElement>) => <ol className="list-decimal pl-5 mb-4 space-y-1" {...p} />,
  li: (p: React.LiHTMLAttributes<HTMLLIElement>) => <li className="text-[15px] text-tx" style={{ opacity: 0.9 }} {...p} />,
  blockquote: (p: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => <blockquote className="border-l-[3px] border-border pl-4 my-5 text-muted italic" {...p} />,
  strong: (p: React.HTMLAttributes<HTMLElement>) => <strong className="font-semibold text-tx" {...p} />,
  code: (p: React.HTMLAttributes<HTMLElement>) => <code className="text-[13px] bg-card border border-border rounded px-1 py-0.5 font-mono" {...p} />,
  pre: (p: React.HTMLAttributes<HTMLPreElement>) => <pre className="bg-card border border-border rounded-lg p-4 overflow-x-auto text-[13px] mb-4" {...p} />,
  hr: () => <hr className="border-border my-6" />,
  table: (p: React.HTMLAttributes<HTMLTableElement>) => <div className="overflow-x-auto mb-4"><table className="data-table" {...p} /></div>,
  th: (p: React.ThHTMLAttributes<HTMLTableCellElement>) => <th {...p} />,
  td: (p: React.TdHTMLAttributes<HTMLTableCellElement>) => <td {...p} />,
}

export default async function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const { frontmatter, readingTime, content } = post
  const dateFormatted = new Date(frontmatter.date).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  })
  const allPosts = getAllPosts()

  return (
    <div className="flex">
      {/* TOC Sidebar */}
      <aside className="hidden lg:flex flex-col w-60 flex-shrink-0 border-r border-border px-4 py-8 sticky top-[97px] self-start h-[calc(100vh-97px)] overflow-y-auto">
        <span className="sidebar-label mb-3">ON THIS PAGE</span>
        <nav className="space-y-0.5 text-[13px] text-muted mb-6">
          <Link href="#" className="block py-1 hover:text-tx transition-colors">Introduction</Link>
        </nav>
        <div className="divider mb-4" />
        <span className="sidebar-label mb-2">MORE POSTS</span>
        <div className="space-y-1">
          {allPosts.filter(p => p.slug !== params.slug).slice(0, 5).map(p => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="block text-[12px] text-muted hover:text-tx transition-colors py-0.5 leading-snug">
              {p.frontmatter.title}
            </Link>
          ))}
        </div>
      </aside>

      {/* Article */}
      <article className="flex-1 px-8 py-8 max-w-2xl">
        {/* Breadcrumb */}
        <nav className="text-[12px] text-muted mb-5 flex items-center gap-1.5">
          <Link href="/blog" className="hover:text-tx transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-tx">{frontmatter.category}</span>
        </nav>

        <h1 className="text-[28px] font-bold text-tx leading-tight mb-4">{frontmatter.title}</h1>

        <div className="flex items-center gap-3 text-[13px] text-muted mb-6 pb-6 border-b border-border flex-wrap">
          <span className="badge">{frontmatter.category}</span>
          <span>{dateFormatted}</span>
          <span>·</span>
          <span>{readingTime}</span>
        </div>

        <AdBanner height={90} />

        <div className="prose mt-6">
          <MDXRemote source={content} components={mdx} />
        </div>

        <AdBanner height={90} />

        {/* Author */}
        <div className="mt-8 pt-6 border-t border-border flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-sm font-bold text-tx flex-shrink-0">
            {frontmatter.author[0]}
          </div>
          <div>
            <p className="text-sm font-semibold text-tx">{frontmatter.author}</p>
            <p className="text-xs text-muted mt-0.5">AI tools researcher and automation specialist.</p>
          </div>
        </div>
      </article>
    </div>
  )
}
