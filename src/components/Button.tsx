import { cn } from '@/lib/utils';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  icon?: ReactNode;
  href?: string;
  fullWidth?: boolean;
}

export default function Button({
  variant = 'primary',
  icon,
  children,
  className,
  href,
  fullWidth,
  ...props
}: ButtonProps) {
  const base = 'inline-flex items-center justify-center gap-2 font-semibold text-[0.9375rem] tracking-wide rounded-button transition-all duration-200 cursor-pointer';

  const variants = {
    primary: 'bg-coral text-bg-dark px-6 py-3 hover:bg-coral-light hover:shadow-coral-glow hover:scale-[1.03] active:scale-[0.98]',
    secondary: 'bg-transparent border-[1.5px] border-border-custom text-text-primary px-6 py-3 hover:border-border-hover hover:bg-surface active:scale-[0.98]',
    ghost: 'bg-transparent text-text-secondary px-2 py-1 hover:text-text-primary active:scale-[0.98]',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  const classes = cn(base, variants[variant], widthClass, className);

  if (href) {
    return (
      <a href={href} className={classes}>
        {icon}
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {icon}
      {children}
    </button>
  );
}
