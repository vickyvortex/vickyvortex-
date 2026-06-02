import Link from "next/link";

export const metadata = {
  title: "Speaking | Dignity Clinic",
  description:
    "Why Understanding Trauma Isn't Enough — a talk on Family Scapegoating Abuse, nervous system recovery, and practical steps to restore energy and identity.",
};

export default function TalkPage() {
  return (
    <main style={{ background: '#0D0D0D', minHeight: '100vh' }}>

      {/* Hero Image */}
      <div style={{
        width: '100%',
        height: '85vh',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <img
          src="/images/10.jpg"
          alt="Vicky Vortex — Speaking"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 20%',
            display: 'block',
          }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(13,13,13,0.2) 0%, rgba(13,13,13,0) 40%, rgba(13,13,13,0.8) 100%)',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '4rem',
          left: '3rem',
          right: '3rem',
        }}>
          <p style={{
            fontFamily: "var(--font-eb-garamond)",
            fontSize: '0.75rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: '#3D9FA8',
            marginBottom: '1rem',
          }}>The Talk</p>
          <h1 style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            lineHeight: 1.1,
            color: '#F8F6F2',
            fontWeight: 300,
          }}>
            Why Understanding Trauma<br />
            <em>Isn&apos;t Enough</em>
          </h1>
        </div>
      </div>

      {/* Hero */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 pt-16 pb-16">
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 pb-24">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="space-y-6">
            {[
              "Many people are familiar with trauma through the work of Gabor Maté — and understand why high-performing individuals can feel exhausted, anxious, or disconnected.",
              "Family Scapegoating Abuse, as identified by Rebecca C. Mandeville, explains how one person in a family system is assigned the role of \u201cthe problem\u201d — not because of who they are, but because of what the system needs.",
              "Understanding this is powerful.",
              "But if your environment still activates stress responses, your body stays in survival mode.",
            ].map((text, i) => (
              <p
                key={i}
                className="text-base md:text-lg leading-relaxed"
                style={{ fontFamily: "var(--font-eb-garamond)", color: 'rgba(248,246,242,0.7)' }}
              >
                {text}
              </p>
            ))}
          </div>

          {/* Right */}
          <div className="space-y-8">
            <div className="border-l-4 border-[#3D9FA8] pl-6 py-2">
              <p
                className="text-xl font-semibold leading-snug"
                style={{ fontFamily: "var(--font-cormorant)", color: '#F8F6F2' }}
              >
                The work becomes practical.
              </p>
            </div>

            <ul className="space-y-4">
              {[
                "Reduce exposure to what activates you",
                "Stabilise the body",
                "Rebuild identity outside the assigned role",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 text-base"
                  style={{ fontFamily: "var(--font-eb-garamond)", color: 'rgba(248,246,242,0.7)' }}
                >
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#3D9FA8] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <p
              className="text-base italic"
              style={{ fontFamily: "var(--font-eb-garamond)", color: '#3D9FA8' }}
            >
              That&apos;s where energy returns.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ background: 'rgba(248,246,242,0.04)', borderTop: '1px solid rgba(248,246,242,0.08)' }} className="py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <p
            className="text-xs uppercase tracking-[0.25em] text-[#3D9FA8] mb-6"
            style={{ fontFamily: "var(--font-eb-garamond)" }}
          >
            Book This Talk
          </p>
          <h2
            className="text-3xl md:text-4xl leading-[1.1] mb-8 max-w-lg"
            style={{ fontFamily: "var(--font-cormorant)", color: '#F8F6F2' }}
          >
            Bring this talk to your organisation, event, or community.
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-[#3D9FA8] text-white text-sm uppercase tracking-[0.2em] px-10 py-4 hover:bg-[#2d8a93] transition-colors duration-300"
            style={{ fontFamily: "var(--font-eb-garamond)" }}
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </main>
  );
}
