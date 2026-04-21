'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col md:flex-row overflow-hidden"
      style={{ background: '#0D0D0D' }}
    >
      {/* Left column — text */}
      <div className="relative z-10 flex flex-col justify-center w-full md:w-[55%] px-8 md:px-16 lg:px-24 pt-44 pb-20 md:pt-40 md:pb-20">
        {/* Headline */}
        <h1 className="font-cormorant font-light text-[clamp(3.5rem,10vw,9rem)] leading-[0.92] tracking-tight text-foreground mb-8 md:mb-10">
          The truth<br />
          changes the body.
        </h1>

        {/* Subheadline */}
        <p className="font-garamond text-xl md:text-2xl lg:text-3xl text-foreground/70 leading-relaxed max-w-md mb-12 md:mb-14">
          Be heard. Be believed.
          <br />
          Rebuild your health with dignity.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <a
            href="#book"
            className="inline-flex items-center justify-center font-sans font-medium text-sm tracking-[0.18em] uppercase px-10 py-4 border transition-all duration-300"
            style={{ borderColor: '#F8F6F2', color: '#F8F6F2', background: 'transparent' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#F8F6F2'; e.currentTarget.style.color = '#0D0D0D' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#F8F6F2' }}
          >
            Book a Discovery Call
          </a>
          <a
            href="#about"
           className="font-sans text-sm tracking-[0.18em] uppercase text-foreground hover:text-foreground/70 transition-colors duration-200 border-b border-foreground/20 pb-0.5 self-center" 
          >
            Learn more
          </a>
        </div>
      </div>

      {/* Right column — portrait image */}
      <div className="relative w-full md:w-[45%] h-[60vw] md:h-auto md:min-h-screen flex-shrink-0">
        <Image
          src="/images/julia-photoshoot/16.jpg"
          alt="Vicky Vortex, founder of Dignity Clinic"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Gradient: fades from #0D0D0D on the left edge into transparent */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to right, rgba(13,13,13,1) 0%, rgba(13,13,13,1) 15%, rgba(13,13,13,0.85) 40%, rgba(13,13,13,0) 70%)',
          }}
        />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-8 md:left-16 flex flex-col items-center gap-2 opacity-25 z-10">
        <span className="font-sans text-[9px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="relative h-8 w-px bg-foreground/40 overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full bg-foreground"
            style={{ height: '40%', animation: 'scrollPulse 2s ease-in-out infinite' }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollPulse {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(300%); }
        }
      `}</style>
    </section>
  )
}
