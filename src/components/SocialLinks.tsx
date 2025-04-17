
import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const SocialLinks: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Small delay to allow the component to render
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Left side social links */}
      <div className={`fixed left-10 bottom-0 hidden md:flex flex-col items-center transform transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}>
        <ul className="flex flex-col items-center space-y-5 after:content-[''] after:block after:w-px after:h-24 after:bg-portfolio-text">
          <li>
            <a 
              href="https://github.com/habibhamdoun" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-portfolio-text hover:text-portfolio-accent hover:-translate-y-1 transform transition-all duration-200 flex"
            >
              <Github size={20} />
            </a>
          </li>
          <li>
            <a 
              href="https://linkedin.com/in/habibhamdoun" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-portfolio-text hover:text-portfolio-accent hover:-translate-y-1 transform transition-all duration-200 flex"
            >
              <Linkedin size={20} />
            </a>
          </li>
          <li>
            <a 
              href="mailto:HabibHamdoun@gmail.com"
              className="text-portfolio-text hover:text-portfolio-accent hover:-translate-y-1 transform transition-all duration-200 flex"
            >
              <Mail size={20} />
            </a>
          </li>
        </ul>
      </div>
      
      {/* Right side email */}
      <div className={`fixed right-10 bottom-0 hidden md:flex flex-col items-center transform transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}>
        <a 
          href="mailto:HabibHamdoun@gmail.com"
          className="font-mono text-portfolio-text hover:text-portfolio-accent hover:-translate-y-1 transform transition-all duration-200 flex writing-mode-vertical tracking-widest py-5 my-5"
          style={{ writingMode: 'vertical-rl' }}
        >
          HabibHamdoun@gmail.com
        </a>
        <div className="block w-px h-24 bg-portfolio-text"></div>
      </div>
    </>
  );
};

export default SocialLinks;
