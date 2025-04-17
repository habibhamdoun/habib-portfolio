
import React, { useEffect, useRef, useState } from 'react';

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
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

  const experiences = [
    {
      company: "BAMPTEE",
      position: "Full-Stack Development Intern",
      duration: "Dec 2024 - Mar 2025",
      description: [
        "Developed reusable components and optimized existing code using React TypeScript",
        "Fixed bugs and implemented feature enhancements to improve platform performance",
        "Managed backend operations with ExpressJS and MongoDB for efficient data handling"
      ]
    },
    {
      company: "Target Motors Angola",
      position: "Full-Stack Developer",
      duration: "Apr 2025 - May 2025",
      description: [
        "Developed appointment management system with scheduling, customer management features, and multi-role access using MERN stack",
        "Built complete solution with integrated frontend and backend components",
        "Implemented secure authentication system and bilingual support (Portuguese-English) to serve the local Angolan market"
      ]
    },
    {
      company: "PropScan (UAE)",
      position: "Frontend Developer",
      duration: "Jan 2025 - Apr 2025",
      description: [
        "Co-developed React Native mobile app connecting clients with service providers",
        "Designed intuitive user interfaces and implemented responsive interactive components",
        "Optimized app performance with efficient state management and lazy loading techniques"
      ]
    },
    {
      company: "E-commerce Shop",
      position: "Web Developer",
      duration: "Jan 2023 - Jun 2023",
      description: [
        "Designed and developed a cash on delivery e-commerce shop using Next.js",
        "Implemented product filtering, search functionality, and responsive design to optimize user experience across devices",
        "Created a user-friendly shopping experience with optimized performance"
      ]
    },
    {
      company: "FMC Saudi Arabia",
      position: "Web Developer",
      duration: "May 2022 - Aug 2023",
      description: [
        "Built the official website of the multilingual startup company FMC based in Saudi-Arabia using ReactJS in Front-end and Firebase in Back-end",
        "Created a custom content management system allowing non-technical staff to update website content independently",
        "Implemented responsive design for optimal viewing across all devices"
      ]
    },
    {
      company: "LOYAC LEBANON",
      position: "Web Development Trainer & Co-Trainer",
      duration: "Feb 2022 - Oct 2023",
      description: [
        "Co-designed and taught 3-generation program in HTML, CSS, and JavaScript",
        "Mentored students on portfolio and web game projects",
        "Taught fundamentals of ReactJS framework development to students"
      ]
    }
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 opacity-0">
      <div className="container mx-auto max-w-4xl">
        <h2 className="numbered-heading text-2xl sm:text-3xl font-bold mb-16">
          <span className="number">02.</span> Where I've Worked
        </h2>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Tab navigation */}
          <div className="relative flex md:flex-col overflow-x-auto md:overflow-x-visible scrollbar-hide border-b md:border-b-0 md:border-l border-portfolio-lighterBlue">
            {experiences.map((exp, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-3 font-mono text-sm whitespace-nowrap text-left transition-all duration-200 
                  ${activeTab === index ? 'text-portfolio-accent bg-portfolio-lightBlue/30 md:bg-transparent md:border-l-2 md:border-portfolio-accent md:-ml-[2px]' : 'text-portfolio-text hover:text-portfolio-lighterText hover:bg-portfolio-lightBlue/10'}`}
              >
                {exp.company}
              </button>
            ))}
            {/* Active indicator (mobile only) */}
            <div 
              className="md:hidden absolute bottom-0 h-0.5 bg-portfolio-accent transition-all duration-200"
              style={{ 
                left: `${(100 / experiences.length) * activeTab}%`, 
                width: `${100 / experiences.length}%` 
              }}
            ></div>
          </div>
          
          {/* Tab content */}
          <div className="py-2 md:py-0 md:pl-7 flex-1">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`transition-opacity duration-300 ${activeTab === index ? 'block opacity-100' : 'hidden opacity-0'}`}
              >
                <h3 className="text-xl text-portfolio-lighterText font-medium">
                  {exp.position} <span className="text-portfolio-accent">@ {exp.company}</span>
                </h3>
                <p className="font-mono text-sm text-portfolio-text mt-1 mb-4">{exp.duration}</p>
                <ul className="space-y-2.5">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex text-portfolio-text">
                      <span className="text-portfolio-accent mr-2 mt-1.5 flex-shrink-0">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
