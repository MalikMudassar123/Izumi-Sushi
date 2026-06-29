import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Experience from "@/components/Experience";
import Gallery from "@/components/Gallery";
import Chef from "@/components/Chef";
import Testimonials from "@/components/Testimonials";
import Reservations from "@/components/Reservations";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Menu />
        <Experience />
        <Gallery />
        <Chef />
        <Testimonials />
        <Reservations />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
