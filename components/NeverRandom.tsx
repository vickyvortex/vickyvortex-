"use client";

export default function NeverRandom() {
  return (
    <section style={{ background: '#0D0D0D' }} className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs uppercase tracking-[0.25em] text-[#3D9FA8] mb-10" style={{ fontFamily: "var(--font-eb-garamond)" }}>
          What happened
        </p>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl leading-[1.15] text-[#F8F6F2] mb-0" style={{ fontFamily: "var(--font-cormorant)" }}>
              Some families survive by making{" "}
              <span className="italic">one person the problem.</span>
            </h2>
          </div>
          <div className="space-y-5 text-base md:text-lg leading-relaxed" style={{ fontFamily: "var(--font-eb-garamond)", color: 'rgba(248,246,242,0.7)' }}>
            <p>You became the person blamed for things that were never yours to carry.</p>
            <p>Not because of who you are. Because of what the system needed.</p>
            <p>This is known as <strong style={{ color: '#F8F6F2' }}>Family Scapegoating Abuse</strong> — and it leaves a precise kind of damage: chronic self-doubt, hypervigilance, and a nervous system that learned to brace.</p>
            <p className="text-sm pt-2" style={{ color: 'rgba(248,246,242,0.35)', borderTop: '1px solid rgba(248,246,242,0.1)' }}>
              Understanding this is not the end of the work. But it is where clarity begins.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
