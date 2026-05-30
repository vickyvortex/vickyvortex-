"use client";
import Image from "next/image";

export default function PhilosophyManifesto() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-[#F8F6F2]">

      <div className="px-6 py-24 md:py-36 flex flex-col items-center">
        {/* Opening */}
        <div className="w-full max-w-2xl text-center mb-20">
          <p className="font-['Cormorant_Garamond'] italic text-4xl md:text-6xl text-[#F8F6F2] leading-tight tracking-wide">
            The wound is not the self.
          </p>
          <div className="mt-6 mx-auto w-16 h-px bg-[#3D9FA8]" />
        </div>

        {/* Philosophy body */}
        <div className="w-full max-w-xl space-y-10 text-[#F8F6F2]/80 font-['EB_Garamond'] text-lg md:text-xl leading-relaxed">
          <p>Healing is not becoming whole.</p>
          <p>Healing is remembering that we were whole all along.</p>
          <div className="my-10 border-l-2 border-[#3D9FA8] pl-8">
            <p className="font-['Cormorant_Garamond'] italic text-2xl md:text-3xl text-[#3D9FA8] leading-relaxed">
              We are already whole and complete.<br />
              It is a matter of remembering and feeling it.<br />
              One breath at a time.
            </p>
          </div>
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
      </div>

      {/* Image break */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src="/images/5small.jpg"
          alt="Vicky Vong"
          fill
          className="object-cover object-[50%_30%]"
        />
        <div className="absolute inset-0" style={{ background: "rgba(13,13,13,0.3)" }} />
      </div>

      <div className="px-6 py-24 flex flex-col items-center">
        <div className="my-8 w-full max-w-xl">
          <div className="w-full h-px bg-[#3D9FA8]/30" />
        </div>

        {/* The turn */}
        <div className="w-full max-w-xl space-y-8 text-[#F8F6F2]/70 font-['EB_Garamond'] text-lg md:text-xl leading-relaxed italic">
          <p>The wounds were not proof that I was broken.</p>
          <p>
            They were the places where life was asking me to awaken the energy,
            remember my wholeness, and return to my own sacredness.
          </p>
        </div>

        <div className="my-16 w-full max-w-xl">
          <div className="w-full h-px bg-[#3D9FA8]/30" />
        </div>

        {/* The three lines */}
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
          <a href="/work-with-me" className="inline-block bg-[#3D9FA8] text-white text-sm uppercase tracking-[0.2em] px-10 py-4 hover:bg-[#2d8a93] transition-colors duration-300" style={{ fontFamily: "var(--font-eb-garamond)" }}>
            Work With Me
          </a>
        </div>
      </div>
    </main>
  );
}
