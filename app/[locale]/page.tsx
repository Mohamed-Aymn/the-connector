import AboutSection from "@/components/pages/home/aboutSection";
import ClientsSection from "@/components/pages/home/clientsSection";
import CtaSection from "@/components/pages/home/ctaSection";
import HeroSection from "@/components/pages/home/heroSection";
import ServicesSection from "@/components/pages/home/servicesSection";
import ValuesSection from "@/components/pages/home/valuesSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ValuesSection />
      <ClientsSection />
      <CtaSection />
    </>
  );
}
