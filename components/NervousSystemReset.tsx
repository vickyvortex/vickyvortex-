"use client";
import Image from "next/image";

const steps = [
  { number: "01", title: "Separation", body: "Reduce exposure to dysfunction and create the conditions for recovery to begin." },
  { number: "02", title: "Regulation", body: "Stabilise the body and begin to restore the nervous system to its baseline." },
  { number: "03", title: "Clearing", body: "Release internalised emotional patterns absorbed from the family system." },
  { number: "04", title: "Reconstruction", body: "Rebuild identity, boundaries, and a clear sense of self outside the assigned role." },
  { number: "05", title: "Expansion", body: "Create environments, relationships, and routines that support your energy." },
];

export default function NervousSystemReset() {
  return (
    <section style={{ background: "#0D0D0D" }} className="overflow-hidden">
      <div className="relative h-[55vh] w-full">
        <Image
          src="/images/PHK_7950ret1.jpg"
          alt="Vicky Vong"
          fill
          className="object-cover object-[50%_20%]"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(13,13,13,0.1) 0%, rgba(13,13,13,0.85) 100%)" }} />
        <div className="absolute bottom-0 left-0 px-6 md:px-12 pb-12">
          <p className="text-xs uppercase tracking-[0.25em] text-[#3D9FA8] mb-4" style={{ fontFamily: "var(--font-eb-garamond)" }}>
            The Method
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-[#F8F6F2]" style={{ fontFamily: "var(--font-cormorant)" }}>
            The Nervous System Reset™
          </h2>
        </div>
      </div>
      <div className="px-6 md:px-12 pb-24 md:pb-32 pt-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5" style={{ gap: "1px", background: "rgba(248,246,242,0.1)" }}>
            {steps.map((step) => (
              <div key={step.number} className="p-8 flex flex-col gap-4" style={{ background: "#0D0D0D" }}>
                <span className="text-xs text-[#3D9FA8] tracking-[0.2em]" style={{ fontFamily: "var(--font-eb-garamond)" }}>
                  {step.number}
                </span>
                <h3 className="text-xl md:text-2xl text-[#F8F6F2]" style={{ fontFamily: "var(--font-cormorant)" }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ fontFamily: "var(--font-eb-garamond)", color: "rgba(248,246,242,0.5)" }}>
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
