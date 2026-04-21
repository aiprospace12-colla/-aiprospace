import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Affiliate Disclaimer | AIProSpace',
  description: 'AIProSpace affiliate disclaimer — we earn commissions on some links. All recommendations are honest and based on real testing.',
  alternates: { canonical: 'https://aiprospace.com/disclaimer' },
  robots: { index: true, follow: true },
}

export default function DisclaimerPage() {
  return (
    <div style={{ maxWidth: 760, margin: '0 auto', padding: '64px 40px' }}>
      <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 8 }}>Last updated: April 2026</p>
      <h1 style={{ fontSize: 28, fontWeight: 700, color: 'var(--text)', marginBottom: 8 }}>Affiliate Disclaimer</h1>
      <p style={{ fontSize: 15, color: 'var(--muted)', marginBottom: 40 }}>
        AIProSpace believes in full transparency. This page explains how we make money and how that may
        (or may not) affect the content you read on this site.
      </p>

      <div className="prose">

        <h2>FTC Disclosure</h2>
        <p>
          In accordance with the <strong>Federal Trade Commission (FTC) guidelines</strong> (16 CFR Part 255), AIProSpace discloses that this website contains affiliate links. When you click on these links and make a purchase, we may receive a commission from the merchant — at <strong>no extra cost to you</strong>.
        </p>
        <p>
          This disclosure applies across all pages of AIProSpace.com, including reviews, guides, resource pages, and blog posts. You do not need to see a disclosure notice on every individual link — this page serves as the site-wide disclosure required by the FTC.
        </p>

        <h2>What Are Affiliate Links?</h2>
        <p>
          An affiliate link is a specially tracked URL that tells the merchant&apos;s affiliate programme that you came from AIProSpace. If you click one of these links and then make a purchase within the merchant&apos;s cookie window (typically 24–90 days), we earn a small commission.
        </p>
        <p>
          The price you pay is <strong>exactly the same</strong> whether you use our affiliate link or navigate directly to the merchant&apos;s site. In some cases, our affiliate relationship allows us to offer exclusive discounts.
        </p>

        <h2>Affiliate Programmes We Participate In</h2>
        <p>AIProSpace may earn commissions through the following affiliate programmes:</p>
        <ul>
          <li>
            <strong>Amazon Associates</strong> — We are a participant in the Amazon Services LLC Associates Program, an affiliate advertising programme designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.
          </li>
          <li>
            <strong>AI tool affiliate programmes</strong> — Many of the AI tools, SaaS products, and software services we review offer affiliate programmes. These include but are not limited to tools in the categories of AI writing, AI image generation, automation, coding assistants, and productivity software.
          </li>
          <li>
            <strong>Course and educational platform affiliates</strong> — Online learning platforms and courses we recommend may have affiliate arrangements.
          </li>
        </ul>
        <p>
          We do not disclose the specific commission rates we earn from individual programmes, as these are subject to change and vary by product.
        </p>

        <h2>How Affiliate Relationships Affect Our Content</h2>
        <p>
          We want to be direct: <strong>affiliate relationships do not influence our editorial recommendations</strong>.
        </p>
        <ul>
          <li>We only recommend tools and services we have personally tested or have strong evidence to support recommending.</li>
          <li>We regularly feature free tools and products with no affiliate programme.</li>
          <li>Negative reviews or low rankings are not suppressed because a product has an affiliate programme.</li>
          <li>We do not accept payment to write positive reviews or to rank a product higher than it deserves.</li>
          <li>Tools ranked #1 in our guides are ranked there because they genuinely perform best — not because they pay higher commissions.</li>
        </ul>
        <p>
          We believe that honest, useful content is what builds long-term reader trust — and that trust is worth far more than any individual affiliate commission.
        </p>

        <h2>Sponsored Content</h2>
        <p>
          Occasionally, AIProSpace may publish sponsored posts or receive free access to tools for review purposes. All sponsored content is clearly labelled as &ldquo;Sponsored&rdquo; or &ldquo;Partner Content.&rdquo; Receiving free access to a tool does not guarantee a positive review — our editorial standards remain the same regardless.
        </p>

        <h2>Advertising</h2>
        <p>
          In addition to affiliate links, AIProSpace displays advertising through <strong>Google AdSense</strong>. These ads are served by Google and are separate from our affiliate partnerships. We do not control which ads appear on the site, and ad placements do not reflect endorsements.
        </p>

        <h2>Your Choices</h2>
        <p>
          You are never obligated to use our affiliate links. You can always navigate directly to any tool or service we mention. Using our affiliate link is entirely voluntary and is one way to support our work if you find our content useful — again, at no extra cost to you.
        </p>

        <h2>Questions?</h2>
        <p>
          If you have questions about our affiliate relationships, our editorial process, or whether a specific recommendation is sponsored, please contact us at{' '}
          <a href="mailto:aiprospace12@gmail.com">aiprospace12@gmail.com</a>.
        </p>
        <p>
          For information about how we handle your personal data, see our <Link href="/privacy-policy">Privacy Policy</Link>.
        </p>
      </div>
    </div>
  )
}
