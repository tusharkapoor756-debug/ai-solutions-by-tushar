import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import LiveDemo from "@/components/LiveDemo";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import BackgroundEffects from "@/components/BackgroundEffects";

export default function Home() {
  return (
    <main className="min-h-screen">
      <BackgroundEffects />
      <Navbar />
      
      <div className="relative z-10">
        <Hero />
        <Services />
        <HowItWorks />
        <LiveDemo />
        <WhyChooseUs />
        <Contact />
        <CTASection />
        <ScrollToTop />
        <Footer />
      </div>
    </main>
  );
}
