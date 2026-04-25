"use client";

import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="bg-[#0D0D0D] py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="text-3xl md:text-5xl text-white leading-[1.1] mb-10"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          You Don&apos;t Need More Resilience.
          <br />
          <span className="italic text-[#3D9FA8]">You Need Less Exposure.</span>
        </h2>
        <Link
          href="/contact"
          className="inline-block border border-[#3D9FA8] text-[#3D9FA8] text-sm uppercase tracking-[0.2em] px-10 py-4 hover:bg-[#3D9FA8] hover:text-white transition-colors duration-300"
          style={{ fontFamily: "var(--font-eb-garamond)" }}
        >
          Start Your Reset
        </Link>
      </div>
    </section>
  );
}
