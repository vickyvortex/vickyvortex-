"use client";

export default function AuthorityBlock() {
  return (
    <section style={{ background: "#0D0D0D" }} className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <p
          className="text-xs uppercase tracking-[0.25em] text-[#3D9FA8] mb-10"
          style={{ fontFamily: "var(--font-eb-garamond)" }}
        >
          Why This Work Matters
        </p>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <p
              className="text-xl md:text-2xl text-[#F8F6F2] leading-snug"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Experts like Gabor Maté have shown how trauma lives in the body —
              not just the mind.
            </p>
            <p
              className="text-base text-[#F8F6F2/70] leading-relaxed"
              style={{ fontFamily: "var(--font-eb-garamond)" }}
            >
              Research into Family Scapegoating Abuse, developed by Rebecca C.
              Mandeville, explains how harmful roles form within families — and
              why one person is selected to carry the weight of the system.
            </p>
            <p
              className="text-base text-[#F8F6F2/70] leading-relaxed"
              style={{ fontFamily: "var(--font-eb-garamond)" }}
            >
              This explains why you feel the way you do.
            </p>
            <p
              className="text-base text-[#F8F6F2/70] leading-relaxed"
              style={{ fontFamily: "var(--font-eb-garamond)" }}
            >
              But recovery requires more than understanding.
            </p>
          </div>

          <div className="flex items-center md:items-end h-full">
            <div className="border-l-4 border-[#3D9FA8] pl-6 py-2">
              <p
                className="text-xl md:text-2xl font-semibold text-[#F8F6F2] leading-snug"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Recovery is about restoring safety, energy, and identity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
