'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export function MobileSidebar({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  return (
    <>
      {/* Hamburger button — mobile only */}
      <button
        onClick={() => setOpen(true)}
        style={{
          position: 'fixed', top: 60, left: 12, zIndex: 40,
          padding: '8px', borderRadius: 8,
          border: '1px solid var(--border)', background: 'var(--card-bg)',
          cursor: 'pointer', color: 'var(--text)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
        className="md:hidden"
        aria-label="Open menu"
      >
        <Menu size={18} />
      </button>

      {/* Backdrop */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: 'fixed', inset: 0,
            background: 'rgba(0,0,0,0.5)', zIndex: 40,
          }}
          className="md:hidden"
        />
      )}

      {/* Drawer */}
      <div
        className="md:hidden"
        style={{
          position: 'fixed', top: 0, left: 0,
          height: '100%', width: 280,
          background: 'var(--sidebar-bg)',
          borderRight: '1px solid var(--border)',
          zIndex: 50, overflowY: 'auto',
          transform: open ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.2s ease-in-out',
        }}
      >
        {/* Close button */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '12px 12px 0' }}>
          <button
            onClick={() => setOpen(false)}
            style={{
              padding: 8, borderRadius: 8, cursor: 'pointer',
              border: '1px solid var(--border)', background: 'transparent',
              color: 'var(--text)', display: 'flex', alignItems: 'center',
            }}
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div onClick={() => setOpen(false)}>
          {children}
        </div>
      </div>
    </>
  )
}
