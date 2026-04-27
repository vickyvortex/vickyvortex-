"use client";

export default function InsightNotEnough() {
  return (
    <section style={{ background: '#0D0D0D' }} className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs uppercase tracking-[0.25em] text-[#3D9FA8] mb-10" style={{ fontFamily: "var(--font-eb-garamond)" }}>
          Insight Is Not Enough
        </p>
        <div className="max-w-2xl">
          <p className="text-xl md:text-2xl leading-relaxed mb-8" style={{ fontFamily: "var(--font-cormorant)", color: 'rgba(248,246,242,0.85)' }}>
            You can understand the pattern and still feel exhausted, anxious, frozen, inflamed, or stuck.
          </p>
          <p className="text-base md:text-lg leading-relaxed mb-8" style={{ fontFamily: "var(--font-eb-garamond)", color: 'rgba(248,246,242,0.7)' }}>
            Because this is not just psychological.<br />It is biological.
          </p>
          <div className="border-l-4 border-[#3D9FA8] pl-6 py-2">
            <p className="text-xl md:text-2xl font-semibold leading-snug" style={{ fontFamily: "var(--font-cormorant)", color: '#F8F6F2' }}>
              You cannot heal while your nervous system is still under threat.
            </p>
          </div>
          <p className="mt-10 text-base italic" style={{ fontFamily: "var(--font-eb-garamond)", color: 'rgba(248,246,242,0.6)' }}>
            &ldquo;I don&apos;t just help you understand what happened.<br />I help your body stop reliving it.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
