import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Database, FileCheck, BarChart3, Lock, Zap, Globe, Users } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Privacy-Preserving",
      description: "Advanced cryptographic techniques ensure raw data never leaves your infrastructure while still enabling collaborative learning.",
      color: "from-red-500/20 to-pink-500/20"
    },
    {
      icon: Database,
      title: "Immutable Blockchain Storage", 
      description: "All model updates and training metadata are stored on an immutable ledger, providing complete audit trails and transparency.",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: FileCheck,
      title: "Trustless Smart Contracts",
      description: "Automated smart contracts handle model aggregation, validation, and reward distribution without requiring trust in intermediaries.",
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: BarChart3,
      title: "Transparent Accuracy",
      description: "Real-time performance metrics and model accuracy scores are publicly verifiable, ensuring quality and preventing gaming.",
      color: "from-purple-500/20 to-violet-500/20"
    },
    {
      icon: Lock,
      title: "Zero-Knowledge Proofs",
      description: "Prove computation validity without revealing sensitive information using cutting-edge zero-knowledge cryptographic protocols.",
      color: "from-indigo-500/20 to-blue-500/20"
    },
    {
      icon: Zap,
      title: "Lightning Fast Sync",
      description: "Optimized consensus mechanisms and compression algorithms enable rapid model synchronization across global networks.",
      color: "from-yellow-500/20 to-orange-500/20"
    },
    {
      icon: Globe,
      title: "Global Interoperability",
      description: "Cross-chain compatibility ensures your federated learning network can operate across different blockchain ecosystems.",
      color: "from-teal-500/20 to-green-500/20"
    },
    {
      icon: Users,
      title: "Decentralized Governance",
      description: "Community-driven governance tokens enable stakeholders to vote on protocol upgrades and network parameters democratically.",
      color: "from-rose-500/20 to-red-500/20"
    }
  ];

  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 bg-glow bg-clip-text text-transparent">
            Cutting-Edge Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Built with enterprise-grade security and scalability in mind, our platform combines 
            the best of blockchain technology with state-of-the-art federated learning protocols.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className={`bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-500 glow-effect group animate-fade-in cursor-pointer`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-orbitron text-foreground leading-tight">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Performance Metrics */}
        <div className="mt-20 max-w-5xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { metric: "99.9%", label: "Uptime Guarantee", icon: Shield },
              { metric: "<100ms", label: "Update Latency", icon: Zap },
              { metric: "10,000+", label: "Nodes Supported", icon: Globe },
              { metric: "256-bit", label: "Encryption Level", icon: Lock }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="group animate-fade-in"
                  style={{ animationDelay: `${1 + index * 0.1}s` }}
                >
                  <div className="mb-3">
                    <Icon className="w-8 h-8 text-primary mx-auto group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="text-3xl font-orbitron font-bold text-primary mb-2">
                    {stat.metric}
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;