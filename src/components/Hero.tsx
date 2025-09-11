import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-primary p-1 shadow-glow">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                <span className="text-4xl font-bold text-primary">SB</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground">
                SURASETTY <span className="bg-gradient-primary bg-clip-text text-transparent">BADRINATH</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                Fullstack Developer
              </p>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Passionate about creating innovative web solutions with modern technologies. 
              Specialized in building scalable applications from concept to deployment.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <Button
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
              >
                View My Work
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
              >
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 mt-12">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-background/50 hover:bg-primary/10 transition-all duration-300 hover:scale-110 hover:shadow-glow"
              >
                <Github className="h-6 w-6 text-foreground" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-background/50 hover:bg-primary/10 transition-all duration-300 hover:scale-110 hover:shadow-glow"
              >
                <Linkedin className="h-6 w-6 text-foreground" />
              </a>
              <a
                href="mailto:badrinath@example.com"
                className="p-3 rounded-full bg-background/50 hover:bg-primary/10 transition-all duration-300 hover:scale-110 hover:shadow-glow"
              >
                <Mail className="h-6 w-6 text-foreground" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;