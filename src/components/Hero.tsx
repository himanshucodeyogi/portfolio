import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const subtitles = [
  'Full-Stack Engineer',
  'AI Enthusiast',
  'Remote Intern at CodeYogi Foundation',
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = subtitles[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.slice(0, displayText.length + 1));
        if (displayText.length === current.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(current.slice(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % subtitles.length);
        }
      }
    }, isDeleting ? 40 : 80);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-24">
      <div className="max-w-3xl text-center z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-primary font-mono text-sm tracking-widest uppercase mb-4"
        >
          Welcome to my world
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold leading-[1.05] mb-4"
        >
          Hi, I'm{' '}
          <span className="text-gradient-cyan">Himanshu</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="h-8 mb-6"
        >
          <span className="font-mono text-lg md:text-xl text-muted-foreground">
            {displayText}
            <span className="animate-pulse text-primary">|</span>
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
        >
          I craft high-performance digital experiences that merge elegant design with robust engineering.
          From scalable web platforms to intelligent automation — I turn complex problems into clean, efficient code.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={scrollToProjects}
            className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold 
              transition-all duration-200 hover:shadow-[0_0_24px_hsl(186_100%_50%/0.3)] active:scale-[0.97]"
          >
            Explore My Work
          </button>
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg border border-primary/40 text-primary font-semibold
              transition-all duration-200 hover:bg-primary/10 active:scale-[0.97]"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
