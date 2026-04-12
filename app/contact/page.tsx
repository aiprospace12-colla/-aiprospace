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
    <div style={{ maxWidth: 520, margin: '0 auto', padding: '64px 40px' }}>
      <h1 style={{ fontSize: 24, fontWeight: 700, color: 'var(--text)', marginBottom: 6 }}>Contact</h1>
      <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 32 }}>
        Questions, partnerships, or feedback — we reply within 24 hours.
      </p>

      {status === 'success' ? (
        <div style={{ border: '1px solid var(--border)', borderRadius: 8, padding: 32, textAlign: 'center' }}>
          <p style={{ fontWeight: 600, color: 'var(--text)', marginBottom: 4 }}>Message sent</p>
          <p style={{ fontSize: 13, color: 'var(--muted)' }}>We&apos;ll get back to you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div>
            <label style={{ fontSize: 12, color: 'var(--muted)', display: 'block', marginBottom: 6 }}>Name</label>
            <input type="text" required className="input" value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
          </div>
          <div>
            <label style={{ fontSize: 12, color: 'var(--muted)', display: 'block', marginBottom: 6 }}>Email</label>
            <input type="email" required className="input" value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" />
          </div>
          <div>
            <label style={{ fontSize: 12, color: 'var(--muted)', display: 'block', marginBottom: 6 }}>Message</label>
            <textarea required rows={5} className="input" value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })} placeholder="What's on your mind?" />
          </div>
          {status === 'error' && (
            <p style={{ fontSize: 12, color: '#ef4444' }}>Something went wrong. Please try again.</p>
          )}
          <button type="submit" disabled={status === 'loading'} className="btn btn-primary"
            style={{ opacity: status === 'loading' ? 0.6 : 1 }}>
            {status === 'loading' ? 'Sending…' : 'Send message'}
          </button>
        </form>
      )}
    </div>
  )
}
