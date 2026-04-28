'use client'

import { useState } from 'react'

const featuredCredentials = [
  { name: 'Integrative Health Coach', body: 'Institute of Integrative Nutrition, New York City' },
  { name: 'Precision Nutrition Coach', body: 'Precision Nutrition' },
  { name: 'Pilates, Yoga & Breathwork Teacher', body: 'Pilates On Fifth, Yoga Teachers College Barcelona, Lady Niguma — Geshe Michael Roach' },
  { name: 'Emotion Code & Body Code Practitioner', body: 'Dr. Bradley Nelson, Discover Healing' },
  { name: 'QHHT Level 2 Practitioner', body: 'Julia Cannon, Quantum Healing Hypnosis Academy' },
  { name: 'Trauma-Informed Coaching', body: 'Advanced training in trauma-informed coaching, narcissistic abuse recovery, and nervous system-aware support' },
]

const additionalCredentials = [
  { name: "Advanced Ho'oponopono Practitioner", body: 'Global Sciences Foundation' },
  { name: 'Hypnotherapist', body: "Ali Campbell's Rapid Induction Academy" },
  { name: 'Life Coach, Time Line Therapy & NLP', body: 'MasterMinds, Hong Kong' },
  { name: 'Nutrition & Healthy Lifestyle Certification', body: 'Cornell University' },
  { name: 'Nutritional Therapy', body: 'South London College' },
  { name: 'Applied Astrology — Level 2', body: 'Debra Silverman Applied Astrology' },
  { name: 'Soul Speak — The Language of the Soul through the Body', body: 'Julia Cannon, Quantum Healing Hypnosis Academy' },
  { name: 'Science of Well-Being', body: 'Yale University' },
  { name: 'Shamanic Extraction Healing, Shamanism, Dying & Beyond, Power Soul Retrieval', body: 'The Foundation of Shamanic Studies, Tokyo' },
  { name: 'Advanced Tarot Practitioner', body: 'The Richard Knight Tarot Academy' },
  { name: 'Whole-Food Plant-Based Nutrition', body: 'Cornell University' },
]

function CredentialItem({ name, body }: { name: string; body: string }) {
  return (
    <div className="space-y-1">
      <p className="font-cormorant font-light text-xl leading-snug" style={{ color: '#F8F6F2' }}>
        {name}
      </p>
      <p className="font-garamond text-sm leading-snug" style={{ color: 'rgba(248,246,242,0.6)' }}>
        {body}
      </p>
    </div>
  )
}

export default function Credentials() {
  const [expanded, setExpanded] = useState(false)

  return (
    <section id="credentials" className="py-28 md:py-36 px-6" style={{ background: '#0D0D0D' }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <p className="font-sans text-[10px] tracking-[0.4em] uppercase mb-10 md:mb-12" style={{ color: 'rgba(248,246,242,0.35)' }}>
            Credentials
          </p>
          <h2 className="font-cormorant font-light text-[clamp(2.2rem,6vw,4.5rem)] leading-[1.05] tracking-tight mb-10" style={{ color: '#F8F6F2' }}>
            Certifications &amp; Training
          </h2>
        </div>

        {/* Featured 6 */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 mb-12">
          {featuredCredentials.map((c, i) => (
            <CredentialItem key={i} name={c.name} body={c.body} />
          ))}
        </div>

        {/* Expandable full list */}
        <div style={{ borderTop: '1px solid rgba(248,246,242,0.08)', paddingTop: '2rem' }}>
          <button
            onClick={() => setExpanded(e => !e)}
            className="flex items-center gap-3 transition-colors duration-200"
            style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'rgba(248,246,242,0.4)' }}
          >
            <span className="font-sans text-[10px] tracking-[0.3em] uppercase">
              {expanded ? 'Hide' : 'Full Training Background'}
            </span>
            <span style={{ fontSize: '1rem', transform: expanded ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease', display: 'inline-block' }}>+</span>
          </button>

          <div style={{ overflow: 'hidden', maxHeight: expanded ? '1200px' : '0', transition: 'max-height 0.5s ease' }}>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 mt-10">
              {additionalCredentials.map((c, i) => (
                <CredentialItem key={i} name={c.name} body={c.body} />
              ))}
            </div>
          </div>
        </div>

        {/* Trauma-informed note */}
        <div className="mt-16 md:mt-20 max-w-2xl mx-auto text-left">
          <div className="font-garamond text-xl md:text-2xl leading-relaxed space-y-5" style={{ color: 'rgba(248,246,242,0.7)' }}>
            <p>
              My work is trauma-informed. This means I prioritise safety, pacing, consent, and nervous system awareness in every session. I do not diagnose or treat mental health conditions. Instead, I support clients in understanding the body impact of chronic stress and rebuilding self-trust in a grounded, practical way.
            </p>
            <p style={{ color: 'rgba(248,246,242,0.5)', fontStyle: 'italic' }}>
              This work is grounded in lived experience and continually refined through advanced training in trauma-informed coaching, narcissistic abuse recovery, and nervous system-aware support.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
