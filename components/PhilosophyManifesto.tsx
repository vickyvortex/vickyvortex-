'use client'

export default function PhilosophyManifesto() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-[#F8F6F2] px-6 py-24 md:py-36 flex flex-col items-center">

      {/* Opening */}
      <div className="w-full max-w-2xl text-center mb-20">
        <p className="font-['Cormorant_Garamond'] italic text-4xl md:text-6xl text-[#F8F6F2] leading-tight tracking-wide">
          The wound is not the self.
        </p>
        <div className="mt-6 mx-auto w-16 h-px bg-[#3D9FA8]" />
      </div>

      {/* Philosophy body */}
      <div className="w-full max-w-xl space-y-10 text-[#F8F6F2]/80 font-['EB_Garamond'] text-lg md:text-xl leading-relaxed">

        <p>
          Healing is not becoming whole.
        </p>
        <p>
          Healing is remembering that we were whole all along.
        </p>

        <p className="pt-4">
          The wound is not the truth of us. The wound is the place where energy became
          trapped, distorted, frozen, or forgotten.
        </p>

        <p>
          So the work is not to worship the wound, or excuse the harm, or make trauma
          sacred in itself.
        </p>

        <p>
          The work is to let the wound become the doorway back to the sacredness
          underneath.
        </p>
      </div>

      {/* Teal divider */}
      <div className="my-16 w-full max-w-xl">
        <div className="w-full h-px bg-[#3D9FA8]/30" />
      </div>

      {/* The turn — pivot to practice */}
      <div className="w-full max-w-xl space-y-8 text-[#F8F6F2]/70 font-['EB_Garamond'] text-lg md:text-xl leading-relaxed italic">
        <p>
          The wounds were not proof that I was broken.
        </p>
        <p>
          They were the places where life was asking me to awaken the energy,
          remember my wholeness, and return to my own sacredness.
        </p>
      </div>

      {/* Second divider */}
      <div className="my-16 w-full max-w-xl">
        <div className="w-full h-px bg-[#3D9FA8]/30" />
      </div>

      {/* The three lines — set apart like a prayer */}
      <div className="w-full max-w-2xl text-center space-y-5 mb-20">
        <p className="font-['Cormorant_Garamond'] italic text-3xl md:text-5xl text-[#F8F6F2] leading-snug">
          The wound is not the self.
        </p>
        <p className="font-['Cormorant_Garamond'] italic text-3xl md:text-5xl text-[#3D9FA8] leading-snug">
          The wound is the doorway.
        </p>
        <p className="font-['Cormorant_Garamond'] italic text-3xl md:text-5xl text-[#F8F6F2] leading-snug">
          Wholeness is the truth.
        </p>
      </div>

      {/* Closing CTA */}
      <div className="text-center mt-4">
        <p className="font-['EB_Garamond'] text-[#F8F6F2]/50 text-base mb-6 tracking-widest uppercase text-sm">
          If you are ready to walk through the doorway
        </p>
        
          href="/work-with-me"
          className="inline-block border border-[#3D9FA8] text-[#3D9FA8] font-['EB_Garamond'] text-lg px-10 py-4 tracking-wide hover:bg-[#3D9FA8] hover:text-[#0D0D0D] transition-all duration-300"
        >
          Work With Me
        </a>
      </div>

    </main>
  )
}