'use client'

import { useState } from 'react'
import Link from 'next/link'
import { BookOpen, Clock } from 'lucide-react'
import { GUIDES, GUIDE_TOPICS } from '@/data/guides'

const DIFFICULTY_COLOR: Record<string, string> = {
  Beginner:     'text-green-600 dark:text-green-400',
  Intermediate: 'text-yellow-600 dark:text-yellow-400',
  Advanced:     'text-red-600 dark:text-red-400',
}

export default function GuidesPage() {
  const [activeTopic, setActiveTopic] = useState('All')

  const filtered = activeTopic === 'All' ? GUIDES : GUIDES.filter(g => g.topic === activeTopic)

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex gap-12">
        {/* Sidebar */}
        <aside className="hidden md:block w-48 flex-shrink-0">
          <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">Topic</p>
          <div className="flex flex-col gap-0.5">
            {GUIDE_TOPICS.map(topic => (
              <button
                key={topic}
                onClick={() => setActiveTopic(topic)}
                className={`sidebar-item ${activeTopic === topic ? 'active' : ''}`}
              >
                {topic}
              </button>
            ))}
          </div>
        </aside>

        {/* Main */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-lg font-bold text-tx">Guides</h1>
            <span className="text-xs text-muted">{filtered.length} guides</span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {filtered.map(guide => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="card p-4 flex flex-col gap-3"
              >
                <div className="flex items-start justify-between gap-2">
                  <BookOpen size={14} className="text-muted flex-shrink-0 mt-0.5" />
                  <span className={`text-[11px] font-medium flex-shrink-0 ${DIFFICULTY_COLOR[guide.difficulty]}`}>
                    {guide.difficulty}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-tx leading-snug">{guide.title}</p>
                  <p className="text-xs text-muted mt-1 leading-snug line-clamp-2">{guide.description}</p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted mt-auto">
                  <Clock size={11} />
                  {guide.readTime} read
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
