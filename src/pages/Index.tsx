import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import About from '@/components/About';
import ContactSection from '@/components/ContactSection';
import RiskDisclaimer from '@/components/RiskDisclaimer';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import FloatingContact from '@/components/FloatingContact';
import useScrollAnimation from '@/utils/useScrollAnimation';

const Index = () => {
  // Initialize scroll animations
  useScrollAnimation();

  // Set page title
  useEffect(() => {
    document.title = "Shasti Profits | Learn. Analyse. Grow.";
  }, []);

  // Deep links such as /#contact (also used by the old /about and /contact redirects)
  useEffect(() => {
    const { hash } = window.location;
    if (!hash) return;
    const t = setTimeout(() => document.querySelector(hash)?.scrollIntoView(), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <HowItWorks />
      {/* <Testimonials /> */}
      <Pricing />
      <FAQ />
      <CTA />
      
      <ContactSection />
      {/* <RiskDisclaimer /> */}
      <Footer />
      <FloatingContact />
      <ScrollToTop />
    </div>
  );
};

export default Index;
