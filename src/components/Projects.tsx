import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: 'blur(4px)' },
  visible: (i: number) => ({
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

const projects = [
  {
    title: 'Blood Donor Connect',
    link: 'https://blood-donor-rust.vercel.app/',
    description:
      'A life-saving platform designed to bridge the gap between voluntary blood donors and recipients in urgent need. Built with a focus on speed and reliability, it enables real-time donor discovery based on blood type and location.',
    features: [
      'Real-time donor search with geolocation filtering and blood group matching for instant results',
      'Secure user authentication and profile management for both donors and seekers',
      'Responsive, mobile-first design ensuring accessibility during critical moments',
    ],
  },
  {
    title: 'Sug Solh',
    link: 'https://sug-solh.onrender.com',
    description:
      'An integrated web solution engineered for efficient data management and intuitive user interaction. Sug Solh streamlines complex workflows into a clean, accessible interface that makes data-driven decisions effortless.',
    features: [
      'Dynamic data dashboards with real-time updates and interactive filtering capabilities',
      'Role-based access control ensuring secure, multi-level user management',
      'Optimized MongoDB aggregation pipelines for fast, complex data retrieval',
    ],
  },
  {
    title: 'ThinkDual',
    link: 'https://thinkdual-8vdt.onrender.com/',
    description:
      'A dynamic brainstorming and interaction hub built to manage complex data states and facilitate creative collaboration. ThinkDual turns chaotic ideas into structured, actionable threads.',
    features: [
      'Real-time collaborative workspace with WebSocket-powered live updates',
      'Stateful interaction management handling complex, nested data relationships',
      'Intuitive card-based UI for organizing, tagging, and prioritizing ideas',
    ],
  },
  {
    title: 'IITM Info Bot',
    link: 'https://t.me/IITMInfoBot',
    description:
      'An automated Telegram bot providing real-time academic information for the IIT Madras online degree community. From exam schedules to resource links, it delivers instant, reliable answers at scale.',
    features: [
      'Natural language command parsing for intuitive, conversational interactions',
      'Automated content scraping and caching for up-to-date academic information',
      'Scalable architecture handling thousands of concurrent user queries reliably',
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative min-h-screen flex items-center justify-center px-6 py-32">
      <div className="max-w-5xl w-full z-10">
        <motion.p
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={0}
          className="text-primary font-mono text-sm tracking-widest uppercase mb-3"
        >
          Interactive Gallery
        </motion.p>
        <motion.h2
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={1}
          className="text-3xl md:text-5xl font-bold mb-16 leading-[1.1]"
        >
          Featured <span className="text-gradient-purple">Projects</span>
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={i + 2}
              className="glass rounded-xl p-6 group transition-all duration-300 
                hover:shadow-[0_0_40px_hsl(186_100%_50%/0.08)] hover:border-primary/30
                cursor-pointer block"
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </h3>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-200 mt-1 shrink-0" />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <ul className="space-y-2">
                {project.features.map((feat, fi) => (
                  <li key={fi} className="text-xs text-muted-foreground/80 flex gap-2">
                    <span className="text-primary mt-0.5 shrink-0">▹</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
