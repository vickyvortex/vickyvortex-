'use client'

import Image from 'next/image'

const services = [
  {
    name: 'Dignity Reset',
    duration: '90-minute one-off session',
    price: '£295',
    description: 'A deep first session for people who need clarity, validation, and a grounded starting point.',
    bestFor: [
      'People in active confusion, grief, or overwhelm',
      'Those who need to feel heard and believed',
      'Clients who want an expert outside perspective before committing to deeper work',
    ],
    includes: [
      'Full intake and story mapping',
      'Identification of key scapegoat and stress patterns',
      'Nervous system and inflammation lens',
      'One integrated healing session using the most relevant modality',
      'Personalised next-step recommendations',
      'Short written summary after the session',
    ],
    outcome: 'You leave with more clarity, language for what has been happening, and a practical first path forward.',
    variant: 'default' as const,
  },
  {
    name: 'Dignity Clinic Intensive',
    duration: '3 sessions over 3–5 weeks',
    price: '£795',
    description: 'A focused healing container to help you understand what happened, regulate your system, and begin rebuilding.',
    bestFor: [
      'People who know this is deeper than a one-off session',
      'Clients recovering from scapegoating, gaslighting, grief, or chronic emotional stress',
      'Those ready to move from insight into real healing work',
    ],
    includes: [
      'Session 1 — your story, pattern mapping, body stress load, core emotional themes',
      'Session 2 — subconscious and emotional clearing work using the most relevant modality',
      'Session 3 — rebuild plan covering boundaries, nervous system support, anti-inflammatory lifestyle, and next steps',
      'Short written summary after each session',
      'Brief email support between sessions',
    ],
    outcome: 'You begin to feel more grounded, more self-trusting, and less trapped inside the old family pattern.',
    variant: 'featured' as const,
  },
  {
    name: 'Dignity Rebuild',
    duration: '6 sessions over 8–12 weeks',
    price: '£1,495',
    description: 'My signature programme for people ready to heal the long-term effects of scapegoating, chronic stress, grief, and emotional override.',
    bestFor: [
      'Long-term family scapegoats',
      'ACE survivors whose body is already showing the cost',
      'People who want structured support rather than one-off relief',
      'Clients rebuilding health, boundaries, identity, and direction',
    ],
    includes: [
      'Full personal history and pattern mapping',
      'Repeated subconscious and emotional healing sessions',
      'Nervous system support and regulation tools',
      'Anti-inflammatory lifestyle coaching',
      'Boundaries and family detox strategy',
      'Identity rebuilding after scapegoating',
      'Personalised practices between sessions',
      'Brief support between sessions',
    ],
    outcome: 'Clients begin to feel safer in their body, clearer in their perception, and stronger in their boundaries.',
    variant: 'signature' as const,
  },
  {
    name: 'Dignity Sovereignty',
    duration: 'Private 3-month support',
    price: '£2,500',
    description: 'High-touch support for people rebuilding not just their health, but their identity, boundaries, and future.',
    bestFor: [
      'Clients going through major family, legal, or emotional transitions',
      'People who want close support while creating a new chapter',
      'Women in midlife reinvention who want depth, continuity, and accountability',
    ],
    includes: [
      '8 private sessions across 3 months',
      'Priority email or voice-note support',
      'Flexible pacing depending on what is unfolding',
      'Deeper support around purpose, self-trust, boundaries, embodiment, and reinvention',
      'Tailored healing practices and integration support',
    ],
    outcome: 'Private support for profound rebuilding — emotionally, physically, and practically.',
    variant: 'premium' as const,
  },
]

const guidance = [
  'Start with Dignity Reset if you want a first deep session and immediate clarity',
  'Choose Dignity Clinic Intensive if you want focused support over several weeks',
  'Choose Dignity Rebuild if you know this is long-standing and you are ready for deeper healing',
  'Enquire about Dignity Sovereignty if you want private high-touch support',
]

function cardStyles(variant: 'default' | 'featured' | 'signature' | 'premium') {
  if (variant === 'featured') {
    return {
      border: '1px solid #3D1F6E',
      padding: '2.5rem',
    }
  }
  if (variant === 'premium') {
    return {
      border: '1px solid #3D1F6E',
      background: 'rgba(61,31,110,0.06)',
      padding: '2.5rem',
    }
  }
  return {
    borderTop: '1px solid rgba(248,246,242,0.1)',
    paddingTop: '2.5rem',
  }
}

