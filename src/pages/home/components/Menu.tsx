import { menuCategories, extraItems } from '@/mocks/menu';
import { useParticleBurst } from './ParticleProvider';

function MenuItem({ item }: { item: { name: string; price: string; description: string } }) {
  return (
    <div className="flex items-start justify-between gap-3 py-3 border-b border-background-200/50 last:border-0">
      <div className="flex-1 min-w-0">
        <h4 className="text-foreground-900 text-sm md:text-base font-semibold mb-0.5">
          {item.name}
        </h4>
        <p className="text-foreground-500 text-xs md:text-sm leading-relaxed">
          {item.description}
        </p>
      </div>
      <span className="text-primary-600 font-semibold text-sm md:text-base whitespace-nowrap pt-0.5">
        {item.price}
      </span>
    </div>
  );
}

export default function Menu() {
  const burst = useParticleBurst();

  return (
    <section id="menu" className="py-16 md:py-24 lg:py-32 px-6 md:px-10 bg-background-100">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="reveal">
            <span className="inline-block text-xs font-label font-semibold tracking-[0.15em] uppercase text-primary-500 border border-primary-300/60 px-4 py-2 rounded-full mb-5 md:mb-6">
              Nuestro Menu
            </span>
          </div>
          <h2 className="reveal reveal-delay-1 font-heading text-foreground-950 text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-5">
            Hecho en Casa,
            <br />
            Con Sabor de Verdad
          </h2>
          <p className="reveal reveal-delay-2 text-foreground-600 text-base md:text-lg max-w-2xl mx-auto">
            Cada plato lleva el sello de la cocina venezolana tradicional. Descubre todos nuestros platillos,
            de los tequenos mas crujientes hasta las arepas mas generosas.
          </p>
        </div>

        {/* Full Menu — all categories visible at once */}
        <div className="space-y-14 md:space-y-20">
          {menuCategories.map((cat) => (
            <div key={cat.id} className="reveal">
              {/* Category Header */}
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-6 md:mb-8">
                <div className="w-full sm:w-28 md:w-36 h-28 md:h-36 rounded-xl overflow-hidden flex-shrink-0">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-foreground-950 text-xl md:text-2xl font-bold mb-1">
                    {cat.name}
                  </h3>
                  <p className="text-foreground-500 text-sm md:text-base leading-relaxed max-w-lg">
                    {cat.description}
                  </p>
                </div>
              </div>

              {/* Items List */}
              <div className="bg-background-50 rounded-xl md:rounded-2xl border border-background-200/60 px-4 md:px-6 py-1 md:py-2 divide-y divide-background-200/40">
                {cat.items.map((item) => (
                  <MenuItem key={item.name} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Extra Items */}
        <div className="reveal mt-14 md:mt-20">
          <div className="text-center mb-8 md:mb-10">
            <span className="inline-block text-xs font-label font-semibold tracking-[0.15em] uppercase text-secondary-600 bg-secondary-100 px-4 py-2 rounded-full mb-4">
              Tambien Disponibles
            </span>
            <h3 className="font-heading text-foreground-950 text-xl md:text-2xl font-bold">
              Empanadas, Postres y Mas
            </h3>
          </div>
          <div className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {extraItems.map((item) => (
              <div
                key={item.name}
                className="reveal flex items-start justify-between gap-3 p-4 md:p-5 bg-background-50 rounded-xl border border-background-200/60"
              >
                <div className="flex-1 min-w-0">
                  <span className="inline-block text-[10px] font-label font-semibold tracking-wider uppercase text-secondary-600 bg-secondary-100 px-2 py-0.5 rounded-full mb-1.5">
                    {item.category}
                  </span>
                  <h4 className="text-foreground-900 text-sm md:text-base font-semibold mb-1">
                    {item.name}
                  </h4>
                  <p className="text-foreground-500 text-xs md:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <span className="text-primary-600 font-semibold text-sm md:text-base whitespace-nowrap">
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="reveal reveal-scale text-center mt-10 md:mt-14">
          <a
            href="https://fromtherestaurant.com/teq-a-bite/locations/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={burst}
            className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-background-50 font-medium text-sm md:text-base px-7 py-3.5 md:px-9 md:py-4 rounded-full transition-all duration-300 whitespace-nowrap"
          >
            <i className="ri-shopping-bag-3-line" />
            Ordenar Online
          </a>
        </div>
      </div>
    </section>
  );
}