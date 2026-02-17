import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LogoStrip from "@/components/LogoStrip";
import FeaturesGrid from "@/components/FeaturesGrid";
import ProcessSection from "@/components/ProcessSection";
import ContentFormats from "@/components/ContentFormats";
import DesignPhilosophy from "@/components/DesignPhilosophy";
import CredibilitySection from "@/components/CredibilitySection";
import TimelineSection from "@/components/TimelineSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ComparisonBlock from "@/components/ComparisonBlock";
import StickyCTA from "@/components/StickyCTA";

const Index = () => {
  return (
    <div id="top" className="min-h-screen bg-background pb-24 xl:pb-0">
      <Navbar />
      <HeroSection />
      <LogoStrip />
      <FeaturesGrid />
      <ProcessSection />
      <ComparisonBlock />
      <ContentFormats />
      <DesignPhilosophy />
      <CredibilitySection />
      <TimelineSection />
      <FinalCTA />
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default Index;
