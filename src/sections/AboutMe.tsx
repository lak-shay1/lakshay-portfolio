import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Briefcase, Clock } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';

const details = [
  { icon: GraduationCap, label: 'RMIT University \u2014 BSc Computer Science' },
  { icon: MapPin, label: 'Melbourne, Australia' },
  { icon: Briefcase, label: 'Full-time working rights' },
  { icon: Clock, label: 'Available immediately' },
];

export default function AboutMe() {
  return (
    <section id="about" className="bg-bg-dark section-padding">
      <div className="content-max-width page-padding">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-10 lg:gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto lg:mx-0 max-w-[400px]"
          >
            {/* Decorative blur */}
            <div
              className="absolute -bottom-8 -right-8 w-[200px] h-[200px] rounded-full animate-spin-slow pointer-events-none"
              style={{ backgroundColor: 'rgba(255, 123, 107, 0.12)', filter: 'blur(60px)' }}
            />

            <div className="relative rounded-large overflow-hidden border-2 border-border-custom hover:border-border-hover transition-colors duration-300">
              <img
                src="/Profile.png"
                alt="Lakshay Arora"
                loading="lazy"
                className="w-full aspect-[3/4] object-cover hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <SectionHeader
              eyebrow="ABOUT ME"
              heading="Graduate developer with real internship experience."
              subtext=""
            />

            <div className="mt-6 space-y-4">
              {[
                "I'm a Computer Science graduate from RMIT University in Melbourne, with hands-on experience across full-stack development, cloud/DevOps, data analytics, and AI-assisted tooling. I build web applications, dashboards, and intelligent tools that solve practical problems.",
                'At Staffinity Technologies, I worked with Docker, Kubernetes, and GitHub Actions CI/CD while supporting testing and deployment documentation. At the International Film Festival of Australia, I built React components and contributed to frontend and usability improvements in an internship codebase.',
                'I use modern AI assistants to move faster on prototyping — but I review, test, debug, and document every line of code myself. AI accelerates my workflow; it does not replace my understanding.',
                "I'm actively seeking junior and graduate roles in software development, AI/CX engineering, application support, cloud/DevOps, and business systems. I have full-time working rights in Australia and I'm ready to contribute from day one.",
              ].map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="text-text-secondary leading-relaxed"
                >
                  {p}
                </motion.p>
              ))}
            </div>

            {/* Detail Pills */}
            <div className="flex flex-wrap gap-2 mt-6">
              {details.map((d, i) => (
                <motion.span
                  key={d.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.08 }}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-pill text-xs font-medium text-text-secondary bg-surface border border-border-custom hover:border-border-hover hover:text-text-primary transition-all duration-200"
                >
                  <d.icon size={14} />
                  {d.label}
                </motion.span>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-8"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-coral text-bg-dark font-semibold text-[0.9375rem] px-6 py-3 rounded-button hover:bg-coral-light hover:shadow-coral-glow hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
              >
                Get in Touch
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
