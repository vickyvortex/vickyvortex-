"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: '#0D0D0D' }}>
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-y-0 right-0 w-full md:w-1/2">
          <Image
            src="/images/julia-photoshoot/16.jpg"
            alt="Vicky Vong"
            fill
            className="object-cover object-[50%_20%]"
            priority
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(13,13,13,0.5) 0%, rgba(13,13,13,0.2) 40%, rgba(13,13,13,0) 70%)' }} />
        </div>
        <div className="absolute inset-y-0 left-0 w-full md:w-1/2" style={{ background: '#0D0D0D' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-32 w-full">
        <div className="max-w-xl">
          <p
            className="text-xs uppercase tracking-[0.25em] text-[#3D9FA8] mb-8 font-medium"
            style={{ fontFamily: "var(--font-eb-garamond)" }}
          >
            Nervous System Recovery
          </p>

          <h1
            className="text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] text-[#F8F6F2] mb-6"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Family Scapegoating Abuse
            <br />
            Is Not a Personality Issue.
            <br />
            <span className="italic">It&apos;s a Nervous System Injury.</span>
          </h1>

          <p
            className="text-base md:text-lg text-[#F8F6F2]/70 leading-relaxed mb-6 max-w-md"
            style={{ fontFamily: "var(--font-eb-garamond)" }}
          >
            I help high-functioning individuals recover their energy, identity,
            and clarity after prolonged exposure to toxic family systems.
          </p>

          <p
            className="text-sm text-[#3D9FA8] italic mb-10 max-w-md leading-relaxed"
            style={{ fontFamily: "var(--font-eb-garamond)" }}
          >
            I don&apos;t just help you understand what happened.
            <br />I help your body stop reliving it.
          </p>

          <Link
            href="#work-with-me"
            className="inline-block bg-[#3D9FA8] text-white text-sm uppercase tracking-[0.2em] px-10 py-4 hover:bg-[#2d8a93] transition-colors duration-300"
            style={{ fontFamily: "var(--font-eb-garamond)" }}
          >
            Begin the Reset
          </Link>
        </div>
      </div>
    </section>
  );
}
