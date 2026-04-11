'use client'

import { useState, type FormEvent } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (status === 'loading') return
    setStatus('loading')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (res.ok) { setStatus('success'); setEmail('') }
      else setStatus('error')
    } catch { setStatus('error') }
  }

  return (
    <section className="border-t border-border mt-16 pt-12 pb-12">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-xl font-bold text-tx mb-2">Stay Updated</h2>
        <p className="text-sm text-muted mb-6">Weekly AI tools and guides. Free forever.</p>
        {status === 'success' ? (
          <p className="text-sm text-tx">You&apos;re subscribed. Thanks!</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              required
              className="input flex-1"
              placeholder="your@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <button type="submit" disabled={status === 'loading'} className="btn btn-primary flex-shrink-0">
              {status === 'loading' ? '...' : 'Subscribe'}
            </button>
          </form>
        )}
        {status === 'error' && <p className="text-xs text-red-500 mt-2">Something went wrong. Try again.</p>}
      </div>
    </section>
  )
}
