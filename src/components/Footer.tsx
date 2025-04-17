
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-4 text-center text-portfolio-text">
      <div className="container mx-auto">
        <div className="md:hidden flex justify-center space-x-8 mb-6">
          <a href="https://github.com/habibhamdoun" target="_blank" rel="noopener noreferrer" className="text-portfolio-text hover:text-portfolio-accent">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/habibhamdoun" target="_blank" rel="noopener noreferrer" className="text-portfolio-text hover:text-portfolio-accent">
            <Linkedin size={20} />
          </a>
          <a href="mailto:HabibHamdoun@gmail.com" className="text-portfolio-text hover:text-portfolio-accent">
            <Mail size={20} />
          </a>
        </div>
        
        <p className="font-mono text-sm">
          Designed & Built by Habib Hassan Hamdoun
        </p>
        <p className="font-mono text-xs mt-2">
          &copy; {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
