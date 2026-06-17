import { useScrollProgress } from '@/hooks/useScrollProgress';

export default function ScrollProgress() {
  const { progress } = useScrollProgress();

  return (
    <div
      className="fixed top-0 left-0 h-[3px] bg-coral z-50"
      style={{ width: `${progress * 100}%` }}
    />
  );
}
