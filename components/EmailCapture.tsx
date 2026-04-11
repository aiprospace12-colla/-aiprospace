'use client'

import { useState, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Props = {
  source?: string
  placeholder?: string
  buttonText?: string
  className?: string
}

export default function EmailCapture({
  source = 'website',
  placeholder = 'Enter your email address',
  buttonText = 'Get Free Access',
  className = '',
}: Props) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'duplicate'>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!email || status === 'loading') return

    setStatus('loading')

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source }),
      })

      const data = await res.json()

      if (data.success) {
        setStatus('success')
        setMessage('Check your inbox — your playbook is on its way!')
        setEmail('')
      } else if (data.error === 'already_subscribed') {
        setStatus('duplicate')
        setMessage("You're already subscribed! Check your inbox.")
      } else {
        setStatus('error')
        setMessage('Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setMessage('Network error. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`flex flex-col items-center gap-3 p-6 rounded-2xl text-center ${className}`}
        style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.25)' }}
      >
        <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
          <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-green-400 font-medium">{message}</p>
        <p className="text-text-muted text-sm">Welcome to the AIProSpace community!</p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-3 ${className}`}>
      <div className="flex-1 relative">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          required
          className="input-dark w-full pr-4"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        />
      </div>
      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary whitespace-nowrap flex-shrink-0 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Subscribing...
          </span>
        ) : (
          buttonText
        )}
      </button>

      <AnimatePresence>
        {(status === 'error' || status === 'duplicate') && (
          <motion.p
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="w-full text-sm text-red-accent sm:col-span-2"
          >
            {message}
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  )
}
