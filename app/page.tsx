import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import WhyUs from "@/components/sections/WhyUs";
import Properties from "@/components/sections/Properties";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const Testimonials = dynamic(() => import("@/components/sections/Testimonials"), { ssr: true });
const Contact = dynamic(() => import("@/components/sections/Contact"), { ssr: true });

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Properties />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
