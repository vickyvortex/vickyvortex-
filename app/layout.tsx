import type { Metadata } from 'next'
import { Cormorant_Garamond, EB_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-eb-garamond',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Dignity Clinic | Recover from Family Scapegoating Abuse & Restore Your Dignity',
  description:
    'Dignity Clinic helps survivors of family scapegoating abuse, narcissistic abuse, emotional invalidation, and relational betrayal restore dignity, regulate the nervous system, rebuild self-trust, and recover from the physiological cost of chronic shame and stress.',
  metadataBase: new URL('https://www.dignityclinic.co.uk'),
  keywords: [
    'family scapegoating abuse',
    'scapegoat recovery',
    'narcissistic abuse recovery',
    'dignity restoration',
    'nervous system healing',
    'trauma-informed coaching',
    'emotional invalidation',
    'relational betrayal',
    'chronic shame',
    'self-trust',
    'inflammation and trauma',
    'ACEs',
    'adverse childhood experiences',
    'trauma and the body',
    'nervous system reset',
    'identity reconstruction',
    'embodied healing',
    'London trauma-informed coaching',
    'online trauma-informed coaching',
    'Vicky Vortex',
  ],
  alternates: {
    canonical: 'https://www.dignityclinic.co.uk',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: 'Dignity Clinic | You Were Never the Problem',
    description:
      'For survivors of scapegoating, narcissistic abuse, and relational betrayal who are ready to return shame to its rightful owners and rebuild life from dignity, safety, and self-trust.',
    url: 'https://www.dignityclinic.co.uk',
    siteName: 'Dignity Clinic',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dignity Clinic | Recover from Family Scapegoating Abuse & Restore Your Dignity',
    description:
      'Nervous system recovery and identity reconstruction for high-functioning adults after family scapegoating abuse and narcissistic abuse.',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${ebGaramond.variable} ${dmSans.variable}`}
    >
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'Dignity Clinic',
              url: 'https://www.dignityclinic.co.uk',
              logo: 'https://www.dignityclinic.co.uk/favicon.ico',
              description:
                'Dignity Clinic offers trauma-informed recovery coaching for people affected by family scapegoating abuse, narcissistic abuse, emotional invalidation, and relational betrayal.',
              founder: {
                '@type': 'Person',
                name: 'Vicky Vortex',
              },
              areaServed: ['GB', 'US', 'AU'],
              serviceType: [
                'Family Scapegoating Abuse Recovery',
                'Narcissistic Abuse Recovery',
                'Nervous System Reset',
                'Trauma-Informed Coaching',
                'Identity Reconstruction',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                email: 'restore@dignityclinic.co.uk',
                contactType: 'customer support',
              },
            }),
          }}
        />
      </head>
      <body className="bg-background text-foreground font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
