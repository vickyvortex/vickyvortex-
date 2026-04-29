"use client";

const symptoms = [
  { label: "Exhaustion", description: "Fatigue that sleep does not fix — the kind that comes from years of hypervigilance and emotional labour." },
  { label: "Hypervigilance", description: "A nervous system that never fully switches off. Always scanning, always braced." },
  { label: "Digestive disruption", description: "The gut is directly connected to the stress response. Chronic relational stress often lives in the body's digestion." },
  { label: "Sleep disturbance", description: "Difficulty falling asleep, staying asleep, or waking feeling unrested — common when the nervous system cannot downregulate." },
  { label: "Brain fog", description: "Difficulty concentrating, remembering, or thinking clearly — a common response to prolonged chronic stress." },
  { label: "Emotional shutdown", description: "Numbness, disconnection, or the inability to feel — the body's way of protecting itself from overwhelm." },
  { label: "Loss of identity", description: "Years of being redefined, blamed or dismissed can erode your sense of who you are outside the family role." },
]

export default function YouBodyKeepsScore() {  return (
    <section style={{ background: '#0D0D0D', borderTop: '1px solid rgba(248,246,242,0.06)' }} className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs uppercase tracking-[0.25em] text-[#3D9FA8] mb-8" style={{ fontFamily: "var(--font-eb-garamond)" }}>
          The Body's Story
        </p>
        <h2 className="font-cormorant font-light text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-tight mb-8" style={{ color: '#F8F6F2', maxWidth: '700px' }}>
          The Body Keeps the Score of Long-Term Emotional Stress
        </h2>
        <p className="font-garamond text-xl md:text-2xl leading-relaxed mb-16" style={{ color: 'rgba(248,246,242,0.7)', maxWidth: '600px' }}>
          Chronic relational stress — especially from family scapegoating, narcissistic dynamics, and prolonged emotional suppression — does not stay in the mind. It settles into the body.
        </p>
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
          {symptoms.map((s, i) => (
            <div key={i} className="flex gap-5 items-start">
              <div className="mt-2 w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#3D9FA8', width: '6px', height: '6px', marginTop: '10px' }} />
              <div>
                <p className="font-cormorant font-light text-xl mb-1" style={{ color: '#F8F6F2' }}>{s.label}</p>
                <p className="font-garamond text-base leading-relaxed" style={{ color: 'rgba(248,246,242,0.6)' }}>{s.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 max-w-2xl">
          <p className="font-cormorant italic text-xl md:text-2xl leading-relaxed" style={{ color: 'rgba(248,246,242,0.5)' }}>
            These are not signs of weakness or personal failure. They are the body's intelligent adaptation to prolonged unsafe conditions.
          </p>
        </div>
      </div>
    </section>
  );
}
