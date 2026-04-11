'use client'

import type { Metadata } from 'next'
import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'

const socials = [
  { label: 'Twitter / X', href: 'https://twitter.com/aiprospace', icon: '𝕏', color: '#f0f0ff' },
  { label: 'YouTube', href: 'https://youtube.com/@aiprospace', icon: '▶', color: '#ff0000' },
  { label: 'LinkedIn', href: 'https://linkedin.com/company/aiprospace', icon: 'in', color: '#0077b5' },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (status === 'loading') return

    setStatus('loading')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="pt-20 min-h-screen" style={{ background: '#06060f' }}>
      {/* Hero */}
      <div className="relative py-20 px-4 text-center overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 50% 40% at 50% 0%, rgba(123,94,167,0.1) 0%, transparent 100%)',
          }}
        />
        <div className="relative max-w-2xl mx-auto">
          <h1
            className="text-4xl md:text-5xl font-extrabold text-text-primary mb-4"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Get in Touch
          </h1>
          <p className="text-text-muted text-xl leading-relaxed">
            Have a question, partnership inquiry, or just want to say hi? We&apos;d love to hear from you.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact form */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-2xl"
              style={{ background: 'rgba(13,13,26,0.8)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <h2
                className="text-xl font-bold text-text-primary mb-6"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                Send us a message
              </h2>

              {status === 'success' ? (
                <div
                  className="text-center py-10 rounded-xl"
                  style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)' }}
                >
                  <div className="text-4xl mb-3">✅</div>
                  <h3 className="text-text-primary font-semibold mb-2">Message Sent!</h3>
                  <p className="text-text-muted text-sm">We&apos;ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-text-muted text-xs font-medium mb-2 uppercase tracking-wide">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="John Doe"
                      className="input-dark w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-text-muted text-xs font-medium mb-2 uppercase tracking-wide">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="john@example.com"
                      className="input-dark w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-text-muted text-xs font-medium mb-2 uppercase tracking-wide">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us what's on your mind..."
                      className="input-dark w-full resize-none"
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-red-accent text-sm">
                      Something went wrong. Please try again or email us directly.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-primary w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 rounded-2xl"
              style={{ background: 'rgba(13,13,26,0.8)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <h3
                className="text-base font-bold text-text-primary mb-4"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                Contact Info
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-text-muted">
                  <svg className="w-4 h-4 text-purple-light flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  hello@aiprospace.com
                </div>
                <div className="flex items-center gap-3 text-sm text-text-muted">
                  <svg className="w-4 h-4 text-purple-light flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Response within 24 hours
                </div>
              </div>
            </motion.div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-2xl"
              style={{ background: 'rgba(13,13,26,0.8)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <h3
                className="text-base font-bold text-text-primary mb-4"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                Follow Us
              </h3>
              <div className="space-y-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-text-muted hover:text-text-primary text-sm transition-colors group"
                  >
                    <span
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0"
                      style={{ background: 'rgba(255,255,255,0.05)', color: s.color }}
                    >
                      {s.icon}
                    </span>
                    {s.label}
                    <svg className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Partnerships */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(123,94,167,0.12), rgba(0,212,255,0.06))',
                border: '1px solid rgba(123,94,167,0.2)',
              }}
            >
              <h3
                className="text-base font-bold text-text-primary mb-2"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                🤝 Partnerships
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Interested in sponsored content, affiliate programs, or tool reviews?
                Email us at{' '}
                <a href="mailto:partners@aiprospace.com" className="text-cyan-DEFAULT hover:underline">
                  partners@aiprospace.com
                </a>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
