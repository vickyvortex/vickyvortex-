import YouBodyKeepsScore from '@/components/YouBodyKeepsScore'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import NeverRandom from '@/components/NeverRandom'
import ThisIsForYou from '@/components/ThisIsForYou'
import AuthorityBlock from '@/components/AuthorityBlock'
import InsightNotEnough from '@/components/InsightNotEnough'
import NervousSystemReset from '@/components/NervousSystemReset'
import WorkWithMe from '@/components/WorkWithMe'
import About from '@/components/About'
import Approach from '@/components/Approach'
import Credentials from '@/components/Credentials'
import Testimonials from '@/components/Testimonials'
import ACELeadMagnet from '@/components/ACELeadMagnet'
import CtaSection from '@/components/CtaSection'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <NeverRandom />
      <ThisIsForYou />
      <YouBodyKeepsScore />
      <AuthorityBlock />
      <InsightNotEnough />
      <NervousSystemReset />
      <WorkWithMe />
      <About />
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