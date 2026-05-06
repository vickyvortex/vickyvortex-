"use client";

const statements = [
  "You feel exhausted around your family but struggle to fully explain why — even to yourself.",
  "You have spent years doubting yourself, overthinking, or being told you are too sensitive.",
  "You understand what happened intellectually, but your body still feels anxious, frozen, or on edge.",
  "You are tired of surviving. You want to feel like yourself again.",
]

export default function ThisIsForYou() {
  return (
    <section style={{ background: '#0D0D0D', borderTop: '1px solid rgba(248,246,242,0.06)' }} className="py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs uppercase tracking-[0.25em] text-[#3D9FA8] mb-8" style={{ fontFamily: "var(--font-eb-garamond)" }}>
          This may resonate if
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
