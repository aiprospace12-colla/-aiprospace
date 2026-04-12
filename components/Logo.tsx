import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0, textDecoration: 'none' }}>
      <svg viewBox="0 0 24 24" width="22" height="22" style={{ color: 'var(--text)' }}>
        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 12 12)"/>
        <circle cx="19" cy="9" r="1.5" fill="currentColor"/>
      </svg>
      <span style={{ fontWeight: 700, fontSize: 15, color: 'var(--text)', letterSpacing: '-0.01em' }}>
        AIProSpace
      </span>
    </Link>
  )
}
