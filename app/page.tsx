import Hero from "@/components/Hero";
import NeverRandom from "@/components/NeverRandom";
import InsightNotEnough from "@/components/InsightNotEnough";
import NervousSystemReset from "@/components/NervousSystemReset";
import AuthorityBlock from "@/components/AuthorityBlock";
import About from "@/components/About";
import WorkWithMe from "@/components/WorkWithMe";
import CtaSection from "@/components/CtaSection";
import Approach from "@/components/Approach";
import Credentials from "@/components/Credentials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata = {
  title:
    "Dignity Clinic | Family Scapegoating Abuse Recovery & Nervous System Reset™",
  description:
    "I help high-functioning individuals recover their energy, identity, and clarity after prolonged exposure to toxic family systems. The Nervous System Reset™ — 8–12 week programme.",
  keywords: [
    "family scapegoating abuse recovery",
    "narcissistic family recovery",
    "no contact healing",
    "nervous system healing",
    "toxic family recovery",
    "emotional abuse recovery",
    "family scapegoat recovery",
  ],
};

export default function Home() {
  return (
    <main>
      <Hero />
      <NeverRandom />
      <InsightNotEnough />
      <NervousSystemReset />
      <AuthorityBlock />
      <About />
      <WorkWithMe />
      <CtaSection />
      <Approach />
      <Credentials />
      <Contact />
      <Footer />
    </main>
  );
}
