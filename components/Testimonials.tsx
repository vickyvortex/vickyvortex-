'use client'

const TESTIMONIALS = [
  {
    quote: "For the first time, I felt clearly understood at a time when I was anxious, confused, and overwhelmed. Vicky helped me make sense of what was happening, and I left feeling calmer, clearer, and more able to trust my own perception.",
    name: "Marianne",
    location: "Social Worker, France",
    modality: "Recovery Support",
  },
]

export default function Testimonials() {
  const t = TESTIMONIALS[0]

  return (
    <section
      id="testimonials"
      className="py-28 md:py-36 px-6"
      style={{ background: '#0D0D0D' }}
    >
      <div className="max-w-5xl mx-auto">

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

        <div className="mb-16 md:mb-20">
          <p
            className="font-cormorant font-light text-[clamp(1.4rem,3vw,2.2rem)] leading-relaxed italic mb-8"
            style={{ color: 'rgba(248,246,242,0.85)' }}
          >
            &ldquo;{t.quote}&rdquo;
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
                {t.name}
                {t.location && ` — ${t.location}`}
              </p>
              <p
                className="font-sans text-[10px] tracking-[0.2em] uppercase mt-1"
                style={{ color: 'rgba(248,246,242,0.35)' }}
              >
                {t.modality}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
