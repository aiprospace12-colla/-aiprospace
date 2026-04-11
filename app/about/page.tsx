import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About AIProSpace',
  description:
    'Learn about AIProSpace — the #1 resource for AI tool reviews, automation guides, and strategies to earn money online with AI.',
}

const stats = [
  { value: '150+', label: 'Articles Published' },
  { value: '500+', label: 'AI Tools Reviewed' },
  { value: '12,400+', label: 'Weekly Readers' },
  { value: '4.9/5', label: 'Average Tool Rating' },
]

const topics = [
  { icon: '🤖', title: 'AI Tool Reviews', desc: 'Honest, in-depth reviews of the best AI tools for every use case.' },
  { icon: '⚙️', title: 'Automation Tutorials', desc: 'Step-by-step workflows to automate your business and content creation.' },
  { icon: '💰', title: 'AI Income Strategies', desc: 'Real ways to make money online using AI — tested and proven.' },
  { icon: '📊', title: 'AI News & Trends', desc: 'Weekly roundups of the most important AI developments.' },
  { icon: '📚', title: 'Free Resources', desc: 'eBooks, templates, and checklists to accelerate your AI journey.' },
  { icon: '🎓', title: 'Beginner Guides', desc: 'Start from zero and master AI tools with our beginner-friendly guides.' },
]

const trustPoints = [
  {
    icon: '🔬',
    title: 'We Test Everything',
    desc: 'Every tool we review is actually tested by our team. No based-on-the-website reviews.',
  },
  {
    icon: '💯',
    title: 'Honest Reviews',
    desc: 'We mention the cons, not just the pros. Our readers trust us because we tell the truth.',
  },
  {
    icon: '🚫',
    title: 'No Pay-to-Play',
    desc: "We never accept payment to write positive reviews. Our editorial integrity is non-negotiable.",
  },
  {
    icon: '🔄',
    title: 'Always Updated',
    desc: 'AI moves fast. We update our reviews and guides regularly to keep you current.',
  },
]

export default function AboutPage() {
  return (
    <div className="pt-20 min-h-screen" style={{ background: '#06060f' }}>
      {/* Hero */}
      <div className="relative py-24 px-4 text-center overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(123,94,167,0.1) 0%, transparent 100%)',
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
            👋 About Us
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary mb-6"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Built for the AI-First Generation
          </h1>
          <p className="text-text-muted text-xl leading-relaxed max-w-2xl mx-auto">
            AIProSpace is your independent guide to navigating the AI revolution — honest
            reviews, real workflows, and no-BS money strategies.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-20">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-20">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl"
              style={{ background: 'rgba(13,13,26,0.8)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <p
                className="text-4xl font-extrabold gradient-purple mb-1"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                {stat.value}
              </p>
              <p className="text-text-muted text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Mission */}
        <div
          className="p-8 md:p-12 rounded-3xl mb-16 border-glow-purple"
          style={{ background: 'rgba(13,13,26,0.8)', border: '1px solid rgba(255,255,255,0.07)' }}
        >
          <h2
            className="text-2xl md:text-3xl font-extrabold text-text-primary mb-4"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Our Mission
          </h2>
          <p className="text-text-muted text-lg leading-relaxed mb-4">
            The AI tools market is overwhelming. New tools launch every day, claims are exaggerated,
            and most &quot;reviews&quot; are thinly veiled ads. We&apos;re here to cut through the noise.
          </p>
          <p className="text-text-muted text-lg leading-relaxed">
            AIProSpace was founded with one mission:{' '}
            <span className="text-text-primary font-medium">
              help regular people leverage AI to work smarter and earn more
            </span>
            . We test every tool, run every workflow, and only share what actually works.
          </p>
        </div>

        {/* What we cover */}
        <div className="mb-16">
          <h2
            className="text-2xl md:text-3xl font-extrabold text-text-primary mb-8 text-center"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            What AIProSpace Covers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {topics.map((topic) => (
              <div
                key={topic.title}
                className="p-6 rounded-2xl card-hover"
                style={{ background: 'rgba(13,13,26,0.8)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div className="text-3xl mb-3">{topic.icon}</div>
                <h3
                  className="text-base font-bold text-text-primary mb-2"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  {topic.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">{topic.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why trust us */}
        <div className="mb-16">
          <h2
            className="text-2xl md:text-3xl font-extrabold text-text-primary mb-8 text-center"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Why Trust Us?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {trustPoints.map((point) => (
              <div
                key={point.title}
                className="flex items-start gap-5 p-6 rounded-2xl"
                style={{ background: 'rgba(13,13,26,0.8)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: 'rgba(123,94,167,0.15)' }}
                >
                  {point.icon}
                </div>
                <div>
                  <h3
                    className="text-base font-bold text-text-primary mb-1"
                    style={{ fontFamily: 'Syne, sans-serif' }}
                  >
                    {point.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className="text-center p-10 rounded-3xl"
          style={{
            background: 'linear-gradient(135deg, rgba(123,94,167,0.15), rgba(0,212,255,0.08))',
            border: '1px solid rgba(123,94,167,0.25)',
          }}
        >
          <h3
            className="text-2xl font-bold text-text-primary mb-3"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Ready to Master AI?
          </h3>
          <p className="text-text-muted mb-6">
            Start with our free AI Automation Playbook — no fluff, just results.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/resources" className="btn-primary">
              Get Free Playbook
            </Link>
            <Link href="/blog" className="btn-secondary">
              Read the Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
