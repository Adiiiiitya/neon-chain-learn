import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const TeamSection = () => {
  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "AI Research Lead",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      bio: "PhD in Machine Learning from MIT. 10+ years in federated learning research.",
      links: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Marcus Rodriguez", 
      role: "Blockchain Architect",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Former Ethereum core developer. Expert in smart contract optimization.",
      links: {
        github: "#",
        linkedin: "#",
        mail: "#"
      }
    },
    {
      name: "Dr. Priya Patel",
      role: "Cryptography Expert", 
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "Cryptography researcher specializing in zero-knowledge proofs and privacy-preserving protocols.",
      links: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Alex Kim",
      role: "Full Stack Developer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face", 
      bio: "Full-stack engineer with expertise in React, TypeScript, and distributed systems architecture.",
      links: {
        github: "#",
        linkedin: "#",
        mail: "#"
      }
    }
  ];

  const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
    mail: Mail
  };

  return (
    <section id="team" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 bg-glow bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A diverse team of researchers, engineers, and visionaries working together to 
            democratize AI development while preserving privacy and security.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {team.map((member, index) => (
            <Card
              key={member.name}
              className={`bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-500 glow-effect group animate-fade-in overflow-hidden`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-0">
                {/* Profile Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Social Links Overlay */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    {Object.entries(member.links).map(([platform, url]) => {
                      const Icon = socialIcons[platform as keyof typeof socialIcons];
                      return (
                        <a
                          key={platform}
                          href={url}
                          className="w-8 h-8 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center hover:bg-primary/40 transition-colors duration-200"
                        >
                          <Icon className="w-4 h-4 text-primary" />
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* Member Info */}
                <div className="p-6">
                  <h3 className="text-xl font-orbitron font-bold text-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: "1s" }}>
          <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-card/30 backdrop-blur-sm border border-primary/20">
            <h3 className="text-2xl font-orbitron font-bold text-primary mb-4">
              Join Our Mission
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We're always looking for talented researchers and engineers who share our vision 
              of democratizing AI while preserving privacy. Interested in joining our team?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:careers@chainlearn.ai"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-orbitron rounded-lg transition-colors duration-200 glow-effect"
              >
                <Mail className="w-4 h-4 mr-2" />
                careers@chainlearn.ai
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 border border-primary/40 text-primary hover:bg-primary/10 font-orbitron rounded-lg transition-colors duration-200"
              >
                View Open Positions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;