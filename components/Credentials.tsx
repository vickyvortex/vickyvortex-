'use client'

const leftCredentials = [
  {
    name: 'Integrative Health Coach',
    body: 'Institute of Integrative Nutrition, New York City',
  },
  {
    name: 'Precision Nutrition Coach',
    body: 'Precision Nutrition',
  },
  {
    name: 'Advanced Ho\'oponopono Practitioner',
    body: 'Global Sciences Foundation',
  },
  {
    name: 'Hypnotherapist',
    body: 'Ali Campbell\'s Rapid Induction Academy',
  },
  {
    name: 'Life Coach, Hypnotherapist, Time Line Therapy and Neuro-Linguistic Programming (NLP)',
    body: 'MasterMinds, Hong Kong',
  },
  {
    name: 'Nutrition & Healthy Lifestyle Certification',
    body: 'Cornell University',
  },
  {
    name: 'Nutritional Therapy',
    body: 'South London College',
  },
  {
    name: 'Pilates Instructor',
    body: 'Pilates On Fifth Academy International, New York',
  },
  {
    name: 'Quantum Healing Hypnosis Therapy (QHHT) Level 2 Practitioner',
    body: 'Julia Cannon, Quantum Healing Hypnosis Academy',
  },
]

const rightCredentials = [
  {
    name: 'Applied Astrology — Level 2',
    body: 'Debra Silverman Applied Astrology',
  },
  {
    name: 'Emotion Code & Body Code',
    body: 'Dr. Bradley Nelson, Discover Healing',
  },
  {
    name: 'Soul Speak — The Language of the Soul through the Body',
    body: 'Julia Cannon, Quantum Healing Hypnosis Academy',
  },
  {
    name: 'Science of Well-Being',
    body: 'Yale University',
  },
  {
    name: 'Shamanic Extraction Healing, Shamanism, Dying & Beyond, Power Soul Retrieval',
    body: 'The Foundation of Shamanic Studies, Tokyo',
  },
  {
    name: 'Advanced Tarot Practitioner',
    body: 'The Richard Knight Tarot Academy',
  },
  {
    name: 'Whole-Food Plant-Based Nutrition',
    body: 'Cornell University',
  },
  {
    name: 'Lady Niguma Hatha Yoga Teacher',
    body: 'Geshe Michael Roach, Asian Classics Input Project, Hong Kong',
  },
  {
    name: 'Certified Yoga Teacher Diploma',
    body: 'Vinyasa, Trapeze, Gravity Yoga, Breath Coach — Yoga Teachers College, Barcelona',
  },
]

function CredentialItem({ name, body }: { name: string; body: string }) {
  return (
    <div className="space-y-1">
      <p
        className="font-cormorant font-light text-xl leading-snug"
        style={{ color: '#F8F6F2' }}
      >
        {name}
      </p>
      <p
        className="font-garamond text-sm leading-snug"
        style={{ color: 'rgba(248,246,242,0.6)' }}
      >
        {body}
      </p>
    </div>
  )
}

export default function Credentials() {
  return (
    <section
      id="credentials"
      className="py-28 md:py-36 px-6"
      style={{ background: '#0D0D0D' }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <p
            className="font-sans text-[10px] tracking-[0.4em] uppercase mb-10 md:mb-12"
            style={{ color: 'rgba(248,246,242,0.35)' }}
          >
            Credentials
          </p>

          <h2
            className="font-cormorant font-light text-[clamp(2.2rem,6vw,4.5rem)] leading-[1.05] tracking-tight mb-10"
            style={{ color: '#F8F6F2' }}
          >
            Certifications &amp; Training
          </h2>

          <p
            className="font-cormorant italic text-2xl md:text-3xl"
            style={{ color: 'rgba(248,246,242,0.7)' }}
          >
            Body-based, multi-disciplinary, trauma-informed support
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
          <div className="space-y-8">
            {leftCredentials.map((c, i) => (
              <CredentialItem key={i} name={c.name} body={c.body} />
            ))}
          </div>
          <div className="space-y-8">
            {rightCredentials.map((c, i) => (
              <CredentialItem key={i} name={c.name} body={c.body} />
            ))}
          </div>
        </div>

          <div className="mt-16 md:mt-20 max-w-2xl mx-auto text-left">
            <p
              className="font-sans text-[10px] tracking-[0.4em] uppercase mb-6"
              style={{ color: 'rgba(248,246,242,0.35)' }}
            >
              Approach
            </p>
            <h3
              className="font-cormorant font-light text-[clamp(1.6rem,3vw,2.2rem)] leading-tight tracking-tight mb-6"
              style={{ color: '#F8F6F2' }}
            >
              Trauma-informed practice
            </h3>
            <div
              className="font-garamond text-xl md:text-2xl leading-relaxed space-y-5"
              style={{ color: 'rgba(248,246,242,0.7)' }}
            >
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
