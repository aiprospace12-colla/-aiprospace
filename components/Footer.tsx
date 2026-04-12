import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div style={{ marginBottom: 8 }}>
        <Link href="/about" style={{ marginRight: 16 }}>About</Link>
        <Link href="/contact" style={{ marginRight: 16 }}>Contact</Link>
        <Link href="/glossary" style={{ marginRight: 16 }}>Glossary</Link>
        <Link href="/blog">Blog</Link>
      </div>
      <p style={{ color: 'var(--muted)', fontSize: 12 }}>
        © {new Date().getFullYear()} AIProSpace. All rights reserved.
      </p>
    </footer>
  )
}
