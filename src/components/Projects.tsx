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
    title: 'TypeAura Keyboard',
    link: 'https://typeaura-ai.vercel.app',
    description:
      'An AI-powered Android custom keyboard built with Flutter, offering real-time Hinglish ↔ English translation via LLaMA 3.3 70B. Its standout Floating Lens overlay translates any on-screen text using the Accessibility API, going far beyond a typical IME.',
    features: [
      'Floating Lens overlay that reads and translates on-screen text anywhere using a foreground service and the Android Accessibility API',
      'On-device offline suggestions plus AI tools — Smart Reply, Email Composer, Tone Changer, and Live Translate — backed by a secure server-side Groq proxy',
      'Native IME integrated with Flutter over a MethodChannel, with speech-to-text, emoji panel, clipboard history, and token-based premium tiers',
    ],
  },
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
  title: 'Sugam Garbh',
  link: 'https://sug-solh.onrender.com',
  description: 'A bilingual, AI-powered pregnancy tracking and support platform. It integrates Meta Llama 3.1 to provide context-aware health guidance, traditional remedies, and automated reminders across both Web and Telegram interfaces.',
  features: [
    'Context-aware AI conversational agent powered by Meta Llama 3.1 70B with seamless bilingual (Hindi/English) support',
    'Dual-platform accessibility via Telegram Bot and Web Interface, featuring scheduled health checks and background push notifications',
    'Military-grade data security utilizing AES-256-CBC encryption to protect sensitive user health and location records in MongoDB'
  ]
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
