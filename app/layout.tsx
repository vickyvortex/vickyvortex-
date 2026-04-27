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
  title: 'Dignity Clinic — Family Scapegoating Abuse Recovery',
  description:
    'Be heard. Be believed. Rebuild your health with dignity. Dignity Clinic is a space for people who have been dismissed, disbelieved, or failed by the medical system.',
  metadataBase: new URL('https://vickyvortex.com'),
  openGraph: {
    title: 'Dignity Clinic — Family Scapegoating Abuse Recovery',
    description: 'Be heard. Be believed. Rebuild your health with dignity.',
    url: 'https://vickyvortex.com',
    siteName: 'Dignity Clinic',
    locale: 'en_US',
    type: 'website',
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
      <body className="bg-background text-foreground font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
