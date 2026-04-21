import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | AIProSpace',
  description: 'Privacy Policy for AIProSpace.com — how we collect, use, and protect your personal data.',
  alternates: { canonical: 'https://aiprospace.com/privacy-policy' },
  robots: { index: true, follow: true },
}

export default function PrivacyPolicyPage() {
  return (
    <div style={{ maxWidth: 760, margin: '0 auto', padding: '64px 40px' }}>
      <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 8 }}>Last updated: April 2026</p>
      <h1 style={{ fontSize: 28, fontWeight: 700, color: 'var(--text)', marginBottom: 8 }}>Privacy Policy</h1>
      <p style={{ fontSize: 15, color: 'var(--muted)', marginBottom: 40 }}>
        This Privacy Policy explains how AIProSpace (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, uses,
        and protects your personal information when you visit{' '}
        <strong style={{ color: 'var(--text)' }}>aiprospace.com</strong>.
      </p>

      <div className="prose">

        <h2>1. Information We Collect</h2>

        <h3>a) Information you provide directly</h3>
        <ul>
          <li><strong>Email address</strong> — when you subscribe to our newsletter or download a free resource. We use this to send you the requested content and occasional updates.</li>
          <li><strong>Name and message</strong> — when you contact us via the contact form.</li>
        </ul>

        <h3>b) Information collected automatically</h3>
        <ul>
          <li><strong>Usage data</strong> — pages visited, time spent, referral sources, browser type, device type, and approximate location (country/city level). Collected via Google Analytics.</li>
          <li><strong>Cookies</strong> — small text files stored in your browser. See our <Link href="/cookie-policy">Cookie Policy</Link> for full details.</li>
          <li><strong>IP address</strong> — collected by our hosting infrastructure for security and performance purposes. We do not store or sell IP addresses.</li>
        </ul>

        <h3>c) Information from third parties</h3>
        <p>
          We do not purchase or acquire personal data from third-party data brokers.
        </p>

        <h2>2. How We Use Your Information</h2>
        <ul>
          <li>To send you the newsletter or free resources you subscribed for</li>
          <li>To respond to your contact form messages</li>
          <li>To analyse how visitors use our site so we can improve content and performance</li>
          <li>To display relevant advertising (via Google AdSense)</li>
          <li>To comply with legal obligations</li>
        </ul>
        <p>
          We do not sell, rent, or trade your personal data to any third party for their own marketing purposes.
        </p>

        <h2>3. Legal Basis for Processing (GDPR)</h2>
        <p>If you are located in the European Economic Area (EEA), we process your data under the following legal bases:</p>
        <ul>
          <li><strong>Consent</strong> — when you subscribe to our newsletter or accept cookies.</li>
          <li><strong>Legitimate interests</strong> — to analyse site usage, improve content, and maintain site security.</li>
          <li><strong>Contract</strong> — to deliver resources or services you have requested.</li>
          <li><strong>Legal obligation</strong> — when required by applicable law.</li>
        </ul>

        <h2>4. Google Analytics</h2>
        <p>
          We use <strong>Google Analytics</strong> to understand how visitors interact with our website. Google Analytics uses cookies and collects anonymised data about your behaviour on our site (pages visited, session duration, traffic source, device type).
        </p>
        <p>
          This data is processed by Google LLC, which may transfer it to servers in the United States. Google Analytics is only loaded after you have given cookie consent. You can opt out at any time by:
        </p>
        <ul>
          <li>Clicking &ldquo;Decline&rdquo; on our cookie consent banner</li>
          <li>Installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a></li>
          <li>Adjusting your browser&apos;s cookie settings</li>
        </ul>
        <p>
          For more information, see <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google&apos;s Privacy Policy</a>.
        </p>

        <h2>5. Google AdSense</h2>
        <p>
          We display advertising on our site through <strong>Google AdSense</strong>. Google AdSense uses cookies to serve ads based on your prior visits to our site and other sites on the internet. Google&apos;s use of advertising cookies enables it and its partners to serve ads based on your visit to our site and/or other sites on the internet.
        </p>
        <p>
          You may opt out of personalised advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Google Ads Settings</a> or <a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer">aboutads.info</a>.
        </p>

        <h2>6. Third-Party Services</h2>
        <p>We use the following third-party services to operate our site:</p>
        <ul>
          <li>
            <strong>Supabase</strong> — stores email addresses of subscribers in a secure database hosted in the EU/US. Supabase complies with GDPR.{' '}
            <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer">Supabase Privacy Policy</a>
          </li>
          <li>
            <strong>Resend</strong> — transactional email service used to send welcome emails, newsletters, and contact confirmations.{' '}
            <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Resend Privacy Policy</a>
          </li>
          <li>
            <strong>Google Analytics</strong> — website analytics. See Section 4 above.
          </li>
          <li>
            <strong>Google AdSense</strong> — display advertising. See Section 5 above.
          </li>
          <li>
            <strong>Vercel</strong> — website hosting infrastructure. Vercel may collect logs and performance data.{' '}
            <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Vercel Privacy Policy</a>
          </li>
        </ul>

        <h2>7. Affiliate Links</h2>
        <p>
          Our site contains affiliate links to third-party products and services. When you click an affiliate link and make a purchase, we may earn a commission. We do not share your personal data with affiliate partners. The affiliate tracking is handled entirely by the third-party platform (e.g., Amazon Associates). See our <Link href="/disclaimer">Affiliate Disclaimer</Link> for full details.
        </p>

        <h2>8. Cookies</h2>
        <p>
          We use essential cookies to operate the site and analytics/advertising cookies with your consent. For a full breakdown of the cookies we use, see our <Link href="/cookie-policy">Cookie Policy</Link>.
        </p>

        <h2>9. Data Retention</h2>
        <ul>
          <li><strong>Email subscribers</strong> — we retain your email until you unsubscribe, at which point it is deleted from our database.</li>
          <li><strong>Contact form data</strong> — messages are retained for up to 12 months for correspondence purposes.</li>
          <li><strong>Analytics data</strong> — Google Analytics retains data for 14 months by default (our configuration).</li>
        </ul>

        <h2>10. Your Rights (GDPR)</h2>
        <p>If you are located in the EEA, you have the following rights regarding your personal data:</p>
        <ul>
          <li><strong>Right of access</strong> — request a copy of the personal data we hold about you.</li>
          <li><strong>Right to rectification</strong> — request correction of inaccurate data.</li>
          <li><strong>Right to erasure</strong> — request deletion of your personal data (&ldquo;right to be forgotten&rdquo;).</li>
          <li><strong>Right to restriction</strong> — request that we restrict processing of your data.</li>
          <li><strong>Right to portability</strong> — request your data in a structured, machine-readable format.</li>
          <li><strong>Right to object</strong> — object to processing based on legitimate interests.</li>
          <li><strong>Right to withdraw consent</strong> — withdraw consent at any time without affecting lawfulness of prior processing.</li>
        </ul>
        <p>
          To exercise any of these rights, email us at{' '}
          <a href="mailto:aiprospace12@gmail.com">aiprospace12@gmail.com</a>.
          We will respond within 30 days.
        </p>

        <h2>11. Children&apos;s Privacy</h2>
        <p>
          Our site is not directed at children under 13. We do not knowingly collect personal data from children. If you believe a child has provided us with personal data, please contact us immediately and we will delete it.
        </p>

        <h2>12. International Transfers</h2>
        <p>
          Some of our third-party service providers (including Google and Resend) may transfer and process data outside the EEA, including in the United States. Where this occurs, we ensure appropriate safeguards are in place (e.g., Standard Contractual Clauses approved by the European Commission).
        </p>

        <h2>13. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy periodically. The &ldquo;Last updated&rdquo; date at the top of this page reflects the most recent revision. Continued use of the site after changes constitutes acceptance of the updated policy.
        </p>

        <h2>14. Contact Us</h2>
        <p>
          For any privacy-related questions, requests, or concerns, please contact us at:{' '}
          <a href="mailto:aiprospace12@gmail.com">aiprospace12@gmail.com</a>
        </p>
      </div>
    </div>
  )
}
