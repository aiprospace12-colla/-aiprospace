import Link from 'next/link'

export function OrbitIcon({ size = 14 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5">
      <ellipse cx="12" cy="12" rx="10" ry="4" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
      <circle cx="19" cy="9" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

export default function Logo() {
  return (
    <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none', flexShrink: 0 }}>
      <div className="logo-badge">
        <OrbitIcon size={14} />
      </div>
      <span style={{ fontWeight: 600, fontSize: 16, color: 'var(--text)', letterSpacing: '-0.01em' }}>
        AIProSpace
      </span>
    </Link>
  )
}
