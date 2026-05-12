import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { DSA } from "@/components/portfolio/DSA";
import { Projects } from "@/components/portfolio/Projects";
import { CreativeLab } from "@/components/portfolio/CreativeLab";
import { Journey } from "@/components/portfolio/Journey";
import { Achievements } from "@/components/portfolio/Achievements";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { Loader } from "@/components/portfolio/Loader";
import { Marquee, ScrollProgress } from "@/components/portfolio/Bits";

export default function Index() {
  return (
    <main className="relative min-h-screen bg-background text-foreground antialiased">
      <Loader />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <DSA />
      <Projects />
      <Marquee />
      <CreativeLab />
      <Journey />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}
