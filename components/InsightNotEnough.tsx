"use client";

export default function InsightNotEnough() {
  return (
    <section className="bg-[#F4F2EE] py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Eyebrow */}
        <p
          className="text-xs uppercase tracking-[0.25em] text-[#3D9FA8] mb-10"
          style={{ fontFamily: "var(--font-eb-garamond)" }}
        >
          Insight Is Not Enough
        </p>

        <div className="max-w-2xl">
          {/* Opening */}
          <p
            className="text-xl md:text-2xl text-[#3a3a3a] leading-relaxed mb-8"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            You can understand the pattern and still feel exhausted, anxious,
            frozen, inflamed, or stuck.
          </p>

          <p
            className="text-base md:text-lg text-[#3a3a3a] leading-relaxed mb-8"
            style={{ fontFamily: "var(--font-eb-garamond)" }}
          >
            Because this is not just psychological.
            <br />
            It is biological.
          </p>

          {/* Bold signature line */}
          <div className="border-l-4 border-[#3D9FA8] pl-6 py-2">
            <p
              className="text-xl md:text-2xl font-semibold text-[#0D0D0D] leading-snug"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              You cannot heal while your nervous system is still under threat.
            </p>
          </div>

          {/* Signature line */}
          <p
            className="mt-10 text-base text-[#3a3a3a] italic"
            style={{ fontFamily: "var(--font-eb-garamond)" }}
          >
            &ldquo;I don&apos;t just help you understand what happened.
            <br />I help your body stop reliving it.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
