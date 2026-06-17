import { motion } from 'framer-motion';
import { Globe, Mail, Linkedin, Github } from 'lucide-react';

const quickLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Role Fit', href: '#role-fit' },
  { label: 'Experience', href: '#experience' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
      className="bg-bg-dark border-t border-border-custom"
    >
      <div className="content-max-width page-padding section-padding">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Col 1: Brand */}
          <div>
            <h4 className="text-base font-bold text-text-primary mb-3">Lakshay Arora</h4>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              Melbourne-based Computer Science graduate building practical web apps, dashboards,
              AI-powered tools and cloud-enabled systems.
            </p>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-pill text-xs font-medium text-text-secondary bg-surface border border-border-custom">
              <Globe size={14} />
              Melbourne, AU
            </span>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h5 className="text-xs font-semibold text-text-secondary uppercase tracking-[0.08em] mb-4">
              Quick Links
            </h5>
            <div className="flex flex-col gap-2">
              {quickLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-200 hover:pl-2 hover:border-l-2 hover:border-coral"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3: Connect */}
          <div>
            <h5 className="text-xs font-semibold text-text-secondary uppercase tracking-[0.08em] mb-4">
              Connect
            </h5>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:lakshayarora1904@gmail.com"
                className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                <Mail size={16} />
                lakshayarora1904@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/lakshay-1904arora/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a
                href="https://github.com/lak-shay1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                <Github size={16} />
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 mt-8 border-t border-border-custom">
          <p className="text-xs text-text-tertiary">
            2025 Lakshay Arora. Built with React, TypeScript, Tailwind.
          </p>
          <p className="flex items-center gap-2 text-xs text-mint">
            <span className="w-1 h-1 rounded-full bg-mint animate-pulse-dot" />
            Open to junior & graduate roles
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
