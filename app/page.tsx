import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Packages from "@/components/Packages";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Packages />
      <About />
      <Testimonials />
      <Contact />
      <Footer />

      {/* Floating WhatsApp Button */}
      <WhatsappButton />
    </>
  );
}
