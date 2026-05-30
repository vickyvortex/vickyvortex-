'use client'
import Image from "next/image"

export default function About() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-[#F8F6F2]">

      {/* Hero — full bleed portrait */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <Image
          src="/images/10small.jpg"
          alt="Vicky Vong"
          fill
          className="object-cover object-[60%_25%]"
          priority
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(13,13,13,0.2) 0%, rgba(13,13,13,0.85) 100%)' }} />
        <div className="absolute bottom-0 left-0 px-6 pb-16 max-w-2xl">
          <p className="font-['EB_Garamond'] text-sm tracking-[0.25em] uppercase text-[#3D9FA8] mb-4">
            Why I do this work
          </p>
          <h1 className="font-['Cormorant_Garamond'] italic text-3xl md:text-5xl text-[#F8F6F2] leading-snug">
            I know what it feels like to lose your own energy inside other people's toxicity —
            and I know what it feels like to call it back.
          </h1>
        </div>
      </section>

      {/* The missing layer */}
      <section className="px-6 py-16 max-w-xl mx-auto">
        <p className="font-['Cormorant_Garamond'] italic text-2xl md:text-3xl text-[#3D9FA8] leading-snug mb-10">
          Energy medicine is not the alternative to medicine.<br />
          It is the missing layer.
        </p>
        <div className="space-y-6 font-['EB_Garamond'] text-lg md:text-xl text-[#F8F6F2]/80 leading-relaxed">
          <p>Energy medicine is not a trend to me. It is personal.</p>
          <p>
            I know what it feels like for the body to become overwhelmed — by antibiotics,
            by stress, by family toxicity, by unsafe environments, and by energies that the
            nervous system cannot easily process.
          </p>
          <p>I also know what it feels like when the body begins to come back.</p>
        </div>
      </section>

      {/* Full width image break */}
      <section className="relative h-[50vh] w-full overflow-hidden my-2">
        <Image
          src="/images/PHK_7950ret1.jpg"
          alt="Vicky Vong"
          fill
          className="object-cover object-[50%_30%]"
        />
        <div className="absolute inset-0" style={{ background: 'rgba(13,13,13,0.3)' }} />
      </section>

      {/* The body */}
      <section className="px-6 py-16 max-w-xl mx-auto space-y-6 font-['EB_Garamond'] text-lg md:text-xl text-[#F8F6F2]/80 leading-relaxed">
        <p>
          For me, healing was never only about symptoms. It was about energy. It was about
          breath. It was about the nervous system. It was about finally understanding that
          the body does not simply carry biology. It carries emotional charge, ancestral
          patterns, fear, grief, rejection and survival stress.
        </p>
        <p>Energy medicine gave me a way to work with the invisible forces that were shaping my visible health.</p>
        <p>
          People are beginning to understand that the body is not just mechanical. It is
          emotional, energetic, electrical, biochemical and spiritual. Stress is not "just
          in the mind." Trauma is not "just a story." Toxic relationships, unsafe
          environments and chronic fear can live in the body.
        </p>
        <p>My work sits at that bridge.</p>
      </section>

      {/* Two image grid */}
      <section className="grid grid-cols-2 gap-1 px-2 max-w-full my-2">
        <div className="relative h-[60vh] overflow-hidden">
          <Image
            src="/images/PHK_8174ret1.jpg"
            alt="Vicky Vong"
            fill
            className="object-cover object-[50%_20%]"
          />
        </div>
        <div className="relative h-[60vh] overflow-hidden">
          <Image
            src="/images/PHK_7814ret1.jpg"
            alt="Vicky Vong"
            fill
            className="object-cover object-[50%_20%]"
          />
        </div>
      </section>

      {/* Bridge statement */}
      <section className="px-6 py-16 max-w-xl mx-auto">
        <div className="border-l-2 border-[#3D9FA8] pl-8 space-y-3 font-['Cormorant_Garamond'] italic text-xl md:text-2xl text-[#F8F6F2]/90 leading-relaxed">
          <p>Not instead of medicine.</p>
          <p>Not against science.</p>
          <p>But alongside the body's own intelligence.</p>
        </div>
      </section>

      {/* Full bleed — grounded nature shot */}
      <section className="relative h-[60vh] w-full overflow-hidden my-2">
        <Image
          src="/images/PHK_7947ret1.jpg"
          alt="Vicky Vong"
          fill
          className="object-cover object-[50%_25%]"
        />
        <div className="absolute inset-0" style={{ background: 'rgba(13,13,13,0.25)' }} />
      </section>

      {/* The work */}
      <section className="px-6 py-16 max-w-xl mx-auto space-y-6 font-['EB_Garamond'] text-lg md:text-xl text-[#F8F6F2]/80 leading-relaxed">
        <p>
          Through breath, energy awareness, nervous-system regulation and embodied
          self-care, I help clients clear energetic blockages, return to their bodies, and
          breathe love, presence and vitality back into the places where life became frozen.
        </p>
        <p>I got sick from what I absorbed — physically, emotionally and energetically.</p>
        <p>I healed by learning how to clear, breathe, regulate and return to my own energy.</p>
        <p>That is why I do this work.</p>
      </section>

      {/* Closing — portrait + signature */}
      <section className="px-6 py-20 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[70vh] overflow-hidden">
            <Image
              src="/images/julia-photoshoot/16.jpg"
              alt="Vicky Vong"
              fill
              className="object-cover object-[50%_25%]"
            />
          </div>
          <div className="text-center md:text-left">
            <p className="font-['Cormorant_Garamond'] italic text-2xl md:text-3xl text-[#F8F6F2] leading-snug mb-10">
              Because I know what it feels like to lose your own energy inside other
              people's toxicity — and I know what it feels like to call it back.
            </p>
            <div className="mb-12 w-16 h-px bg-[#3D9FA8]" />
            <a
              href="/work-with-me"
              className="inline-block bg-[#3D9FA8] text-white text-sm uppercase tracking-[0.2em] px-10 py-4 hover:bg-[#2d8a93] transition-colors duration-300"
              style={{ fontFamily: "var(--font-eb-garamond)" }}
            >
              Work With Me
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}
