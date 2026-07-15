import { useRef, useState, useCallback, useEffect } from 'react';

export default function WhatsAppButton() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const dragState = useRef({ startX: 0, startY: 0, initialX: 0, initialY: 0, moved: false });
  const wrapperRef = useRef<HTMLDivElement>(null);

  const phoneNumber = '14075754802';
  const message = encodeURIComponent('¡Hola! Me gustaría hacer un pedido de Teq-A-Bite 🍽️');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  const onPointerDown = useCallback((clientX: number, clientY: number) => {
    dragState.current = {
      startX: clientX,
      startY: clientY,
      initialX: offset.x,
      initialY: offset.y,
      moved: false,
    };
    setDragging(true);
  }, [offset]);

  const onPointerMove = useCallback((clientX: number, clientY: number) => {
    if (!dragging) return;
    const dx = clientX - dragState.current.startX;
    const dy = clientY - dragState.current.startY;
    if (Math.abs(dx) > 4 || Math.abs(dy) > 4) dragState.current.moved = true;

    const el = wrapperRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    let newX = dragState.current.initialX + dx;
    let newY = dragState.current.initialY + dy;

    const minX = -(vw - rect.width - 24);
    const minY = -(vh - rect.height - 24);

    newX = Math.max(minX, Math.min(0, newX));
    newY = Math.max(minY, Math.min(0, newY));

    setOffset({ x: newX, y: newY });
  }, [dragging]);

  const onPointerUp = useCallback(() => {
    setDragging(false);
  }, []);

  useEffect(() => {
    if (!dragging) return;

    const handleMouseMove = (e: MouseEvent) => onPointerMove(e.clientX, e.clientY);
    const handleMouseUp = () => onPointerUp();
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        e.preventDefault();
        onPointerMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    };
    const handleTouchEnd = () => onPointerUp();

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [dragging, onPointerMove, onPointerUp]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (dragState.current.moved) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <div
      ref={wrapperRef}
      className="fixed bottom-6 right-6 z-50 group"
      style={{
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        cursor: dragging ? 'grabbing' : 'grab',
        touchAction: 'none',
        userSelect: 'none',
        WebkitUserSelect: 'none',
      }}
      onMouseDown={(e) => onPointerDown(e.clientX, e.clientY)}
      onTouchStart={(e) => {
        if (e.touches.length > 0) {
          onPointerDown(e.touches[0].clientX, e.touches[0].clientY);
        }
      }}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="flex items-center gap-3"
        aria-label="Chatear por WhatsApp"
        draggable={false}
      >
        <span className="hidden sm:block bg-background-50 text-foreground-800 text-sm font-medium px-4 py-2 rounded-xl shadow-lg border border-background-200/70 opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap pointer-events-none">
          ¡Escríbenos!
        </span>
        <div className={`w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#128C7E] shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 select-none ${dragging ? 'scale-95' : ''}`}>
          <i className="ri-whatsapp-line text-white text-3xl pointer-events-none" />
        </div>
      </a>
    </div>
  );
}