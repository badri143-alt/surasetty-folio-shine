import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: 'https://github.com',
      label: 'GitHub'
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: 'https://linkedin.com',
      label: 'LinkedIn'
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: 'mailto:badrinath@example.com',
      label: 'Email'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-secondary border-t border-border/20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">SB</span>
                </div>
                <div>
                  <h3 className="font-bold text-foreground">Surasetty Badrinath</h3>
                  <p className="text-sm text-muted-foreground">Fullstack Developer</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Passionate about creating innovative web solutions with modern technologies. 
                Always learning, always building, always improving.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4 mt-6">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-background/50 hover:bg-primary/10 transition-all duration-300 hover:scale-110 group"
                    aria-label={link.label}
                  >
                    <span className="text-muted-foreground group-hover:text-primary transition-colors">
                      {link.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { label: 'Home', id: 'home' },
                  { label: 'About', id: 'about' },
                  { label: 'Projects', id: 'projects' },
                  { label: 'Contact', id: 'contact' }
                ].map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a 
                    href="mailto:badrinath@example.com"
                    className="hover:text-primary transition-colors duration-200"
                  >
                    badrinath@example.com
                  </a>
                </li>
                <li>
                  <a 
                    href="tel:+91756960026"
                    className="hover:text-primary transition-colors duration-200"
                  >
                    +91 756960026
                  </a>
                </li>
                <li className="text-sm">India</li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-border/20 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-muted-foreground text-sm">
                © {currentYear} Surasetty Badrinath. All rights reserved.
              </p>
              <p className="text-muted-foreground text-sm flex items-center">
                Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> using React & TypeScript
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;