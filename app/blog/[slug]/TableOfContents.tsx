'use client'

import { useMemo } from 'react'

type Heading = { id: string; text: string; level: number }

function extractHeadings(content: string): Heading[] {
  const regex = /^#{2,3}\s+(.+)$/gm
  const headings: Heading[] = []
  let match

  while ((match = regex.exec(content)) !== null) {
    const raw = match[0]
    const level = raw.match(/^#+/)?.[0].length || 2
    const text = match[1].trim()
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')

    headings.push({ id, text, level })
  }

  return headings
}

type Props = { content: string }

export default function TableOfContents({ content }: Props) {
  const headings = useMemo(() => extractHeadings(content), [content])

  if (headings.length === 0) return null

  return (
    <div
      className="p-5 rounded-2xl"
      style={{ background: 'rgba(13,13,26,0.8)', border: '1px solid rgba(255,255,255,0.07)' }}
    >
      <h4
        className="text-text-primary font-semibold mb-4 text-sm"
        style={{ fontFamily: 'Syne, sans-serif' }}
      >
        Table of Contents
      </h4>
      <nav>
        <ul className="space-y-2">
          {headings.map((h) => (
            <li
              key={h.id}
              className={h.level === 3 ? 'pl-3' : ''}
            >
              <a
                href={`#${h.id}`}
                className="text-text-muted hover:text-cyan-DEFAULT text-xs leading-relaxed transition-colors block py-0.5"
              >
                {h.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
