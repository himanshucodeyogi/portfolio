import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: 'blur(4px)' },
  visible: (i: number) => ({
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

const skillGroups = [
  {
    title: 'Frontend Architecture',
    color: 'primary',
    skills: ['React.js', 'React Native', 'JavaScript', 'HTML5', 'Tailwind CSS'],
    description:
      'Building dynamic, responsive user interfaces that feel fast and look polished — from single-page applications to cross-platform mobile experiences with React Native.',
  },
  {
    title: 'Backend & Databases',
    color: 'accent',
    skills: ['Node.js', 'Express.js','Python', 'MongoDB', 'NoSQL'],
    description:
      'Designing scalable RESTful APIs and efficient database architectures that handle real-world traffic, with a focus on clean separation of concerns and robust error handling.',
  },
  {
    title: 'Tools & Fundamentals',
    color: 'primary',
    skills: ['Git', 'GitHub', 'Full-Stack Architecture', 'AI-Assisted Coding'],
    description:
      'Leveraging modern development workflows — version control, CI/CD thinking, and AI-powered coding assistants — to ship reliable software faster without sacrificing quality.',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative min-h-screen flex items-center justify-center px-6 py-32">
      <div className="max-w-4xl w-full z-10">
        <motion.p
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={0}
          className="text-primary font-mono text-sm tracking-widest uppercase mb-3"
        >
          The Tech Ecosystem
        </motion.p>
        <motion.h2
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={1}
          className="text-3xl md:text-5xl font-bold mb-16 leading-[1.1]"
        >
          My <span className="text-gradient-cyan">Skills</span>
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-3">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={i + 2}
              className={`glass rounded-xl p-6 transition-all duration-300 hover:shadow-[0_0_30px_hsl(${group.color === 'primary' ? '186_100%_50%' : '263_70%_58%'}/0.1)] group`}
            >
              <h3 className={`text-lg font-semibold mb-3 ${group.color === 'primary' ? 'text-primary' : 'text-accent'}`}>
                {group.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {group.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-xs font-medium border border-border/60 text-foreground/80 bg-muted/40"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
