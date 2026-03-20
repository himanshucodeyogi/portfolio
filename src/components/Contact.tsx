import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useState, FormEvent } from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: 'blur(4px)' },
  visible: (i: number) => ({
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:himanshu@example.com?subject=${encodeURIComponent(formState.subject)}&body=${encodeURIComponent(`From: ${formState.name} (${formState.email})\n\n${formState.message}`)}`;
    window.open(mailtoLink);
  };

  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center px-6 py-32">
      <div className="max-w-2xl w-full z-10">
        <motion.p
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={0}
          className="text-primary font-mono text-sm tracking-widest uppercase mb-3"
        >
          Let's Connect
        </motion.p>
        <motion.h2
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={1}
          className="text-3xl md:text-5xl font-bold mb-6 leading-[1.1]"
        >
          Get in <span className="text-gradient-cyan">Touch</span>
        </motion.h2>

        <motion.p
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={2}
          className="text-muted-foreground text-base leading-relaxed mb-10"
        >
          Whether you're a recruiter looking for a driven engineer, a fellow developer who wants to collaborate on
          something ambitious, or someone with a wild idea that needs building — I'd love to hear from you. My inbox
          is always open, and I respond to every message.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={3}
          className="glass rounded-xl p-6 md:p-8 space-y-5"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-foreground/80 mb-1.5">Name</label>
              <input
                type="text"
                required
                value={formState.name}
                onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                className="w-full px-4 py-2.5 rounded-lg bg-muted/60 border border-border/60 text-foreground text-sm
                  placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground/80 mb-1.5">Email</label>
              <input
                type="email"
                required
                value={formState.email}
                onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                className="w-full px-4 py-2.5 rounded-lg bg-muted/60 border border-border/60 text-foreground text-sm
                  placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow"
                placeholder="you@email.com"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground/80 mb-1.5">Subject</label>
            <input
              type="text"
              required
              value={formState.subject}
              onChange={(e) => setFormState((s) => ({ ...s, subject: e.target.value }))}
              className="w-full px-4 py-2.5 rounded-lg bg-muted/60 border border-border/60 text-foreground text-sm
                placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow"
              placeholder="What's this about?"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground/80 mb-1.5">Message</label>
            <textarea
              required
              rows={5}
              value={formState.message}
              onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
              className="w-full px-4 py-2.5 rounded-lg bg-muted/60 border border-border/60 text-foreground text-sm
                placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow resize-none"
              placeholder="Tell me about your project, idea, or opportunity..."
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm
              transition-all duration-200 hover:shadow-[0_0_24px_hsl(186_100%_50%/0.3)] active:scale-[0.97]"
          >
            Send Message
          </button>
        </motion.form>

        {/* Footer */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={4}
          className="mt-20 pt-8 border-t border-border/40 text-center"
        >
          <div className="flex justify-center gap-6 mb-6">
            <a href="https://github.com/himanshucodeyogi" target="_blank" rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/himanshu-kashyap-81b92b361/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B7JKWDKA1R0CIcUIDDc6iGw%3D%3D" target="_blank" rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:himanshu.codeyogi@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-200">
              <Mail className="w-5 h-5" />
            </a>
          </div>
          <p className="text-muted-foreground text-sm mb-2">
            © {new Date().getFullYear()} Himanshu. All rights reserved.
          </p>
          <p className="text-muted-foreground/60 text-xs font-mono">
            Built with React & Three.js
          </p>
        </motion.div>
      </div>
    </section>
  );
}
