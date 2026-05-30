"use client";
import Image from "next/image";

const statements = [
  "You feel exhausted around your family but struggle to fully explain why — even to yourself.",
  "You have spent years doubting yourself, overthinking, or being told you are too sensitive.",
  "You understand what happened intellectually, but your body still feels anxious, frozen, or on edge.",
  "You are tired of surviving. You want to feel like yourself again.",
]

export default function ThisIsForYou() {
  return (
    <section style={{ background: "#0D0D0D", borderTop: "1px solid rgba(248,246,242,0.06)" }} className="py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-base uppercase tracking-[0.25em] text-[#7ecfca] mb-8" style={{ fontFamily: "var(--font-eb-garamond)" }}>
              This may resonate if
            </p>
            <div className="space-y-6">
              {statements.map((s, i) => (
                <div key={i} className="flex gap-5 items-start">
                  <span className="font-cormorant font-light text-3xl flex-shrink-0" style={{ color: "#3D9FA8", lineHeight: 1.2 }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-xl md:text-2xl leading-relaxed" style={{ color: "rgba(248,246,242,0.8)" }}>
                    {s}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[500px] overflow-hidden">
            <Image
              src="/images/PHK_7950ret1.jpg"
              alt="Vicky Vong"
              fill
              className="object-cover object-[50%_15%]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
