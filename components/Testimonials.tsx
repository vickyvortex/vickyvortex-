'use client'

import { useState } from 'react'

const TESTIMONIALS = [
  {
    quote: "For the first time, I felt clearly understood at a time when I was anxious, confused, and overwhelmed. Vicky helped me make sense of what was happening, and I left feeling calmer, clearer, and more able to trust my own perception.",
    name: "Marianne",
    location: "Social Worker, France",
    modality: "Recovery Support",
  },
  {
    quote: "She made me feel safe during the process. Her soothing voice helped me easily regress. Afterward I experienced a huge shift. I struggle with confidence issues, and my clients and students commented on how confident I am now. The experience was profound.",
    name: "Paulette McDaniel",
    location: "",
    modality: "Guided Recovery",
  },
  {
    quote: "I felt genuinely understood from the very first session. Vicky has a rare ability to identify what is actually happening beneath the surface — and to hold that space with both precision and care. I left with real clarity about patterns I had been unable to see on my own.",
    name: "Martin B. Jones",
    location: "",
    modality: "Clarity Session",
  },
  {
    quote: "I felt happiness, freedom, healing, awakening. Her presence was so authentically confident and professional that one feels the disposition to get into the treatment, like with an experienced doctor. I'm very grateful to the job she did with me.",
    name: "Eva",
    location: "",
    modality: "Guided Recovery",
  },
  {
    quote: "There was never a better way for me to start my day than following the Vortex Vitality Program. Daily workouts are helping my body to gain back strength after a long period of being burnt out. I am sending many thanks and blessings to you, Vicky, for your amazing contribution to my health and well-being.",
    name: "Tatjana W.",
    location: "Sweden",
    modality: "Nervous System Support",
  },
  {
    quote: "Working with Vicky gave me a level of clarity I had not been able to reach on my own. Her approach is precise, grounded, and deeply attuned. I felt genuinely supported throughout the process and came away with a much stronger sense of self-trust.",
    name: "Maren Dey",
    location: "",
    modality: "Guided Recovery",
  },
  {
    quote: "She completely put me at ease and very professionally and calmly took me back. What I learnt and came across just seemed to fill unanswered questions I had. I totally recommend her.",
    name: "Parul Chauhan",
    location: "",
    modality: "Guided Recovery",
  },
  {
    quote: "I had sessions with Vicky using the Body Code, and I honestly had a really positive experience. Vicky was incredibly understanding, kind, and easy to talk to, which made me feel comfortable right away. She really listened and took the time to support me in a thoughtful, non-judgmental way. Since working with her, I've noticed an improvement in my migraines — they're much better these days. I even stopped my medication for a while when things improved, which felt like a huge step forward.",
    name: "Eroulla",
    location: "",
    modality: "Body Code",
  },
  {
    quote: "Working on these concepts with Vicky was a wonderful experience. It helped both me and my partner to unblock ourselves. There were pains that belonged to us that we weren't even aware of. The sessions were very inspiring and helped us understand how to find balance and begin healing. Thank you, dear Vicky, for your help and your beautiful sensitivity.",
    name: "Maria",
    location: "",
    modality: "Guided Recovery",
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  return (
    <section
      id="testimonials"
      className="py-28 md:py-36 px-6"
      style={{ background: '#0D0D0D' }}
    >
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-16 md:mb-20">
          <p
            className="font-sans text-[10px] tracking-[0.4em] uppercase mb-10"
            style={{ color: 'rgba(248,246,242,0.35)' }}
          >
            Testimonials
          </p>
          <h2
            className="font-cormorant font-light text-[clamp(2.2rem,6vw,4.5rem)] leading-[1.05] tracking-tight"
            style={{ color: '#F8F6F2' }}
          >
            What clients say
          </h2>
        </div>

        {/* Featured quote */}
        <div className="mb-16 md:mb-20" style={{ minHeight: '220px' }}>
          <p
            className="font-cormorant font-light text-[clamp(1.4rem,3vw,2.2rem)] leading-relaxed italic mb-8"
            style={{ color: 'rgba(248,246,242,0.85)' }}
          >
            &ldquo;{TESTIMONIALS[active].quote}&rdquo;
          </p>
          <div className="flex items-center gap-4">
            <div
              className="h-px"
              style={{ background: 'rgba(248,246,242,0.2)', width: '40px' }}
            />
            <div>
              <p
                className="font-sans text-[11px] tracking-[0.25em] uppercase"
                style={{ color: '#F8F6F2' }}
              >
                {TESTIMONIALS[active].name}
                {TESTIMONIALS[active].location && ` — ${TESTIMONIALS[active].location}`}
              </p>
              <p
                className="font-sans text-[10px] tracking-[0.2em] uppercase mt-1"
                style={{ color: 'rgba(248,246,242,0.35)' }}
              >
                {TESTIMONIALS[active].modality}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-5 gap-px"
          style={{ border: '1px solid rgba(248,246,242,0.08)', background: 'rgba(248,246,242,0.08)' }}
        >
          {TESTIMONIALS.map((t, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="px-5 py-4 text-left transition-all duration-200"
              style={{
                background: active === i ? 'rgba(248,246,242,0.06)' : '#0D0D0D',
                borderLeft: active === i ? '2px solid rgba(248,246,242,0.4)' : '2px solid transparent',
                outline: 'none',
              }}
            >
              <p
                className="font-sans text-[10px] tracking-[0.2em] uppercase leading-snug"
                style={{ color: active === i ? '#F8F6F2' : 'rgba(248,246,242,0.4)' }}
              >
                {t.name.split(' ')[0]}
              </p>
              <p
                className="font-sans text-[9px] tracking-[0.12em] uppercase mt-1 leading-snug"
                style={{ color: 'rgba(248,246,242,0.22)' }}
              >
                {t.modality}
              </p>
            </button>
          ))}
        </div>

      </div>
    </section>
  )
}
