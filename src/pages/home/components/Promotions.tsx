import { useState } from 'react';
import { promotions } from '@/mocks/promotions';
import { useParticleBurst } from './ParticleProvider';

export default function Promotions() {
  const [active, setActive] = useState(0);
  const burst = useParticleBurst();

  const current = promotions[active];

  return (
    <section id="promociones" className="relative bg-background-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-16">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10">
          <div className="reveal">
            <span className="inline-block text-xs md:text-sm font-label font-semibold tracking-[0.2em] uppercase text-primary-600 bg-primary-100/70 px-4 py-2 rounded-full mb-4">
              Promociones Especiales
            </span>
          </div>
          <h2 className="reveal reveal-delay-1 font-heading text-foreground-950 text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Ofertas que no podés perderte
          </h2>
        </div>

        {/* Tabs */}
        <div className="reveal reveal-delay-2 flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-8">
          {promotions.map((promo, idx) => (
            <button
              key={promo.id}
              onClick={() => setActive(idx)}
              className={`font-label text-xs md:text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 whitespace-nowrap cursor-pointer ${
                idx === active
                  ? 'bg-primary-500 text-background-50 shadow-md'
                  : 'bg-background-100 text-foreground-700 hover:bg-background-200 border border-background-200'
              }`}
              type="button"
            >
              {promo.label}
            </button>
          ))}
        </div>

        {/* Promo Card */}
        <div className="reveal reveal-scale relative rounded-2xl overflow-hidden shadow-lg">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={current.image}
              alt={current.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground-950/80 via-foreground-950/50 to-foreground-950/30" />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-6 md:p-10 lg:p-14 min-h-[320px] md:min-h-[380px]">
            <div className="max-w-lg">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-block text-[10px] md:text-xs font-label font-bold tracking-wider uppercase text-background-50 bg-accent-500 px-3 py-1.5 rounded-full">
                  {current.badge}
                </span>
                <span className="text-xs md:text-sm font-label font-semibold text-primary-300">
                  {current.subtitle}
                </span>
              </div>

              <h3 className="font-heading text-background-50 text-3xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight">
                {current.title}
              </h3>

              <p className="text-background-50/80 text-sm md:text-base leading-relaxed mb-5">
                {current.description}
              </p>

              <div className="flex items-center gap-2 mb-5">
                <span className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center shrink-0">
                  <i className="ri-price-tag-3-line text-background-50 text-sm" />
                </span>
                <span className="text-primary-300 font-heading font-bold text-lg md:text-xl">
                  {current.highlight}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:4074837996"
                  onClick={burst}
                  className="inline-flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-background-50 font-semibold text-sm px-7 py-3 rounded-full transition-all duration-300 whitespace-nowrap shadow-lg"
                >
                  <i className="ri-phone-line" />
                  Llamar para ordenar
                </a>
                <a
                  href="#menu"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center gap-2 border border-background-50/40 hover:border-primary-400 hover:text-primary-400 text-background-50 font-semibold text-sm px-7 py-3 rounded-full transition-all duration-300 whitespace-nowrap backdrop-blur-sm"
                >
                  <i className="ri-restaurant-line" />
                  Ver el Menú
                </a>
              </div>
            </div>

            {/* Floating stat / time badge */}
            <div className="hidden lg:flex flex-col items-center gap-1 bg-background-50/10 backdrop-blur-md border border-background-50/20 rounded-2xl px-8 py-6">
              <i className="ri-time-line text-primary-400 text-3xl mb-1" />
              <span className="text-background-50/60 text-xs font-label uppercase tracking-wider">
                Horario
              </span>
              <span className="text-background-50 font-heading font-bold text-2xl">
                {current.title.includes('2PM') ? '2PM – 6PM' : 'Todo el día'}
              </span>
            </div>
          </div>
        </div>

        {/* Dots indicator */}
        <div className="reveal reveal-delay-3 flex justify-center gap-2 mt-6">
          {promotions.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              className={`rounded-full transition-all duration-300 cursor-pointer ${
                idx === active
                  ? 'w-8 h-2.5 bg-primary-500'
                  : 'w-2.5 h-2.5 bg-background-300 hover:bg-background-400'
              }`}
              type="button"
              aria-label={`Promoción ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}