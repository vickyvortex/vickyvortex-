'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Credentials from '@/components/Credentials'
import Approach from '@/components/Approach'
import Services from '@/components/Services'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Credentials />
      <Approach />
      <Services />
      <Contact />
    </>
  )
}
