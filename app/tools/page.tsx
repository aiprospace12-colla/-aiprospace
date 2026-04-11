'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Layers, PenTool, Image, Video, Zap, Code, Search, Layout, BarChart, Music, Gift, Tag, CreditCard, Circle } from 'lucide-react'
import { TOOLS } from '@/data/tools'
import AdBanner from '@/components/AdBanner'

const SIDEBAR_CATS = [
  { label: 'All Tools',         icon: Layers,   cat: 'All'            },
  { label: 'Writing & Content', icon: PenTool,  cat: 'Writing & Content' },
  { label: 'Image Generation',  icon: Image,    cat: 'Image Generation'  },
  { label: 'Video Creation',    icon: Video,    cat: 'Video Creation'    },
  { label: 'Automation & n8n',  icon: Zap,      cat: 'Automation'        },
  { label: 'Coding & Dev',      icon: Code,     cat: 'Coding & Dev'      },
  { label: 'Research',          icon: Search,   cat: 'Research'          },
  { label: 'Productivity',      icon: Layout,   cat: 'Productivity'      },
  { label: 'SEO Tools',         icon: BarChart, cat: 'SEO Tools'         },
  { label: 'Audio & Voice',     icon: Music,    cat: 'Audio & Voice'     },
]

const SIDEBAR_PRICES = [
  { label: 'All',      icon: Circle,     val: 'All'      },
  { label: 'Free',     icon: Gift,       val: 'Free'     },
  { label: 'Freemium', icon: Tag,        val: 'Freemium' },
  { label: 'Paid',     icon: CreditCard, val: 'Paid'     },
]

const STARS: Record<number, string> = { 5: '★★★★★', 4: '★★★★☆', 3: '★★★☆☆' }

function PriceBadge({ price }: { price: string }) {
  if (price === 'Free') return <span className="badge badge-free">Free</span>
  return <span className="badge">{price}</span>
}

export default function ToolsPage() {
  const [activeCat, setActiveCat] = useState('All')
  const [activePrice, setActivePrice] = useState('All')

  const filtered = TOOLS.filter(t => {
    const matchCat = activeCat === 'All' || t.category === activeCat
    const matchPrice = activePrice === 'All' || t.price === activePrice
    return matchCat && matchPrice
  })

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-60 flex-shrink-0 border-r border-border px-3 py-5 sticky top-[97px] self-start h-[calc(100vh-97px)] overflow-y-auto">
        <p className="text-base font-bold text-tx px-3 mb-3">AI Tools</p>
        <div className="divider mb-4" />
        <span className="sidebar-label mb-2">BY CATEGORY</span>
        <div className="flex flex-col gap-0.5 mb-5">
          {SIDEBAR_CATS.map(({ label, icon: Icon, cat }) => (
            <button key={cat} onClick={() => setActiveCat(cat)} className={`sidebar-item ${activeCat === cat ? 'active' : ''}`}>
              <Icon size={16} />{label}
            </button>
          ))}
        </div>
        <span className="sidebar-label mb-2">BY PRICE</span>
        <div className="flex flex-col gap-0.5">
          {SIDEBAR_PRICES.map(({ label, icon: Icon, val }) => (
            <button key={val} onClick={() => setActivePrice(val)} className={`sidebar-item ${activePrice === val ? 'active' : ''}`}>
              <Icon size={16} />{label}
            </button>
          ))}
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 px-8 py-8">
        <h1 className="text-2xl font-bold text-tx mb-1">AI Tools</h1>
        <p className="text-sm text-muted mb-4">Find the right AI tool for your needs</p>
        <AdBanner height={90} />
        <div className="mt-4 overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th className="w-8">#</th>
                <th>Tool</th>
                <th className="hidden sm:table-cell">Category</th>
                <th className="hidden sm:table-cell">Price</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((tool, i) => (
                <tr key={tool.slug}>
                  <td className="text-muted text-sm">{i + 1}</td>
                  <td>
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded bg-card border border-border flex items-center justify-center text-xs font-bold text-tx flex-shrink-0">
                        {tool.logo.slice(0, 2)}
                      </span>
                      <Link href={`/tools/${tool.slug}`} className="font-semibold text-tx hover:underline underline-offset-2">
                        {tool.name}
                      </Link>
                    </div>
                  </td>
                  <td className="hidden sm:table-cell"><span className="badge">{tool.category}</span></td>
                  <td className="hidden sm:table-cell"><PriceBadge price={tool.price} /></td>
                  <td className="text-yellow-500 text-sm">{STARS[tool.rating] ?? '★★★★☆'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
