import { ArrowUp } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useScrollProgress } from '@/hooks/useScrollProgress';

export default function BackToTop() {
  const { scrollY } = useScrollProgress();
  const visible = scrollY > window.innerHeight * 0.5;

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-surface-elevated border border-border-custom flex items-center justify-center text-text-secondary hover:bg-coral hover:text-bg-dark transition-all duration-200 hover:scale-110 z-40 cursor-pointer"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
