import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Blog 2026 — Reviews, Guides & Comparisons | AIProSpace',
  description: 'In-depth AI tool reviews, comparisons, automation guides, and make-money strategies. Honest first-person takes, updated weekly.',
  alternates: { canonical: 'https://aiprospace.com/blog' },
  openGraph: { title: 'AI Blog 2026 — Reviews, Guides & Comparisons | AIProSpace', description: 'Honest AI tool reviews, comparisons, automation guides, and make-money strategies. Updated weekly.' },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
