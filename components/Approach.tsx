'use client'

import Image from 'next/image'
import { useState } from 'react'

const MODALITIES = [
  {
    name: 'Emotion Code',
    what: 'A gentle muscle-testing method to identify and release trapped emotional energies stored in the body — often from past experiences that were never fully processed.',
    benefit: 'Releases the emotional weight behind recurring physical symptoms, anxiety, relationship patterns, and unexplained blocks.',
    who: 'People who feel stuck despite talk therapy, or who carry chronic tension, numbness, or emotional heaviness they cannot trace to a single cause.',
  },
  {
    name: 'Body Code',
    what: 'An extension of Emotion Code that maps the whole body — addressing imbalances in energy, nutrition, structure, pathogens, and emotional fields.',
    benefit: 'Supports the body\'s natural healing by identifying root causes rather than managing symptoms.',
    who: 'Those dealing with chronic fatigue, inflammation, pain, or complex health pictures that have not responded to conventional approaches alone.',
  },
  {
    name: 'QHHT — Quantum Healing Hypnosis',
    what: 'A deep hypnosis technique developed by Dolores Cannon that accesses the subconscious directly. Sessions allow the deeper self to surface patterns, memories, and understanding that the conscious mind cannot easily reach.',
    benefit: 'Profound shifts in self-understanding, release of long-held fear or grief, and access to your own inner wisdom.',
    who: 'People ready to go deep — particularly those processing identity loss, family trauma, life transitions, or existential questioning.',
  },
  {
    name: 'Breathwork',
    what: 'Conscious breathing practices that regulate the nervous system, move stuck emotion, and shift the body out of chronic stress states.',
    benefit: 'Immediate nervous system relief, emotional release, and greater capacity to feel safe in the body.',
    who: 'Anyone living in a state of hypervigilance, shutdown, or chronic stress — and those who find it hard to access emotion through talking.',
  },
  {
    name: 'Reflective Tarot',
    what: 'Used not for prediction but as a mirror — a structured way to surface subconscious themes, patterns, and decision points using symbolic imagery.',
    benefit: 'Clarity, perspective, and language for what is already known but hard to articulate.',
    who: 'Those at crossroads, in grief, or rebuilding identity — particularly people who are highly intuitive but have been taught to dismiss their own perception.',
  },
  {
    name: 'Embodiment & Yoga',
    what: 'Movement and somatic practices that reconnect mind and body — particularly useful when trauma or chronic stress has caused dissociation or body disconnection.',
    benefit: 'Rebuilt body trust, reduced physical tension, and a restored sense of being at home in yourself.',
    who: 'People who feel cut off from their body, live primarily in their head, or have used movement as punishment rather than restoration.',
  },
  {
    name: 'Shamanic Practice',
    what: 'Rooted in Foundation for Shamanic Studies training, this work includes soul retrieval, extraction, and ceremonial practices that address spiritual and energetic dimensions of healing.',
    benefit: 'Restoration of lost vitality, clearing of heavy energies, and reconnection to a sense of meaning and belonging.',
    who: 'Those who sense something essential has been lost — through trauma, grief, or prolonged suppression — and are open to working beyond purely psychological frameworks.',
  },
  {
    name: 'Hypnotherapy & NLP',
    what: 'Direct work with the subconscious mind to rewrite limiting beliefs, trauma responses, and behavioural patterns using language, suggestion, and timeline techniques.',
    benefit: 'Rapid shift in deeply held beliefs about self-worth, safety, and possibility.',
    who: 'People who understand intellectually what needs to change but find their nervous system or behaviour running an older programme.',
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

        {/* Left column — text */}
        <div className="flex flex-col justify-center w-full md:w-[60%] px-6 md:pl-16 lg:pl-24 md:pr-12 py-28 md:py-24">
          <p
            style={{ fontSize: '0.65rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: 'rgba(248,246,242,0.35)', marginBottom: '2.5rem' }}
          >
            Approach
          </p>

          <h2
            className="font-cormorant font-light text-[clamp(2.2rem,6vw,4.5rem)] leading-[1.05] tracking-tight mb-10 md:mb-12"
            style={{ color: '#F8F6F2' }}
          >
            Reconnect With Your<br />Inner Knowing
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
                My work helps clients reconnect with that deeper knowing. I use modalities including Emotion Code, Body Code, QHHT, embodied spiritual practice, and reflective tarot work to access the patterns, emotional burdens, and the deeper intelligence held in the body. My focus is not prediction or spectacle, but healing: helping people restore self-trust, release what has been weighing them down, and move forward with more clarity, dignity, and self-possession.
              </p>
              <p>
                This work is especially powerful for people recovering from scapegoating, grief, chronic stress, and narcissistic abuse, because healing often begins when they realise their inner knowing was never wrong — it was simply overridden.
              </p>
            </div>
          </div>
        </div>

        {/* Right column — portrait image */}
        <div className="relative w-full md:w-[40%] h-[70vw] md:h-auto flex-shrink-0">
          <Image
            src="/images/Julia photoshoot/9.jpg"
            alt="Vicky Vortex"
            fill
            className="object-cover object-top"
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
          What we may work with
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
          You do not need to choose. I will guide you toward what is most useful for where you are.
        </p>
      </div>

    </section>
  )
}
