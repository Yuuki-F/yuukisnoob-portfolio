import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Services from "@/components/Services";
import Games from "@/components/Games";
import Reel from "@/components/Reel";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Marquee />
        <About />
        <Services />
        <Games />
        <Reel />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
