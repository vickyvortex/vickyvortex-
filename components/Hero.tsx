"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Background image — right half */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-y-0 right-0 w-full md:w-1/2">
          <Image
            src="/images/julia-photoshoot/hero.jpg"
            alt="Vicky Vong"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Gradient fade left */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
        </div>
        {/* Full white left panel */}
        <div className="absolute inset-y-0 left-0 w-full md:w-1/2 bg-white" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-32 w-full">
        <div className="max-w-xl">
          {/* Eyebrow */}
          <p
            className="text-xs uppercase tracking-[0.25em] text-[#3D9FA8] mb-8 font-medium"
            style={{ fontFamily: "var(--font-eb-garamond)" }}
          >
            Nervous System Recovery
          </p>

          {/* Headline */}
          <h1
            className="text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] text-[#0D0D0D] mb-6"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Family Scapegoating Abuse
            <br />
            Is Not a Personality Issue.
            <br />
            <span className="italic">It&apos;s a Nervous System Injury.</span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-base md:text-lg text-[#3a3a3a] leading-relaxed mb-10 max-w-md"
            style={{ fontFamily: "var(--font-eb-garamond)" }}
          >
            Support for high-functioning individuals recovering from toxic family
            systems, narcissistic abuse, emotional scapegoating, and long-term
            relational stress.
          </p>

          {/* CTA */}
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
