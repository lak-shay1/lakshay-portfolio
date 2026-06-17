import { cn } from '@/lib/utils';

interface PillTagProps {
  children: React.ReactNode;
  filled?: boolean;
  color?: string;
  className?: string;
}

export default function PillTag({ children, filled, color, className }: PillTagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3.5 py-1.5 rounded-pill text-xs font-medium transition-all duration-200',
        filled
          ? 'text-text-primary border border-border-custom'
          : 'text-text-secondary bg-surface border border-border-custom hover:border-border-hover hover:text-text-primary',
        className
      )}
      style={filled && color ? { backgroundColor: `${color}26`, borderColor: `${color}40` } : {}}
    >
      {children}
    </span>
  );
}
