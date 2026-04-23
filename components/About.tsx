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
            src="/images/julia-photoshoot/9.jpg"
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
              I created Dignity Clinic for adults, especially long-term family scapegoats and ACE survivors, who are living with the body cost of chronic emotional stress.
            </p>
            <p>
              My work helps clients restore self-trust, regulate the nervous system, reduce the burden of stress and inflammation, and rebuild with more clarity, stability, and dignity.
            </p>
            <p>
              This approach is grounded in lived experience as well as years of training across subconscious work, emotional processing, nutrition, breathwork, movement, and nervous system support. In many ways, I became the kind of person I once needed most: someone who could see clearly, listen deeply, and help make sense of what the body had been carrying for years.
            </p>
            <p>
              I do not ask clients to choose from a menu of modalities. I guide the process and use the tools most appropriate for where they are.
            </p>
            <p>
              At its core, Dignity Clinic is about helping people feel accurately seen, deeply supported, and strong enough to rebuild from the inside out.

              Vicky Vortex is the founder of Dignity Clinic — a trauma-informed, body-based recovery practice for adults rebuilding after chronic stress and family scapegoating.

              Vicky Vortex is the founder of Dignity Clinic — a trauma-informed, body-based recovery practice for adults rebuilding after chronic stress and family scapegoating.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
// force rebuild Tue 21 Apr 2026 23:54:38 BST
