"use client";

import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="bg-[#0D0D0D] py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="text-4xl md:text-6xl text-white leading-[1.1] mb-10"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          You Don&apos;t Need More Resilience.
          <br />
          <span className="italic text-[#7ecfca]">You Need Less Exposure.</span>
        </h2>
        <Link
          href="/contact"
          className="inline-block border border-[#7ecfca] text-[#7ecfca] text-base uppercase tracking-[0.2em] px-10 py-4 hover:bg-[#7ecfca] hover:text-[#0D0D0D] transition-colors duration-300 whitespace-nowrap"
          style={{ fontFamily: "var(--font-eb-garamond)" }}
        >
          Start Your Reset
        </Link>
      </div>
    </section>
  );
}
