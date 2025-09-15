import { Card, CardContent } from '@/components/ui/card';
import { Code, Database, Globe, Smartphone } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: 'Frontend',
      icon: <Globe className="h-8 w-8" />,
      technologies: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'Responsive Web Design', 'CSS Flexbox'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      category: 'Backend',
      icon: <Database className="h-8 w-8" />,
      technologies: ['Node.js', 'Express', 'Python', 'REST APIs', 'API Integrations'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      category: 'Database',
      icon: <Database className="h-8 w-8" />,
      technologies: ['MySQL', 'MongoDB'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      category: 'Tools & Concepts',
      icon: <Code className="h-8 w-8" />,
      technologies: ['Git', 'GitHub', 'Windows', 'Linux', 'AWS', 'Power BI', 'OOPs', 'DSA (Basics)'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fresh Computer Science graduate with strong foundation in fullstack development
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* About Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">
                  Crafting Digital Experiences
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  As a fresh Computer Science graduate from Santhiram Engineering College affiliated to JNTU, Anantapuramu 
                  (B.Tech completed in 2025), I have built a strong foundation in fullstack development through academic 
                  projects and self-learning. I'm passionate about creating user-friendly applications and solving problems 
                  through clean, efficient code.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I'm eager to apply my knowledge in a professional environment and contribute to meaningful projects 
                  while continuing to learn and grow as a developer.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-foreground">What I Do</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>Frontend Development with HTML5, CSS3, JavaScript, and Bootstrap</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>Backend Development with Node.js, Express, and Python</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>Database Management with MySQL and MongoDB</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>API Development and Integration with REST APIs</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <Card key={index} className="bg-gradient-card border-border/20 hover:shadow-elegant transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${skill.color} text-white`}>
                          {skill.icon}
                        </div>
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {skill.category}
                        </h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skill.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 text-sm bg-muted rounded-full text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;