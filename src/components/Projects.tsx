import React, { useEffect, useRef, useState } from 'react';
import {
  ExternalLink,
  Github,
  Folder,
  X,
  ChevronLeft,
  ChevronRight,
  Image,
} from 'lucide-react';

// Modal Component for Featured Project Showcase
const ShowcaseModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  title: string;
}> = ({ isOpen, onClose, images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';

      // Set loaded to true after a short delay to trigger animation
      const timer = setTimeout(() => {
        setLoaded(true);
      }, 50);

      return () => {
        clearTimeout(timer);
      };
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  // Explicitly handle body overflow when component unmounts
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  useEffect(() => {
    // Reset index when modal opens
    if (isOpen) {
      setCurrentIndex(0);
      setLoaded(false);
    }
  }, [isOpen]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 bg-portfolio-blue/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm transition-opacity duration-300 ${
        loaded ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleBackdropClick}
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
    >
      <div
        ref={modalRef}
        className={`bg-portfolio-lightBlue rounded-lg shadow-xl max-w-5xl w-full max-h-[90vh] flex flex-col transition-transform duration-300 ${
          loaded ? 'scale-100' : 'scale-95'
        }`}
        onClick={(e) => e.stopPropagation()}
        style={{ margin: 'auto' }}
      >
        <div className='flex justify-between items-center p-4 border-b border-portfolio-blue'>
          <h3 className='text-xl font-semibold text-portfolio-lighterText'>
            {title} - Showcase
          </h3>
          <button
            onClick={onClose}
            className='text-portfolio-lighterText hover:text-portfolio-accent'
          >
            <X size={24} />
          </button>
        </div>

        <div className='relative flex-grow overflow-hidden p-4 flex items-center justify-center min-h-[300px]'>
          {images && images.length > 0 ? (
            <img
              src={images[currentIndex]}
              alt={`${title} showcase ${currentIndex + 1}`}
              className='max-w-full max-h-[60vh] object-contain'
            />
          ) : (
            <p className='text-portfolio-text'>No showcase images available</p>
          )}

          {images && images.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className='absolute left-4 top-1/2 transform -translate-y-1/2 bg-portfolio-blue/80 text-portfolio-lighterText p-2 rounded-full hover:bg-portfolio-accent/80 transition-colors z-10'
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-portfolio-blue/80 text-portfolio-lighterText p-2 rounded-full hover:bg-portfolio-accent/80 transition-colors z-10'
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
        </div>

        {images && images.length > 0 && (
          <div className='p-4 border-t border-portfolio-blue flex justify-between items-center'>
            <div className='flex space-x-2'>
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentIndex
                      ? 'bg-portfolio-accent'
                      : 'bg-portfolio-blue'
                  }`}
                ></button>
              ))}
            </div>
            <div className='text-portfolio-text text-sm'>
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Original ProjectCard component unchanged
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
        rootMargin: '0px 0px -50px 0px',
      },
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
      <div ref={cardRef} className='project-card col-span-1 relative group'>
        <div className='absolute inset-0 bg-portfolio-lightBlue rounded-lg overflow-hidden'>
          <div className='absolute inset-0 bg-portfolio-blue/80 group-hover:bg-portfolio-blue/60 transition-all duration-300 z-10'></div>
          <img src={image} alt={title} className='w-full h-full object-cover' />
        </div>
        <div className='relative z-20 h-full flex flex-col justify-between p-6'>
          <div>
            <div className='flex justify-between items-start mb-4'>
              <Folder className='text-portfolio-accent' size={40} />
              <div className='flex gap-4'>
                {github && (
                  <a
                    href={github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-portfolio-lighterText hover:text-portfolio-accent'
                  >
                    <Github size={20} />
                  </a>
                )}
                {demo && (
                  <a
                    href={demo}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-portfolio-lighterText hover:text-portfolio-accent'
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>
            <h3 className='text-xl font-semibold text-portfolio-lighterText mb-2 group-hover:text-portfolio-accent transition-colors'>
              {title}
            </h3>
            <p className='text-portfolio-text mb-4'>{description}</p>
          </div>
          <ul className='flex flex-wrap gap-2 text-xs font-mono'>
            {tags.map((tag) => (
              <li key={tag} className='text-portfolio-lighterText'>
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={cardRef}
      className='project-card col-span-1 bg-portfolio-lightBlue rounded-lg p-6 hover:translate-y-[-5px] transition-all duration-300'
    >
      <div className='flex justify-between items-start mb-6'>
        <Folder className='text-portfolio-accent' size={40} />
        <div className='flex gap-4'>
          {github && (
            <a
              href={github}
              target='_blank'
              rel='noopener noreferrer'
              className='text-portfolio-lighterText hover:text-portfolio-accent'
            >
              <Github size={20} />
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target='_blank'
              rel='noopener noreferrer'
              className='text-portfolio-lighterText hover:text-portfolio-accent'
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
      <h3 className='text-xl font-semibold text-portfolio-lighterText mb-2'>
        {title}
      </h3>
      <p className='text-portfolio-text mb-8'>{description}</p>
      <ul className='flex flex-wrap gap-3 text-xs font-mono mt-auto'>
        {tags.map((tag) => (
          <li key={tag} className='text-portfolio-text'>
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [modalState, setModalState] = useState({
    isOpen: false,
    project: null as number | null,
  });

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
      },
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

  // Make sure showcase images exist and are valid
  const featuredProjects = [
    {
      title: 'Target Motors Angola',
      description:
        'Appointment management system with scheduling, customer management features, and multi-role access.',
      tags: ['React Native', 'Node.js', 'Express', 'MongoDB', 'Authentication'],
      github: 'https://github.com/habibhamdoun/',
      image: '/assets/motors.jpg',
      showcaseImages: [
        '/assets/target4.jpg',
        '/assets/target5.jpg',
        '/assets/target6.jpg',
        '/assets/target1.PNG',
        '/assets/target2.jpg',
        '/assets/target3.PNG',
      ],
    },
    {
      title: 'E-commerce Shop',
      description:
        'A cash on delivery e-commerce platform with product filtering, search functionality, and responsive design.',
      tags: ['Next.js', 'React', 'Responsive Design', 'E-commerce'],
      github: 'https://github.com/habibhamdoun/',
      demo: 'https://apocalypsefb.vercel.app/',
      image: '/assets/apocalypse2.jpg',
      showcaseImages: [
        '/assets/apocalypse1.png',
        '/assets/apocalypse3.png',
        '/assets/apocalypse4.png',
      ],
    },
    {
      title: 'PropScan UAE',
      description:
        'Mobile marketplace connecting clients with service providers such as plumbers and HVAC technicians in the UAE.',
      tags: ['React Native', 'Expo', 'UI/UX', 'Marketplace'],
      github: 'https://github.com/habibhamdoun/',
      demo: '',
      image: '/assets/propscan.jpg',
      showcaseImages: [
        '/assets/prop1.png',
        '/assets/prop2.png',
        '/assets/prop3.png',
      ],
    },
  ];

  const otherProjects = [
    {
      title: 'LOYAC Web Development Program',
      description:
        'Structured web development curriculum for multi-generation learning program, featuring portfolio and web game projects.',
      tags: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'Teaching'],
      github: 'https://github.com/habibhamdoun/',
    },
    {
      title: 'Yap',
      description:
        'A social media application allowing users to share posts, connect with friends, and engage with content.',
      tags: ['React', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/habibhamdoun/',
    },
    {
      title: 'Learning Arc',
      description:
        'An interactive educational platform with personalized learning paths and progress tracking.',
      tags: ['React', 'Node.js', 'Educational', 'User Analytics'],
      github: 'https://github.com/habibhamdoun/',
    },
    {
      title: 'Minesweeper',
      description:
        'My first programming project - a classic Minesweeper game with customizable difficulty levels.',
      tags: ['JavaScript', 'HTML', 'CSS', 'Game Development'],
      github: 'https://github.com/habibhamdoun/',
    },
  ];

  const openModal = (projectIndex: number) => {
    setModalState({
      isOpen: true,
      project: projectIndex,
    });
  };

  const closeModal = () => {
    setModalState({
      isOpen: false,
      project: null,
    });

    // Make sure to restore scrolling
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <section
        id='projects'
        ref={sectionRef}
        className='py-24 px-4 sm:px-6 lg:px-8 opacity-0'
      >
        <div className='container mx-auto max-w-5xl'>
          <h2 className='numbered-heading text-2xl sm:text-3xl font-bold mb-16'>
            <span className='number'>03.</span> Some Things I've Built
          </h2>

          <div className='space-y-24 mb-24'>
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-12 gap-4 md:gap-10 relative ${
                  index % 2 === 0 ? '' : 'md:text-right'
                }`}
              >
                <div
                  className={`md:col-span-7 relative ${
                    index % 2 === 0 ? 'md:order-1' : 'md:order-2'
                  }`}
                >
                  <div className='h-0 pt-[56.25%] relative overflow-hidden rounded-lg bg-portfolio-lightBlue'>
                    <img
                      src={project.image}
                      alt={project.title}
                      className='absolute inset-0 w-full h-full object-cover'
                    />
                    <div className='absolute inset-0 bg-portfolio-accent/10 hover:bg-transparent transition-all duration-300'></div>
                  </div>
                </div>

                <div
                  className={`md:col-span-6 md:col-start-6 flex flex-col justify-center z-10 ${
                    index % 2 === 0
                      ? 'md:order-2 md:col-start-6 items-start'
                      : 'md:order-1 md:col-start-1 md:items-end'
                  }`}
                >
                  <p className='font-mono text-portfolio-accent text-sm mb-1'>
                    Featured Project
                  </p>
                  <h3 className='text-2xl font-semibold text-portfolio-lighterText mb-4'>
                    {project.title}
                  </h3>

                  <div
                    className={`p-6 rounded-lg bg-portfolio-lightBlue my-4 ${
                      index % 2 === 0 ? 'text-left' : 'md:text-right'
                    }`}
                  >
                    <p className='text-portfolio-text'>{project.description}</p>
                  </div>

                  <ul
                    className={`flex flex-wrap gap-3 text-sm font-mono mb-6 ${
                      index % 2 === 0 ? '' : 'md:justify-end'
                    }`}
                  >
                    {project.tags.map((tag) => (
                      <li key={tag} className='text-portfolio-text'>
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <div
                    className={`flex gap-5 ${
                      index % 2 === 0 ? '' : 'md:justify-end'
                    }`}
                  >
                    {project.github && (
                      <a
                        href={project.github}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-portfolio-lighterText hover:text-portfolio-accent'
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-portfolio-lighterText hover:text-portfolio-accent'
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    <button
                      onClick={() => openModal(index)}
                      className='text-portfolio-lighterText hover:text-portfolio-accent transition-colors'
                      aria-label={`View ${project.title} showcase images`}
                    >
                      <Image size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects - Completely unchanged from original */}
          <div>
            <h3 className='text-2xl font-semibold text-center text-portfolio-lighterText mb-12'>
              Other Noteworthy Projects
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
              {otherProjects.map((project, index) => (
                <ProjectCard key={index} {...project} index={index} />
              ))}
            </div>

            <div className='text-center mt-12'>
              <a
                href='https://github.com/habibhamdoun'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 bg-transparent hover:bg-portfolio-accent/10 text-portfolio-accent font-mono border border-portfolio-accent px-6 py-3 rounded transition-all duration-300'
              >
                See More on GitHub <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Modal placed outside of section for better positioning */}
      {modalState.isOpen && modalState.project !== null && (
        <ShowcaseModal
          isOpen={modalState.isOpen}
          onClose={closeModal}
          images={featuredProjects[modalState.project].showcaseImages}
          title={featuredProjects[modalState.project].title}
        />
      )}
    </>
  );
};

export default Projects;
