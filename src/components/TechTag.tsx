const categoryColors: Record<string, string> = {
  frontend: '#FF7B6B',
  backend: '#60B5FF',
  data: '#4ADE80',
  ai: '#A78BFA',
  cloud: '#FBBF24',
  tools: '#5A6378',
};

interface TechTagProps {
  label: string;
  category?: string;
}

export default function TechTag({ label, category = 'frontend' }: TechTagProps) {
  const color = categoryColors[category] || categoryColors.frontend;

  return (
    <span
      className="inline-flex items-center px-3 py-1 rounded-pill text-xs font-medium text-text-secondary bg-surface border border-border-custom hover:border-border-hover hover:text-text-primary transition-all duration-200"
      style={{ borderLeftWidth: '3px', borderLeftColor: color }}
    >
      {label}
    </span>
  );
}
