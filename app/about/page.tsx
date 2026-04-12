import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About AIProSpace — AI Tools & Resources',
  description: 'AIProSpace is the #1 free resource for AI tools, guides and strategies. Learn about our mission, standards, and how we make money.',
  alternates: { canonical: 'https://aiprospace.com/about' },
}

export default function AboutPage() {
  return (
    <div style={{ maxWidth: 640, margin: '0 auto', padding: '64px 40px' }}>
      <h1 style={{ fontSize: 26, fontWeight: 700, color: 'var(--text)', marginBottom: 24 }}>About AIProSpace</h1>

      <div className="prose">
        <p>
          AIProSpace is an independent guide to AI tools, automation, and strategies. We test tools,
          build real workflows, and share what actually works — no hype, no fluff.
        </p>

        <h2>What we cover</h2>
        <ul>
          <li>Honest reviews of the best AI tools across every category</li>
          <li>Step-by-step guides for automation with n8n, Make, and Zapier</li>
          <li>Practical strategies to save time and earn more using AI</li>
          <li>Beginner-friendly introductions to new AI technology</li>
          <li>Courses, resources, and a complete AI glossary — all free</li>
        </ul>

        <h2>Our standards</h2>
        <p>
          Every tool we feature is tested by our team. We do not accept payment for positive coverage.
          We disclose any affiliate relationships clearly. Our rankings are based on actual performance,
          not sponsorship fees.
        </p>

        <h2>How we make money</h2>
        <p>
          AIProSpace is supported by display advertising (Google AdSense) and occasionally earns
          commissions from affiliate links, which are always clearly disclosed. This allows us to keep
          all content free for readers.
        </p>

        <h2>The team</h2>
        <p>
          AIProSpace is run by a small team of AI practitioners who use these tools daily.
          We publish what we personally find useful — nothing more.
        </p>

        <h2>Get in touch</h2>
        <p>
          Questions, partnerships, or corrections —{' '}
          <Link href="/contact" style={{ textDecoration: 'underline' }}>contact us here</Link>.
        </p>
      </div>
    </div>
  )
}
