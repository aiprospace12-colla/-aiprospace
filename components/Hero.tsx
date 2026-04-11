'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-20">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="orb-1 absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
        <div
          className="orb-2 absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(52,211,153,0.13) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
        <div
          className="orb-3 absolute bottom-1/4 left-1/2 w-[300px] h-[300px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(251,146,60,0.1) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="inline-flex items-center gap-2 mb-8"
        >
          <div
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
            style={{
              background: 'rgba(99,102,241,0.12)',
              border: '1px solid rgba(99,102,241,0.3)',
            }}
          >
            <span
              className="pulse-dot w-2 h-2 rounded-full inline-block"
              style={{ background: '#34d399', boxShadow: '0 0 6px #34d399' }}
            />
            <span className="text-text-muted">
              The <span className="text-text-primary font-semibold">#1 AI Tools & Automation Resource</span>
            </span>
          </div>
        </motion.div>

        {/* H1 */}
        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-syne font-extrabold leading-[1.05] tracking-tight mb-6"
          style={{ fontFamily: 'Syne, sans-serif' }}
        >
          <span className="block text-text-primary">Master</span>
          <span className="block underline-cyan" style={{ textDecorationColor: '#34d399' }}>
            AI Tools.
          </span>
          <span className="block text-text-primary">Automate Everything.</span>
          <span className="block gradient-purple">Make Money.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          Weekly reviews, tutorials and automation strategies to help you work smarter
          and earn more with AI.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Link href="/tools" className="btn-primary text-base px-8 py-4">
            <span>Explore AI Tools</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link href="/resources" className="btn-secondary text-base px-8 py-4">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            </svg>
            <span>Get Free eBook</span>
          </Link>
        </motion.div>

        {/* Social proof */}
        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-wrap items-center justify-center gap-2 text-sm text-text-muted"
        >
          {[
            '12,400+ readers',
            '500+ tools reviewed',
            'Updated weekly',
          ].map((item, i) => (
            <span key={item} className="flex items-center gap-2">
              {i > 0 && <span className="w-1 h-1 rounded-full bg-text-muted/40" />}
              <span className="text-text-muted/80">{item}</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-text-muted/50">
          <div className="w-5 h-9 rounded-full border border-white/10 flex items-start justify-center pt-1.5">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1 h-2 bg-white/30 rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
