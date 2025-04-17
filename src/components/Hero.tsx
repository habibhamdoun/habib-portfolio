import React, { useEffect, useState } from 'react';
import { ArrowRight, FileDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id='hero'
      className='min-h-screen flex items-center pt-16 px-4 sm:px-6 lg:px-8'
    >
      <div className='container mx-auto max-w-5xl'>
        <div className='flex flex-col items-start'>
          <p
            className={`font-mono text-portfolio-accent mb-5 transform transition-all duration-500 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Hi, my name is
          </p>
          <h1
            className={`text-5xl sm:text-6xl md:text-7xl font-bold text-portfolio-lighterText mb-4 transform transition-all duration-500 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Habib Hassan Hamdoun.
          </h1>
          <h2
            className={`text-4xl sm:text-5xl md:text-6xl font-bold text-portfolio-text mb-6 transform transition-all duration-500 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            I build things for the web.
          </h2>
          <p
            className={`text-lg text-portfolio-text max-w-2xl mb-12 transform transition-all duration-500 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            I'm a full-stack developer specializing in building exceptional
            digital experiences. Currently, I'm focused on building accessible,
            human-centered products while pursuing my Computer Engineering
            degree at Lebanese American University.
          </p>
          <div
            className={`flex flex-wrap gap-4 transform transition-all duration-500 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            <a
              href='#projects'
              className='inline-flex items-center gap-2 bg-transparent hover:bg-portfolio-accent/10 text-portfolio-accent font-mono border border-portfolio-accent px-7 py-4 rounded transition-all duration-300'
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById('projects')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Check out my work <ArrowRight size={16} />
            </a>

            <a
              href='/assets/Habib_Hamdoun_CV.pdf'
              download
              className='inline-flex items-center gap-2 bg-portfolio-accent/10 hover:bg-portfolio-accent/20 text-portfolio-accent font-mono border border-portfolio-accent px-7 py-4 rounded transition-all duration-300'
            >
              Download CV <FileDown size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
