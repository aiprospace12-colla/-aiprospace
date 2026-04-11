'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Play, Zap, PenTool, DollarSign, BarChart, MessageSquare, Clock, BookOpen, Circle } from 'lucide-react'
import { COURSES } from '@/data/courses'
import AdBanner from '@/components/AdBanner'

const SIDEBAR_TOPICS = [
  { label: 'All Topics',      icon: Circle,         val: 'All'            },
  { label: 'Automation',      icon: Zap,            val: 'Automation'     },
  { label: 'Prompting',       icon: MessageSquare,  val: 'Prompting'      },
  { label: 'Content Creation',icon: PenTool,        val: 'Content Creation'},
  { label: 'Make Money',      icon: DollarSign,     val: 'Make Money'     },
  { label: 'SEO',             icon: BarChart,       val: 'SEO'            },
]

const SIDEBAR_SKILLS = [
  { label: 'All Levels',  val: 'All'          },
  { label: 'Beginner',    val: 'Beginner'     },
  { label: 'Intermediate',val: 'Intermediate' },
  { label: 'Advanced',    val: 'Advanced'     },
]

const STARS: Record<number, string> = { 5: '★★★★★', 4: '★★★★☆', 3: '★★★☆☆' }

export default function CoursesPage() {
  const [activeTopic, setActiveTopic] = useState('All')
  const [activeSkill, setActiveSkill] = useState('All')

  const filtered = COURSES.filter(c => {
    const matchTopic = activeTopic === 'All' || c.topic === activeTopic
    const matchSkill = activeSkill === 'All' || c.skill === activeSkill
    return matchTopic && matchSkill
  })

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-60 flex-shrink-0 border-r border-border px-3 py-5 sticky top-[97px] self-start h-[calc(100vh-97px)] overflow-y-auto">
        <p className="text-base font-bold text-tx px-3 mb-3">Courses</p>
        <div className="divider mb-4" />
        <span className="sidebar-label mb-2">BY TOPIC</span>
        <div className="flex flex-col gap-0.5 mb-5">
          {SIDEBAR_TOPICS.map(({ label, icon: Icon, val }) => (
            <button key={val} onClick={() => setActiveTopic(val)} className={`sidebar-item ${activeTopic === val ? 'active' : ''}`}>
              <Icon size={16} />{label}
            </button>
          ))}
        </div>
        <span className="sidebar-label mb-2">BY SKILL LEVEL</span>
        <div className="flex flex-col gap-0.5">
          {SIDEBAR_SKILLS.map(({ label, val }) => (
            <button key={val} onClick={() => setActiveSkill(val)} className={`sidebar-item ${activeSkill === val ? 'active' : ''}`}>
              <BookOpen size={16} />{label}
            </button>
          ))}
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 px-8 py-8">
        <h1 className="text-2xl font-bold text-tx mb-1">Courses</h1>
        <p className="text-sm text-muted mb-4">Free AI courses — no email required</p>
        <AdBanner height={90} />
        <div className="mt-4 overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th className="w-8">#</th>
                <th>Course</th>
                <th className="hidden sm:table-cell">Topic</th>
                <th className="hidden sm:table-cell">Level</th>
                <th className="hidden md:table-cell">Duration</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((course, i) => (
                <tr key={course.id}>
                  <td className="text-muted text-sm">{i + 1}</td>
                  <td>
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded bg-card border border-border flex items-center justify-center flex-shrink-0">
                        <Play size={12} className="text-muted" />
                      </span>
                      <div className="min-w-0">
                        <p className="font-semibold text-tx text-sm leading-tight">{course.title}</p>
                        <p className="text-[12px] text-muted line-clamp-1 hidden sm:block">{course.description}</p>
                      </div>
                    </div>
                  </td>
                  <td className="hidden sm:table-cell"><span className="badge">{course.topic}</span></td>
                  <td className="hidden sm:table-cell"><span className="badge">{course.skill}</span></td>
                  <td className="hidden md:table-cell">
                    <span className="flex items-center gap-1 text-[12px] text-muted whitespace-nowrap">
                      <Clock size={11} />{course.duration}
                    </span>
                  </td>
                  <td className="text-yellow-500 text-sm">{STARS[course.rating] ?? '★★★★☆'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <AdBanner height={90} className="mt-6" />
      </div>
    </div>
  )
}
