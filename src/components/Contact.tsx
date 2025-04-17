
import React, { useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
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
    <section id="contact" ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 opacity-0">
      <div className="container mx-auto max-w-4xl text-center">
        <p className="font-mono text-portfolio-accent mb-4">04. What's Next?</p>
        <h2 className="text-4xl sm:text-5xl font-bold text-portfolio-lighterText mb-6">Get In Touch</h2>
        <p className="text-portfolio-text max-w-xl mx-auto mb-12">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
          I'll do my best to get back to you as soon as possible!
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
          <a 
            href="mailto:HabibHamdoun@gmail.com"
            className="inline-flex items-center gap-2 bg-transparent hover:bg-portfolio-accent/10 text-portfolio-accent font-mono border border-portfolio-accent px-6 py-3 rounded transition-all duration-300"
          >
            <Mail size={18} />
            Say Hello
          </a>
          
          <a 
            href="https://linkedin.com/in/habibhamdoun"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-transparent hover:bg-portfolio-accent/10 text-portfolio-accent font-mono border border-portfolio-accent px-6 py-3 rounded transition-all duration-300"
          >
            <Linkedin size={18} />
            Connect on LinkedIn
          </a>
        </div>
        
        <div className="grid md:grid-cols-3 gap-5 text-center md:text-left mt-16">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-portfolio-lightBlue text-portfolio-accent mb-4">
              <Mail size={20} />
            </div>
            <h3 className="text-lg font-medium text-portfolio-lighterText mb-2">Email</h3>
            <a 
              href="mailto:HabibHamdoun@gmail.com" 
              className="text-portfolio-text hover:text-portfolio-accent"
            >
              HabibHamdoun@gmail.com
            </a>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-portfolio-lightBlue text-portfolio-accent mb-4">
              <Phone size={20} />
            </div>
            <h3 className="text-lg font-medium text-portfolio-lighterText mb-2">Phone</h3>
            <a 
              href="tel:+9617616482" 
              className="text-portfolio-text hover:text-portfolio-accent"
            >
              +961 76164482
            </a>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-portfolio-lightBlue text-portfolio-accent mb-4">
              <MapPin size={20} />
            </div>
            <h3 className="text-lg font-medium text-portfolio-lighterText mb-2">Location</h3>
            <p className="text-portfolio-text">Beirut, Msaytbeh</p>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-lg font-medium text-portfolio-lighterText mb-6">More Links</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="https://github.com/habibhamdoun" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-portfolio-text hover:text-portfolio-accent"
            >
              <Github size={18} />
              GitHub Profile
            </a>
            <a 
              href="https://habibhamdoun.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-portfolio-text hover:text-portfolio-accent"
            >
              <ExternalLink size={18} />
              Vercel Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
