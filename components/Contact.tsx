'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

const SERVICE_OPTIONS = [
  { value: 'reset', label: 'Dignity Reset' },
  { value: 'intensive', label: 'Dignity Clinic Intensive' },
  { value: 'rebuild', label: 'Dignity Rebuild' },
  { value: 'sovereignty', label: 'Dignity Sovereignty' },
  { value: 'unsure', label: 'Not sure yet' },
]

const inputStyles: React.CSSProperties = {
  background: 'transparent',
  border: '1px solid rgba(248,246,242,0.3)',
  color: '#F8F6F2',
  width: '100%',
  padding: '0.875rem 1rem',
  fontFamily: 'inherit',
  fontSize: '18px',
  outline: 'none',
}

const labelStyles = 'block mb-3'
const labelTextStyle: React.CSSProperties = {
  fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
  fontSize: '0.8rem',
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: '#F8F6F2',
}

function GhostButton({ href, children }: { href: string; children: React.ReactNode }) {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center font-sans font-medium text-sm tracking-[0.18em] uppercase px-10 py-4 border transition-all duration-300 outline-none focus:outline-none"
      style={{
        borderColor: '#F8F6F2',
        color: hovered ? '#0D0D0D' : '#F8F6F2',
        background: hovered ? '#F8F6F2' : 'transparent',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </a>
  )
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transition: 'transform 0.2s ease',
        transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
        flexShrink: 0,
      }}
    >
      <path d="M1 1L6 7L11 1" stroke="#F8F6F2" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ServiceDropdown({
  value,
  onChange,
}: {
  value: string
  onChange: (v: string) => void
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const selected = SERVICE_OPTIONS.find(o => o.value === value)

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="font-garamond flex items-center justify-between w-full"
        style={{
          ...inputStyles,
          cursor: 'pointer',
          textAlign: 'left',
          color: selected ? '#F8F6F2' : 'rgba(248,246,242,0.35)',
        }}
      >
        <span>{selected ? selected.label : 'Select a service'}</span>
        <Chevron open={open} />
      </button>

      {open && (
        <ul
          className="absolute z-50 w-full mt-px"
          style={{
            background: '#0D0D0D',
            border: '1px solid #F8F6F2',
            listStyle: 'none',
            padding: 0,
            margin: 0,
          }}
        >
          {SERVICE_OPTIONS.map(option => (
            <li key={option.value}>
              <button
                type="button"
                onClick={() => { onChange(option.value); setOpen(false) }}
                className="font-garamond w-full text-left transition-colors duration-150"
                style={{
                  padding: '0.75rem 1rem',
                  color: option.value === value ? '#0D0D0D' : '#F8F6F2',
                  background: option.value === value ? '#F8F6F2' : 'transparent',
                  fontSize: '18px',
                  cursor: 'pointer',
                  border: 'none',
                  outline: 'none',
                  display: 'block',
                  width: '100%',
                }}
                onMouseEnter={e => {
                  if (option.value !== value) {
                    e.currentTarget.style.background = 'rgba(248,246,242,0.08)'
                  }
                }}
                onMouseLeave={e => {
                  if (option.value !== value) {
                    e.currentTarget.style.background = 'transparent'
                  }
                }}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function Contact() {
  const [submitHovered, setSubmitHovered] = useState(false)
  const [service, setService] = useState('')

  return (
    <section
      id="contact"
      className="overflow-hidden"
      style={{ background: '#0D0D0D' }}
    >
      {/* Atmospheric header image — full bleed */}
      <div className="relative w-full" style={{ height: '700px' }}>
        <Image
          src="/images/Julia photoshoot/10.jpg"
          alt="Dignity Clinic"
          fill
          className="object-cover"
          style={{ objectPosition: 'center 20%' }}
        />
        {/* Bottom fade only */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, rgba(13,13,13,0) 60%, rgba(13,13,13,1) 100%)' }}
        />
      </div>

      <div className="px-6 py-16 md:py-24">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <p
            className="font-sans text-xs tracking-[0.4em] uppercase mb-10 md:mb-12"
            style={{ color: 'rgba(248,246,242,0.35)' }}
          >
            Contact
          </p>

          <h2
            className="font-cormorant font-light text-[clamp(2.2rem,6vw,4.5rem)] leading-[1.05] tracking-tight mb-10 md:mb-12"
            style={{ color: '#F8F6F2' }}
          >
            Contact Dignity Clinic
          </h2>

          <div
            className="font-garamond text-xl md:text-2xl leading-relaxed space-y-5 text-left mx-auto"
            style={{ maxWidth: '640px', color: 'rgba(248,246,242,0.7)' }}
          >
            <p>
              If you are ready to feel heard, believed, and supported in your healing, get in touch below.
            </p>
            <p>
              I work with people recovering from scapegoating, grief, chronic stress, and emotional override. If that is where you are, you are welcome here.
            </p>
          </div>
        </div>

        <form
          className="mx-auto space-y-8"
          style={{ maxWidth: '640px' }}
          onSubmit={e => e.preventDefault()}
        >
          <div>
            <label
              htmlFor="name"
              className={labelStyles}
              style={labelTextStyle}
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              style={inputStyles}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className={labelStyles}
              style={labelTextStyle}
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              style={inputStyles}
            />
          </div>

          <div>
            <p
              className={labelStyles}
              style={labelTextStyle}
            >
              Which service are you interested in?
            </p>
            <ServiceDropdown value={service} onChange={setService} />
          </div>

          <div>
            <label
              htmlFor="message"
              className={labelStyles}
              style={labelTextStyle}
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Tell me a little about where you are and what you are looking for"
              style={{
                ...inputStyles,
                resize: 'vertical',
              }}
            />
          </div>

          <div>
            <label
              htmlFor="modality"
              className={labelStyles}
              style={labelTextStyle}
            >
              Is there a modality you&apos;d like to focus on?
            </label>
            <textarea
              id="modality"
              rows={2}
              placeholder="e.g. Emotion Code, QHHT, breathwork, tarot — or leave blank if you're not sure"
              style={{
                ...inputStyles,
                resize: 'vertical',
              }}
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center justify-center font-sans font-medium text-sm tracking-[0.18em] uppercase px-10 py-4 border transition-all duration-300 outline-none focus:outline-none"
            style={{
              borderColor: '#F8F6F2',
              color: submitHovered ? '#0D0D0D' : '#F8F6F2',
              background: submitHovered ? '#F8F6F2' : 'transparent',
            }}
            onMouseEnter={() => setSubmitHovered(true)}
            onMouseLeave={() => setSubmitHovered(false)}
          >
            Send Enquiry
          </button>

          <hr style={{ borderColor: 'rgba(248,246,242,0.1)', borderTopWidth: '1px', margin: '2rem 0' }} />

          <p
            className="font-garamond text-xl md:text-2xl leading-relaxed"
            style={{ color: 'rgba(248,246,242,0.6)' }}
          >
            Or, if you already know you are ready:
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4">
            <GhostButton href="#book">Book a Dignity Reset</GhostButton>
            <GhostButton href="#book">Enquire About Dignity Rebuild</GhostButton>
          </div>

          <p
            className="font-sans text-xs tracking-[0.2em] uppercase"
            style={{ color: 'rgba(248,246,242,0.4)' }}
          >
            For direct enquiries:{' '}
            <a
              href="mailto:transform@vickyvortex.com"
              style={{ color: '#F8F6F2' }}
            >
              transform@vickyvortex.com
            </a>
          </p>
        </form>
      </div>
      </div>
    </section>
  )
}
