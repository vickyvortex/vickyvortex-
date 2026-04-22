'use client'

export default function VortexVitalityMethod() {
  return (
    <section
      id="vortex-vitality"
      className="py-28 md:py-36 px-6"
      style={{ background: '#0D0D0D', borderTop: '1px solid rgba(248,246,242,0.06)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 md:mb-20">
          <p className="font-sans text-[10px] tracking-[0.4em] uppercase mb-10" style={{ color: 'rgba(248,246,242,0.35)' }}>The Framework</p>
          <h2 className="font-cormorant font-light text-[clamp(2.2rem,6vw,4.5rem)] leading-[1.05] tracking-tight mb-4" style={{ color: '#F8F6F2' }}>The Vortex Vitality Method</h2>
          <p className="font-cormorant italic text-2xl md:text-3xl" style={{ color: 'rgba(248,246,242,0.5)' }}>My signature framework for an anti-inflammatory lifestyle</p>
        </div>
        <div className="flex flex-col md:flex-row gap-16 md:gap-20 items-center">
          <div className="w-full md:w-[45%] flex-shrink-0">
            <img src="/images/VortexVitalityMethodHydrationwheel.png" alt="Vortex Vitality Method wheel" className="w-full max-w-[480px] mx-auto block" style={{ filter: 'invert(1) hue-rotate(180deg) saturate(0.8) brightness(0.9)' }} />
          </div>
          <div className="w-full md:w-[55%] flex flex-col justify-center space-y-6">
            <p className="font-garamond text-xl md:text-2xl leading-relaxed" style={{ color: 'rgba(248,246,242,0.7)' }}>I developed the Vortex Vitality Method during lockdown in Barcelona — grieving, rebuilding, and determined to understand why chronic stress had embedded itself so deeply in my body.</p>
            <p className="font-garamond text-xl md:text-2xl leading-relaxed" style={{ color: 'rgba(248,246,242,0.7)' }}>The method is built on a simple truth: fatigue, inflammation, and chronic illness are not personal failings. They are the body's response to years of living without adequate environmental and emotional support. The body is not broken — it is responding correctly to what it has been through.</p>
            <p className="font-garamond text-xl md:text-2xl leading-relaxed" style={{ color: 'rgba(248,246,242,0.7)' }}>At the centre is Hydration — the foundation of every biological process. Around it, four pillars: Body, Environment, Nutrition, and Mindset. Each one addresses a layer of the chronic stress load that ACE survivors carry. Together, they create the conditions the body needs to regulate, repair, and restore itself.</p>
            <p className="font-cormorant italic text-2xl md:text-3xl leading-relaxed" style={{ color: 'rgba(248,246,242,0.6)' }}>This is not a wellness programme. It is a recovery and prevention framework — built from the inside out.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
