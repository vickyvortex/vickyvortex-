'use client'

import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Credentials', href: '#credentials' },
  { label: 'Services', href: '#services' },
  { label: 'Approach', href: '#approach' },
  { label: 'Insights', href: '/insights' },
  { label: 'Speaking', href: '/talk' },
  { label: 'Contact', href: '#contact' },
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
        {/* Logo */}
        <a href="/" className="flex items-center" aria-label="Dignity Clinic">
          <svg width="175" height="40" viewBox="0 0 175 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Rays */}
            <line x1="15" y1="11" x2="2"  y2="3"  stroke="#C8A96E" strokeWidth="1"   strokeLinecap="round" opacity="0.75"/>
            <line x1="15" y1="11" x2="28" y2="3"  stroke="#C8A96E" strokeWidth="1"   strokeLinecap="round" opacity="0.75"/>
            <line x1="15" y1="11" x2="34" y2="7"  stroke="#C8A96E" strokeWidth="0.8" strokeLinecap="round" opacity="0.5"/>
            <line x1="15" y1="11" x2="-4" y2="7"  stroke="#C8A96E" strokeWidth="0.8" strokeLinecap="round" opacity="0.5"/>
            {/* Lantern room */}
            <rect x="10" y="8" width="10" height="6" rx="0.8" fill="none" stroke="currentColor" strokeWidth="1.2"/>
            {/* Beacon glow dot */}
            <circle cx="15" cy="11" r="2" fill="#C8A96E"/>
            {/* Gallery line */}
            <line x1="8" y1="14" x2="22" y2="14" stroke="currentColor" strokeWidth="0.8" opacity="0.5"/>
            {/* Tower body — tapered */}
            <path d="M11,14 L8,36 L22,36 L19,14 Z" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
            {/* Door */}
            <rect x="13" y="28" width="4" height="7" rx="0.5" fill="currentColor" opacity="0.3"/>
            {/* Base */}
            <rect x="6" y="36" width="18" height="2.5" rx="0.8" fill="currentColor"/>
            {/* Wordmark */}
            <text x="36" y="26" fontFamily="Georgia, 'Times New Roman', serif" fontSize="17" fontWeight="400" letterSpacing="1.5" fill="currentColor">Dignity Clinic</text>
          </svg>
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
