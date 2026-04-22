import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import ACEStats from '@/components/ACEStats'
import Credentials from '@/components/Credentials'
import Approach from '@/components/Approach'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <ACEStats />
      <Credentials />
      <Approach />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}
