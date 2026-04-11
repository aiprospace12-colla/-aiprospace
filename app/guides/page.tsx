'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Compass, Zap, PenTool, BarChart, DollarSign, Wrench, Clock, BookOpen } from 'lucide-react'
import { GUIDES } from '@/data/guides'
import AdBanner from '@/components/AdBanner'

const SIDEBAR = [
  { label: 'All',              icon: Compass,    val: 'All'              },
  { label: 'Getting Started',  icon: Compass,    val: 'Getting Started'  },
  { label: 'Automation',       icon: Zap,        val: 'Automation'       },
  { label: 'Content Creation', icon: PenTool,    val: 'Content Creation' },
  { label: 'SEO with AI',      icon: BarChart,   val: 'SEO with AI'      },
  { label: 'Make Money',       icon: DollarSign, val: 'Make Money'       },
  { label: 'Tool Tutorials',   icon: Wrench,     val: 'Tool Tutorials'   },
]

export default function GuidesPage() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? GUIDES : GUIDES.filter(g => g.topic === active)

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-60 flex-shrink-0 border-r border-border px-3 py-5 sticky top-[97px] self-start h-[calc(100vh-97px)] overflow-y-auto">
        <p className="text-base font-bold text-tx px-3 mb-3">Guides</p>
        <div className="divider mb-4" />
        <span className="sidebar-label mb-2">BY TOPIC</span>
        <div className="flex flex-col gap-0.5">
          {SIDEBAR.map(({ label, icon: Icon, val }) => (
            <button key={val} onClick={() => setActive(val)} className={`sidebar-item ${active === val ? 'active' : ''}`}>
              <Icon size={16} />{label}
            </button>
          ))}
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 px-8 py-8">
        <h1 className="text-2xl font-bold text-tx mb-1">Guides</h1>
        <p className="text-sm text-muted mb-4">Step by step AI tutorials</p>
        <AdBanner height={90} />
        <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filtered.map(guide => (
            <Link key={guide.slug} href={`/guides/${guide.slug}`} className="card flex flex-col gap-3 p-5">
              <BookOpen size={20} className="text-muted" />
              <div>
                <p className="text-[15px] font-semibold text-tx leading-snug">{guide.title}</p>
                <p className="text-[13px] text-muted mt-1 line-clamp-2">{guide.description}</p>
              </div>
              <div className="flex items-center justify-between mt-auto">
                <span className="badge">{guide.difficulty}</span>
                <span className="flex items-center gap-1 text-[12px] text-muted">
                  <Clock size={11} />{guide.readTime}
                </span>
              </div>
              <p className="text-[13px] text-muted">Read Guide →</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
