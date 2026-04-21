import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cookie Policy | AIProSpace',
  description: 'Cookie Policy for AIProSpace.com — what cookies we use, why, and how to control them.',
  alternates: { canonical: 'https://aiprospace.com/cookie-policy' },
  robots: { index: true, follow: true },
}

export default function CookiePolicyPage() {
  return (
    <div style={{ maxWidth: 760, margin: '0 auto', padding: '64px 40px' }}>
      <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 8 }}>Last updated: April 2026</p>
      <h1 style={{ fontSize: 28, fontWeight: 700, color: 'var(--text)', marginBottom: 8 }}>Cookie Policy</h1>
      <p style={{ fontSize: 15, color: 'var(--muted)', marginBottom: 40 }}>
        This Cookie Policy explains what cookies are, how AIProSpace uses them, and your choices
        regarding their use.
      </p>

      <div className="prose">

        <h2>1. What Are Cookies?</h2>
        <p>
          Cookies are small text files placed on your device (computer, phone, or tablet) when you visit a website. They allow the website to recognise your device on subsequent visits and store certain information about your preferences or actions.
        </p>
        <p>
          Cookies can be &ldquo;session cookies&rdquo; (deleted when you close your browser) or &ldquo;persistent cookies&rdquo; (stored for a set period). They can be set by the website you&apos;re visiting (&ldquo;first-party cookies&rdquo;) or by third-party services running on that page (&ldquo;third-party cookies&rdquo;).
        </p>

        <h2>2. How We Use Cookies</h2>

        <h3>a) Essential Cookies</h3>
        <p>
          These cookies are strictly necessary for the Site to function. They do not collect personal data for tracking purposes and cannot be disabled without breaking core site functionality.
        </p>
        <ul>
          <li><strong>cookie_consent</strong> — Stores your cookie preference (accepted or declined) so we don&apos;t ask you again on every visit. Expires after 365 days. Set by AIProSpace.</li>
          <li><strong>Theme preference</strong> — Stores your selected display theme (dark/light mode). Set by AIProSpace.</li>
        </ul>

        <h3>b) Analytics Cookies (requires consent)</h3>
        <p>
          We use <strong>Google Analytics</strong> to collect anonymised data about how visitors use our Site. This helps us understand which content is most useful, where our traffic comes from, and how to improve the Site.
        </p>
        <p>Google Analytics sets the following cookies:</p>
        <ul>
          <li><strong>_ga</strong> — Distinguishes unique users. Expires after 2 years.</li>
          <li><strong>_ga_[ID]</strong> — Maintains session state. Expires after 2 years.</li>
          <li><strong>_gid</strong> — Distinguishes users. Expires after 24 hours.</li>
          <li><strong>_gat</strong> — Throttles request rate. Expires after 1 minute.</li>
        </ul>
        <p>
          Google Analytics cookies are only set <strong>after you click &ldquo;Accept&rdquo;</strong> on our cookie consent banner. If you click &ldquo;Decline&rdquo;, Google Analytics is not loaded and no analytics cookies are placed.
        </p>

        <h3>c) Advertising Cookies (third-party)</h3>
        <p>
          We display advertising through <strong>Google AdSense</strong>. Google may use cookies to serve ads based on your prior visits to our site and other sites. These are third-party cookies set by Google, not by AIProSpace directly.
        </p>
        <p>
          Google AdSense cookies that may be set include:
        </p>
        <ul>
          <li><strong>IDE</strong> — Used by Google DoubleClick to register and report actions for remarketing. Expires after 1 year.</li>
          <li><strong>test_cookie</strong> — Used to check if your browser supports cookies. Expires after 15 minutes.</li>
          <li><strong>DSID, FLC, AID, TAID</strong> — Used to link your activity across devices if you are signed in to your Google account.</li>
        </ul>
        <p>
          For more information about Google&apos;s advertising cookies, visit{' '}
          <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">
            Google&apos;s Advertising Policy
          </a>.
        </p>

        <h2>3. GDPR Compliance</h2>
        <p>
          In accordance with the General Data Protection Regulation (GDPR) and the ePrivacy Directive, we only set non-essential cookies (analytics, advertising) after obtaining your explicit consent via our cookie consent banner.
        </p>
        <p>
          Your consent choices are:
        </p>
        <ul>
          <li><strong>Accept</strong> — Essential cookies + Google Analytics are enabled. Google AdSense ads are displayed.</li>
          <li><strong>Decline</strong> — Only essential cookies are set. Google Analytics is not loaded.</li>
        </ul>
        <p>
          You can change your cookie preference at any time by clearing your browser&apos;s local storage or cookies and revisiting the site — the consent banner will reappear.
        </p>

        <h2>4. How to Control Cookies</h2>

        <h3>Browser Settings</h3>
        <p>
          You can control cookies through your browser settings. Most browsers allow you to view, block, and delete cookies. Note that blocking all cookies will break some site functionality (such as remembering your theme preference).
        </p>
        <ul>
          <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
          <li><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
          <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471" target="_blank" rel="noopener noreferrer">Apple Safari</a></li>
          <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
        </ul>

        <h3>Opt Out of Google Analytics</h3>
        <p>
          Install the{' '}
          <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
            Google Analytics Opt-out Browser Add-on
          </a>{' '}
          to prevent Google Analytics from collecting data about your visits across all sites.
        </p>

        <h3>Opt Out of Google Advertising</h3>
        <p>
          Visit{' '}
          <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">
            Google Ads Settings
          </a>{' '}
          or{' '}
          <a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer">
            aboutads.info
          </a>{' '}
          to opt out of personalised advertising.
        </p>

        <h2>5. Changes to This Policy</h2>
        <p>
          We may update this Cookie Policy as we add or remove cookies from our Site. The &ldquo;Last updated&rdquo; date at the top reflects the most recent revision.
        </p>

        <h2>6. Contact</h2>
        <p>
          For questions about our use of cookies, contact us at{' '}
          <a href="mailto:aiprospace12@gmail.com">aiprospace12@gmail.com</a>.
          See also our <Link href="/privacy-policy">Privacy Policy</Link> for more details on how we handle personal data.
        </p>
      </div>
    </div>
  )
}
