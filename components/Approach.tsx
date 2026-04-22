'use client'

import Image from 'next/image'
import { useState } from 'react'

const MODALITIES = [
  {
    Find the block starting with name: 'Nutritional Therapy' — move it to first
Find name: 'Breathwork' — move to second
Find name: 'Embodiment & Yoga' — move to third
Find name: 'Hypnotherapy & NLP' — move to fourth
Find name: 'Emotion Code' — move to fifth
Find name: 'Body Code' — move to sixth
Find name: 'QHHT' — move to seventh
Find name: 'Reflective Tarot' — move to eighth
Find name: "Ho'oponopono" — move to ninth
Find name: 'Cosmic Blueprint' — move to tenth/last

  },
]

function ModalityItem({ modality }: { modality: typeof MODALITIES[0] }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      style={{
        borderTop: '1px solid rgba(248,246,242,0.12)',
      }}
    >
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between py-5 text-left group"
        style={{ background: 'transparent', border: 'none', outline: 'none', cursor: 'pointer' }}
      >
        <span
          className="font-cormorant font-light text-2xl md:text-3xl transition-colors duration-200"
          style={{ color: open ? '#F8F6F2' : 'rgba(248,246,242,0.65)' }}
        >
          {modality.name}
        </span>
        <span
          className="ml-4 flex-shrink-0 transition-transform duration-300"
          style={{
            transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
            color: 'rgba(248,246,242,0.4)',
            fontSize: '1.4rem',
            lineHeight: 1,
          }}
        >
          +
        </span>
      </button>

      <div
        style={{
          overflow: 'hidden',
          maxHeight: open ? '600px' : '0',
          transition: 'max-height 0.4s ease',
        }}
      >
        <div className="pb-8 grid md:grid-cols-3 gap-6 md:gap-10">
          <div>
            <p style={{ fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(248,246,242,0.35)', marginBottom: '0.6rem' }}>
              What it is
            </p>
            <p className="font-garamond text-lg leading-relaxed" style={{ color: 'rgba(248,246,242,0.7)' }}>
              {modality.what}
            </p>
          </div>
          <div>
            <p style={{ fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(248,246,242,0.35)', marginBottom: '0.6rem' }}>
              The benefit
            </p>
            <p className="font-garamond text-lg leading-relaxed" style={{ color: 'rgba(248,246,242,0.7)' }}>
              {modality.benefit}
            </p>
          </div>
          <div>
            <p style={{ fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(248,246,242,0.35)', marginBottom: '0.6rem' }}>
              Best for
            </p>
            <p className="font-garamond text-lg leading-relaxed" style={{ color: 'rgba(248,246,242,0.7)' }}>
              {modality.who}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Approach() {
  return (
    <section
      id="approach"
      className="relative overflow-hidden"
      style={{ background: '#0D0D0D' }}
    >
      <div className="flex flex-col md:flex-row md:min-h-screen">

        {/* Right column — portrait image */}
        <div className="relative w-full md:w-[45%] h-[70vw] md:h-auto flex-shrink-0">
          <Image
            src="/images/julia-photoshoot/5a.jpg"
            alt="Vicky Vortex"
            fill
            className="object-cover object-center"
          />
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(to right, rgba(13,13,13,1) 0%, rgba(13,13,13,0) 40%)' }}
          />
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(to bottom, rgba(13,13,13,1) 0%, rgba(13,13,13,0) 15%, rgba(13,13,13,0) 85%, rgba(13,13,13,1) 100%)' }}
          />
        </div>

      </div>

        {/* Right column — portrait image */}
        <div className="relative w-full md:w-[45%] h-[70vw] md:h-auto flex-shrink-0">
          <Image
            src="/images/julia-photoshoot/5a.jpg"
            alt="Vicky Vortex"
            fill
            className="object-cover object-center"
          />
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(to right, rgba(13,13,13,1) 0%, rgba(13,13,13,0) 40%)' }}
          />
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(to bottom, rgba(13,13,13,1) 0%, rgba(13,13,13,0) 15%, rgba(13,13,13,0) 85%, rgba(13,13,13,1) 100%)' }}
          />
        </div>

        {/* Left column — text */}
        <div className="flex flex-col justify-center w-full md:w-[55%] px-6 md:pl-16 lg:pl-24 md:pr-12 py-16 md:py-24">
          <p
            style={{ fontSize: '0.65rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: 'rgba(248,246,242,0.35)', marginBottom: '2.5rem' }}
          >
            Approach
          </p>

          <h2
            className="font-cormorant font-light text-[clamp(2.2rem,6vw,4.5rem)] leading-[1.05] tracking-tight mb-10 md:mb-12"
            style={{ color: '#F8F6F2' }}
          >
            Restore Self-Trust
          </h2>

          <div className="max-w-2xl">
            <div
              className="font-garamond text-xl md:text-2xl leading-relaxed space-y-6 text-left"
              style={{ color: 'rgba(248,246,242,0.7)' }}
            >
              <p>
                Many people who have been scapegoated, gaslit, or emotionally overridden have been taught to mistrust themselves. They may know something is wrong, but struggle to explain it logically because the body, nervous system, and subconscious often hold the truth long before the mind can put it into words.
              </p>
              <p>
                I do not offer these tools as abstract concepts. They are practices I turned to while rebuilding after chronic family stress, emotional suppression, and the long-term bodily cost of trauma. My work is grounded in lived experience, nervous system awareness, and deep respect for what the body carries when the truth has been denied for too long.

I select the most appropriate tools for each client depending on their nervous system, history, and stage of recovery. You do not need to choose a modality. That is my job.
              </p>
              <p>
                This work is especially powerful for people recovering from scapegoating, narcissistic abuse, and complex family trauma, because rebuilding often begins the moment someone finally believes them — and helps them believe themselves.
              </p>
            </div>

      </div>

        {/* Left column — text */}
        <div className="flex flex-col justify-center w-full md:w-[55%] px-6 md:pl-16 lg:pl-24 md:pr-12 py-16 md:py-24">
          <p
            style={{ fontSize: '0.65rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: 'rgba(248,246,242,0.35)', marginBottom: '2.5rem' }}
          >
            Approach
          </p>

          <h2
            className="font-cormorant font-light text-[clamp(2.2rem,6vw,4.5rem)] leading-[1.05] tracking-tight mb-10 md:mb-12"
            style={{ color: '#F8F6F2' }}
          >
            Restore Self-Trust
          </h2>

          <div className="max-w-2xl">
            <div
              className="font-garamond text-xl md:text-2xl leading-relaxed space-y-6 text-left"
              style={{ color: 'rgba(248,246,242,0.7)' }}
            >
              <p>
                Many people who have been scapegoated, gaslit, or emotionally overridden have been taught to mistrust themselves. They may know something is wrong, but struggle to explain it logically because the body, nervous system, and subconscious often hold the truth long before the mind can put it into words.
              </p>
              <p>
                I do not offer these tools as abstract concepts. They are practices I turned to while rebuilding after chronic family stress, emotional suppression, and the long-term bodily cost of trauma. My work is grounded in lived experience, nervous system awareness, and deep respect for what the body carries when the truth has been denied for too long.

I select the most appropriate tools for each client depending on their nervous system, history, and stage of recovery. You do not need to choose a modality. That is my job.
              </p>
              <p>
                This work is especially powerful for people recovering from scapegoating, narcissistic abuse, and complex family trauma, because rebuilding often begins the moment someone finally believes them — and helps them believe themselves.
              </p>
            </div>
          </div>
        </div>

      {/* Modality accordion */}
      <div className="px-6 md:px-16 lg:px-24 pb-24 md:pb-32">
        <p
          style={{ fontSize: '0.65rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: 'rgba(248,246,242,0.35)', marginBottom: '2rem' }}
        >
          The Modalities
        </p>
        <h3
          className="font-cormorant font-light text-[clamp(1.8rem,4vw,3rem)] leading-tight tracking-tight mb-10"
          style={{ color: '#F8F6F2' }}
        >
          Tools I may draw on, depending on what you need
        </h3>
        <div style={{ borderBottom: '1px solid rgba(248,246,242,0.12)' }}>
          {MODALITIES.map(m => (
            <ModalityItem key={m.name} modality={m} />
          ))}
        </div>
        <p
          className="font-garamond text-lg mt-8"
          style={{ color: 'rgba(248,246,242,0.4)', fontStyle: 'italic' }}
        >
          You do not need to arrive knowing which tool is right for you. I guide the process and select what is most appropriate for your nervous system, history, and stage of recovery.
        </p>
        <a
          href="/modalities"
          className="inline-flex items-center gap-2 font-sans text-sm tracking-[0.2em] uppercase mt-6 transition-colors duration-200"
          style={{ color: 'rgba(248,246,242,0.5)' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#F8F6F2')}
          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(248,246,242,0.5)')}
        >
          Explore all modalities <span style={{ fontSize: '1rem' }}>→</span>
        </a>
      </div>

    </section>
  )
}
