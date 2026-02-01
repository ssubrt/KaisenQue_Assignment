import Header from "@/components/Header";
import Marquee from "@/components/Marquee";
import Hero from "@/components/Hero";
import LegalSolutions from "@/components/LegalSolutions";
import OurProcess from "@/components/OurProcess";
import OurMission from "@/components/OurMission";
import Resources from "@/components/Resources";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Marquee />
      <Hero />
      <LegalSolutions />
      <OurProcess />
      <OurMission />
      <Resources />
      <ContactForm />
      <FAQ />
      <CTABanner />
      <Footer />
    </div>
  );
};

export default Index;
