import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, Github, Linkedin } from 'lucide-react';
import HeroShader from '@/components/HeroShader';

const spring = { type: 'spring' as const, stiffness: 100, damping: 15 };

const statusItems = [
  { color: 'bg-mint', text: 'Full-time working rights (AU)' },
  { color: 'bg-coral', text: 'Open to junior & graduate roles' },
  { color: 'bg-sky', text: 'Available immediately' },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
      <HeroShader />

      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 900px 700px at 25% 50%, transparent 0%, rgba(10,12,16,0.75) 100%)',
        }}
      />

      <div className="relative z-[2] content-max-width page-padding w-full pt-[72px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-14 items-center py-[6vh] lg:py-[8vh]">
          {/* Text Content */}
          <div className="max-w-[680px]">
            {/* Mobile profile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ ...spring, delay: 0.45 }}
              className="lg:hidden mb-6"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-border-custom">
                <img
                  src="/Profile.png"
                  alt="Lakshay Arora"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-pill bg-surface/70 border border-border-custom backdrop-blur-sm mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-mint animate-pulse-dot" />
              <span className="text-xs font-medium text-text-secondary">
                RMIT Computer Science Graduate &bull; Melbourne, AU
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] xl:text-[4.25rem] font-bold text-text-primary leading-[1.1] tracking-tight">
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.65 }}
              >
                Lakshay Arora
              </motion.span>
              <motion.span
                className="block relative mt-2 text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-[3rem] font-semibold text-text-secondary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.75 }}
              >
                Building practical web apps, dashboards, AI-powered tools
                <motion.span
                  className="block text-text-primary mt-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  and cloud-enabled systems.
                  <motion.span
                    className="absolute -bottom-2 left-0 h-1 bg-coral rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.8, delay: 1.2, ease: 'easeOut' }}
                  />
                </motion.span>
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="mt-5 text-lg text-text-secondary leading-relaxed max-w-[560px]"
            >
              Melbourne-based Computer Science graduate with internship experience in full-stack development,
              cloud/DevOps, and data analytics. I ship working software — not just coursework demos.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="flex flex-wrap gap-x-6 gap-y-2 mt-6"
            >
              {statusItems.map((item, i) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 + i * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${item.color}`} />
                  <span className="text-xs font-medium text-text-secondary">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ ...spring, delay: 1.3 }}
              className="flex flex-wrap gap-3 mt-10"
            >
              <a
                href="#work"
                className="inline-flex items-center gap-2 bg-coral text-bg-dark font-semibold text-[0.9375rem] px-6 py-3 rounded-button hover:bg-coral-light hover:shadow-coral-glow hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
              >
                <ArrowDown size={18} />
                View Projects
              </a>
              <a
                href="/Lakshay_Arora_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-transparent border-[1.5px] border-border-custom text-text-primary font-semibold text-[0.9375rem] px-6 py-3 rounded-button hover:border-border-hover hover:bg-surface active:scale-[0.98] transition-all duration-200"
              >
                <Download size={18} />
                View Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-text-secondary font-medium text-[0.9375rem] px-2 py-3 hover:text-text-primary transition-colors duration-200 group"
              >
                <Mail size={18} />
                Contact Me
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                  &rarr;
                </span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="flex items-center gap-6 mt-8"
            >
              {[
                { icon: Github, href: 'https://github.com/lak-shay1', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/lakshay-1904arora/', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:lakshayarora1904@gmail.com', label: 'Email Me' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-text-tertiary hover:text-text-primary transition-colors duration-200 relative group"
                >
                  <Icon size={22} />
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded-card bg-surface-elevated border border-border-custom text-[10px] text-text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                    {href.replace('mailto:', '')}
                  </span>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...spring, delay: 0.8 }}
            className="hidden lg:block relative shrink-0"
          >
            <div
              className="absolute -inset-4 rounded-large opacity-60 pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(255,123,107,0.15) 0%, transparent 70%)',
              }}
            />
            <div className="relative w-[280px] xl:w-[320px] rounded-large overflow-hidden border-2 border-border-custom hover:border-border-hover transition-colors duration-300 shadow-card-hover">
              <img
                src="/Profile.png"
                alt="Lakshay Arora — Computer Science graduate"
                width={320}
                height={400}
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            <div className="absolute -bottom-3 -left-3 px-3 py-1.5 rounded-pill bg-surface/90 border border-border-custom backdrop-blur-sm text-xs font-medium text-text-secondary">
              Melbourne, AU
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
