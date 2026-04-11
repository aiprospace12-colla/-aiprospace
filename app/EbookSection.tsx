'use client'

import { motion } from 'framer-motion'
import EmailCapture from '@/components/EmailCapture'

export default function EbookSection() {
  return (
    <section className="section">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-6"
              style={{
                background: 'rgba(34,197,94,0.12)',
                border: '1px solid rgba(34,197,94,0.3)',
                color: '#4ade80',
              }}
            >
              📥 FREE DOWNLOAD
            </div>

            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-primary mb-4 leading-tight"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              The AI Automation{' '}
              <span className="gradient-purple">Playbook 2025</span>
            </h2>

            <p className="text-text-muted text-lg leading-relaxed mb-8">
              10 AI tools and automation workflows to make money online —{' '}
              <span className="text-text-primary font-medium">completely free.</span> No upsells,
              no BS.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                'Best AI tools ranked by ROI and ease of use',
                'Step-by-step workflow automations you can copy',
                'Real income numbers from real users',
                '5 bonus automation templates included',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-text-muted text-sm">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <EmailCapture
              source="ebook_section"
              placeholder="Enter your email to get instant access"
              buttonText="Get Free Access"
            />

            <p className="text-text-muted/50 text-xs mt-3">
              Join 12,400+ subscribers. Unsubscribe anytime.
            </p>
          </motion.div>

          {/* Right — eBook mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow behind */}
              <div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: 'radial-gradient(ellipse, rgba(123,94,167,0.35) 0%, transparent 70%)',
                  filter: 'blur(40px)',
                  transform: 'scale(1.2)',
                }}
              />

              {/* Book cover */}
              <div
                className="relative w-72 h-96 rounded-2xl overflow-hidden shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, #0d0d1a, #1a1a2e)',
                  border: '1px solid rgba(123,94,167,0.3)',
                  boxShadow: '0 40px 80px rgba(0,0,0,0.6), 0 0 40px rgba(123,94,167,0.2)',
                }}
              >
                {/* Book gradient header */}
                <div
                  className="h-48 flex items-center justify-center relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, #7b5ea7 0%, #00d4ff 50%, #7b5ea7 100%)',
                    backgroundSize: '200% 200%',
                  }}
                >
                  <div className="absolute inset-0 opacity-30 bg-grid-pattern" />
                  <div className="relative text-center">
                    <div className="text-6xl mb-2">🤖</div>
                    <p className="text-white/80 text-xs font-medium tracking-widest uppercase">
                      2025 Edition
                    </p>
                  </div>
                </div>

                {/* Book info */}
                <div className="p-6">
                  <h3
                    className="text-text-primary font-extrabold text-lg mb-1 leading-tight"
                    style={{ fontFamily: 'Syne, sans-serif' }}
                  >
                    The AI Automation Playbook
                  </h3>
                  <p className="text-text-muted text-xs mb-4">
                    10 Tools · Automation Workflows · Income Strategies
                  </p>
                  <div className="flex items-center gap-2">
                    <span
                      className="text-xs font-bold px-2.5 py-1 rounded-full"
                      style={{ background: 'rgba(34,197,94,0.15)', color: '#4ade80', border: '1px solid rgba(34,197,94,0.3)' }}
                    >
                      FREE
                    </span>
                    <span className="text-text-muted/50 text-xs line-through">$29 value</span>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div
                className="absolute -top-4 -right-4 w-16 h-16 rounded-full flex items-center justify-center text-center"
                style={{
                  background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
                  boxShadow: '0 8px 24px rgba(245,158,11,0.4)',
                }}
              >
                <div>
                  <p className="text-xs font-black text-black leading-none">FREE</p>
                  <p className="text-[10px] font-bold text-black/70">Download</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
