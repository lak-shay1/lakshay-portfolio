import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Role Fit', href: '#role-fit' },
  { label: 'Experience', href: '#experience' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const threshold = window.innerHeight * 0.8;
    const onScroll = () => setScrolled(window.scrollY > threshold);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map(l => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-100px 0px -60% 0px' }
    );
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNavClick = useCallback((href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-[100] h-[72px] flex items-center transition-all duration-300 ${
          scrolled
            ? 'bg-[rgba(10,12,16,0.85)] backdrop-blur-xl border-b border-border-custom/50'
            : 'bg-transparent'
        }`}
      >
        <div className="content-max-width page-padding w-full flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-1.5">
            <span className="text-sm font-bold text-text-primary tracking-tight">Lakshay Arora</span>
            <span className="w-1.5 h-1.5 rounded-full bg-coral animate-pulse-dot" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer ${
                  activeSection === link.href.slice(1) ? 'text-coral' : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {link.label}
                {activeSection === link.href.slice(1) && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-3 right-3 h-0.5 bg-coral rounded-full"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/Lakshay_Arora_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-text-secondary hover:text-text-primary transition-colors duration-200"
            >
              <Download size={16} />
              Resume
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
              className="bg-coral text-bg-dark text-sm font-semibold px-5 py-2.5 rounded-pill hover:bg-coral-light hover:shadow-coral-glow hover:scale-[1.03] transition-all duration-200"
            >
              Contact
            </a>
          </div>

          {/* Mobile: Contact + Hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
              className="bg-coral text-bg-dark text-xs font-semibold px-4 py-2 rounded-pill"
            >
              Contact
            </a>
            <button
              onClick={() => setMobileOpen(true)}
              className="text-text-primary p-1"
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[110] bg-bg-dark/98 backdrop-blur-xl flex flex-col"
          >
            <div className="flex items-center justify-between h-[72px] px-5">
              <span className="text-sm font-bold text-text-primary">Lakshay Arora</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-text-primary p-1"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center gap-2">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-2xl font-semibold text-text-primary py-3 hover:text-coral transition-colors cursor-pointer"
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