function ServiceCard({ service }: { service: typeof services[number] }) {
  const { name, duration, price, description, bestFor, includes, outcome, variant } = service
  return (
    <div style={cardStyles(variant)}>
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-5">
        <h3
          className="font-cormorant font-light text-[clamp(1.6rem,4vw,2.4rem)] leading-tight tracking-tight"
          style={{ color: '#F8F6F2' }}
        >
          {name}
        </h3>
        <span
          className="font-cormorant font-light text-2xl tracking-wide flex-shrink-0"
          style={{ color: '#F8F6F2' }}
        >
          {price}
        </span>
      </div>

      <p
        className="font-sans text-[10px] tracking-[0.3em] uppercase mb-4"
        style={{ color: 'rgba(248,246,242,0.35)' }}
      >
        {duration}
      </p>

      <p
        className="font-garamond text-xl md:text-2xl leading-relaxed mb-8"
        style={{ color: 'rgba(248,246,242,0.7)' }}
      >
        {description}
      </p>

      <div className="grid sm:grid-cols-2 gap-8 mb-8">
        <div>
          <p
            className="font-sans text-[10px] tracking-[0.3em] uppercase mb-4"
            style={{ color: 'rgba(248,246,242,0.35)' }}
          >
            Best for
          </p>
          <ul className="space-y-2">
            {bestFor.map((item, i) => (
              <li
                key={i}
                className="font-garamond text-xl md:text-2xl leading-snug"
                style={{ color: 'rgba(248,246,242,0.6)' }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p
            className="font-sans text-[10px] tracking-[0.3em] uppercase mb-4"
            style={{ color: 'rgba(248,246,242,0.35)' }}
          >
            Includes
          </p>
          <ul className="space-y-2">
            {includes.map((item, i) => (
              <li
                key={i}
                className="font-garamond text-xl md:text-2xl leading-snug"
                style={{ color: 'rgba(248,246,242,0.6)' }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p
        className="font-garamond italic text-xl md:text-2xl leading-relaxed"
        style={{ color: 'rgba(248,246,242,0.5)' }}
      >
        {outcome}
      </p>
    </div>
  )
}

export default function Services() {
  return (
    <section
      id="services"
      className="pt-0 pb-28 md:pb-36"
      style={{ background: '#0D0D0D' }}
    >
   <div className="max-w-5xl mx-auto px-0"><div className="flex flex-col md:flex-row gap-0 mb-16 md:mb-20"><div className="w-full md:w-[45%] flex-shrink-0"><img src="/images/julia-photoshoot/12.jpg" alt="Vicky Vortex" style={{width:"100%",height:"100%",minHeight:"500px",objectFit:"cover",objectPosition:"center top"}} /></div><div className="w-full md:w-[55%] px-6 md:px-12 py-8 md:py-0 flex flex-col justify-center">   
        <div className="text-center mb-16 md:mb-20">
          <p
            className="font-sans text-[10px] tracking-[0.4em] uppercase mb-10 md:mb-12"
            style={{ color: 'rgba(248,246,242,0.35)' }}
          >
            Services
          </p>

          <h2
            className="font-cormorant font-light text-[clamp(2.2rem,6vw,4.5rem)] leading-[1.05] tracking-tight mb-8"
            style={{ color: '#F8F6F2' }}
          >
            Services &amp; Pricing
          </h2>

          <p
            className="font-garamond text-xl md:text-2xl leading-relaxed mx-auto mb-10 text-left"
            style={{ maxWidth: '640px', color: 'rgba(248,246,242,0.7)' }}
          >
            Services for people who have been scapegoated, gaslit, subjected to narcissistic abuse, and worn down by chronic stress — and are ready to heal with clarity, dignity, and real support.
          </p>

          <div className="max-w-2xl mx-auto">
          <div
            className="font-garamond text-xl md:text-2xl leading-relaxed space-y-5 text-left mx-auto"
            style={{ maxWidth: '640px', color: 'rgba(248,246,242,0.6)' }}
          >
            <p>
              Dignity Clinic is designed for ACE survivors, family scapegoats, adult children of narcissists, and people recovering from narcissistic abuse who are ready to stop managing symptoms and start rebuilding from the inside out. If you have spent your life being told your perception was wrong, your needs were too much, or your pain was inconvenient — you are in the right place.
            </p>
            <p>
              My work combines emotional validation, subconscious-based healing, nervous system support, and anti-inflammatory lifestyle guidance. Sessions may draw on Emotion Code, Body Code, QHHT-informed subconscious work, reflective tarot, breathwork, embodiment, and practical recovery tools.
            </p>
            <p>
              The focus is not prediction or spectacle. The focus is healing.
            </p>
          </div>
          </div>
        </div>

{/* Service cards */}
        <div className="space-y-16 md:space-y-20">
          {services.map((service) => (
            <ServiceCard key={service.name} service={service} />
          ))}
        </div>

        {/* Modality note */}
        <p
          className="font-garamond text-xl md:text-2xl leading-relaxed mt-20 md:mt-24 max-w-2xl mx-auto text-left"
          style={{ color: 'rgba(248,246,242,0.7)' }}
        >
          If you already have experience with a particular modality and would like to focus your sessions there, I am happy to work within your existing practice or combine approaches based on what resonates with you. Simply let me know when you enquire.
        </p>

        {/* Delivery note */}
        <div className="mt-16 md:mt-20 pt-12" style={{ borderTop: '1px solid rgba(248,246,242,0.1)' }}>
          <h3
            className="font-cormorant font-light text-[clamp(1.4rem,3vw,2rem)] leading-tight tracking-tight mb-6"
            style={{ color: '#F8F6F2' }}
          >
            How the work is delivered
          </h3>
          <p
            className="font-garamond text-xl md:text-2xl leading-relaxed mb-10"
            style={{ maxWidth: '640px', color: 'rgba(248,246,242,0.6)' }}
          >
            Sessions are held online. Depending on your needs, I may draw from Emotion Code, Body Code, QHHT-informed subconscious work, reflective tarot, breathwork, yoga and embodiment principles, and anti-inflammatory lifestyle guidance.
          </p>
          <p
            className="font-cormorant italic text-[clamp(1.3rem,3vw,1.8rem)] leading-relaxed"
            style={{ color: 'rgba(248,246,242,0.75)' }}
          >
            You do not need to know which modality is right for you. That is part of my job.
          </p>
        </div>

        {/* Guidance */}
        <div className="mt-20 md:mt-24">
          <h3
            className="font-cormorant font-light text-[clamp(1.4rem,3vw,2rem)] leading-tight tracking-tight mb-8"
            style={{ color: '#F8F6F2' }}
          >
            Which package is right for me?
          </h3>
          <ul className="space-y-4">
            {guidance.map((line, i) => (
              <li
                key={i}
                className="font-garamond text-xl md:text-2xl leading-relaxed"
                style={{ color: 'rgba(248,246,242,0.6)' }}
              >
                {line}
              </li>
            ))}
          </ul>
        </div>

        {/* CTAs */}
        <div className="mt-16 md:mt-20 flex flex-col sm:flex-row items-start gap-4">
          <a
            href="#book"
            className="inline-flex items-center justify-center font-sans font-medium text-[11px] tracking-[0.22em] uppercase px-10 py-4 border transition-all duration-300 outline-none focus:outline-none"
            style={{ borderColor: '#F8F6F2', color: '#F8F6F2', background: 'transparent' }}
            onMouseEnter={e => { const el = e.currentTarget; el.style.background = '#F8F6F2'; el.style.color = '#0D0D0D' }}
            onMouseLeave={e => { const el = e.currentTarget; el.style.background = 'transparent'; el.style.color = '#F8F6F2' }}
          >
            Book a Dignity Reset
          </a>
          <a
            href="#book"
            className="inline-flex items-center justify-center font-sans font-medium text-[11px] tracking-[0.22em] uppercase px-10 py-4 border transition-all duration-300 outline-none focus:outline-none"
            style={{ borderColor: '#F8F6F2', color: '#F8F6F2', background: 'transparent' }}
            onMouseEnter={e => { const el = e.currentTarget; el.style.background = '#F8F6F2'; el.style.color = '#0D0D0D' }}
            onMouseLeave={e => { const el = e.currentTarget; el.style.background = 'transparent'; el.style.color = '#F8F6F2' }}
          >
            Apply for Dignity Rebuild
          </a>
        </div>
      </div>
    
    
    </section>
  )
}
