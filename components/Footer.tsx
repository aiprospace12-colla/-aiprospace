import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-border mt-16">
      <div className="max-w-[1400px] mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-muted">© {new Date().getFullYear()} AIProSpace. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link href="/about"    className="text-xs text-muted hover:text-tx transition-colors">About</Link>
          <Link href="/contact"  className="text-xs text-muted hover:text-tx transition-colors">Contact</Link>
          <Link href="/glossary" className="text-xs text-muted hover:text-tx transition-colors">Glossary</Link>
        </div>
      </div>
    </footer>
  )
}
