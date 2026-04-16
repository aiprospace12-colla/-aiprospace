'use client'

import { useState } from 'react'

interface Props {
  resourceId: string
  filename: string
  label?: string
}

export default function DownloadGate({ resourceId, filename, label = 'Download Free' }: Props) {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')

  const downloadUrl = `/downloads/${filename}`

  function triggerDownload() {
    const link = document.createElement('a')
    link.href = downloadUrl
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          source: `resource-${resourceId}`,
          downloadUrl: `https://aiprospace.com${downloadUrl}`,
          filename,
        }),
      })

      // 409 = already subscribed — still allow download
      if (res.ok || res.status === 409) {
        setDone(true)
        triggerDownload()
      } else {
        const data = await res.json()
        setError(data.error || 'Something went wrong. Please try again.')
      }
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (done) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }}>
        <span style={{
          fontSize: 13, color: '#16a34a', fontWeight: 600,
          background: '#dcfce7', padding: '8px 14px', borderRadius: 6,
          lineHeight: 1.5, textAlign: 'right',
        }}>
          ✓ Check your email!<br />Your PDF is on its way.
        </span>
        <a href={downloadUrl} download={filename}
          style={{ fontSize: 12, color: 'var(--muted)', textDecoration: 'underline' }}>
          Click here if it didn&apos;t download
        </a>
      </div>
    )
  }

  if (open) {
    return (
      <form onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', gap: 8, minWidth: 240, flexShrink: 0 }}>
        <p style={{ fontSize: 12, color: 'var(--muted)', margin: 0 }}>
          Enter your email to get free access:
        </p>
        <input
          type="email"
          required
          autoFocus
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="you@example.com"
          style={{
            padding: '8px 12px', borderRadius: 6, fontSize: 13,
            border: '1px solid var(--border)', background: 'var(--card-bg)',
            color: 'var(--text)', outline: 'none', width: '100%',
          }}
        />
        {error && <p style={{ fontSize: 12, color: '#ef4444', margin: 0 }}>{error}</p>}
        <div style={{ display: 'flex', gap: 8 }}>
          <button type="submit" disabled={loading} className="btn btn-primary"
            style={{ flex: 1, cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.7 : 1 }}>
            {loading ? 'Sending…' : 'Get Free Access →'}
          </button>
          <button type="button" onClick={() => setOpen(false)}
            style={{
              padding: '8px 12px', borderRadius: 6, fontSize: 13, cursor: 'pointer',
              border: '1px solid var(--border)', background: 'transparent', color: 'var(--muted)',
            }}>
            Cancel
          </button>
        </div>
        <p style={{ fontSize: 11, color: 'var(--muted)', margin: 0 }}>
          No spam. Unsubscribe anytime.
        </p>
      </form>
    )
  }

  return (
    <button onClick={() => setOpen(true)} className="btn btn-primary" style={{ flexShrink: 0, cursor: 'pointer' }}>
      {label} →
    </button>
  )
}
