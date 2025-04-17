
import React, { useEffect, useRef } from 'react';

const About: React.FC = () => {
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

  return (
    <section id="about" ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 opacity-0">
      <div className="container mx-auto max-w-4xl">
        <h2 className="numbered-heading text-2xl sm:text-3xl font-bold mb-16">
          <span className="number">01.</span> About Me
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 text-portfolio-text">
            <p className="mb-4">
              Hello! I'm Habib, a Full-Stack Developer with experience in building modern web applications 
              using React, TypeScript, and Node.js. My journey in web development started during my time 
              at Saint George School where I graduated with honors as the Valedictorian.
            </p>
            <p className="mb-4">
              Currently pursuing a Bachelor's degree in Computer Engineering at Lebanese American University,
              I combine my academic knowledge with practical experience from internships and freelance projects.
              I recently completed an internship at BAMPTEE as a Full-Stack Development Intern where I developed
              reusable components and optimized existing code using React TypeScript.
            </p>
            <p className="mb-4">
              I'm passionate about creating efficient, responsive, and user-friendly applications.
              My experience includes working with:
            </p>
            
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mt-6 font-mono text-sm">
              <li className="flex items-center">
                <span className="text-portfolio-accent mr-2">▹</span> JavaScript (ES6+)
              </li>
              <li className="flex items-center">
                <span className="text-portfolio-accent mr-2">▹</span> TypeScript
              </li>
              <li className="flex items-center">
                <span className="text-portfolio-accent mr-2">▹</span> React & React Native
              </li>
              <li className="flex items-center">
                <span className="text-portfolio-accent mr-2">▹</span> Next.js
              </li>
              <li className="flex items-center">
                <span className="text-portfolio-accent mr-2">▹</span> Node.js & Express
              </li>
              <li className="flex items-center">
                <span className="text-portfolio-accent mr-2">▹</span> MongoDB
              </li>
              <li className="flex items-center">
                <span className="text-portfolio-accent mr-2">▹</span> SQL
              </li>
              <li className="flex items-center">
                <span className="text-portfolio-accent mr-2">▹</span> HTML & CSS
              </li>
            </ul>
          </div>
          
          <div className="relative group">
            <div className="relative z-10 bg-portfolio-accent/20 rounded overflow-hidden w-full aspect-square">
              <img 
                src="/lovable-uploads/e77be547-cedc-4781-9052-3765b57d02d1.png" 
                alt="Habib Hassan Hamdoun" 
                className="mix-blend-multiply grayscale contrast-100 brightness-90 hover:filter-none transition-all duration-300 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-portfolio-accent/20 hover:bg-transparent transition-all duration-300"></div>
            </div>
            <div className="absolute -inset-1.5 border-2 border-portfolio-accent rounded z-0 group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
