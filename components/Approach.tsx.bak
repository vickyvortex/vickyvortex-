'use client'

import Image from 'next/image'
import { useState } from 'react'

const CORE_MODALITIES = [
  {
    name: "Nutritional Therapy",
    what: "A functional approach to nutrition that looks at how food, inflammation, gut health, and nutrient status affect mood, energy, hormones, and the body's capacity to heal.",
    benefit: "Reduced inflammation, improved energy, and a body better equipped to support emotional and nervous system recovery.",
    who: "People whose physical symptoms — fatigue, brain fog, digestive issues, hormonal imbalance — are compounding their emotional load.",
  },
  {
    name: 'Breathwork',
    what: 'Conscious breathing practices that regulate the nervous system, move stuck emotion, and shift the body out of chronic stress states.',
    benefit: 'Immediate nervous system relief, emotional release, and greater capacity to feel safe in the body.',
    who: 'Anyone living in a state of hypervigilance, shutdown, or chronic stress — and those who find it hard to access emotion through talking.',
  },
  {
    name: 'Embodiment & Yoga',
    what: 'Movement and somatic practices that reconnect mind and body — particularly useful when trauma or chronic stress has caused dissociation or body disconnection.',
    benefit: 'Rebuilt body trust, reduced physical tension, and a restored sense of being at home in yourself.',
    who: 'People who feel cut off from their body, live primarily in their head, or have used movement as punishment rather than restoration.',
  },
  {
    name: 'Emotion Code & Body Code',
    what: 'Gentle energy-based methods to identify and release trapped emotional energies and deeper imbalances stored in the body — often from experiences that were never fully processed.',
    benefit: 'Releases the emotional weight behind recurring physical symptoms, anxiety, relationship patterns, and unexplained blocks.',
    who: 'People who feel stuck despite talk therapy, or who carry chronic tension, numbness, or emotional heaviness they cannot trace to a single cause.',
  },
  {
    name: 'Hypnotherapy & NLP',
    what: 'Direct work with the subconscious mind to rewrite limiting beliefs, trauma responses, and behavioural patterns using language, suggestion, and timeline techniques.',
    benefit: 'Rapid shift in deeply held beliefs about self-worth, safety, and possibility.',
    who: 'People who understand intellectually what needs to change but find their nervous system or behaviour running an older programme.',
  },
]

const EXTENDED_MODALITIES = [
  {
    name: 'QHHT — Quantum Healing Hypnosis',
    what: 'A deep hypnosis technique developed by Dolores Cannon that accesses the subconscious directly. Sessions allow the deeper self to surface patterns, memories, and understanding that the conscious mind cannot easily reach.',
    benefit: 'Profound shifts in self-understanding, release of long-held fear or grief, and access to your own inner wisdom.',
    who: 'People ready to go deep — particularly those processing identity loss, family trauma, life transitions, or existential questioning.',
  },
  {
    name: 'Reflective Tarot',
    what: 'Used not for prediction but as a mirror — a structured way to surface subconscious themes, patterns, and decision points using symbolic imagery.',
    benefit: 'Clarity, perspective, and language for what is already known but hard to articulate.',
    who: 'Those at crossroads, in grief, or rebuilding identity — particularly people who are highly intuitive but have been taught to dismiss their own perception.',
  },
  {
    name: 'Cosmic Blueprint — Astrological Analysis',
    what: 'A structured astrological reading using your birth chart as a map of your innate patterns, gifts, wounds, and timing. Based on Applied Astrology as taught by Debra Silverman.',
    benefit: 'Deeper understanding of and compassion for yourself — why you are wired as you are, what your chart reveals about recurring themes, and how to work with your nature rather than against it.',
    who: 'Those seeking self-understanding, particularly people who have been told their sensitivity, intensity, or complexity is a flaw rather than a design.',
  },
  {
    name: "Ho'oponopono",
    what: 'An ancient Hawaiian practice of reconciliation and forgiveness that works through a process of taking responsibility, releasing, and returning to love — clearing inherited and accumulated emotional patterns at a deep level.',
    benefit: 'Release of long-held resentment, guilt, and inherited family patterns. A profound reset of the emotional field.',
    who: 'Those carrying grief, unresolved family wounds, or a persistent sense of burden that feels bigger than their own story.',
  },
]

