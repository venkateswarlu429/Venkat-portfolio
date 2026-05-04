'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '#hero',     label: '01 / Intro' },
  { href: '#impact',   label: '02 / Impact' },
  { href: '#skills',   label: '03 / Stack' },
  { href: '#timeline', label: '04 / Path' },
  { href: '#work',     label: '05 / Work' },
  { href: '#contact',  label: '06 / Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#hero')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12)
      const offset = window.innerHeight / 2
      let current = '#hero'
      for (const { href } of navLinks) {
        const el = document.querySelector(href)
        if (!el) continue
        const top = (el as HTMLElement).getBoundingClientRect().top
        if (top - offset < 0) current = href
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg/70 backdrop-blur-xl border-b border-default'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group" aria-label="Home">
          <span className="relative h-2.5 w-2.5">
            <span className="absolute inset-0 rounded-full bg-accent animate-pulseGlow" />
            <span className="absolute inset-0 rounded-full bg-accent blur-md opacity-50" />
          </span>
          <span className="font-mono text-[13px] tracking-widest text-fg">VM<span className="text-accent">.</span>SEC</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => {
            const isActive = active === l.href
            return (
              <a
                key={l.href}
                href={l.href}
                className={`group relative px-3 py-1.5 font-mono text-[11px] tracking-widest transition-colors ${
                  isActive ? 'text-fg' : 'text-fg-muted hover:text-fg'
                }`}
              >
                <span className="relative z-10">{l.label}</span>
                {isActive && (
                  <span className="absolute inset-x-2 -bottom-0.5 h-px bg-accent shadow-[0_0_8px_hsl(var(--accent))]" />
                )}
              </a>
            )
          })}
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 h-8 px-3 rounded border border-strong hover:border-accent hover:text-accent transition-colors font-mono text-[11px] tracking-widest"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent-2 animate-pulseGlow" />
          AVAILABLE
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-fg"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-default bg-bg/95 backdrop-blur-xl">
          <div className="container-custom py-3 flex flex-col gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-mono text-[12px] tracking-widest text-fg-muted py-2"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
