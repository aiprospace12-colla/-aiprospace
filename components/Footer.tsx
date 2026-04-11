import Link from 'next/link'
import EmailCapture from './EmailCapture'

const quickLinks = [
  { href: '/blog', label: 'Blog' },
  { href: '/tools', label: 'AI Tools Directory' },
  { href: '/resources', label: 'Free Resources' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
]

const legalLinks = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/affiliate-disclaimer', label: 'Affiliate Disclaimer' },
  { href: '/terms', label: 'Terms of Service' },
]

const socials = [
  {
    label: 'Twitter',
    href: 'https://twitter.com/aiprospace',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com/@aiprospace',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/aiprospace',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer
      className="relative pt-16 pb-8 px-4"
      style={{
        background: '#06060f',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1 — Logo + tagline + socials */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span
                className="text-2xl font-extrabold tracking-tight"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                <span style={{ color: '#34d399' }}>AI</span>
                <span className="text-text-primary">ProSpace</span>
              </span>
            </Link>
            <p className="text-text-muted text-sm leading-relaxed mb-6">
              The #1 resource for AI tools, automation strategies, and making money online
              with artificial intelligence.
            </p>
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-text-muted hover:text-text-primary transition-all duration-200 hover:bg-white/5"
                  style={{ border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h4
              className="text-text-primary font-semibold mb-4 text-sm tracking-wide uppercase"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-muted hover:text-text-primary text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Legal */}
          <div>
            <h4
              className="text-text-primary font-semibold mb-4 text-sm tracking-wide uppercase"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Legal
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-muted hover:text-text-primary text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Newsletter */}
          <div>
            <h4
              className="text-text-primary font-semibold mb-4 text-sm tracking-wide uppercase"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Newsletter
            </h4>
            <p className="text-text-muted text-sm mb-4 leading-relaxed">
              Weekly AI tools and automation strategies, straight to your inbox.
            </p>
            <EmailCapture
              source="footer"
              placeholder="your@email.com"
              buttonText="Subscribe"
              className="flex-col gap-2"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-text-muted/60 text-xs">
              © 2025 AIProSpace. All rights reserved.
            </p>
            <p className="text-text-muted/40 text-xs text-center max-w-md">
              <span className="font-medium text-text-muted/60">Affiliate Disclosure:</span> Some
              links on this site are affiliate links. We may earn a commission at no extra cost to
              you. We only recommend tools we&apos;ve tested and believe in.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
