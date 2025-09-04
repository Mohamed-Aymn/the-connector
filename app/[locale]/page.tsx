import AboutSection from "@/components/pages/home/aboutSection";
import ClientsSection from "@/components/pages/home/clientsSection";
import HeroSection from "@/components/pages/home/heroSection";
import ServicesSection from "@/components/pages/home/servicesSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ClientsSection />
    </>
  );
}
