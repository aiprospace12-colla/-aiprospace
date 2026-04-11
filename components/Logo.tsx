import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 flex-shrink-0 text-tx no-underline" style={{ textDecoration: 'none' }}>
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="12" rx="10" ry="4" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-60 12 12)" />
        <circle cx="19" cy="9" r="1.5" fill="currentColor" stroke="none" />
      </svg>
      <span className="font-bold text-base text-tx">AIProSpace</span>
    </Link>
  )
}
