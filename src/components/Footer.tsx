import { Github, FileText, Mail, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    product: [
      { label: "Features", href: "#features" },
      { label: "Demo", href: "#demo" },
      { label: "Pricing", href: "#" },
      { label: "API Docs", href: "#" },
    ],
    company: [
      { label: "About", href: "#about" },
      { label: "Team", href: "#team" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#contact" },
    ],
    resources: [
      { label: "Documentation", href: "#" },
      { label: "Research Papers", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Community", href: "#" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "Compliance", href: "#" },
    ]
  };

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  return (
    <footer className="bg-background border-t border-primary/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent animate-pulse"></div>
              <span className="text-xl font-orbitron font-bold bg-glow bg-clip-text text-transparent">
                ChainLearn
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-sm">
              Revolutionizing AI training through blockchain-enabled federated learning. 
              Build smarter models while keeping your data private and secure.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20 flex items-center justify-center hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-orbitron font-semibold text-foreground mb-4 capitalize">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-primary/10 pt-8 mb-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-orbitron font-bold text-foreground mb-2">
              Stay Updated
            </h3>
            <p className="text-muted-foreground mb-6">
              Get the latest updates on federated learning research and platform developments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-card/50 border border-primary/20 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/40 transition-colors duration-200"
              />
              <button className="px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-orbitron rounded-lg transition-colors duration-200 glow-effect">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2024 ChainLearn. All rights reserved.
          </div>
          
          {/* Built with love */}
          <div className="flex items-center text-sm text-muted-foreground">
            <span>Built with</span>
            <span className="text-red-500 mx-2 animate-pulse">❤️</span>
            <span>at ETHGlobal Hackathon</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;