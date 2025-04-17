
import React, { useEffect, useRef } from 'react';

const SkillBar: React.FC<{ skill: string; level: number; color: string; delay: number }> = ({ 
  skill, 
  level, 
  color,
  delay 
}) => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            if (barRef.current) {
              barRef.current.style.width = `${level}%`;
              barRef.current.style.opacity = '1';
            }
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (barRef.current?.parentElement) {
      observer.observe(barRef.current.parentElement);
    }

    return () => {
      if (barRef.current?.parentElement) {
        observer.unobserve(barRef.current.parentElement);
      }
    };
  }, [delay, level]);

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-portfolio-lighterText font-medium">{skill}</span>
        <span className="text-portfolio-text font-mono text-sm">{level}%</span>
      </div>
      <div className="h-2 bg-portfolio-lighterBlue rounded-full overflow-hidden">
        <div 
          ref={barRef}
          className={`h-full rounded-full transition-all duration-1000 ease-out opacity-0`}
          style={{ width: '0%', backgroundColor: color }}
        ></div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
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

  const frontendSkills = [
    { skill: "JavaScript", level: 95, color: '#f0db4f' },
    { skill: "TypeScript", level: 90, color: '#007acc' },
    { skill: "React", level: 92, color: '#61dafb' },
    { skill: "React Native", level: 85, color: '#61dafb' },
    { skill: "Next.js", level: 88, color: '#ffffff' },
    { skill: "HTML/CSS", level: 95, color: '#e34c26' },
  ];

  const backendSkills = [
    { skill: "Node.js", level: 85, color: '#3c873a' },
    { skill: "Express", level: 82, color: '#ffffff' },
    { skill: "MongoDB", level: 80, color: '#13aa52' },
    { skill: "SQL", level: 75, color: '#f29111' },
    { skill: "Firebase", level: 78, color: '#ffca28' },
    { skill: "Spring Boot", level: 70, color: '#6db33f' },
  ];

  const otherSkills = [
    { skill: "Java", level: 80, color: '#f89820' },
    { skill: "Tailwind CSS", level: 90, color: '#38b2ac' },
    { skill: "Redux", level: 85, color: '#764abc' },
    { skill: "Git & GitHub", level: 88, color: '#f05032' },
    { skill: "Responsive Design", level: 92, color: '#38b2ac' },
    { skill: "UI/UX Design", level: 75, color: '#ff3e00' },
  ];

  const languages = [
    { skill: "Arabic", level: 100, color: '#14b8a6' },
    { skill: "English", level: 95, color: '#14b8a6' },
    { skill: "French", level: 85, color: '#14b8a6' },
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 opacity-0">
      <div className="container mx-auto max-w-5xl">
        <h2 className="numbered-heading text-2xl sm:text-3xl font-bold mb-16">
          <span className="number">04.</span> Skills & Proficiencies
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl text-portfolio-lighterText font-medium mb-6">Frontend Development</h3>
            {frontendSkills.map((item, index) => (
              <SkillBar 
                key={item.skill} 
                skill={item.skill} 
                level={item.level} 
                color={item.color} 
                delay={index * 100}
              />
            ))}
          </div>
          
          <div>
            <h3 className="text-xl text-portfolio-lighterText font-medium mb-6">Backend Development</h3>
            {backendSkills.map((item, index) => (
              <SkillBar 
                key={item.skill} 
                skill={item.skill} 
                level={item.level} 
                color={item.color} 
                delay={index * 100 + 300}
              />
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div>
            <h3 className="text-xl text-portfolio-lighterText font-medium mb-6">Other Technical Skills</h3>
            {otherSkills.map((item, index) => (
              <SkillBar 
                key={item.skill} 
                skill={item.skill} 
                level={item.level} 
                color={item.color} 
                delay={index * 100 + 600}
              />
            ))}
          </div>
          
          <div>
            <h3 className="text-xl text-portfolio-lighterText font-medium mb-6">Languages</h3>
            {languages.map((item, index) => (
              <SkillBar 
                key={item.skill} 
                skill={item.skill} 
                level={item.level} 
                color={item.color} 
                delay={index * 100 + 900}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
