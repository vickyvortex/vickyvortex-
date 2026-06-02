// Dignity Clinic — Credentials Page
// app/credentials/page.tsx
// Stack: Next.js 15 / Tailwind CSS
// Palette: #0D0D0D bg · #F8F6F2 text · #3D9FA8 teal accent

export const metadata = {
  title: 'Credentials | Dignity Clinic',
  description:
    'The training, certifications and lived experience behind Dignity Clinic. Nutritional therapy, nervous-system regulation, movement, energy medicine, teaching and more.',
}

export default function CredentialsPage() {
  return (
    <main className="bg-[#0D0D0D] text-[#F8F6F2] min-h-screen">

      {/* ── HERO ── */}
      <section className="px-6 md:px-16 lg:px-28 pt-32 pb-20 max-w-5xl mx-auto">
        <p className="text-[#3D9FA8] tracking-[0.25em] uppercase text-xs mb-8 font-light">
          Credentials
        </p>
        <h1
          className="font-['Cormorant_Garamond'] text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] mb-10"
          style={{ fontStyle: 'italic' }}
        >
          The architecture
          <br />
          behind the work.
        </h1>
        <div className="w-12 h-px bg-[#3D9FA8] mb-10" />
        <p className="font-['EB_Garamond'] text-lg md:text-xl text-[#C8C4BC] leading-relaxed max-w-2xl">
          Two decades of study, lived experience, and practice across nutrition, nervous-system regulation, movement, energy medicine, education and trauma-informed recovery. Nothing was random. Everything connects.
        </p>
      </section>

      {/* ── CREDENTIALS GRID ── */}
      <section className="px-6 md:px-16 lg:px-28 py-20 max-w-5xl mx-auto border-t border-[#1E1E1E]">

        {/* Health & Nutrition */}
        <div className="mb-16">
          <p className="font-['Cormorant_Garamond'] text-2xl mb-8 text-[#F8F6F2]">
            Health &amp; Nutrition
          </p>
          <ul className="font-['EB_Garamond'] text-[#C8C4BC] space-y-4 text-lg leading-relaxed">
            <li className="flex gap-4 items-start">
              <span className="mt-2 w-1 h-1 rounded-full bg-[#3D9FA8] flex-shrink-0" />
              Level 6 Diploma in Health Care and Nutritional Therapy (RQF) — South London College
            </li>
            <li className="flex gap-4 items-start">
              <span className="mt-2 w-1 h-1 rounded-full bg-[#3D9FA8] flex-shrink-0" />
              Holistic Health Coaching — Institute for Integrative Nutrition &amp; Precision Nutrition, Level 2
            </li>
            <li className="flex gap-4 items-start">
              <span className="mt-2 w-1 h-1 rounded-full bg-[#3D9FA8] flex-shrink-0" />
              The Science of Well-Being — Yale University
            </li>
            <li className="flex gap-4 items-start">
              <span className="mt-2 w-1 h-1 rounded-full bg-[#3D9FA8] flex-shrink-0" />
              Whole-Food Plant-Based Nutrition — Cornell University
            </li>
            <li className="flex gap-4 items-start">
              <span className="mt-2 w-1 h-1 rounded-full bg-[#3D9FA8] flex-shrink-0" />
              Nutrition &amp; Healthy Lifestyle — Cornell University
            </li>
          </ul>
        </div>

        {/* Movement & Nervous System */}
        <div className="mb-16 pt-12 border-t border-[#1E1E1E]">
          <p className="font-['Cormorant_Garamond'] text-2xl mb-8 text-[#F8F6F2]">
            Movement &amp; Nervous System
          </p>
          <ul className="font-['EB_Garamond'] text-[#C8C4BC] space-y-4 text-lg leading-relaxed">
            <li className="flex gap-4 items-start">
              <span className="mt-2 w-1 h-1 rounded-full bg-[#3D9FA8] flex-shrink-0" />
              Certified Yoga Teacher Diploma — Yoga Teachers College, Barcelona
            </li>
            <li className="flex gap-4 items-start">
              <span className="mt-2 w-1 h-1 rounded-full bg-[#3D9FA8] flex-shrink-0" />
              Pilates Instructor — Pilates on Fifth Academy International, New York
            </li>
            <li className="flex gap-4 items-start">
              <span className="mt-2 w-1 h-1 rounded-full bg-[#3D9FA8] flex-shrink-0" />
              Breathwork Coach
            </li>
            <li className="flex gap-4 items-start">
              <span className="mt-2 w-1 h-1 rounded-full bg-[#3D9FA8] flex-shrink-0" />
              Nervous-System Regulation
            </li>
            <li className="flex gap-4 items-start">
              <span className="mt-2 w-1 h-1 rounded-full bg-[#3D9FA8] flex-shrink-0" />
              Hypnosis &amp; NLP — MasterMinds, Hong Kong
            </li>
            <li className="flex gap-4 items-start">
              <span className="mt-2 w-1 h-1 rounded-full bg-[#3D9FA8] flex-shrink-0" />
              Behaviour Change
            </li>
          </ul>
        </div>

        {/* Energy Medicine & Deeper Modalities */}
        <div className="mb-16 pt-12 border-t border-[#1E1E1E]">
          <p className="font-['Cormorant_Garamond'] text-2xl mb-8 text-[#F8F6F2]">
            Energy Medicine &amp; Deeper Modalities
          </p>
          <ul className="font-['EB_Garamond'] text-[#C8C4BC] space-y-4 text-lg leading-relaxed">
            <li className="flex gap-4 items-start">
              <span className="mt-2 w-1 h-1 rounded-full bg-[#3D9FA8] flex-shrink-0" />
              Quantum Healing Hypnosis Therapy (QHHT) Levels 1 &amp; 2 — Julia Cannon, Quantum Healing Hypnosis Academy
            </li>
            <li className="flex gap-4 items-start">
              <span className="mt-2 w-1 h-1 rounded-full bg-[#3D9FA8] flex-shrink-0" />
              Emotion Code &amp; Body Code — Dr Bradley Nelson, Discover Healing
            </li>
            <li className="flex gap-4 items-start">
              <span className="mt-2 w-1 h-1 rounded-full bg-[#3D9FA8] flex-shrink-0" />
              B.E.S.T. &amp; Spiritual B.E.S.T. — Sue Morter, Bio Energetic Synchronisation Technique
            </li>
            <li className="flex gap-4 items-start">
              <span className="mt-2 w-1 h-1 rounded-full bg-[#3D9FA8] flex-shrink-0" />
              Applied Astrology — Debra Silverman
            </li>
            <li className="flex gap-4 items-start">
              <span className="mt-2 w-1 h-1 rounded-full bg-[#3D9FA8] flex-shrink-0" />
              Shamanic Extraction Healing, Dying &amp; Beyond, Power Soul Retrieval — Foundation for Shamanic Studies (Hong Kong, Taiwan &amp; Tokyo)
            </li>
            <li className="flex gap-4 items-start">
              <span className="mt-2 w-1 h-1 rounded-full bg-[#3D9FA8] flex-shrink-0" />
              Advanced Ho'oponopono — Global Sciences Foundation
            </li>
            <li className="flex gap-4 items-start">
              <span className="mt-2 w-1 h-1 rounded-full bg-[#3D9FA8] flex-shrink-0" />
              Soul Speak — Language of the Soul through the Body — Julia Cannon, Quantum Healing Hypnosis Academy
            </li>
            <li className="flex gap-4 items-start">
              <span className="mt-2 w-1 h-1 rounded-full bg-[#3D9FA8] flex-shrink-0" />
              Advanced Tarot Practitioner — Richard Knight Tarot Academy
            </li>
            <li className="flex gap-4 items-start">
              <span className="mt-2 w-1 h-1 rounded-full bg-[#3D9FA8] flex-shrink-0" />
              Meditation, Consciousness &amp; Spiritual Development
            </li>
          </ul>
        </div>

        {/* Teaching & Education */}
        <div className="pt-12 border-t border-[#1E1E1E]">
          <p className="font-['Cormorant_Garamond'] text-2xl mb-8 text-[#F8F6F2]">
            Teaching &amp; Education
          </p>
          <p className="font-['EB_Garamond'] text-[#C8C4BC] text-lg leading-relaxed max-w-3xl">
            Thirteen years of teaching across English, ESL, SEND, college-level Functional Skills, and international education — including CELTA (Cambridge) and PGDE (University of Hong Kong). Former lifestyle and travel journalist; spa, hotel, body treatment and eco-tourism reviewer. Design, sustainability, scuba diving, and marine conservation background.
          </p>
          <p className="font-['EB_Garamond'] text-[#C8C4BC] text-lg leading-relaxed max-w-3xl mt-4">
            Amazon #1 Bestselling Contributing Author — <em>She Said Yes to Herself</em>.
          </p>
        </div>

      </section>

      {/* ── SCOPE OF PRACTICE ── */}
      <section className="bg-[#0A1A1C] px-6 md:px-16 lg:px-28 py-16">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#3D9FA8] tracking-[0.25em] uppercase text-xs mb-6 font-light">
            Scope of Practice
          </p>
          <p className="font-['EB_Garamond'] text-[#C8C4BC] text-base leading-relaxed">
            Dignity Clinic is an education and coaching-based approach. It does not diagnose, prescribe, treat disease, or replace medical, psychological, psychiatric, nutritional, or specialist therapeutic care. Where clinical support is needed, clients are encouraged to work with appropriately qualified healthcare professionals.
          </p>
        </div>
      </section>

      {/* ── CLOSING CTA ── */}
      <section className="px-6 md:px-16 lg:px-28 py-28 max-w-4xl mx-auto text-center">
        <h2
          className="font-['Cormorant_Garamond'] text-3xl md:text-5xl font-light leading-tight mb-10 text-[#F8F6F2]"
          style={{ fontStyle: 'italic' }}
        >
          Ready to begin?
        </h2>
        <p className="font-['EB_Garamond'] text-[#C8C4BC] text-lg leading-relaxed mb-12 max-w-xl mx-auto">
          Book a Dignity Reset Consultation to clarify what happened, what your body is carrying, and whether the Nervous System Reset™ programme is the right next step.
        </p>
        <a
          href="/#contact"
          className="inline-block border border-[#3D9FA8] text-[#3D9FA8] font-['EB_Garamond'] text-base px-10 py-4 tracking-widest uppercase hover:bg-[#3D9FA8] hover:text-[#0D0D0D] transition-all duration-300"
        >
          Book a Consultation
        </a>
      </section>

    </main>
  )
}
