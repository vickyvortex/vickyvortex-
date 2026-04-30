'use client'

export default function Footer() {
  return (
    <footer
      className="border-t px-6 md:px-16 lg:px-24 py-12"
      style={{ background: '#0D0D0D', borderColor: 'rgba(248,246,242,0.08)' }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

        <div>
          <a href="/" aria-label="Dignity Clinic">
            <svg width="175" height="40" viewBox="0 0 175 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="15" y1="11" x2="2"  y2="3"  stroke="#C8A96E" strokeWidth="1"   strokeLinecap="round" opacity="0.75"/>
              <line x1="15" y1="11" x2="28" y2="3"  stroke="#C8A96E" strokeWidth="1"   strokeLinecap="round" opacity="0.75"/>
              <line x1="15" y1="11" x2="34" y2="7"  stroke="#C8A96E" strokeWidth="0.8" strokeLinecap="round" opacity="0.5"/>
              <line x1="15" y1="11" x2="-4" y2="7"  stroke="#C8A96E" strokeWidth="0.8" strokeLinecap="round" opacity="0.5"/>
              <rect x="10" y="8" width="10" height="6" rx="0.8" fill="none" stroke="#F5F2EC" strokeWidth="1.2"/>
              <circle cx="15" cy="11" r="2" fill="#C8A96E"/>
              <line x1="8" y1="14" x2="22" y2="14" stroke="#F5F2EC" strokeWidth="0.8" opacity="0.5"/>
              <path d="M11,14 L8,36 L22,36 L19,14 Z" fill="none" stroke="#F5F2EC" strokeWidth="1.2" strokeLinejoin="round"/>
              <rect x="13" y="28" width="4" height="7" rx="0.5" fill="#F5F2EC" opacity="0.3"/>
              <rect x="6" y="36" width="18" height="2.5" rx="0.8" fill="#F5F2EC"/>
              <text x="36" y="26" fontFamily="Georgia, 'Times New Roman', serif" fontSize="17" fontWeight="400" letterSpacing="1.5" fill="#F5F2EC">Dignity Clinic</text>
            </svg>
          </a>
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase mt-2" style={{ color: 'rgba(248,246,242,0.3)' }}>
            dignityclinic.co.uk
          </p>
        </div>

        <nav className="flex flex-wrap gap-6 md:gap-10">
          {['About', 'Credentials', 'Services', 'Approach', 'Contact'].map(link => (
            
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-sans text-xs tracking-[0.2em] uppercase transition-colors duration-200"
              style={{ color: 'rgba(248,246,242,0.4)' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#F8F6F2')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(248,246,242,0.4)')}
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="text-right">
          
            href="mailto:restore@dignityclinic.co.uk"
            className="font-sans text-xs tracking-[0.2em] uppercase transition-colors duration-200 block mb-3"
            style={{ color: 'rgba(248,246,242,0.4)' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#F8F6F2')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(248,246,242,0.4)')}
          >
            restore@dignityclinic.co.uk
          </a>
          <p className="font-sans text-[10px] tracking-[0.15em] mb-3" style={{ color: 'rgba(248,246,242,0.25)' }}>Dignity Clinic provides coaching and wellbeing support. This is not medical, psychological, or psychiatric treatment. If you require clinical care, please consult a qualified healthcare professional.</p>
          <p className="font-sans text-[10px] tracking-[0.15em] mb-2" style={{ color: 'rgba(248,246,242,0.2)' }}>© {new Date().getFullYear()} Dignity Clinic. All rights reserved.</p>
          <a href="/disclaimer" className="font-sans text-[10px] tracking-[0.15em] uppercase transition-colors duration-200" style={{ color: 'rgba(248,246,242,0.3)' }}>Disclaimer</a>
        </div>

      </div>
    </footer>
  )
}
