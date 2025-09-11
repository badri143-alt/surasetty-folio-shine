import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

// Import project images
import ecommerceImage from '@/assets/ecommerce-project.jpg';
import dashboardImage from '@/assets/dashboard-project.jpg';
import apiImage from '@/assets/api-project.jpg';
import lmsImage from '@/assets/lms-project.jpg';
import weatherImage from '@/assets/weather-project.jpg';
import chatImage from '@/assets/chat-project.jpg';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Frontend', 'Backend', 'Fullstack'];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with payment integration, admin dashboard, and real-time inventory management.',
      category: 'Fullstack',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'MongoDB'],
      image: ecommerceImage,
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: true
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with real-time data visualization and scheduling features.',
      category: 'Frontend',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Chart.js'],
      image: dashboardImage,
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    },
    {
      title: 'Task Management API',
      description: 'RESTful API for task management system with authentication, role-based access control, and real-time notifications.',
      category: 'Backend',
      technologies: ['Node.js', 'Express', 'MySQL', 'JWT', 'REST API'],
      image: apiImage,
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    },
    {
      title: 'Learning Management System',
      description: 'Complete LMS with course creation, student enrollment, progress tracking, and interactive quizzes.',
      category: 'Fullstack',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'MongoDB'],
      image: lmsImage,
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    },
    {
      title: 'Weather App',
      description: 'Beautiful weather application with location-based forecasts, interactive maps, and weather alerts.',
      category: 'Frontend',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'API Integration'],
      image: weatherImage,
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    },
    {
      title: 'Chat Application API',
      description: 'Real-time chat application backend with rooms, file sharing, and message encryption.',
      category: 'Backend',
      technologies: ['Node.js', 'Express', 'MongoDB', 'Socket.io', 'REST API'],
      image: chatImage,
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              My <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are some of the projects I've worked on, showcasing my skills across different technologies
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className={`transition-all duration-300 ${
                  activeFilter === filter 
                    ? 'bg-gradient-primary shadow-glow' 
                    : 'hover:border-primary/40 hover:bg-primary/5'
                }`}
              >
                {filter}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={index} 
                className={`bg-gradient-card border-border/20 hover:shadow-elegant transition-all duration-300 group ${
                  project.featured ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={project.image} 
                      alt={`${project.title} - ${project.category} project`}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex space-x-4">
                        <Button
                          size="sm"
                          variant="secondary"
                          asChild
                          className="bg-background/90 hover:bg-background"
                        >
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                        <Button
                          size="sm"
                          variant="secondary"
                          asChild
                          className="bg-background/90 hover:bg-background"
                        >
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground mt-2">
                        {project.description}
                      </CardDescription>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="secondary"
                          className="bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex justify-between items-center pt-4">
                      <Badge variant="outline" className="border-primary/20 text-primary">
                        {project.category}
                      </Badge>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="ghost" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                        <Button size="sm" variant="ghost" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;