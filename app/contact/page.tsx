'use client'

import { useState, type FormEvent } from 'react'

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
      if (res.ok) { setStatus('success'); setForm({ name: '', email: '', message: '' }) }
      else setStatus('error')
    } catch { setStatus('error') }
  }

  return (
    <div className="max-w-xl mx-auto px-4 py-16">
      <h1 className="text-2xl font-bold text-tx mb-2">Contact</h1>
      <p className="text-sm text-muted mb-8">Questions, partnerships, or feedback — we reply within 24 hours.</p>

      {status === 'success' ? (
        <div className="card p-8 text-center">
          <p className="text-sm font-medium text-tx mb-1">Message sent</p>
          <p className="text-xs text-muted">We&apos;ll get back to you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="text-xs text-muted mb-1.5 block">Name</label>
            <input
              type="text"
              required
              className="input"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="text-xs text-muted mb-1.5 block">Email</label>
            <input
              type="email"
              required
              className="input"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="text-xs text-muted mb-1.5 block">Message</label>
            <textarea
              required
              rows={5}
              className="input resize-none"
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              placeholder="What's on your mind?"
            />
          </div>
          {status === 'error' && (
            <p className="text-xs text-red-500">Something went wrong. Please try again.</p>
          )}
          <button
            type="submit"
            disabled={status === 'loading'}
            className="btn btn-primary disabled:opacity-50"
          >
            {status === 'loading' ? 'Sending…' : 'Send message'}
          </button>
        </form>
      )}
    </div>
  )
}
