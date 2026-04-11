'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if (!mounted) return <div className="w-7 h-7" />

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle theme"
      className="flex items-center justify-center w-7 h-7 rounded-md transition-colors hover:bg-hover text-muted hover:text-tx"
    >
      {theme === 'dark'
        ? <Sun size={15} />
        : <Moon size={15} />
      }
    </button>
  )
}
