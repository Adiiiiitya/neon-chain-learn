import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden cosmic-bg">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 cosmic-grid opacity-20"></div>
      
      {/* Floating Stars */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Central Animated Orb */}
          <div className="relative mb-12 flex justify-center">
            <div className="relative">
              {/* Main Orb */}
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full orb-glow animate-float"></div>
              
              {/* Orbiting Rings */}
              <div className="absolute inset-0 rounded-full border border-primary/30 animate-rotate-slow"></div>
              <div
                className="absolute inset-4 rounded-full border border-secondary/40 animate-rotate-slow"
                style={{ animationDirection: "reverse", animationDuration: "15s" }}
              ></div>
              <div
                className="absolute inset-8 rounded-full border border-accent/20 animate-rotate-slow"
                style={{ animationDuration: "25s" }}
              ></div>
              
              {/* Inner Glow */}
              <div className="absolute inset-16 md:inset-20 rounded-full bg-primary/20 animate-pulse-glow"></div>
            </div>
          </div>

          {/* Hero Text */}
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-bold mb-6 bg-glow bg-clip-text text-transparent leading-tight">
              Blockchain-Enabled
              <br />
              <span className="text-primary">Federated Learning</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Train AI Models Together.{" "}
              <span className="text-accent">Keep Your Data Private.</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-orbitron px-8 py-6 text-lg glow-effect group"
              >
                Try Demo
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
              <div className="w-1 h-2 bg-primary rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;