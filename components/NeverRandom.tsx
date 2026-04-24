"use client";

export default function NeverRandom() {
  return (
    <section className="bg-white py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Eyebrow */}
        <p
          className="text-xs uppercase tracking-[0.25em] text-[#3D9FA8] mb-10"
          style={{ fontFamily: "var(--font-eb-garamond)" }}
        >
          This Was Never Random
        </p>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — main statement */}
          <div>
            <h2
              className="text-3xl md:text-4xl leading-[1.15] text-[#0D0D0D] mb-0"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              In some families, one person is assigned the role of{" "}
              <span className="italic">&ldquo;the problem.&rdquo;</span>
            </h2>
          </div>

          {/* Right — explanation */}
          <div
            className="space-y-5 text-[#3a3a3a] text-base md:text-lg leading-relaxed"
            style={{ fontFamily: "var(--font-eb-garamond)" }}
          >
            <p>
              This is known as{" "}
              <strong className="text-[#0D0D0D] font-semibold">
                Family Scapegoating Abuse
              </strong>
              .
            </p>
            <p>
              You were not treated this way because of who you are.
            </p>
            <p>
              You were positioned this way{" "}
              <strong className="text-[#0D0D0D] font-semibold">
                to stabilise the system
              </strong>
              .
            </p>
            <p className="text-sm text-[#888] pt-2 border-t border-[#e8e5e0]">
              Understanding this distinction is the beginning of recovery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
