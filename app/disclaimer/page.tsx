export default function Disclaimer() {
  return (
    <main style={{ background: '#0D0D0D', minHeight: '100vh', color: '#F8F6F2' }}>
      <div className="max-w-2xl mx-auto px-6 py-20 md:py-28 space-y-10">
        <p className="font-sans text-[10px] tracking-[0.4em] uppercase" style={{ color: 'rgba(248,246,242,0.35)' }}>Dignity Clinic</p>
        <h1 className="font-cormorant font-light leading-tight tracking-tight" style={{ fontSize: 'clamp(2.2rem,6vw,4rem)' }}>Disclaimer</h1>
        <div className="font-garamond text-xl md:text-2xl leading-relaxed space-y-6" style={{ color: 'rgba(248,246,242,0.7)' }}>
          <p>Dignity Clinic offers trauma-informed coaching and wellbeing support designed to help clients understand the impact of chronic stress, restore self-trust, and rebuild with greater clarity, stability, and dignity.</p>
          <p>This work is not a substitute for medical, psychological, or psychiatric diagnosis, advice, or treatment.</p>
          <p>I do not diagnose conditions, prescribe medication, or provide therapy in a clinical or regulated capacity.</p>
          <p>If you are experiencing significant mental health difficulties, distress, or require clinical care, please seek support from a qualified healthcare professional, GP, or licensed therapist.</p>
          <p>By engaging with Dignity Clinic services, you acknowledge that you are responsible for your own wellbeing and decisions. This work is intended for individuals who are ready to engage in a coaching and recovery-focused process.</p>
        </div>
        <div style={{ borderTop: '1px solid rgba(248,246,242,0.1)', paddingTop: '2rem' }}>
          <p className="font-garamond text-lg" style={{ color: 'rgba(248,246,242,0.4)', fontStyle: 'italic' }}>For enquiries: <a href="mailto:restore@dignityclinic.co.uk" style={{ color: 'rgba(248,246,242,0.6)' }}>restore@dignityclinic.co.uk</a></p>
        </div>
      </div>
    </main>
  )
}
