import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Brain, Link } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Shield,
      title: "The Problem",
      description: "Traditional AI training requires centralizing sensitive data, creating privacy risks and regulatory compliance challenges across organizations.",
      gradient: "from-red-500/20 to-red-600/20",
    },
    {
      icon: Brain,
      title: "Our Solution", 
      description: "Federated learning enables collaborative AI training while keeping data decentralized. Each participant trains locally and shares only model updates.",
      gradient: "from-primary/20 to-secondary/20",
    },
    {
      icon: Link,
      title: "Blockchain Trust",
      description: "Smart contracts ensure transparent, tamper-proof coordination. Immutable ledger tracks contributions and validates model integrity automatically.",
      gradient: "from-accent/20 to-primary/20",
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 bg-glow bg-clip-text text-transparent">
            Revolutionizing AI Training
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Combining federated learning with blockchain technology to create a trustless, 
            privacy-preserving ecosystem for collaborative AI development.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className={`bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-500 glow-effect group animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-orbitron text-foreground">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
          {[
            { label: "Privacy Preserved", value: "100%" },
            { label: "Training Speed", value: "3x Faster" },
            { label: "Data Security", value: "Immutable" },
            { label: "Global Reach", value: "Unlimited" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${0.8 + index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl font-orbitron font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;