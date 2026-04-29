"use client";

const statements = [
  "You were blamed, mocked, dismissed or made responsible for the family's dysfunction.",
  "You have done the intellectual work, but your body still feels anxious, frozen, inflamed or exhausted.",
  "You are ready to rebuild identity, boundaries and energy outside the role you were assigned.",
]

export default function ThisIsForYou() {
  return (
    <section style={{ background: '#0D0D0D', borderTop: '1px solid rgba(248,246,242,0.06)' }} className="py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs uppercase tracking-[0.25em] text-[#3D9FA8] mb-8" style={{ fontFamily: "var(--font-eb-garamond)" }}>
          This is for you if
        </p>
        <div className="space-y-6">
          {statements.map((s, i) => (
            <div key={i} className="flex gap-5 items-start">
              <span className="font-cormorant font-light text-2xl flex-shrink-0" style={{ color: '#3D9FA8', lineHeight: 1.2 }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="font-garamond text-xl md:text-2xl leading-relaxed" style={{ color: 'rgba(248,246,242,0.8)' }}>
                {s}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
