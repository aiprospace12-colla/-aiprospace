'use client'

import { useState } from 'react'
import { GLOSSARY } from '@/data/glossary'

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

export default function GlossaryPage() {
  const [activeLetter, setActiveLetter] = useState('All')

  const presentLetters = new Set(GLOSSARY.map(t => t.letter))

  const grouped = GLOSSARY.reduce<Record<string, typeof GLOSSARY>>((acc, term) => {
    if (!acc[term.letter]) acc[term.letter] = []
    acc[term.letter].push(term)
    return acc
  }, {})

  const lettersToShow = activeLetter === 'All'
    ? Object.keys(grouped).sort()
    : [activeLetter]

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-60 flex-shrink-0 border-r border-border px-3 py-5 sticky top-[97px] self-start h-[calc(100vh-97px)] overflow-y-auto">
        <p className="text-base font-bold text-tx px-3 mb-3">Glossary</p>
        <div className="divider mb-4" />
        <span className="sidebar-label mb-2">BY LETTER</span>
        <div className="flex flex-col gap-0.5">
          <button
            onClick={() => setActiveLetter('All')}
            className={`sidebar-item ${activeLetter === 'All' ? 'active' : ''}`}
          >
            All Terms
          </button>
          {LETTERS.filter(l => presentLetters.has(l)).map(letter => (
            <button
              key={letter}
              onClick={() => setActiveLetter(letter)}
              className={`sidebar-item ${activeLetter === letter ? 'active' : ''}`}
            >
              {letter}
            </button>
          ))}
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 px-8 py-8 max-w-3xl">
        <h1 className="text-2xl font-bold text-tx mb-1">AI Glossary</h1>
        <p className="text-sm text-muted mb-8">Plain-English definitions for AI terms you actually encounter</p>

        <div className="space-y-10">
          {lettersToShow.map(letter => (
            <div key={letter}>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xl font-bold text-tx">{letter}</span>
                <div className="flex-1 border-t border-border" />
              </div>
              <div className="space-y-4">
                {grouped[letter]?.map(term => (
                  <div key={term.id} className="flex gap-4">
                    <div className="flex-1 min-w-0">
                      <p className="text-[15px] font-semibold text-tx">{term.term}</p>
                      <p className="text-[13px] text-muted mt-1 leading-relaxed">{term.definition}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
