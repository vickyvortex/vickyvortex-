import Hero from "@/components/Hero";
import NeverRandom from "@/components/NeverRandom";
import InsightNotEnough from "@/components/InsightNotEnough";
import NervousSystemReset from "@/components/NervousSystemReset";
import About from "@/components/About";
import WorkWithMe from "@/components/WorkWithMe";
import Approach from "@/components/Approach";
import Credentials from "@/components/Credentials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Dignity Clinic | Family Scapegoating Abuse Recovery & Nervous System Reset™",
  description:
    "Support for high-functioning individuals recovering from Family Scapegoating Abuse, narcissistic family systems, and long-term relational stress. The Nervous System Reset™ — 8–12 week programme.",
  keywords: [
    "Family Scapegoating Abuse recovery",
    "narcissistic family recovery",
    "no contact healing",
    "nervous system regulation",
    "toxic family healing",
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
      <About />
      <WorkWithMe />
      <Approach />
      <Credentials />
      <Contact />
      <Footer />
    </main>
  );
}
