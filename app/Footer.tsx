export default function Footer() {
  return (
    <footer
      className="border-t px-6 md:px-16 lg:px-24 py-12"
      style={{ background: '#0D0D0D', borderColor: 'rgba(248,246,242,0.08)' }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

        {/* Wordmark */}
        <div>
          <p className="font-cormorant font-light text-xl tracking-[0.18em] uppercase" style={{ color: '#F8F6F2' }}>
            Dignity Clinic
          </p>
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase mt-1" style={{ color: 'rgba(248,246,242,0.3)' }}>
            dignityclinic.co.uk
          </p>
        </div>

        {/* Nav links */}
        <nav className="flex flex-wrap gap-6 md:gap-10">
          {['About', 'Credentials', 'Services', 'Approach', 'Contact'].map(link => (
            <a
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

        {/* Contact + legal */}
        <div className="text-right">
          <a
            href="mailto:transform@vickyvortex.com"
            className="font-sans text-xs tracking-[0.2em] uppercase transition-colors duration-200 block mb-3"
            style={{ color: 'rgba(248,246,242,0.4)' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#F8F6F2')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(248,246,242,0.4)')}
          >
            transform@vickyvortex.com
          </a>
          <p className="font-sans text-[10px] tracking-[0.15em]" style={{ color: 'rgba(248,246,242,0.2)' }}>
            © {new Date().getFullYear()} Dignity Clinic. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}
