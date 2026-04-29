import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import NeverRandom from '@/components/NeverRandom'
import AuthorityBlock from '@/components/AuthorityBlock'
import InsightNotEnough from '@/components/InsightNotEnough'
import NervousSystemReset from '@/components/NervousSystemReset'
import About from '@/components/About'
import WorkWithMe from '@/components/WorkWithMe'
import Approach from '@/components/Approach'
import Credentials from '@/components/Credentials'
import Testimonials from '@/components/Testimonials'
import ACELeadMagnet from '@/components/ACELeadMagnet'
import Contact from '@/components/Contact'
import CtaSection from '@/components/CtaSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <NeverRandom />
      <AuthorityBlock />
      <InsightNotEnough />
      <NervousSystemReset />
      <About />
      <WorkWithMe />
      <Approach />
      <Credentials />
      <Testimonials />
      <ACELeadMagnet />
      <CtaSection />
      <Contact />
      <Footer />
    </>
  )
}
