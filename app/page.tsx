import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import WorkShowcase from "@/components/sections/WorkShowcase";
import Manifesto from "@/components/sections/Manifesto";
import Footer from "@/components/layout/Footer";
import HeroVisualSection from "@/components/sections/HeroVisualSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import VideoShowcaseSection from "@/components/sections/VideoShowcaseSection";
import Integrations3DSection from "@/components/sections/Integrations3DSection";
import YourBrandDNASection from "@/components/sections/YourBrandDNASection";
import LanguagesSection from "@/components/sections/LanguagesSection";
import IntegrationsStackSection from "@/components/sections/IntegrationsStackSection";
import OneToolSection from "@/components/sections/OneToolSection";
import AboutTeamSection from "@/components/sections/AboutTeamSection";
import IntegrationsShowcaseSection from "@/components/sections/IntegrationsShowcaseSection";
import IntegrationsSection from "@/components/sections/IntegrationsSection";
import IntegrationsIdeasSection from "@/components/sections/IntegrationsIdeasSection";
import FaqSection from "@/components/sections/FaqSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import FullWidthVideoSection from "@/components/sections/FullWidthVideoSection";

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col items-center justify-start">
      <Navbar />

      <Hero />
      <WorkShowcase />
      <Manifesto />
      <HeroVisualSection />
      <VideoShowcaseSection />
      <HowItWorksSection />
      <Integrations3DSection />
      <YourBrandDNASection />
      <IntegrationsIdeasSection />
      <IntegrationsSection />
      <LanguagesSection />
      <IntegrationsStackSection />
      <OneToolSection />
      <AboutTeamSection />
      <IntegrationsShowcaseSection />
      <FaqSection />
      <FinalCtaSection />
      <FullWidthVideoSection />
      <Footer />
    </main>
  );
}
