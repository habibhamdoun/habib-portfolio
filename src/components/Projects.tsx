import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Folder } from 'lucide-react';

const ProjectCard: React.FC<{
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  image?: string;
  index: number;
}> = ({ title, description, tags, github, demo, image, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 100); // Staggered delay based on index
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [index]);

  if (image) {
    return (
      <div ref={cardRef} className="project-card col-span-1 relative group">
        <div className="absolute inset-0 bg-portfolio-lightBlue rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-portfolio-blue/80 group-hover:bg-portfolio-blue/60 transition-all duration-300 z-10"></div>
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 h-full flex flex-col justify-between p-6">
          <div>
            <div className="flex justify-between items-start mb-4">
              <Folder className="text-portfolio-accent" size={40} />
              <div className="flex gap-4">
                {github && (
                  <a href={github} target="_blank" rel="noopener noreferrer" className="text-portfolio-lighterText hover:text-portfolio-accent">
                    <Github size={20} />
                  </a>
                )}
                {demo && (
                  <a href={demo} target="_blank" rel="noopener noreferrer" className="text-portfolio-lighterText hover:text-portfolio-accent">
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>
            <h3 className="text-xl font-semibold text-portfolio-lighterText mb-2 group-hover:text-portfolio-accent transition-colors">{title}</h3>
            <p className="text-portfolio-text mb-4">{description}</p>
          </div>
          <ul className="flex flex-wrap gap-2 text-xs font-mono">
            {tags.map((tag) => (
              <li key={tag} className="text-portfolio-lighterText">
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div ref={cardRef} className="project-card col-span-1 bg-portfolio-lightBlue rounded-lg p-6 hover:translate-y-[-5px] transition-all duration-300">
      <div className="flex justify-between items-start mb-6">
        <Folder className="text-portfolio-accent" size={40} />
        <div className="flex gap-4">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="text-portfolio-lighterText hover:text-portfolio-accent">
              <Github size={20} />
            </a>
          )}
          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer" className="text-portfolio-lighterText hover:text-portfolio-accent">
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-portfolio-lighterText mb-2">{title}</h3>
      <p className="text-portfolio-text mb-8">{description}</p>
      <ul className="flex flex-wrap gap-3 text-xs font-mono mt-auto">
        {tags.map((tag) => (
          <li key={tag} className="text-portfolio-text">
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up-fade');
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const featuredProjects = [
    {
      title: "Target Motors Angola",
      description: "Appointment management system with scheduling, customer management features, and multi-role access.",
      tags: ["React", "Node.js", "Express", "MongoDB", "Authentication"],
      github: "https://github.com/habibhamdoun/",
      image: "/placeholder.svg"
    },
    {
      title: "E-commerce Shop",
      description: "A cash on delivery e-commerce platform with product filtering, search functionality, and responsive design.",
      tags: ["Next.js", "React", "Responsive Design", "E-commerce"],
      github: "https://github.com/habibhamdoun/",
      demo: "https://apocalypsefb.vercel.app/",
      image: "/placeholder.svg"
    },
    {
      title: "FMC Saudi Arabia",
      description: "Official website for the multilingual startup company FMC with custom content management system.",
      tags: ["React", "Firebase", "CMS", "Multilingual"],
      github: "https://github.com/habibhamdoun/",
      demo: "https://fmc-supplychain.netlify.app/",
      image: "/placeholder.svg"
    }
  ];

  const otherProjects = [
    {
      title: "PropScan Mobile App",
      description: "React Native mobile app connecting clients with service providers in UAE.",
      tags: ["React Native", "Mobile", "UI/UX", "API Integration"],
      github: "https://github.com/habibhamdoun/",
    },
    {
      title: "Web Game Projects",
      description: "Collection of interactive web-based games created as teaching examples.",
      tags: ["JavaScript", "HTML5", "CSS3", "Game Dev"],
      github: "https://github.com/habibhamdoun/",
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing projects and skills.",
      tags: ["React", "Tailwind CSS", "Responsive"],
      github: "https://github.com/habibhamdoun/",
    },
    {
      title: "Student Management System",
      description: "A system for managing student records, attendance, and performance.",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/habibhamdoun/",
    },
    {
      title: "Weather App",
      description: "Real-time weather application with location-based forecasts.",
      tags: ["JavaScript", "API", "Responsive", "Geolocation"],
      github: "https://github.com/habibhamdoun/",
    },
    {
      title: "Task Manager",
      description: "A simple but effective task management application with reminders.",
      tags: ["React", "State Management", "LocalStorage"],
      github: "https://github.com/habibhamdoun/",
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 opacity-0">
      <div className="container mx-auto max-w-5xl">
        <h2 className="numbered-heading text-2xl sm:text-3xl font-bold mb-16">
          <span className="number">03.</span> Some Things I've Built
        </h2>
        
        {/* Featured Projects */}
        <div className="space-y-24 mb-24">
          {featuredProjects.map((project, index) => (
            <div key={index} className={`grid md:grid-cols-12 gap-4 md:gap-10 relative ${index % 2 === 0 ? '' : 'md:text-right'}`}>
              {/* Project Image (will be on left for even, right for odd indexes) */}
              <div className={`md:col-span-7 relative ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <div className="h-0 pt-[56.25%] relative overflow-hidden rounded-lg bg-portfolio-lightBlue">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-portfolio-accent/10 hover:bg-transparent transition-all duration-300"></div>
                </div>
              </div>
              
              {/* Project Info */}
              <div className={`md:col-span-6 md:col-start-6 flex flex-col justify-center z-10 ${
                index % 2 === 0 ? 'md:order-2 md:col-start-6 items-start' : 'md:order-1 md:col-start-1 md:items-end'
              }`}>
                <p className="font-mono text-portfolio-accent text-sm mb-1">Featured Project</p>
                <h3 className="text-2xl font-semibold text-portfolio-lighterText mb-4">{project.title}</h3>
                
                <div className={`p-6 rounded-lg bg-portfolio-lightBlue my-4 ${index % 2 === 0 ? 'text-left' : 'md:text-right'}`}>
                  <p className="text-portfolio-text">{project.description}</p>
                </div>
                
                <ul className={`flex flex-wrap gap-3 text-sm font-mono mb-6 ${
                  index % 2 === 0 ? '' : 'md:justify-end'
                }`}>
                  {project.tags.map((tag) => (
                    <li key={tag} className="text-portfolio-text">
                      {tag}
                    </li>
                  ))}
                </ul>
                
                <div className={`flex gap-5 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-portfolio-lighterText hover:text-portfolio-accent">
                      <Github size={20} />
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-portfolio-lighterText hover:text-portfolio-accent">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold text-center text-portfolio-lighterText mb-12">Other Noteworthy Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {otherProjects.map((project, index) => (
              <ProjectCard key={index} {...project} index={index} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="https://github.com/habibhamdoun" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-transparent hover:bg-portfolio-accent/10 text-portfolio-accent font-mono border border-portfolio-accent px-6 py-3 rounded transition-all duration-300"
            >
              See More on GitHub <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
