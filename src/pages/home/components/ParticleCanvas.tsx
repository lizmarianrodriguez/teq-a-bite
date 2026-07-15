import { useCallback, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  life: number;
  maxLife: number;
  decay: number;
}

const COLORS = [
  'oklch(var(--primary-500))',
  'oklch(var(--accent-500))',
  'oklch(var(--secondary-500))',
  '#FF3008',
  '#06C167',
  '#FFD700',
  '#FFFFFF',
];

function createParticle(x: number, y: number): Particle {
  const angle = Math.random() * Math.PI * 2;
  const speed = 1.5 + Math.random() * 4;
  const size = 2 + Math.random() * 4;
  const life = 0.6 + Math.random() * 0.4;
  const color = COLORS[Math.floor(Math.random() * COLORS.length)];

  return {
    x,
    y,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed - 1.5,
    size,
    color,
    life,
    maxLife: life,
    decay: 0.01 + Math.random() * 0.015,
  };
}

function spawnParticles(container: HTMLDivElement, originX: number, originY: number) {
  const count = 18 + Math.floor(Math.random() * 8);
  const particles: Particle[] = [];

  for (let i = 0; i < count; i++) {
    particles.push(createParticle(originX, originY));
  }

  const canvas = document.createElement('canvas');
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '9999';
  canvas.style.userSelect = 'none';
  container.appendChild(canvas);

  const dpr = window.devicePixelRatio || 1;
  const rect = container.getBoundingClientRect();
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  ctx.scale(dpr, dpr);

  let animId = 0;

  const animate = () => {
    if (!ctx) return;
    ctx.clearRect(0, 0, rect.width, rect.height);

    let alive = 0;
    for (const p of particles) {
      if (p.life <= 0) continue;
      alive++;

      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.08;
      p.life -= p.decay;

      const progress = p.life / p.maxLife;
      const alpha = Math.max(0, progress);
      const size = p.size * (0.3 + 0.7 * progress);

      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    if (alive > 0) {
      animId = requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(animId);
      canvas.remove();
    }
  };

  animId = requestAnimationFrame(animate);

  // Safety cleanup after 2s
  setTimeout(() => {
    cancelAnimationFrame(animId);
    if (canvas.parentNode) canvas.remove();
  }, 2000);
}

export function useParticles() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const initContainer = useCallback((el: HTMLDivElement | null) => {
    containerRef.current = el;
  }, []);

  const burst = useCallback((e: React.MouseEvent) => {
    const container = containerRef.current;
    if (!container) return;
    spawnParticles(container, e.clientX, e.clientY);
  }, []);

  return { initContainer, burst };
}