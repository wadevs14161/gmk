import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServiceCardsSection from "../components/ServiceCardsSection";
import FeaturesSection from "../components/FeaturesSection";

export default function Home() {
  return (
    <>
      {/* Header */}
  <Header />
  <HeroSection />
  <AboutSection />
  <ServiceCardsSection />
  <FeaturesSection />
    </>
  );
}
