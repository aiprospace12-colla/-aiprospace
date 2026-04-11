'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const categories = [
  {
    icon: '🤖',
    title: 'Best AI Tools',
    description: 'In-depth reviews of the best AI tools for productivity, writing, design and more.',
    href: '/tools',
    color: '#7b5ea7',
    glow: 'rgba(123,94,167,0.25)',
  },
  {
    icon: '⚙️',
    title: 'Automation Guides',
    description: 'Step-by-step automation tutorials to eliminate repetitive work and scale faster.',
    href: '/blog',
    color: '#00d4ff',
    glow: 'rgba(0,212,255,0.2)',
  },
  {
    icon: '💰',
    title: 'Make Money with AI',
    description: 'Real, tested strategies to earn online using AI tools — no fluff, just results.',
    href: '/blog',
    color: '#4ade80',
    glow: 'rgba(74,222,128,0.2)',
  },
  {
    icon: '📚',
    title: 'Free Resources',
    description: 'Free eBooks, templates, checklists and automation workflows to download now.',
    href: '/resources',
    color: '#ff6b6b',
    glow: 'rgba(255,107,107,0.2)',
  },
]

export default function CategoriesGrid() {
  return (
    <section className="section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold text-text-primary mb-4"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Everything You Need to Win with AI
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-text-muted text-lg max-w-xl mx-auto"
          >
            From beginner tutorials to advanced automation workflows — all in one place.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href={cat.href} className="block group">
                <div
                  className="relative h-full p-6 md:p-8 rounded-2xl card-hover overflow-hidden"
                  style={{
                    background: 'rgba(13,13,26,0.8)',
                    border: '1px solid rgba(255,255,255,0.07)',
                  }}
                >
                  {/* Hover glow */}
                  <div
                    className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle, ${cat.glow} 0%, transparent 70%)`,
                      filter: 'blur(30px)',
                    }}
                  />

                  <div className="relative z-10">
                    <div className="text-4xl mb-4">{cat.icon}</div>
                    <h3
                      className="text-xl font-bold text-text-primary mb-2 group-hover:text-white transition-colors"
                      style={{ fontFamily: 'Syne, sans-serif' }}
                    >
                      {cat.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed mb-4">
                      {cat.description}
                    </p>
                    <span
                      className="inline-flex items-center gap-1.5 text-sm font-medium transition-all duration-200 group-hover:gap-2.5"
                      style={{ color: cat.color }}
                    >
                      Explore
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
