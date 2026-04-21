import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service | AIProSpace',
  description: 'Terms of Service for AIProSpace.com — the rules and conditions governing your use of our website.',
  alternates: { canonical: 'https://aiprospace.com/terms-of-service' },
  robots: { index: true, follow: true },
}

export default function TermsOfServicePage() {
  return (
    <div style={{ maxWidth: 760, margin: '0 auto', padding: '64px 40px' }}>
      <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 8 }}>Last updated: April 2026</p>
      <h1 style={{ fontSize: 28, fontWeight: 700, color: 'var(--text)', marginBottom: 8 }}>Terms of Service</h1>
      <p style={{ fontSize: 15, color: 'var(--muted)', marginBottom: 40 }}>
        Please read these Terms of Service carefully before using AIProSpace.com. By accessing or using our
        website, you agree to be bound by these terms.
      </p>

      <div className="prose">

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using <strong>AIProSpace.com</strong> (the &ldquo;Site&rdquo;), you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this Site. These terms apply to all visitors, users, and others who access or use the Site.
        </p>

        <h2>2. Description of Service</h2>
        <p>
          AIProSpace provides informational content about artificial intelligence tools, automation software, and productivity strategies. We publish reviews, guides, tutorials, and curated resources. The Site is provided free of charge and is supported by advertising and affiliate commissions.
        </p>

        <h2>3. Use of the Website</h2>
        <p>You agree to use the Site only for lawful purposes and in a way that does not:</p>
        <ul>
          <li>Infringe the rights of any other person or entity</li>
          <li>Violate any applicable local, national, or international laws or regulations</li>
          <li>Attempt to gain unauthorised access to any part of the Site or its related systems</li>
          <li>Transmit any unsolicited or unauthorised advertising or promotional material</li>
          <li>Reproduce, duplicate, copy, or resell any part of our Site for commercial purposes without express written permission</li>
          <li>Use automated tools to scrape, crawl, or index the Site without prior written consent</li>
        </ul>

        <h2>4. Intellectual Property</h2>
        <p>
          All content published on AIProSpace.com — including but not limited to articles, guides, reviews, graphics, logos, and design elements — is the intellectual property of AIProSpace and is protected by copyright law. You may not reproduce, distribute, modify, or create derivative works from our content without explicit written permission.
        </p>
        <p>
          You are welcome to share links to our content on social media or other websites, provided you attribute AIProSpace as the source and do not alter the content.
        </p>

        <h2>5. Affiliate Links Disclosure</h2>
        <p>
          AIProSpace participates in affiliate programmes. Some links on this Site are affiliate links, which means we may earn a commission if you click through and make a purchase — at no additional cost to you. Affiliate relationships do not influence our editorial opinions or rankings.
        </p>
        <p>
          All affiliate links are disclosed in accordance with FTC guidelines. For full details, see our <Link href="/disclaimer">Affiliate Disclaimer</Link>.
        </p>

        <h2>6. Advertising</h2>
        <p>
          AIProSpace displays advertising through <strong>Google AdSense</strong>. Advertisements appearing on the Site are not endorsements of the advertised products or services. We are not responsible for the content of any external advertisements.
        </p>

        <h2>7. Accuracy of Information</h2>
        <p>
          We strive to keep all information on this Site accurate and up to date. However, the AI tools and services we cover change rapidly. We cannot guarantee that all information is current or error-free. Product features, pricing, and availability may change at any time without notice.
        </p>
        <p>
          Content on this Site is for informational purposes only and should not be relied upon as professional advice. Always verify critical information with the relevant tool or service provider directly.
        </p>

        <h2>8. No Guarantee of Results</h2>
        <p>
          Any strategies, techniques, or tools discussed on AIProSpace are provided for informational purposes only. We make no guarantee that following our recommendations will produce any specific result, income, or outcome. Results will vary depending on individual circumstances, effort, and market conditions.
        </p>
        <p>
          Any income figures or results mentioned in our content are examples and not guarantees. Your results may differ materially from any examples provided.
        </p>

        <h2>9. Third-Party Links</h2>
        <p>
          Our Site contains links to third-party websites and services. These links are provided for your convenience only. We have no control over the content, privacy practices, or terms of those sites, and we accept no responsibility for them. Linking to an external site does not constitute an endorsement.
        </p>

        <h2>10. Disclaimer of Warranties</h2>
        <p>
          THE SITE IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT ANY WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SITE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
        </p>

        <h2>11. Limitation of Liability</h2>
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, AIPROSPACE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
        </p>
        <ul>
          <li>Your access to or use of (or inability to access or use) the Site</li>
          <li>Any conduct or content of any third party on the Site</li>
          <li>Any content obtained from the Site</li>
          <li>Unauthorised access, use, or alteration of your transmissions or content</li>
        </ul>
        <p>
          IN NO EVENT SHALL AIPROSPACE&apos;S AGGREGATE LIABILITY EXCEED THE AMOUNT YOU PAID TO ACCESS THE SITE (WHICH, FOR A FREE SERVICE, IS $0).
        </p>

        <h2>12. Indemnification</h2>
        <p>
          You agree to defend, indemnify, and hold harmless AIProSpace and its operators from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable legal fees) arising out of or relating to your violation of these Terms or your use of the Site.
        </p>

        <h2>13. Privacy</h2>
        <p>
          Your use of the Site is also governed by our <Link href="/privacy-policy">Privacy Policy</Link>, which is incorporated into these Terms by reference. By using the Site, you consent to the data practices described in the Privacy Policy.
        </p>

        <h2>14. Modifications to Terms</h2>
        <p>
          We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated &ldquo;Last updated&rdquo; date. Your continued use of the Site after any changes constitutes your acceptance of the new Terms.
        </p>

        <h2>15. Termination</h2>
        <p>
          We reserve the right to terminate or restrict your access to the Site at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, third parties, or the public.
        </p>

        <h2>16. Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with applicable laws. Any disputes arising from these Terms or your use of the Site shall be subject to the exclusive jurisdiction of the relevant courts.
        </p>

        <h2>17. Severability</h2>
        <p>
          If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that the Terms will otherwise remain in full force and effect.
        </p>

        <h2>18. Contact Us</h2>
        <p>
          For questions about these Terms of Service, please contact us at:{' '}
          <a href="mailto:aiprospace12@gmail.com">aiprospace12@gmail.com</a>
        </p>
      </div>
    </div>
  )
}