function ModalityItem({ modality }: { modality: typeof CORE_MODALITIES[0] }) {
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
  const [showExtended, setShowExtended] = useState(false)

  return (
    <section
      id="approach"
      className="relative overflow-hidden"
      style={{ background: '#0D0D0D' }}
    >
      <div className="flex flex-col md:flex-row md:min-h-screen">

        {/* Right column — portrait image */}
        <div className="relative w-full md:w-[45%] h-[70vw] md:h-auto flex-shrink-0 md:order-last">
          <img
            src="/images/julia-photoshoot/5.jpg"
            alt="Vicky Vortex"
            style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center",position:"absolute",inset:0}}
          />
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(to left, rgba(13,13,13,1) 0%, rgba(13,13,13,0.8) 40%, rgba(13,13,13,0) 70%)' }}
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
                Many people who have been scapegoated, gaslit, or emotionally overridden have been taught to mistrust themselves. They may know something is wrong but struggle to explain it — because the body and nervous system often hold the truth long before the mind can put it into words.
              </p>
              <p>
                The tools I use are not abstract concepts. They are practices I turned to while rebuilding after chronic family stress and the long-term bodily cost of suppressed truth. I select what is most appropriate for each person depending on their nervous system, history, and stage of recovery.
              </p>
              <p>
                Rebuilding often begins the moment someone is finally believed — and helped to believe themselves.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modality accordion */}
      <div className="px-6 md:px-16 lg:px-24 pb-24 md:pb-32">
        <p style={{ fontSize: '0.65rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: 'rgba(248,246,242,0.35)', marginBottom: '2rem' }}>
          The Tools Behind the Process
        </p>
        <h3 className="font-cormorant font-light text-[clamp(1.8rem,4vw,3rem)] leading-tight tracking-tight mb-10" style={{ color: '#F8F6F2' }}>
          What supports the work
        </h3>
        <div style={{ borderBottom: '1px solid rgba(248,246,242,0.12)' }}>
          {CORE_MODALITIES.map(m => (
            <ModalityItem key={m.name} modality={m} />
          ))}
        </div>

        {/* Extended / deeper tools — expandable */}
        <div className="mt-10">
          <button
            onClick={() => setShowExtended(o => !o)}
            className="flex items-center gap-4 group"
            style={{ background: 'transparent', border: 'none', outline: 'none', cursor: 'pointer', padding: 0 }}
          >
            <span
              className="font-sans text-[10px] tracking-[0.3em] uppercase transition-colors duration-200"
              style={{ color: showExtended ? 'rgba(248,246,242,0.6)' : 'rgba(248,246,242,0.3)' }}
            >
              {showExtended ? 'Hide additional tools' : 'Additional Reflective & Subconscious Tools'}
            </span>
            <span
              style={{
                display: 'inline-block',
                transition: 'transform 0.3s ease',
                transform: showExtended ? 'rotate(45deg)' : 'rotate(0deg)',
                color: 'rgba(248,246,242,0.3)',
                fontSize: '1rem',
                lineHeight: 1,
              }}
            >
              +
            </span>
          </button>

          <div
            style={{
              overflow: 'hidden',
              maxHeight: showExtended ? '2000px' : '0',
              transition: 'max-height 0.5s ease',
            }}
          >
            <div className="mt-8" style={{ borderBottom: '1px solid rgba(248,246,242,0.12)' }}>
              <p
                className="font-cormorant font-light text-xl mb-6"
                style={{ color: 'rgba(248,246,242,0.4)', fontStyle: 'italic' }}
              >
                Deeper, more contemplative practices — used selectively depending on where you are in your recovery.
              </p>
              {EXTENDED_MODALITIES.map(m => (
                <ModalityItem key={m.name} modality={m} />
              ))}
            </div>
          </div>
        </div>
        <p className="font-garamond text-lg mt-8" style={{ color: 'rgba(248,246,242,0.4)', fontStyle: 'italic' }}>
          You do not need to choose. I will guide you toward what is most useful for where you are.
        </p>
      </div>

    </section>
  )
}