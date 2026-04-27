"use client";

export default function NeverRandom() {
  return (
    <section style={{ background: '#0D0D0D' }} className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs uppercase tracking-[0.25em] text-[#3D9FA8] mb-10" style={{ fontFamily: "var(--font-eb-garamond)" }}>
          This Was Never Random
        </p>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl leading-[1.15] text-[#F8F6F2] mb-0" style={{ fontFamily: "var(--font-cormorant)" }}>
              In some families, one person is assigned the role of{" "}
              <span className="italic">&ldquo;the problem.&rdquo;</span>
            </h2>
          </div>
          <div className="space-y-5 text-base md:text-lg leading-relaxed" style={{ fontFamily: "var(--font-eb-garamond)", color: 'rgba(248,246,242,0.7)' }}>
            <p>This is known as <strong style={{ color: '#F8F6F2' }}>Family Scapegoating Abuse</strong>.</p>
            <p>You were not treated this way because of who you are.</p>
            <p>You were positioned this way <strong style={{ color: '#F8F6F2' }}>to stabilise the system</strong>.</p>
            <p className="text-sm pt-2" style={{ color: 'rgba(248,246,242,0.35)', borderTop: '1px solid rgba(248,246,242,0.1)' }}>
              Understanding this distinction is the beginning of recovery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
