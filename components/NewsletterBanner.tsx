'use client'

import { motion } from 'framer-motion'
import EmailCapture from './EmailCapture'

export default function NewsletterBanner() {
  return (
    <section
      className="py-20 px-4 relative overflow-hidden"
      style={{ background: 'rgba(13,13,26,0.6)' }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(123,94,167,0.08) 0%, transparent 100%)',
        }}
      />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Icon */}
          <div
            className="w-14 h-14 rounded-2xl mx-auto mb-6 flex items-center justify-center"
            style={{ background: 'rgba(123,94,167,0.2)', border: '1px solid rgba(123,94,167,0.3)' }}
          >
            <svg className="w-7 h-7 text-purple-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>

          <h2
            className="text-3xl md:text-4xl font-extrabold text-text-primary mb-4"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Stay Ahead of the AI Curve
          </h2>
          <p className="text-text-muted text-lg mb-8 leading-relaxed">
            Join <span className="text-text-primary font-semibold">12,400+ readers</span> getting
            weekly AI tools, automation tips and money-making strategies.
          </p>

          <EmailCapture
            source="newsletter_banner"
            placeholder="your@email.com"
            buttonText="Subscribe Free"
          />

          <p className="text-text-muted/60 text-xs mt-4">
            No spam, ever. Unsubscribe anytime with one click.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
