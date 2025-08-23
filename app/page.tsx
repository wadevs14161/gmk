import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServiceCardsSection from "../components/ServiceCardsSection";
import FeaturesSection from "../components/FeaturesSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col">
        <Header />
        <HeroSection
          backgroundImage="/main-page-background.jpg"
          title={<><span className="font-bold">GMKAgent</span>は、<br />あなたの挑戦を支える、<br />イギリス専門のエージェントです。</>}
          subtitle={undefined}
          ctaHref="/consulting-form"
          ctaText="無料カウンセリング"
        />
        <AboutSection />
        <ServiceCardsSection />
        <FeaturesSection />
      </div>
      <Footer />
    </div>
  );
}
