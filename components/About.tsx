'use client'

import Image from 'next/image'

export default function About() {
  return (
    <section
      id="about"
      className="py-28 md:py-0 px-6 md:px-0 overflow-hidden"
      style={{ background: '#0D0D0D' }}
    >
      <div className="flex flex-col md:flex-row md:min-h-screen">

        {/* Left column — portrait */}
        <div className="relative w-full md:w-[40%] h-[70vw] md:h-auto flex-shrink-0">
          <Image
            src="/images/julia-photoshoot/16.jpg"
            alt="Vicky Vortex"
            fill
            className="object-cover object-top"
            style={{ filter: 'none', WebkitFilter: 'none' }}
          />
          {/* Right-edge fade into text column */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to right, transparent 60%, #0D0D0D 100%)',
            }}
          />
          {/* Top and bottom fades */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, #0D0D0D 0%, transparent 15%, transparent 85%, #0D0D0D 100%)',
            }}
          />
        </div>

        {/* Right column — text */}
        <div className="flex flex-col justify-center w-full md:w-[60%] pl-6 md:pl-16 lg:pl-20 pr-6 md:pr-12 py-10 md:py-24">
          <p
            className="font-sans text-[10px] tracking-[0.4em] uppercase mb-8"
            style={{ color: 'rgba(248,246,242,0.35)' }}
          >
            About
          </p>

          <h2
            className="font-cormorant font-light text-[clamp(2.2rem,5vw,4rem)] leading-[1.05] tracking-tight mb-10"
            style={{ color: '#F8F6F2' }}
          >
            Vicky Vortex
          </h2>

          <div
            className="font-garamond text-xl md:text-2xl leading-relaxed space-y-6 max-w-lg"
            style={{ color: 'rgba(248,246,242,0.7)' }}
          >
            <p>
              I am a Corporate Vitality Speaker and the founder of Dignity Clinic — a practice for ACE survivors and family scapegoats in midlife who are ready to stop managing symptoms and start rebuilding from the inside out.
            </p>
            <p>
              My work combines body-based healing, subconscious work, and practical recovery tools. I draw on yoga, Pilates, breathwork, QHHT Level 2, Emotion Code, Body Code, and the Vortex Vitality Method — the framework I created to address how chronic stress, emotional override, and unresolved trauma become embedded in the body over time.
            </p>
            <p>
              Before this work, I spent years as a travel journalist, living and working across Hong Kong, Sydney, Paris, Bangkok, Barcelona, and London. That chapter taught me how much can be hidden behind competence, beauty, movement, and performance.
            </p>
            <p>
              I work mainly with people over 40 who were scapegoated inside their family system and are now living with the physical and emotional cost of it. Many are highly capable, deeply perceptive, and tired of carrying patterns that were never theirs to hold.
            </p>
            <p>
              Dignity Clinic helps them restore self-trust, regulate the nervous system, lower the burden of chronic stress, and begin healing with more clarity, stability, and dignity.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
// force rebuild Tue 21 Apr 2026 23:54:38 BST
