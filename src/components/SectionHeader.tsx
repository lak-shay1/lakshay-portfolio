import { motion } from 'framer-motion';

interface SectionHeaderProps {
  eyebrow: string;
  heading: string;
  subtext: string;
  centered?: boolean;
}

export default function SectionHeader({ eyebrow, heading, subtext, centered = false }: SectionHeaderProps) {
  return (
    <div className={`${centered ? 'text-center' : ''}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ type: 'spring', stiffness: 100, damping: 15 }}
        className="flex items-center gap-3 mb-3"
        style={{ justifyContent: centered ? 'center' : 'flex-start' }}
      >
        <span className="w-3 h-0.5 bg-coral rounded-full" />
        <span className="text-xs font-medium uppercase tracking-[0.12em] text-coral">
          {eyebrow}
        </span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.1 }}
        className="text-2xl md:text-3xl lg:text-[2.75rem] font-semibold text-text-primary leading-tight tracking-tight"
      >
        {heading}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.2 }}
        className={`mt-3 text-text-secondary max-w-[600px] leading-relaxed ${centered ? 'mx-auto' : ''}`}
      >
        {subtext}
      </motion.p>
    </div>
  );
}
