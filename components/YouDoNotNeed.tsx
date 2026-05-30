"use client";
import Image from "next/image";

export default function YouDoNotNeed() {
  return (
    <section style={{ background: "#0D0D0D", borderTop: "1px solid rgba(248,246,242,0.06)" }} className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/PHK_4615ret.jpg"
          alt="Vicky Vong"
          fill
          className="object-cover object-[50%_20%]"
        />
        <div className="absolute inset-0" style={{ background: "rgba(13,13,13,0.82)" }} />
      </div>
      <div className="relative z-10 py-20 md:py-24 px-6 md:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-cormorant font-light text-[clamp(1.8rem,4vw,3rem)] leading-[1.1] tracking-tight mb-8" style={{ color: "#F8F6F2" }}>
            You do not need to have the right words.
          </h2>
          <div className="space-y-4 font-garamond text-xl md:text-2xl leading-relaxed" style={{ color: "rgba(248,246,242,0.65)" }}>
            <p>
              Many people arrive here feeling confused, exhausted, or unsure whether what they experienced even &ldquo;counts.&rdquo;
            </p>
            <p>
              You do not need to explain everything perfectly. You do not need a diagnosis, a label, or certainty.
            </p>
            <p style={{ color: "rgba(248,246,242,0.45)", fontStyle: "italic" }}>
              The first step is simply a conversation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
