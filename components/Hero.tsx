"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section style={{ 
      background: '#0D0D0D', 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Pure dark left panel — text lives here, zero image bleed */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        width: '50%',
        minHeight: '100vh',
        background: '#0D0D0D',
        display: 'flex',
        alignItems: 'center',
        padding: '8rem 4rem 8rem 6rem',
        flexShrink: 0,
      }}>
        <div>
          <p style={{ 
            fontFamily: "var(--font-eb-garamond)",
            fontSize: '0.75rem', 
            letterSpacing: '0.25em', 
            textTransform: 'uppercase', 
            color: '#3D9FA8', 
            marginBottom: '2rem',
            fontWeight: 500
          }}>
            Nervous System Recovery
          </p>
          <h1 style={{ 
            fontFamily: "var(--font-cormorant)",
            fontSize: 'clamp(2.2rem, 3.5vw, 3.5rem)', 
            lineHeight: 1.1, 
            color: '#F8F6F2', 
            marginBottom: '1.5rem' 
          }}>
            Family Scapegoating<br />
            Abuse Is Not a<br />
            Personality Issue.<br />
            <em>It&apos;s a Nervous</em><br />
            <em>System Injury.</em>
          </h1>
          <p style={{ 
            fontFamily: "var(--font-eb-garamond)",
            fontSize: '1.1rem', 
            color: 'rgba(248,246,242,0.7)', 
            lineHeight: 1.7, 
            marginBottom: '1.5rem' 
          }}>
            I help people recover their energy, identity, and clarity after prolonged exposure to toxic family systems.
          </p>
          <p style={{ 
            fontFamily: "var(--font-eb-garamond)",
            fontSize: '0.95rem', 
            color: '#3D9FA8', 
            fontStyle: 'italic', 
            lineHeight: 1.7, 
            marginBottom: '2.5rem' 
          }}>
            I don&apos;t just help you understand what happened.<br />
            I help your body stop reliving it.
          </p>
          <Link href="#work-with-me" style={{
            display: 'inline-block',
            background: '#3D9FA8',
            color: '#fff',
            fontFamily: "var(--font-eb-garamond)",
            fontSize: '0.8rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            padding: '1rem 2.5rem',
            textDecoration: 'none',
          }}>
            Begin the Reset
          </Link>
        </div>
      </div>

      {/* Right panel — pure CSS background image, no Next.js Image */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '55%',
        height: '100%',
        backgroundImage: 'url(/images/PHK_4571ret.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        zIndex: 1,
      }}>
        {/* Left edge fade into dark */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, #0D0D0D 0%, rgba(13,13,13,0.5) 20%, rgba(13,13,13,0) 45%)',
        }} />
      </div>
    </section>
  );
}
