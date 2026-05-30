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
          style={{
            objectFit: 'cover',
            objectPosition: '50% 20%',
          }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(13,13,13,0.1) 0%, rgba(13,13,13,0.9) 100%)" }} />
      </div>
      <div className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-base uppercase tracking-[0.25em] text-[#7ecfca] mb-6" style={{ fontFamily: "var(--font-eb-garamond)" }}>
                Work With Me
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-[#F8F6F2] mb-4" style={{ fontFamily: "var(--font-cormorant)" }}>
                The Nervous System Reset™
              </h2>
              <p className="text-lg md:text-xl mb-10" style={{ fontFamily: "var(--font-eb-garamond)", color: "rgba(248,246,242,0.6)" }}>
                An 8–12 week recovery programme
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
