// Dignity Clinic — About Page
// Stack: Next.js 15 / Tailwind CSS
// Fonts: Cormorant Garamond (headings), EB Garamond (body)
// Palette: #0D0D0D bg · #F8F6F2 text · #3D9FA8 teal accent

export default function AboutPage() {
  return (
    <main className="bg-[#0D0D0D] text-[#F8F6F2] min-h-screen">

      {/* ── HERO ── */}
      <section className="px-6 md:px-16 lg:px-28 pt-32 pb-20 max-w-5xl mx-auto">
        <p className="text-[#3D9FA8] tracking-[0.25em] uppercase text-xs mb-8 font-light">
          About
        </p>
        <h1
          className="font-['Cormorant_Garamond'] text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] mb-10"
          style={{ fontStyle: "italic" }}
        >
          This work is not random.
          <br />
          It is the result of a whole life
          <br />
          gathering the architecture of vitality.
        </h1>
        <div className="w-12 h-px bg-[#3D9FA8] mb-10" />
        <p className="font-['EB_Garamond'] text-lg md:text-xl text-[#C8C4BC] leading-relaxed max-w-2xl">
          Dignity Clinic was created from the understanding that emotional survival does not stay only in the mind. It lives in the body.
        </p>
      </section>

      {/* ── WHAT DIGNITY CLINIC IS ── */}
      <section className="px-6 md:px-16 lg:px-28 py-20 max-w-5xl mx-auto border-t border-[#1E1E1E]">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-light mb-6 leading-tight">
              A whole-person approach to rebuilding dignity and vitality
            </h2>
          </div>
          <div className="font-['EB_Garamond'] text-[#C8C4BC] space-y-5 text-lg leading-relaxed">
            <p>
              Emotional depletion can show up as inflammation, exhaustion, poor sleep, chronic stress, digestive disruption, nervous-system dysregulation, low self-worth, and the quiet feeling of being disconnected from your own life.
            </p>
            <p>
              Dignity Clinic is a supportive, education-led, coaching-based space for people who are ready to stop abandoning themselves and begin rebuilding the foundations of safety, vitality, self-respect, and sovereignty.
            </p>
            <p>
              It is not therapy. It does not replace medical or psychological care. It is the space where practical tools, nervous-system education, and whole-person support meet the lived reality of what it takes to recover.
            </p>
          </div>
        </div>
      </section>

      {/* ── PULL QUOTE ── */}
      <section className="bg-[#0A1A1C] py-20 px-6 md:px-16 lg:px-28">
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="font-['Cormorant_Garamond'] text-2xl md:text-4xl font-light leading-relaxed text-[#F8F6F2]"
            style={{ fontStyle: "italic" }}
          >
            "Self-care is not selfish.
            <br />
            It is the first language of dignity."
          </p>
        </div>
      </section>

      {/* ── WHY THIS WORK IS PERSONAL ── */}
      <section className="px-6 md:px-16 lg:px-28 py-24 max-w-5xl mx-auto">
        <p className="text-[#3D9FA8] tracking-[0.25em] uppercase text-xs mb-6 font-light">
          Why this work is personal
        </p>
        <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-5xl font-light mb-12 leading-tight max-w-2xl">
          Vicky did not arrive at this work from theory alone.
        </h2>
        <div className="grid md:grid-cols-2 gap-16">
          <div className="font-['EB_Garamond'] text-[#C8C4BC] space-y-5 text-lg leading-relaxed">
            <p>
              Her work is shaped by lived experience, years of study, teaching, health education, nervous-system repair, grief, family trauma, spiritual inquiry, and the long process of rebuilding a life after emotional and physical depletion.
            </p>
            <p>
              She understands that people do not only need information.
            </p>
            <p>
              They need witness. They need safety. They need language for what happened. They need practical tools that help the body feel less under siege.
            </p>
            <p>
              They need to remember that self-neglect is not a virtue.
            </p>
          </div>
          <div className="font-['EB_Garamond'] text-[#C8C4BC] space-y-5 text-lg leading-relaxed">
            <p>
              Vicky's background spans health coaching, nutritional therapy, nervous-system regulation, movement, breathwork, behaviour change, QHHT, energy work, teaching, and the kind of lived recovery that no certification alone can provide.
            </p>
            <p>
              She was studying wellness before wellness became her profession. She was not jumping randomly from one interest to another. She was gathering the architecture of vitality from different worlds.
            </p>
            <p>
              Nothing was wasted.
            </p>
          </div>
        </div>
      </section>

      {/* ── CREDENTIAL STRIP ── */}
      <section className="border-t border-[#1E1E1E] px-6 md:px-16 lg:px-28 py-20 max-w-5xl mx-auto">
        <p className="text-[#3D9FA8] tracking-[0.25em] uppercase text-xs mb-10 font-light">
          Training &amp; Credentials
        </p>
        <div className="grid md:grid-cols-3 gap-10">

          {/* Column 1 — Foundation */}
          <div>
            <p className="font-['Cormorant_Garamond'] text-lg mb-5 text-[#F8F6F2]">
              Health &amp; Nutrition
            </p>
            <ul className="font-['EB_Garamond'] text-[#C8C4BC] space-y-2 text-base leading-relaxed">
              <li>Level 6 Nutritional Therapy — South London College</li>
              <li>Holistic Health Coaching — Institute for Integrative Nutrition</li>
              <li>The Science of Well-Being — Yale University</li>
              <li>Plant-Based Whole-Foods Nutrition — Cornell University</li>
              <li>Nutrition &amp; Healthy Lifestyle — Cornell University</li>
              <li>Health Coaching — Precision Nutrition</li>
            </ul>
          </div>

          {/* Column 2 — Movement & Regulation */}
          <div>
            <p className="font-['Cormorant_Garamond'] text-lg mb-5 text-[#F8F6F2]">
              Movement &amp; Nervous System
            </p>
            <ul className="font-['EB_Garamond'] text-[#C8C4BC] space-y-2 text-base leading-relaxed">
              <li>Yoga Teacher Training</li>
              <li>Pilates Teacher Training — Pilates on Fifth, New York</li>
              <li>Breath Coaching</li>
              <li>Hypnosis &amp; NLP</li>
              <li>Behaviour Change</li>
              <li>Nervous-System Regulation</li>
            </ul>
          </div>

          {/* Column 3 — Deeper Modalities */}
          <div>
            <p className="font-['Cormorant_Garamond'] text-lg mb-5 text-[#F8F6F2]">
              Deeper Modalities
            </p>
            <ul className="font-['EB_Garamond'] text-[#C8C4BC] space-y-2 text-base leading-relaxed">
              <li>QHHT Levels 1 &amp; 2</li>
              <li>Emotion Code / Body Code</li>
              <li>Applied Astrology — Debra Silverman</li>
              <li>Shamanic Studies — Kevin Turner</li>
              <li>Sue Morter Embodiment &amp; Energy Work</li>
              <li>Meditation, Consciousness &amp; Spiritual Development</li>
            </ul>
          </div>

        </div>

        {/* Academic & Teaching */}
        <div className="mt-12 pt-10 border-t border-[#1E1E1E]">
          <p className="font-['Cormorant_Garamond'] text-lg mb-5 text-[#F8F6F2]">
            Teaching &amp; Education
          </p>
          <p className="font-['EB_Garamond'] text-[#C8C4BC] text-base leading-relaxed max-w-3xl">
            Long teaching career spanning English, ESL, SEND, college-level Functional Skills, and international education across Asia and Europe — including CELTA (Cambridge) and PGDE (University of Hong Kong). Former lifestyle and travel journalist; spa, hotel, body treatment and eco-tourism reviewer; design, sustainability, and marine conservation background.
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
            Dignity Clinic is an education and coaching-based approach. It does not diagnose, prescribe, treat disease, or replace medical, psychological, psychiatric, nutritional, or specialist therapeutic care. Where clinical support is needed, clients are encouraged to work with appropriately qualified healthcare professionals. This work supports self-awareness, nervous-system education, lifestyle foundations, emotional recovery, self-care, self-respect, and the rebuilding of dignity after prolonged stress, neglect, or destructive relational dynamics.
          </p>
        </div>
      </section>

      {/* ── CLOSING ── */}
      <section className="px-6 md:px-16 lg:px-28 py-28 max-w-4xl mx-auto text-center">
        <h2
          className="font-['Cormorant_Garamond'] text-3xl md:text-5xl font-light leading-tight mb-10 text-[#F8F6F2]"
          style={{ fontStyle: "italic" }}
        >
          You are not too much.
          <br />
          You were not held correctly.
        </h2>
        <p className="font-['EB_Garamond'] text-[#C8C4BC] text-lg leading-relaxed mb-12 max-w-xl mx-auto">
          Dignity Clinic exists to help people stop abandoning themselves and start building the daily conditions for a more regulated, dignified, and vital life.
        </p>
        <a
          href="/contact"
          className="inline-block border border-[#3D9FA8] text-[#3D9FA8] font-['EB_Garamond'] text-base px-10 py-4 tracking-widest uppercase hover:bg-[#3D9FA8] hover:text-[#0D0D0D] transition-all duration-300"
        >
          Begin Here
        </a>
      </section>

    </main>
  );
}
