import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { POSTS } from '@/data/blog'
import AdBanner from '@/components/AdBanner'

type Props = { params: { slug: string } }

export async function generateStaticParams() {
  return POSTS.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = POSTS.find(p => p.slug === params.slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `https://aiprospace.com/blog/${post.slug}` },
    openGraph: { title: post.title, description: post.description, url: `https://aiprospace.com/blog/${post.slug}`, type: 'article' },
  }
}

// Sample content map for posts
const POST_CONTENT: Record<string, { sections: { h2: string; body: string }[]; faqs: { q: string; a: string }[] }> = {
  'best-ai-writing-tools-2026': {
    sections: [
      { h2: 'Why AI Writing Tools Matter in 2026', body: 'The quality gap between AI-written and human-written content has narrowed dramatically. Today\'s AI writing tools don\'t just autocomplete sentences — they research topics, optimize for SEO, match your brand voice, and produce publish-ready drafts in minutes. For content teams, bloggers, and marketers, these tools represent a fundamental shift in how content is created.' },
      { h2: 'What to Look for in an AI Writing Tool', body: 'The best AI writing tools share a few key characteristics: output quality that requires minimal editing, a genuine understanding of context and tone, reliable factual accuracy, useful templates for your specific use cases, and fair pricing relative to the value delivered. We evaluated 30+ tools against these criteria to produce this ranking.' },
      { h2: 'Our Top Pick: ChatGPT', body: 'ChatGPT (GPT-4o) remains our overall top pick for AI writing in 2026. Its combination of writing quality, versatility, and ecosystem — including plugins, custom GPTs, and image generation — makes it the most capable general-purpose writing tool available. The free tier provides genuine value, while ChatGPT Plus at $20/month unlocks the full feature set.' },
      { h2: 'Best for Marketing Copy: Jasper', body: 'Jasper continues to lead for marketing teams who need consistent brand-voice content at scale. Its 50+ templates cover virtually every marketing use case, and the Brand Voice feature ensures every piece of content sounds like it came from the same writer. For teams producing high volumes of marketing content, Jasper\'s structured approach consistently outperforms more general-purpose tools.' },
    ],
    faqs: [
      { q: 'What is the best AI writing tool in 2026?', a: 'ChatGPT (GPT-4o) is the most versatile and widely used AI writing tool. For marketing copy, Jasper leads. For paraphrasing, Quillbot is best. Claude is top for long-form nuanced writing. The right choice depends on your specific use case and budget.' },
      { q: 'Are AI writing tools free?', a: 'Many AI writing tools offer free tiers. ChatGPT\'s free plan includes GPT-3.5 and limited GPT-4o. Rytr offers 10,000 characters/month free. Quillbot and Grammarly have free basic plans. Claude also has a free tier.' },
      { q: 'Will AI replace human writers?', a: 'AI tools augment rather than replace skilled writers. They handle first drafts, research, and structure — freeing writers to focus on unique insights, brand voice, and quality control. The writers who use AI as a tool will outcompete those who don\'t, but the demand for human creativity and judgment remains strong.' },
      { q: 'Is AI-generated content safe for SEO?', a: 'Yes — Google has confirmed it does not penalize AI-generated content that is helpful and high-quality. The key is producing content that genuinely serves readers. Using AI to mass-produce thin, low-value content can hurt your rankings. Human review and editing of AI output is strongly recommended.' },
      { q: 'What is the most accurate AI writing tool?', a: 'Claude by Anthropic is generally rated the most accurate for factual content, with fewer hallucinations than other major models. Perplexity AI, which cites its sources, is the most reliable for research-based writing. Always fact-check AI-generated content, regardless of the tool.' },
    ],
  },
}

