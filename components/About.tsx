'use client'

export default function About() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-[#F8F6F2]">

      {/* Hero — signature line only */}
      <section className="px-6 pt-32 pb-24 md:pt-44 md:pb-32 flex flex-col items-center text-center max-w-3xl mx-auto">
        <p className="font-['EB_Garamond'] text-sm tracking-[0.25em] uppercase text-[#3D9FA8] mb-8">
          Why I do this work
        </p>
        <h1 className="font-['Cormorant_Garamond'] italic text-3xl md:text-5xl text-[#F8F6F2] leading-snug">
          I know what it feels like to lose your own energy inside other people's toxicity —
          and I know what it feels like to call it back.
        </h1>
        <div className="mt-10 w-16 h-px bg-[#3D9FA8]" />
      </section>

      {/* The missing layer */}
      <section className="px-6 pb-16 max-w-xl mx-auto">
        <p className="font-['Cormorant_Garamond'] italic text-2xl md:text-3xl text-[#3D9FA8] leading-snug mb-10">
          Energy medicine is not the alternative to medicine.<br />
          It is the missing layer.
        </p>
        <div className="space-y-6 font-['EB_Garamond'] text-lg md:text-xl text-[#F8F6F2]/80 leading-relaxed">
          <p>
            Energy medicine is not a trend to me. It is personal.
          </p>
          <p>
            I know what it feels like for the body to become overwhelmed — by antibiotics,
            by stress, by family toxicity, by unsafe environments, and by energies that the
            nervous system cannot easily process.
          </p>
          <p>
            I also know what it feels like when the body begins to come back.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-xl mx-auto px-6 py-6">
        <div className="w-full h-px bg-[#3D9FA8]/20" />
      </div>

      {/* The body of the piece */}
      <section className="px-6 pb-16 max-w-xl mx-auto space-y-6 font-['EB_Garamond'] text-lg md:text-xl text-[#F8F6F2]/80 leading-relaxed">
        <p>
          For me, healing was never only about symptoms. It was about energy. It was about
          breath. It was about the nervous system. It was about finally understanding that
          the body does not simply carry biology. It carries emotional charge, ancestral
          patterns, fear, grief, rejection and survival stress.
        </p>
        <p>
          Energy medicine gave me a way to work with the invisible forces that were shaping
          my visible health.
        </p>
        <p>
          People are beginning to understand that the body is not just mechanical. It is
          emotional, energetic, electrical, biochemical and spiritual. Stress is not "just
          in the mind." Trauma is not "just a story." Toxic relationships, unsafe
          environments and chronic fear can live in the body.
        </p>
        <p>
          My work sits at that bridge.
        </p>
      </section>

      {/* The bridge statement */}
      <section className="px-6 pb-16 max-w-xl mx-auto">
        <div className="border-l-2 border-[#3D9FA8] pl-8 space-y-3 font-['Cormorant_Garamond'] italic text-xl md:text-2xl text-[#F8F6F2]/90 leading-relaxed">
          <p>Not instead of medicine.</p>
          <p>Not against science.</p>
          <p>But alongside the body's own intelligence.</p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-xl mx-auto px-6 py-6">
        <div className="w-full h-px bg-[#3D9FA8]/20" />
      </div>

      {/* The work */}
      <section className="px-6 pb-16 max-w-xl mx-auto space-y-6 font-['EB_Garamond'] text-lg md:text-xl text-[#F8F6F2]/80 leading-relaxed">
        <p>
          Through breath, energy awareness, nervous-system regulation and embodied
          self-care, I help clients clear energetic blockages, return to their bodies, and
          breathe love, presence and vitality back into the places where life became frozen.
        </p>
        <p>
          I got sick from what I absorbed — physically, emotionally and energetically.
        </p>
        <p>
          I healed by learning how to clear, breathe, regulate and return to my own energy.
        </p>
        <p>
          That is why I do this work.
        </p>
      </section>

      {/* Closing signature */}
      <section className="px-6 py-20 max-w-2xl mx-auto text-center">
        <p className="font-['Cormorant_Garamond'] italic text-2xl md:text-4xl text-[#F8F6F2] leading-snug mb-10">
          Because I know what it feels like to lose your own energy inside other
          people's toxicity — and I know what it feels like to call it back.
        </p>
        <div className="mt-10 mb-12 mx-auto w-16 h-px bg-[#3D9FA8]" />
        <a
          href="/work-with-me"
        >
          Work With Me
        </a>
      </section>

    </main>
  )
}