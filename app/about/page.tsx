import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About',
  description: 'AIProSpace — honest AI tool reviews, automation guides, and strategies to use AI effectively.',
}

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-2xl font-bold text-tx mb-6">About AIProSpace</h1>

      <div className="prose">
        <p>
          AIProSpace is an independent guide to AI tools and automation. We test tools, build
          workflows, and share what actually works — no hype, no paid placements.
        </p>

        <h2>What we cover</h2>
        <ul>
          <li>Honest reviews of the best AI tools</li>
          <li>Step-by-step automation guides with n8n, Zapier, and Make</li>
          <li>Practical ways to save time and earn more using AI</li>
          <li>Beginner-friendly introductions to new AI technology</li>
        </ul>

        <h2>Our standards</h2>
        <p>
          Every tool we review is tested by our team. We disclose affiliate relationships
          transparently. We never accept payment to write positive reviews.
        </p>

        <h2>Get in touch</h2>
        <p>
          Questions, partnership inquiries, or feedback — reach us at{' '}
          <Link href="/contact" className="underline underline-offset-2 hover:opacity-70">
            the contact page
          </Link>
          .
        </p>
      </div>
    </div>
  )
}
