
import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-portfolio-blue/90 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a 
            href="#hero" 
            className="text-portfolio-accent font-mono text-2xl font-semibold"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('hero');
            }}
          >
            HH
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <ol className="flex items-center space-x-8 font-mono">
              <li className="text-portfolio-lighterText hover:text-portfolio-accent transition-colors">
                <a 
                  href="#about" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('about');
                  }}
                  className="flex items-center"
                >
                  <span className="text-portfolio-accent mr-1">01.</span> About
                </a>
              </li>
              <li className="text-portfolio-lighterText hover:text-portfolio-accent transition-colors">
                <a 
                  href="#experience" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('experience');
                  }}
                  className="flex items-center"
                >
                  <span className="text-portfolio-accent mr-1">02.</span> Experience
                </a>
              </li>
              <li className="text-portfolio-lighterText hover:text-portfolio-accent transition-colors">
                <a 
                  href="#projects" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('projects');
                  }}
                  className="flex items-center"
                >
                  <span className="text-portfolio-accent mr-1">03.</span> Projects
                </a>
              </li>
              <li className="text-portfolio-lighterText hover:text-portfolio-accent transition-colors">
                <a 
                  href="#contact" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('contact');
                  }}
                  className="flex items-center"
                >
                  <span className="text-portfolio-accent mr-1">04.</span> Contact
                </a>
              </li>
            </ol>
            <div className="flex items-center space-x-4">
              <a href="https://github.com/habibhamdoun" target="_blank" rel="noopener noreferrer" className="text-portfolio-lighterText hover:text-portfolio-accent">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/habibhamdoun" target="_blank" rel="noopener noreferrer" className="text-portfolio-lighterText hover:text-portfolio-accent">
                <Linkedin size={20} />
              </a>
              <a href="mailto:HabibHamdoun@gmail.com" className="text-portfolio-lighterText hover:text-portfolio-accent">
                <Mail size={20} />
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-portfolio-accent hover:text-white md:hidden"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <X className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 z-50 bg-portfolio-lightBlue/95 flex flex-col items-center justify-center">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 p-2 text-portfolio-accent"
          >
            <X className="h-6 w-6" />
          </button>

          <nav className="flex flex-col items-center space-y-8 py-8">
            <ol className="flex flex-col items-center space-y-6 font-mono text-lg">
              <li className="text-portfolio-lighterText hover:text-portfolio-accent transition-colors">
                <a 
                  href="#about" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('about');
                  }}
                  className="flex flex-col items-center"
                >
                  <span className="text-portfolio-accent">01.</span> About
                </a>
              </li>
              <li className="text-portfolio-lighterText hover:text-portfolio-accent transition-colors">
                <a 
                  href="#experience" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('experience');
                  }}
                  className="flex flex-col items-center"
                >
                  <span className="text-portfolio-accent">02.</span> Experience
                </a>
              </li>
              <li className="text-portfolio-lighterText hover:text-portfolio-accent transition-colors">
                <a 
                  href="#projects" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('projects');
                  }}
                  className="flex flex-col items-center"
                >
                  <span className="text-portfolio-accent">03.</span> Projects
                </a>
              </li>
              <li className="text-portfolio-lighterText hover:text-portfolio-accent transition-colors">
                <a 
                  href="#contact" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('contact');
                  }}
                  className="flex flex-col items-center"
                >
                  <span className="text-portfolio-accent">04.</span> Contact
                </a>
              </li>
            </ol>
            <div className="flex items-center space-x-6 mt-8">
              <a href="https://github.com/habibhamdoun" target="_blank" rel="noopener noreferrer" className="text-portfolio-lighterText hover:text-portfolio-accent">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/habibhamdoun" target="_blank" rel="noopener noreferrer" className="text-portfolio-lighterText hover:text-portfolio-accent">
                <Linkedin size={24} />
              </a>
              <a href="mailto:HabibHamdoun@gmail.com" className="text-portfolio-lighterText hover:text-portfolio-accent">
                <Mail size={24} />
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
