'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { href: '/blog', label: 'Blog' },
  { href: '/tools', label: 'Tools' },
  { href: '/resources', label: 'Resources' },
  { href: '/about', label: 'About' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={
        scrolled
          ? {
              background: 'var(--navbar-bg)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderBottom: '1px solid var(--border)',
              boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
            }
          : undefined
      }
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-1">
            <span className="text-xl font-extrabold tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
              <span style={{ color: 'var(--primary)' }}>AI</span>
              <span style={{ color: 'var(--text-primary)' }}>ProSpace</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors duration-200 relative group"
                style={{ color: 'var(--text-muted)' }}
              >
                {link.label}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-300 rounded-full"
                  style={{ background: 'var(--primary)' }}
                />
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Link href="/resources" className="btn-primary text-sm">
              Get Free eBook
            </Link>
          </div>

          {/* Mobile: theme toggle + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col justify-center items-center w-8 h-8 gap-[5px]"
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-[2px] rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`} style={{ background: 'var(--text-primary)' }} />
              <span className={`block w-6 h-[2px] rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} style={{ background: 'var(--text-primary)' }} />
              <span className={`block w-6 h-[2px] rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} style={{ background: 'var(--text-primary)' }} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden"
            >
              <div className="glass rounded-2xl mb-4 p-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="font-medium transition-colors text-lg"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/resources"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary text-sm text-center mt-2"
                >
                  Get Free eBook
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
