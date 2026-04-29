'use client'

import Link from 'next/link'

export default function ACELeadMagnet() {
  return (
    <section
      className="py-24 md:py-32 px-6 md:px-12"
      style={{ background: '#0D0D0D', borderTop: '1px solid rgba(248,246,242,0.06)' }}
    >
      <div className="max-w-3xl mx-auto">
        <p
          className="font-sans text-[10px] tracking-[0.4em] uppercase mb-8"
          style={{ color: 'rgba(248,246,242,0.35)' }}
        >
          Self-Understanding
        </p>

        <h2
          className="font-cormorant font-light text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-tight mb-8"
          style={{ color: '#F8F6F2' }}
        >
          Take the ACE Score Test
        </h2>

        <div
          className="font-garamond text-xl md:text-2xl leading-relaxed space-y-5 mb-12"
          style={{ color: 'rgba(248,246,242,0.7)', maxWidth: '560px' }}
        >
          <p>
            Childhood adversity can shape the nervous system long after the events are over. This simple test can help you begin understanding the body burden of early stress and why certain patterns may still affect your energy, relationships, boundaries and sense of safety.
          </p>
          <p style={{ color: 'rgba(248,246,242,0.5)', fontStyle: 'italic' }}>
            This is not a diagnosis. It is a starting point for self-understanding.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-start gap-6">
          <Link
            href="/ace-quiz"
            className="inline-flex items-center justify-center font-sans font-medium text-sm tracking-[0.2em] uppercase px-10 py-4 transition-all duration-300"
            style={{ background: '#3D9FA8', color: '#fff' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#2d8a93')}
            onMouseLeave={e => (e.currentTarget.style.background = '#3D9FA8')}
          >
            Take the Test
          </Link>
        </div>

        <p
          className="font-garamond text-lg mt-8"
          style={{ color: 'rgba(248,246,242,0.35)', fontStyle: 'italic' }}
        >
          After completing the test, you can explore whether Dignity Clinic support is the right next step for your recovery.
        </p>
      </div>
    </section>
  )
}
