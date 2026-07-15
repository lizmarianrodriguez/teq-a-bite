import { useEffect, useState } from 'react';
import { useIsOpenNow } from '@/hooks/useIsOpenNow';

interface OpenNowBadgeProps {
  scrolled: boolean;
  className?: string;
}

export default function OpenNowBadge({ scrolled, className = '' }: OpenNowBadgeProps) {
  const isOpen = useIsOpenNow();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setVisible(true), 400);
      return () => clearTimeout(timer);
    }
    setVisible(false);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border transition-all duration-700 ease-out whitespace-nowrap ${
        visible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 -translate-y-2'
      } ${
        scrolled
          ? 'bg-green-50 border-green-200/60 text-green-700'
          : 'bg-green-500/15 border-green-400/30 text-green-100'
      } ${className}`}
    >
      <span className="relative flex w-2 h-2">
        <span className="absolute inline-flex w-full h-full rounded-full bg-green-500 opacity-75 animate-ping" />
        <span className="relative inline-flex w-2 h-2 rounded-full bg-green-500" />
      </span>
      <span className="text-xs font-semibold tracking-wide">
        Abierto Ahora
      </span>
    </div>
  );
}