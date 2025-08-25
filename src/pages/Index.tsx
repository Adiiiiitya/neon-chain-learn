import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WorkflowSection from "@/components/WorkflowSection";
import FeaturesSection from "@/components/FeaturesSection";
import DemoSection from "@/components/DemoSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <WorkflowSection />
        <FeaturesSection />
        <DemoSection />
        {/* <TeamSection /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
