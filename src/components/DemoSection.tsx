import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, Play, TrendingUp, CheckCircle } from "lucide-react";
import { useState } from "react";

const DemoSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const demoSteps = [
    {
      id: 0,
      title: "Upload Dataset",
      description: "Upload your private training data",
      icon: Upload,
      status: "ready"
    },
    {
      id: 1,
      title: "Local Training",
      description: "Train model on your local data",
      icon: Play,
      status: "pending"
    },
    {
      id: 2,
      title: "Blockchain Update",
      description: "Send encrypted updates to blockchain",
      icon: CheckCircle,
      status: "pending"
    },
    {
      id: 3,
      title: "Global Accuracy",
      description: "View improved global model performance",
      icon: TrendingUp,
      status: "pending"
    }
  ];

  const runDemo = () => {
    setIsRunning(true);
    // Simulate demo progression
    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < demoSteps.length) {
        setActiveStep(currentStep);
        currentStep++;
      } else {
        clearInterval(interval);
        setIsRunning(false);
        setActiveStep(0);
      }
    }, 2000);
  };

  return (
    <section id="demo" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/6 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/6 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 bg-glow bg-clip-text text-transparent">
            Interactive Demo
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience the power of federated learning firsthand. This interactive demonstration 
            shows how multiple organizations can collaborate to train AI models while preserving data privacy.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Demo Control Panel */}
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 mb-8 animate-fade-in">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-orbitron text-primary">
                Federated Learning Simulation
              </CardTitle>
              <p className="text-muted-foreground">
                Click "Start Demo" to simulate the federated learning process
              </p>
            </CardHeader>
            <CardContent className="text-center">
              <Button
                onClick={runDemo}
                disabled={isRunning}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-orbitron px-8 py-4 text-lg glow-effect"
              >
                {isRunning ? "Running..." : "Start Demo"}
                <Play className="ml-2 w-5 h-5" />
              </Button>
            </CardContent>
          </Card>

          {/* Demo Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {demoSteps.map((step) => {
              const Icon = step.icon;
              const isActive = activeStep === step.id && isRunning;
              const isCompleted = activeStep > step.id && isRunning;
              
              return (
                <Card
                  key={step.id}
                  className={`bg-card/50 backdrop-blur-sm border transition-all duration-500 ${
                    isActive 
                      ? "border-primary shadow-neon" 
                      : isCompleted
                      ? "border-green-500/50"
                      : "border-primary/20"
                  } animate-fade-in`}
                  style={{ animationDelay: `${step.id * 0.1}s` }}
                >
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-500 ${
                      isActive
                        ? "bg-primary/30 animate-pulse-glow"
                        : isCompleted
                        ? "bg-green-500/30"
                        : "bg-muted/30"
                    }`}>
                      <Icon className={`w-8 h-8 ${
                        isActive ? "text-primary" : isCompleted ? "text-green-500" : "text-muted-foreground"
                      }`} />
                    </div>
                    <CardTitle className="text-lg font-orbitron">
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground text-sm">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Simulated Results */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Training Progress */}
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 animate-fade-in">
              <CardHeader>
                <CardTitle className="text-xl font-orbitron text-primary flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Training Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { label: "Local Accuracy", value: "87.3%", progress: 87 },
                    { label: "Global Accuracy", value: "94.1%", progress: 94 },
                    { label: "Data Privacy", value: "100%", progress: 100 },
                  ].map((metric) => (
                    <div key={metric.label}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-muted-foreground">{metric.label}</span>
                        <span className="text-sm font-orbitron text-primary">{metric.value}</span>
                      </div>
                      <div className="w-full bg-muted/30 rounded-full h-2">
                        <div
                          className={`bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-1000 ${
                            isRunning ? "animate-pulse" : ""
                          }`}
                          style={{ width: `${metric.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Network Stats */}
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 animate-fade-in">
              <CardHeader>
                <CardTitle className="text-xl font-orbitron text-primary flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Network Statistics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-center">
                  {[
                    { label: "Active Nodes", value: "47" },
                    { label: "Rounds Complete", value: "12" },
                    { label: "Updates Verified", value: "156" },
                    { label: "Gas Used", value: "0.03 ETH" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <div className={`text-2xl font-orbitron font-bold text-primary mb-1 ${
                        isRunning ? "animate-pulse" : ""
                      }`}>
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;