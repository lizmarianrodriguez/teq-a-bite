import { useEffect, useRef, useState } from 'react';

interface HoursModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HoursModal({ isOpen, onClose }: HoursModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => setShow(true));
      document.body.style.overflow = 'hidden';
    } else {
      setShow(false);
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === modalRef.current) onClose();
  };

  if (!isOpen) return null;

  const hours = [
    { day: 'Lunes – Jueves', time: '7:00 AM – 6:00 PM', highlight: false },
    { day: 'Viernes – Sábado', time: '7:00 AM – 8:00 PM', highlight: true },
    { day: 'Domingo', time: '7:00 AM – 3:00 PM', highlight: false },
  ];

  return (
    <div
      ref={modalRef}
      onClick={handleBackdropClick}
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-300 ${
        show ? 'bg-foreground-950/60 backdrop-blur-sm' : 'bg-foreground-950/0'
      }`}
    >
      <div
        className={`relative w-full max-w-md bg-background-50 rounded-2xl md:rounded-3xl border border-background-200/70 shadow-2xl overflow-hidden transition-all duration-300 ${
          show ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'
        }`}
      >
        {/* Header */}
        <div className="bg-primary-500 px-6 py-5 md:py-6 text-center relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-background-50/20 hover:bg-background-50/30 flex items-center justify-center text-background-50 transition-colors cursor-pointer"
            aria-label="Cerrar"
          >
            <i className="ri-close-line text-lg" />
          </button>
          <div className="w-12 h-12 rounded-full bg-background-50/20 flex items-center justify-center mx-auto mb-3">
            <i className="ri-time-line text-background-50 text-2xl" />
          </div>
          <h3 className="font-heading text-background-50 text-xl md:text-2xl font-bold">
            Horario de Atencion
          </h3>
          <p className="text-background-50/80 text-sm mt-1">
            Ven cuando tengas antojo de sabor venezolano
          </p>
        </div>

        {/* Hours List */}
        <div className="px-6 py-5 md:py-6 space-y-3">
          {hours.map((h) => (
            <div
              key={h.day}
              className={`flex items-center justify-between p-3.5 md:p-4 rounded-xl ${
                h.highlight
                  ? 'bg-primary-50 border border-primary-200/50'
                  : 'bg-background-100'
              }`}
            >
              <span className="text-foreground-800 font-medium text-sm md:text-base">
                {h.day}
              </span>
              <span
                className={`font-semibold text-sm md:text-base whitespace-nowrap ${
                  h.highlight ? 'text-primary-600' : 'text-foreground-600'
                }`}
              >
                {h.time}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="px-6 pb-6 md:pb-7">
          <div className="bg-secondary-50 rounded-xl p-4 mb-4 text-center">
            <p className="text-secondary-700 text-xs md:text-sm font-medium">
              <i className="ri-map-pin-line mr-1.5 text-secondary-500" />
              1206 E Vine Street, Kissimmee, FL 34744
            </p>
          </div>
          <a
            href="tel:4072053548"
            className="flex items-center justify-center gap-2 w-full bg-primary-500 hover:bg-primary-600 text-background-50 font-medium text-sm md:text-base py-3.5 rounded-full transition-colors whitespace-nowrap"
          >
            <i className="ri-phone-line" />
            Llamar: (407) 205-3548
          </a>
        </div>
      </div>
    </div>
  );
}