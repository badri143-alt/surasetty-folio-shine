import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

// Import project images
import badriNxtmartImage from '@/assets/badri-nxtmart-project.jpg';
import screenRecorderImage from '@/assets/screen-recorder-project.jpg';
import batteryManagementImage from '@/assets/battery-management-project.jpg';
import projectsDashboardImage from '@/assets/projects-dashboard-project.jpg';
import badriWeatherImage from '@/assets/badri-weather-project.jpg';
import taskManagerImage from '@/assets/task-manager-project.jpg';

const Projects = () => {
  // Removed filtering functionality - show all projects

  const projects = [
    {
      title: 'Badri-nxtmart Platform',
      description: 'A full-featured e-commerce platform with payment integration, admin dashboard, and real-time inventory management.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'API Integration'],
      image: badriNxtmartImage,
      githubUrl: 'https://github.com/badri143-alt/e-commerce',
      liveUrl: 'https://badrinxtmart.ccbp.tech/',
      featured: true
    },
    {
      title: 'Screen Capture & Recorder using JavaScript APIs',
      description: 'A lightweight JavaScript screen capture and recorder using MediaDevices and MediaRecorder APIs.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'MediaDevices API', 'MediaRecorder API'],
      image: screenRecorderImage,
      githubUrl: 'https://github.com/badri143-alt/Recorder',
      liveUrl: 'https://recorder-green.vercel.app/'
    },
    {
      title: 'Battery Management Dashboard – Real-Time EV Data Monitor',
      description: 'A responsive web interface to visualize and test battery performance data through RESTful APIs.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'REST API'],
      image: batteryManagementImage,
      githubUrl: 'https://github.com/badri143-alt/battery-management',
      liveUrl: '#'
    },
    {
      title: 'Projects Dashboard – Responsive & Dynamic Showcase',
      description: 'A responsive projects dashboard to manage, display, and explore both static and dynamic projects in one place.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Responsive Design'],
      image: projectsDashboardImage,
      githubUrl: 'https://github.com/badri143-alt/projects',
      liveUrl: 'https://badriprojects.ccbp.tech/'
    },
    {
      title: 'Weather App',
      description: 'Beautiful weather application with location-based forecasts, interactive maps, and weather alerts.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'API Integration'],
      image: badriWeatherImage,
      githubUrl: 'https://github.com/badri143-alt/weather-app',
      liveUrl: 'https://badri-weather-app.vercel.app/'
    },
    {
      title: 'Task Manager Application',
      description: 'A comprehensive task management application with CRUD operations, task prioritization, and responsive design.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Local Storage'],
      image: taskManagerImage,
      githubUrl: 'https://github.com/badri143-alt/todoApp',
      liveUrl: 'https://badri-todo-app.vercel.app/'
    }
  ];

  // Show all projects without filtering

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

          {/* Removed filter buttons - showing all projects */}

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
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
                       alt={`${project.title} project`}
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

                     <div className="flex justify-end items-center pt-4">
                       <div className="flex space-x-2">
                         <Button size="sm" variant="ghost" asChild>
                           <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                             <Github className="h-4 w-4" />
                           </a>
                         </Button>
                         {project.liveUrl !== '#' && (
                           <Button size="sm" variant="ghost" asChild>
                             <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                               <ExternalLink className="h-4 w-4" />
                             </a>
                           </Button>
                         )}
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