'use client'

import { useState, type FormEvent } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!email || status === 'loading') return
    setStatus('loading')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div style={{ border: '1px solid var(--border)', borderRadius: 8, padding: '32px', textAlign: 'center', marginTop: 40 }}>
      <p style={{ fontWeight: 700, fontSize: 16, color: 'var(--text)', marginBottom: 4 }}>Stay Updated</p>
      <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 20 }}>
        Weekly roundup of the best AI tools, guides, and tips.
      </p>
      {status === 'success' ? (
        <p style={{ fontSize: 14, color: 'var(--text)' }}>You&apos;re subscribed. Thank you!</p>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 8, maxWidth: 400, margin: '0 auto' }}>
          <input
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="input"
            style={{ flex: 1 }}
          />
          <button type="submit" disabled={status === 'loading'} className="btn btn-primary" style={{ opacity: status === 'loading' ? 0.6 : 1 }}>
            {status === 'loading' ? '...' : 'Subscribe →'}
          </button>
        </form>
      )}
      {status === 'error' && (
        <p style={{ fontSize: 12, color: '#ef4444', marginTop: 8 }}>Something went wrong. Try again.</p>
      )}
    </div>
  )
}
