'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Script from 'next/script'

const STORAGE_KEY = 'cookie_consent'

export default function CookieBanner({ gaId }: { gaId?: string }) {
  const [visible, setVisible] = useState(false)
  const [accepted, setAccepted] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) {
      setVisible(true)
    } else if (stored === 'accepted') {
      setAccepted(true)
    }
  }, [])

  function handleAccept() {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    setAccepted(true)
    setVisible(false)
  }

  function handleDecline() {
    localStorage.setItem(STORAGE_KEY, 'declined')
    setVisible(false)
  }

  return (
    <>
      {/* Load GA only after consent */}
      {accepted && gaId && gaId !== 'G-XXXXXXXXXX' && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
          <Script id="ga-consent" strategy="afterInteractive">{`
            window.dataLayer=window.dataLayer||[];
            function gtag(){dataLayer.push(arguments);}
            gtag('js',new Date());
            gtag('config','${gaId}');
          `}</Script>
        </>
      )}

      {visible && (
        <div style={{
          position: 'fixed',
          bottom: 20,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1000,
          width: 'min(560px, calc(100vw - 32px))',
          background: 'var(--card-bg)',
          border: '1px solid var(--border)',
          borderRadius: 12,
          padding: '20px 24px',
          boxShadow: '0 8px 40px rgba(0,0,0,0.5)',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}>
          <div>
            <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)', marginBottom: 6 }}>
              🍪 We use cookies
            </p>
            <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.6 }}>
              We use cookies for analytics (Google Analytics) to improve our site. No tracking
              cookies are set without your consent.{' '}
              <Link href="/cookie-policy" style={{ color: 'var(--text)', textDecoration: 'underline' }}>
                Cookie Policy
              </Link>
              {' '}·{' '}
              <Link href="/privacy-policy" style={{ color: 'var(--text)', textDecoration: 'underline' }}>
                Privacy Policy
              </Link>
            </p>
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <button
              onClick={handleAccept}
              style={{
                padding: '9px 20px',
                borderRadius: 7,
                fontSize: 13,
                fontWeight: 600,
                cursor: 'pointer',
                background: 'var(--text)',
                color: 'var(--bg)',
                border: 'none',
                flex: '1 1 auto',
              }}
            >
              Accept All
            </button>
            <button
              onClick={handleDecline}
              style={{
                padding: '9px 20px',
                borderRadius: 7,
                fontSize: 13,
                fontWeight: 500,
                cursor: 'pointer',
                background: 'transparent',
                color: 'var(--muted)',
                border: '1px solid var(--border)',
                flex: '1 1 auto',
              }}
            >
              Decline
            </button>
          </div>
        </div>
      )}
    </>
  )
}
