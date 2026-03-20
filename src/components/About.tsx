import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: 'blur(4px)' },
  visible: (i: number) => ({
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function About() {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center px-6 py-32">
      <div className="max-w-3xl z-10">
        <motion.p
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={0}
          className="text-primary font-mono text-sm tracking-widest uppercase mb-3"
        >
          The Journey
        </motion.p>
        <motion.h2
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={1}
          className="text-3xl md:text-5xl font-bold mb-12 leading-[1.1]"
        >
          About <span className="text-gradient-purple">Me</span>
        </motion.h2>

        <div className="space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed">
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={2}>
            I'm currently a Class 11 student at S.A.M. Inter College in Saharanpur, navigating the exciting intersection
            of formal education and real-world software engineering. While my peers explore traditional academic paths,
            I've chosen to complement my studies with an intense, hands-on journey into the world of technology. Through
            rigorous training at CodeYogi, I've learned everything from foundational programming to complex system
            architecture, building real products along the way. This dual commitment has sharpened both my discipline
            and my ability to learn and adapt fast.
          </motion.p>
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={3}>
            As a Remote Intern at CodeYogi Foundation, I've had the privilege of working on production-grade MERN stack
            applications that serve real users. This experience has taught me the difference between writing code that
            works and writing code that scales — from architecting RESTful APIs and optimizing MongoDB queries to
            implementing responsive, accessible front-end interfaces with React and Tailwind CSS. Every sprint pushes
            me to write cleaner, more maintainable code and to think like an engineer, not just a programmer.
          </motion.p>
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={4}>
            Beyond web development, my curiosity spans a wide and growing landscape. I've explored game development,
            built automation pipelines with AI tools like Gemini and Claude, and delved into the fundamentals of ethical
            hacking using Kali Linux. This breadth isn't scattered ambition — it's a deliberate strategy to understand
            how different domains of computing connect, so that when I build something, I can draw on a rich mental model
            of how software, security, and intelligence intersect in the real world.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
