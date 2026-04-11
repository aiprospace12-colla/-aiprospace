'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function FeaturedTool() {
  return (
    <section className="section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden p-8 md:p-12"
          style={{
            background: 'rgba(13,13,26,0.9)',
            border: '1px solid rgba(123,94,167,0.25)',
            borderLeft: '4px solid #7b5ea7',
            boxShadow: '-8px 0 40px rgba(123,94,167,0.2), 0 0 80px rgba(0,0,0,0.5)',
          }}
        >
          {/* Background glow */}
          <div
            className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(123,94,167,0.12) 0%, transparent 70%)',
              filter: 'blur(40px)',
            }}
          />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center gap-10">
            {/* Left content */}
            <div className="flex-1">
              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-6"
                style={{
                  background: 'rgba(245,158,11,0.15)',
                  border: '1px solid rgba(245,158,11,0.3)',
                  color: '#fbbf24',
                }}
              >
                ⭐ Tool of the Week
              </div>

              {/* Tool name */}
              <h2
                className="text-4xl md:text-5xl font-extrabold text-text-primary mb-3"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                Jasper AI
              </h2>

              <p className="text-lg text-text-muted mb-6 leading-relaxed">
                The best AI writing tool for bloggers and marketers. Generate high-quality content,
                SEO-optimized blog posts, and marketing copy in minutes.
              </p>

              {/* Star rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-text-muted text-sm font-medium">5.0 / 5.0</span>
                <span className="text-text-muted/50 text-sm">· 10,000+ reviews</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {[
                  '50+ AI writing templates for any content type',
                  'SEO mode powered by Surfer SEO integration',
                  'Brand voice training for consistent output',
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-text-muted text-sm">
                    <svg className="w-5 h-5 text-purple-light flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/blog/best-ai-tools-2025" className="btn-primary">
                  Read Full Review
                </Link>
                <a
                  href="https://jasper.ai"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="btn-secondary flex items-center gap-2"
                >
                  Try Jasper Free
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right — logo placeholder */}
            <div className="lg:w-72 flex-shrink-0">
              <div
                className="w-full aspect-square max-w-64 mx-auto rounded-3xl flex flex-col items-center justify-center gap-4 p-8"
                style={{
                  background: 'linear-gradient(135deg, rgba(123,94,167,0.2), rgba(0,212,255,0.1))',
                  border: '1px solid rgba(123,94,167,0.25)',
                }}
              >
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl font-black text-white"
                  style={{ background: 'linear-gradient(135deg, #7b5ea7, #c084fc)' }}
                >
                  J
                </div>
                <div className="text-center">
                  <p className="text-text-primary font-semibold" style={{ fontFamily: 'Syne, sans-serif' }}>
                    Jasper AI
                  </p>
                  <p className="text-text-muted text-sm">AI Writing Assistant</p>
                </div>
                <div
                  className="text-xs px-3 py-1 rounded-full font-semibold"
                  style={{ background: 'rgba(255,107,107,0.15)', color: '#ff6b6b', border: '1px solid rgba(255,107,107,0.25)' }}
                >
                  Paid · From $39/mo
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
