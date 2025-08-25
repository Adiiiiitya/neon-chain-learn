import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Database, Cpu, Shield, Globe } from "lucide-react";

const WorkflowSection = () => {
  const steps = [
    {
      icon: Database,
      title: "Local Data Training",
      description: "Organizations train AI models on their private datasets locally, ensuring sensitive data never leaves their infrastructure.",
      step: "01"
    },
    {
      icon: Cpu,
      title: "Model Updates",
      description: "Only encrypted model parameters and gradients are extracted, preserving data privacy while capturing learning insights.",
      step: "02"
    },
    {
      icon: Shield,
      title: "Blockchain Verification", 
      description: "Smart contracts validate and aggregate updates on the immutable ledger, ensuring transparency and preventing tampering.",
      step: "03"
    },
    {
      icon: Globe,
      title: "Global Model Sync",
      description: "Verified global model is distributed back to all participants, improving everyone's AI capabilities collectively.",
      step: "04"
    }
  ];

  return (
    <section id="workflow" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 bg-glow bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A seamless four-step process that enables secure, collaborative AI training 
            across distributed organizations while maintaining complete data privacy.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.step} className="relative">
                  <Card
                    className={`bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-500 glow-effect group animate-fade-in h-full`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <CardHeader className="text-center pb-4">
                      {/* Step Number */}
                      <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-orbitron font-bold text-sm">
                        {step.step}
                      </div>
                      
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      
                      <CardTitle className="text-lg font-orbitron text-foreground">
                        {step.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="text-center">
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>

                  {/* Arrow for desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden xl:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                      <ArrowRight className="w-6 h-6 text-primary/60 animate-pulse" />
                    </div>
                  )}

                  {/* Arrow for mobile/tablet */}
                  {index < steps.length - 1 && (
                    <div className="xl:hidden flex justify-center my-4">
                      <ArrowRight className="w-6 h-6 text-primary/60 animate-pulse rotate-90" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Interactive Demo Visualization */}
          <div className="mt-20 p-8 rounded-2xl bg-card/30 backdrop-blur-sm border border-primary/20 animate-fade-in">
            <h3 className="text-2xl font-orbitron font-bold text-center mb-8 text-primary">
              Live Training Visualization
            </h3>
            
            <div className="flex justify-center items-center gap-8 max-w-5xl mx-auto">
              {/* Organizations Column */}
              <div className="flex flex-col gap-6">
                {[1, 2, 3].map((org) => (
                  <div key={org} className="flex items-center gap-4 group">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-accent/40 to-secondary/40 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                        <Database className="w-8 h-8 text-foreground" />
                      </div>
                      <div className="text-sm text-muted-foreground">Organization</div>
                    </div>
                    <ArrowRight className="w-6 h-6 text-primary animate-pulse" />
                  </div>
                ))}
              </div>

              {/* Central Blockchain */}
              <div className="flex items-center gap-8">
                <div className="relative">
                  <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center animate-pulse-glow">
                    <Shield className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-muted-foreground whitespace-nowrap">
                    Blockchain
                  </div>
                </div>
                <ArrowRight className="w-6 h-6 text-primary animate-pulse" />
              </div>

              {/* Smart Contract */}
              <div className="flex items-center gap-8">
                <div className="relative">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-secondary/40 to-accent/40 flex items-center justify-center">
                    <Cpu className="w-8 h-8 text-foreground" />
                  </div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-muted-foreground whitespace-nowrap">
                    Smart Contract
                  </div>
                </div>
                <ArrowRight className="w-6 h-6 text-primary animate-pulse" />
              </div>

              {/* Global Model */}
              <div className="text-center group">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary/40 to-accent/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-8 h-8 text-foreground" />
                </div>
                <div className="text-sm text-muted-foreground mt-2">Global Model</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;