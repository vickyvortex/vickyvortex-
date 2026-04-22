'use client'

const STATS = [
  {
    condition: "Heart Disease",
    risk: "2.2×",
    detail: "more likely with 4+ ACEs",
  },
  {
    condition: "Cancer",
    risk: "1.9×",
    detail: "higher risk with 4+ ACEs",
  },
  {
    condition: "Chronic Lung Disease",
    risk: "3.9×",
    detail: "more likely with 5+ ACEs",
  },
  {
    condition: "Liver Disease",
    risk: "2.4×",
    detail: "higher risk with 5+ ACEs",
  },
  {
    condition: "Depression",
    risk: "4.6×",
    detail: "more likely with 4+ ACEs",
  },
  {
    condition: "Anxiety Disorders",
    risk: "3.6×",
    detail: "higher risk with 4+ ACEs",
  },
  {
    condition: "Suicide Attempt",
    risk: "12.2×",
    detail: "more likely with 7+ ACEs",
  },
  {
    condition: "Alcohol Dependence",
    risk: "7.4×",
    detail: "higher risk with 5+ ACEs",
  },
  {
    condition: "Drug Use",
    risk: "10.3×",
    detail: "more likely with 5+ ACEs",
  },
  {
    condition: "Early Death (before 75)",
    risk: "20 years",
    detail: "shorter life expectancy with 6+ ACEs",
  },
]

export default function ACEStats() {
  return (
    <section
      id="ace-stats"
      className="py-28 md:py-36 px-6"
      style={{ background: '#0a0a0a', borderTop: '1px solid rgba(248,246,242,0.06)' }}
    >
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-16 md:mb-20">
          <p
            className="font-sans text-[10px] tracking-[0.4em] uppercase mb-10"
            style={{ color: 'rgba(248,246,242,0.35)' }}
          >
            The Research
          </p>
          <h2
            className="font-cormorant font-light text-[clamp(2.2rem,6vw,4.5rem)] leading-[1.05] tracking-tight mb-8"
            style={{ color: '#F8F6F2' }}
          >
            What ACEs do to the body
          </h2>
          <p
            className="font-garamond text-xl md:text-2xl leading-relaxed max-w-2xl"
            style={{ color: 'rgba(248,246,242,0.65)' }}
          >
            Adverse Childhood Experiences are not just emotional wounds. They are biological ones. The landmark CDC-Kaiser Permanente ACE Study — one of the largest investigations of childhood abuse and neglect ever conducted — found that people with 5 or more ACEs face dramatically elevated risk of chronic disease, mental illness, addiction, and early death.
          </p>
          <p
            className="font-garamond text-xl md:text-2xl leading-relaxed max-w-2xl mt-6"
            style={{ color: 'rgba(248,246,242,0.65)' }}
          >
            This is not weakness. This is biology. Chronic stress keeps the body locked in a state of high alert — flooding it with cortisol and adrenaline, suppressing immunity, accelerating inflammation, and ageing the body from the inside out.
          </p>
        </div>

        {/* Callout */}
        <div
          className="mb-16 md:mb-20 px-8 py-8 md:py-10"
          style={{
            border: '1px solid rgba(61,31,110,0.6)',
            background: 'rgba(61,31,110,0.08)',
          }}
        >
          <p
            className="font-cormorant font-light text-[clamp(1.6rem,3.5vw,2.6rem)] leading-snug italic"
            style={{ color: '#F8F6F2' }}
          >
            People with 6 or more ACEs die, on average, 20 years earlier than those with none.
          </p>
          <p
            className="font-sans text-[10px] tracking-[0.25em] uppercase mt-4"
            style={{ color: 'rgba(248,246,242,0.3)' }}
          >
            Source: CDC-Kaiser Permanente ACE Study
          </p>
        </div>

        {/* Stats table */}
        <div
          style={{ border: '1px solid rgba(248,246,242,0.08)' }}
        >
          {/* Table header */}
          <div
            className="grid grid-cols-3 px-6 py-4"
            style={{ borderBottom: '1px solid rgba(248,246,242,0.08)', background: 'rgba(248,246,242,0.05)' }}
          >
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase" style={{ color: 'rgba(248,246,242,0.6)' }}>Condition</p>
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-center" style={{ color: 'rgba(248,246,242,0.6)' }}>Increased Risk</p>
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-right" style={{ color: 'rgba(248,246,242,0.6)' }}>Context</p>
          </div>

          {/* Rows */}
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="grid grid-cols-3 px-6 py-5 items-center transition-colors duration-150"
              style={{
                borderBottom: i < STATS.length - 1 ? '1px solid rgba(248,246,242,0.06)' : 'none',
              }}
            >
              <p
                className="font-cormorant font-light text-xl leading-snug"
                style={{ color: '#F8F6F2' }}
              >
                {stat.condition}
              </p>
              <p
                className="font-cormorant font-light text-[clamp(1.6rem,3vw,2.4rem)] text-center leading-none"
                style={{ color: '#3D1F6E' === '#3D1F6E' ? 'rgba(180,140,255,0.9)' : '#F8F6F2' }}
              >
                {stat.risk}
              </p>
              <p
                className="font-garamond text-base leading-snug text-right"
                style={{ color: 'rgba(248,246,242,0.4)' }}
              >
                {stat.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-12 md:mt-16">
          <p
            className="font-garamond text-lg leading-relaxed max-w-2xl"
            style={{ color: 'rgba(248,246,242,0.4)', fontStyle: 'italic' }}
          >
            ACE scores are cumulative. The more adverse experiences in childhood, the greater the risk. But risk is not destiny. The body has a profound capacity to heal when the conditions are right — and when someone finally helps you address the root, not just the symptom.
          </p>
        </div>

      </div>
    </section>
  )
}
