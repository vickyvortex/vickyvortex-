'use client'

import { useState } from 'react'

const TESTIMONIALS = [
  {
    quote: "I came to Vicky in a state of deep anxiety and confusion — unable to see clearly through the chaos of my own life. What struck me immediately was how precisely she understood what I had been carrying. By the end of our session, the physical tension in my body had shifted. I left with more clarity, a calmer nervous system, and a genuine sense that recovery was possible.",
    name: "Marianne",
    location: "Social Worker, France",
    modality: "Recovery Support",
  },
  {
    quote: "She made me feel safe during the process. Her soothing voice helped me easily regress. Afterward I experienced a huge shift. I struggle with confidence issues, and my clients and students commented on how confident I am now. The experience was profound.",
    name: "Paulette McDaniel",
    location: "",
    modality: "Subconscious Session",
  },
  {
    quote: "I can only say how incredibly impressed I was with not only her accuracy in what was read for me, but also how intuitively she merged my past, present and future. At all times I felt incredibly comfortable and cared for. Vicky has a natural talent that I believe is generally rare — and more importantly, obviously real.",
    name: "Martin B. Jones",
    location: "",
    modality: "Clarity Work",
  },
  {
    quote: "I felt happiness, freedom, healing, awakening. Her presence was so authentically confident and professional that one feels the disposition to get into the treatment, like with an experienced doctor. I'm very grateful to the job she did with me.",
    name: "Eva",
    location: "",
    modality: "Subconscious Session",
  },
  {
    quote: "There was never a better way for me to start my day than following the Vortex Vitality Program. Daily workouts are helping my body to gain back strength after a long period of being burnt out. I am sending many thanks and blessings to you, Vicky, for your amazing contribution to my health and well-being.",
    name: "Tatjana W.",
    location: "Sweden",
    modality: "Vitality Support",
  },
  {
    quote: "She picked up straight away on my challenge with proper breathing, then taught me breathing exercises I am so much in need for. My parasympathetic system and Inner Child are very thankful for that. I slept like a baby.",
    name: "Isabel H. Zandarin",
    location: "",
    modality: "Recovery Support",
  },
  {
    quote: "I am so grateful for your support in readings, hypnosis and exchanging your beautiful energy. It's such a precise, intuitive, warm and caring way of healing. Thanks for your high frequency and your free spirit with both feet on the ground.",
    name: "Maren Dey",
    location: "",
    modality: "Subconscious Work",
  },
  {
    quote: "Thank you for an amazing reading, for giving me powerful insights and lots of tips to improve my health and wellbeing. Things I can really work with. Thanks also for your after-care, for everything you researched for me and all the links you shared so generously.",
    name: "Gitta Brocatus",
    location: "",
    modality: "Health Session",
  },
  {
    quote: "She completely put me at ease and very professionally and calmly took me back. What I learnt and came across just seemed to fill unanswered questions I had. I totally recommend her.",
    name: "Parul Chauhan",
    location: "",
    modality: "Subconscious Work",
  },
  {
    quote: "She is a compassionate and sensitive individual and I felt her reading was very accurate in terms of where I'm at in my life and the things I need to do moving forward. I learned some new things that I will carry with me on my spiritual and healing journey through life.",
    name: "Rhonda Elaine",
    location: "",
    modality: "Clarity Work",
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
