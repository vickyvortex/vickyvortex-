"use client";
import Image from "next/image";
import Link from "next/link";

const includes = [
  "Personalised no-contact / low-contact strategy",
  "Nervous system regulation practices",
  "Emotional clearing sessions",
  "Boundary rebuilding",
  "Identity reconstruction",
  "Lifestyle and energy optimisation",
];

export default function WorkWithMe() {
  return (
    <section id="work-with-me" style={{ background: "#0D0D0D" }} className="overflow-hidden">
      <div className="relative h-[55vh] w-full">
        <Image
          src="/images/PHK_8174ret1.jpg"
          alt="Vicky Vong"
          fill
          style={{ objectFit: 'cover', objectPosition: '50% 20%' }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(13,13,13,0.1) 0%, rgba(13,13,13,0.9) 100%)" }} />
      </div>

      {/* Early booking box */}
      <div className="px-6 md:px-12 pt-16 pb-0">
        <div className="max-w-6xl mx-auto">
          <div style={{ border: '1px solid rgba(61,159,168,0.4)', padding: '2.5rem', marginBottom: '4rem' }}>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[#3D9FA8] mb-4" style={{ fontFamily: "var(--font-eb-garamond)" }}>
                  Start Here
                </p>
                <h3 className="text-2xl md:text-3xl leading-[1.1] text-[#F8F6F2] mb-4" style={{ fontFamily: "var(--font-cormorant)" }}>
                  Book a Dignity Reset Consultation
                </h3>
                <p className="text-base leading-relaxed mb-6" style={{ fontFamily: "var(--font-eb-garamond)", color: 'rgba(248,246,242,0.6)' }}>
                  For adults recovering from family scapegoating, chronic stress, and long-term emotional override. We will clarify what happened, what your body is carrying, and whether the 8–12 week Nervous System Reset™ is the right next step.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-[#3D9FA8] text-white text-sm uppercase tracking-[0.2em] px-10 py-4 hover:bg-[#2d8a93] transition-colors duration-300"
                  style={{ fontFamily: "var(--font-eb-garamond)" }}
                >
                  Begin the Reset
                </Link>
              </div>
              <div style={{ borderLeft: '1px solid rgba(248,246,242,0.1)', paddingLeft: '2.5rem' }}>
                <p className="text-xs uppercase tracking-[0.25em] mb-4" style={{ fontFamily: "var(--font-eb-garamond)", color: 'rgba(248,246,242,0.4)' }}>
                  The 8–12 week programme includes
                </p>
                <ul className="space-y-3">
                  {includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-base leading-relaxed" style={{ fontFamily: "var(--font-eb-garamond)", color: "rgba(248,246,242,0.7)" }}>
                      <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#3D9FA8] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Programme detail */}
      <div className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-base uppercase tracking-[0.25em] text-[#7ecfca] mb-6" style={{ fontFamily: "var(--font-eb-garamond)" }}>
                Work With Me
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-[#F8F6F2] mb-4" style={{ fontFamily: "var(--font-cormorant)" }}>
                The Nervous System Reset™
              </h2>
              <p className="text-lg md:text-xl mb-6" style={{ fontFamily: "var(--font-eb-garamond)", color: "rgba(248,246,242,0.6)" }}>
                An 8–12 week recovery programme
              </p>
              <p className="text-base leading-relaxed mb-10" style={{ fontFamily: "var(--font-eb-garamond)", color: "rgba(248,246,242,0.6)" }}>
                You do not need to choose the modality. I choose the right tool for your nervous system, your stage of recovery, and your level of safety.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-[#3D9FA8] text-white text-sm uppercase tracking-[0.2em] px-10 py-4 hover:bg-[#2d8a93] transition-colors duration-300"
                style={{ fontFamily: "var(--font-eb-garamond)" }}
              >
                Begin the Reset
              </Link>
            </div>
            <div>
              <p className="text-base uppercase tracking-[0.25em] mb-6" style={{ fontFamily: "var(--font-eb-garamond)", color: "rgba(248,246,242,0.4)" }}>
                Programme Includes
              </p>
              <ul className="space-y-4">
                {includes.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-lg md:text-xl leading-relaxed" style={{ fontFamily: "var(--font-eb-garamond)", color: "rgba(248,246,242,0.7)" }}>
                    <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-[#7ecfca] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-10 text-sm leading-relaxed pt-6" style={{ fontFamily: "var(--font-eb-garamond)", color: "rgba(248,246,242,0.3)", borderTop: "1px solid rgba(248,246,242,0.1)" }}>
                This service is educational and supportive. It does not replace medical, psychological, or psychiatric treatment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
