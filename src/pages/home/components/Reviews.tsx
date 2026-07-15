import { useState, useEffect, useCallback } from 'react';
import { reviews } from '@/mocks/reviews';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i}>
          {i < rating ? (
            <i className="ri-star-fill text-accent-500 text-sm" />
          ) : (
            <i className="ri-star-line text-accent-500 text-sm" />
          )}
        </span>
      ))}
    </div>
  );
}

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextReview, 6000);
    return () => clearInterval(timer);
  }, [nextReview]);

  const currentReview = reviews[currentIndex];

  return (
    <section id="reviews" className="py-16 md:py-24 lg:py-32 px-6 md:px-10 bg-background-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="reveal">
            <span className="inline-block text-xs font-label font-semibold tracking-[0.15em] uppercase text-primary-500 border border-primary-300/60 px-4 py-2 rounded-full mb-5 md:mb-6">
              Testimonios
            </span>
          </div>
          <h2 className="reveal reveal-delay-1 font-heading text-foreground-950 text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Todos Aman Nuestra Comida
          </h2>
          <p className="reveal reveal-delay-2 text-foreground-600 text-base md:text-lg max-w-xl mx-auto">
            4.4 estrellas en Google. Más de 1,500 reseñas. Esto es lo que dicen
            nuestros clientes.
          </p>
        </div>

        {/* Review Card */}
        <div className="reveal reveal-blur reveal-delay-3">
          <div className="relative bg-foreground-950 rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
              {/* Left: Image area */}
              <div className="md:col-span-4 lg:col-span-3 flex justify-center md:justify-start">
                <div className="relative w-full max-w-[220px] md:max-w-none aspect-[3/4] rounded-xl md:rounded-2xl overflow-hidden bg-secondary-800">
                  <img
                    src="https://readdy.ai/api/search-image?query=Close%20up%20appetizing%20Venezuelan%20food%20platter%20with%20arepas%20teque%C3%B1os%20and%20empanadas%20on%20rustic%20plate%2C%20warm%20natural%20lighting%2C%20editorial%20food%20photography%2C%20shallow%20depth%20of%20field%2C%20warm%20amber%20tones%2C%20professional%20restaurant%20presentation&width=400&height=500&seq=reviews-food-01&orientation=portrait"
                    alt="Plato venezolano"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-primary-500 rounded-full opacity-20 blur-xl" />
                </div>
              </div>

              {/* Right: Quote */}
              <div className="md:col-span-8 lg:col-span-9">
                <div className="mb-4 md:mb-5">
                  <StarRating rating={currentReview.rating} />
                </div>
                <span className="text-4xl md:text-5xl text-primary-500/30 font-heading leading-none block mb-3 md:mb-4">
                  &ldquo;
                </span>
                <blockquote className="text-background-50 text-lg md:text-xl lg:text-2xl font-body leading-relaxed mb-6 md:mb-8">
                  {currentReview.text}
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center">
                    <span className="text-primary-400 font-semibold text-sm">
                      {currentReview.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-background-200 font-medium text-sm md:text-base">
                      {currentReview.name}
                    </p>
                    <p className="text-background-600 text-xs md:text-sm">
                      {currentReview.source} · {currentReview.date}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex items-center justify-center gap-2 mt-8 md:mt-10">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === currentIndex
                      ? 'w-8 bg-primary-500'
                      : 'w-2 bg-background-700 hover:bg-background-600'
                  }`}
                  aria-label={`Ver reseña ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Review Stats */}
        <div className="reveal reveal-stagger grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-10 md:mt-14">
          {[
            { label: 'Reseñas', value: '1,586+' },
            { label: 'Calificación', value: '4.4' },
            { label: 'Años', value: '7+' },
            { label: 'Clientes', value: '50K+' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="reveal text-center p-5 md:p-6 bg-background-100 rounded-xl border border-background-200/60"
            >
              <p className="font-heading text-foreground-950 text-2xl md:text-3xl font-bold mb-1">
                {stat.value}
              </p>
              <p className="text-foreground-500 text-xs md:text-sm font-medium uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}