function getGenericContent(post: (typeof POSTS)[0]) {
  return {
    sections: [
      { h2: 'Introduction', body: `This comprehensive guide covers everything you need to know about ${post.title.toLowerCase()}. We've tested the tools, run the workflows, and compiled the most actionable advice available.` },
      { h2: 'What You\'ll Learn', body: 'In this guide, we cover the key tools, strategies, and step-by-step processes that experts use. Whether you\'re a beginner or looking to level up, you\'ll find practical advice you can apply immediately.' },
      { h2: 'Key Insights', body: 'After extensive research and testing, we\'ve identified the approaches that consistently deliver results. The tools and methods described here have been validated by thousands of practitioners in the field.' },
      { h2: 'Getting Started', body: 'The best way to get started is to pick one tool or approach and focus on it for 30 days before expanding. Spreading attention across too many tools too quickly leads to superficial results. Master one, then add more.' },
    ],
    faqs: [
      { q: `What is the best approach for ${post.category.toLowerCase()}?`, a: 'Start with the fundamentals before adding complexity. Focus on one tool or method, measure results, then iterate. The most successful practitioners combine AI assistance with human judgment and domain expertise.' },
      { q: 'How long does it take to see results?', a: 'Most people see meaningful results within 2-4 weeks of consistent application. The learning curve is typically steepest in the first week and flattens as you develop intuition for what works.' },
      { q: 'Do I need technical skills?', a: 'Most modern AI tools require no technical background. The interfaces are designed for everyone. That said, basic familiarity with digital tools and a willingness to experiment accelerates the learning process.' },
      { q: 'What are common mistakes to avoid?', a: 'The most common mistakes are: using AI output without review or editing, trying to use too many tools at once, not adapting AI suggestions to your specific context, and skipping the learning phase by jumping straight to automation.' },
      { q: 'How do I measure success?', a: 'Define clear metrics before you start — time saved, output quality, engagement rates, or revenue generated. Track them weekly. AI tools should improve measurable outcomes, not just feel productive.' },
    ],
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = POSTS.find(p => p.slug === params.slug)
  if (!post) notFound()

  const content = POST_CONTENT[params.slug] || getGenericContent(post)
  const otherPosts = POSTS.filter(p => p.slug !== params.slug).slice(0, 5)

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    author: { '@type': 'Organization', name: 'AIProSpace Team' },
    publisher: { '@type': 'Organization', name: 'AIProSpace', url: 'https://aiprospace.com' },
    datePublished: post.date,
    url: `https://aiprospace.com/blog/${post.slug}`,
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div style={{ display: 'flex' }}>
        {/* TOC Sidebar */}
        <aside style={{
          width: 240, flexShrink: 0, borderRight: '1px solid var(--border)',
          padding: '20px 12px', position: 'sticky', top: 97,
          height: 'calc(100vh - 97px)', overflowY: 'auto', background: 'var(--sidebar-bg)',
        }} className="hidden md:block">
          <span className="sidebar-label" style={{ marginBottom: 8 }}>ON THIS PAGE</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 1, marginBottom: 24 }}>
            {content.sections.map(s => (
              <a key={s.h2} href={`#${s.h2.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}
                className="sidebar-item" style={{ fontSize: 13 }}>
                {s.h2}
              </a>
            ))}
            <a href="#faq" className="sidebar-item" style={{ fontSize: 13 }}>FAQ</a>
          </div>

          <div style={{ height: 1, background: 'var(--border)', marginBottom: 16 }} />
          <span className="sidebar-label" style={{ marginBottom: 8 }}>MORE POSTS</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {otherPosts.map(p => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="sidebar-item" style={{ fontSize: 13 }}>
                {p.title.slice(0, 36)}…
              </Link>
            ))}
          </div>
        </aside>

        {/* Article */}
        <div style={{ flex: 1, padding: 40, maxWidth: 720, minWidth: 0 }}>
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'var(--muted)', marginBottom: 16 }}>
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/blog">Blog</Link>
            <span>/</span>
            <span style={{ color: 'var(--text)' }}>{post.category}</span>
          </div>

          <h1 style={{ fontSize: 26, fontWeight: 700, color: 'var(--text)', lineHeight: 1.35, marginBottom: 12 }}>{post.title}</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
            <span className="badge">{post.category}</span>
            <span style={{ fontSize: 12, color: 'var(--muted)' }}>By AIProSpace Team · {post.date} · {post.readTime}</span>
          </div>

          {post.heroImage && (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={post.heroImage}
              alt={post.title}
              style={{ width: '100%', height: 280, objectFit: 'cover', borderRadius: 10, marginBottom: 24, display: 'block', border: '1px solid var(--border)' }}
            />
          )}

          {!post.heroImage && <div style={{ height: 1, background: 'var(--border)', marginBottom: 24 }} />}

          <AdBanner />

          {/* Article body */}
          <div className="prose" style={{ marginTop: 24 }}>
            {content.sections.map(section => (
              <div key={section.h2}>
                <h2 id={section.h2.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}>{section.h2}</h2>
                <p>{section.body}</p>
              </div>
            ))}
          </div>

          <AdBanner />

          {/* FAQ */}
          <div id="faq" style={{ marginTop: 40 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: 'var(--text)', marginBottom: 16 }}>Frequently Asked Questions</h2>
            {content.faqs.map(faq => (
              <details key={faq.q} className="faq-item">
                <summary className="faq-question">{faq.q}</summary>
                <p className="faq-answer">{faq.a}</p>
              </details>
            ))}
          </div>

          {/* Nav */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 40, paddingTop: 24, borderTop: '1px solid var(--border)' }}>
            {otherPosts[0] && (
              <Link href={`/blog/${otherPosts[0].slug}`} style={{ fontSize: 13, color: 'var(--muted)' }}>
                ← Previous
              </Link>
            )}
            {otherPosts[1] && (
              <Link href={`/blog/${otherPosts[1].slug}`} style={{ fontSize: 13, color: 'var(--muted)' }}>
                Next →
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
