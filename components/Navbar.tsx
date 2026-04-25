'use client'

import { useState, useEffect } from 'react'

const navLinks = [
  const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Credentials', href: '#credentials' },
  { label: 'Services', href: '#services' },
  { label: 'Approach', href: '#approach' },
  { label: 'Insights', href: '/insights' },
  { label: 'Speaking', href: '/talk' },
  { label: 'Contact', href: '#contact' },
]
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background/90 backdrop-blur-md border-b border-foreground/5 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Wordmark */}
        <a href="/" className="flex leading-none">
          <span className="font-cormorant font-light text-xl tracking-[0.18em] uppercase text-foreground">
            Dignity Clinic
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="font-sans text-sm tracking-[0.2em] uppercase text-foreground/60 hover:text-foreground transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-1"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-px w-6 bg-foreground/70 transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-[9px]' : ''
            }`}
          />
          <span
            className={`block h-px w-6 bg-foreground/70 transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-px w-6 bg-foreground/70 transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-[9px]' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pt-4 pb-6 border-t border-foreground/5 bg-background/95 backdrop-blur-md flex flex-col gap-5">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="font-sans text-sm tracking-[0.2em] uppercase text-foreground/60 hover:text-foreground transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}
