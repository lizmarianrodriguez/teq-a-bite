const galleryItems = [
  {
    name: 'Empanadas',
    info: 'Fried Corn Patties — $3.99',
    image: 'https://readdy.ai/api/search-image?query=Crispy%20golden%20Venezuelan%20empanadas%20on%20white%20plate%20with%20sauce%20dip%2C%20warm%20natural%20lighting%2C%20appetizing%20food%20photography%2C%20editorial%20style%2C%20shallow%20depth%20of%20field%2C%20warm%20amber%20tones%2C%20rustic%20wooden%20table%20background&width=500&height=500&seq=gallery-empanadas-01&orientation=squarish',
  },
  {
    name: 'Patacon',
    info: 'Plantain Platter — $15.99',
    image: 'https://readdy.ai/api/search-image?query=Delicious%20Venezuelan%20patacon%20plantain%20platter%20topped%20with%20shredded%20beef%20cheese%20and%20sauces%20on%20rustic%20plate%2C%20warm%20natural%20lighting%2C%20appetizing%20food%20photography%2C%20editorial%20style%2C%20shallow%20depth%20of%20field%2C%20warm%20amber%20tones&width=500&height=500&seq=gallery-patacon-01&orientation=squarish',
  },
  {
    name: 'Tequenos',
    info: 'Cheese Sticks — from $5.00',
    image: 'https://readdy.ai/api/search-image?query=Golden%20crispy%20Venezuelan%20tequenos%20cheese%20sticks%20stacked%20on%20white%20plate%20with%20guasacaca%20sauce%20bowl%2C%20warm%20natural%20lighting%2C%20appetizing%20food%20photography%2C%20editorial%20style%2C%20shallow%20depth%20of%20field%2C%20warm%20amber%20tones&width=500&height=500&seq=gallery-tequenos-02&orientation=squarish',
  },
  {
    name: 'Chicha',
    info: 'Traditional Drink — $4.99',
    image: 'https://readdy.ai/api/search-image?query=Creamy%20Venezuelan%20chicha%20rice%20drink%20in%20clear%20glass%20with%20cinnamon%20stick%20and%20ice%2C%20warm%20natural%20lighting%2C%20appetizing%20beverage%20photography%2C%20editorial%20style%2C%20shallow%20depth%20of%20field%2C%20warm%20amber%20tones%2C%20rustic%20wooden%20surface&width=500&height=500&seq=gallery-chicha-01&orientation=squarish',
  },
  {
    name: 'Cachapa',
    info: 'Corn Pancake — $13.99',
    image: 'https://readdy.ai/api/search-image?query=Sweet%20Venezuelan%20cachapa%20corn%20pancake%20folded%20with%20melted%20white%20cheese%20on%20rustic%20plate%2C%20warm%20natural%20lighting%2C%20appetizing%20food%20photography%2C%20editorial%20style%2C%20shallow%20depth%20of%20field%2C%20warm%20amber%20tones&width=500&height=500&seq=gallery-cachapa-02&orientation=squarish',
  },
  {
    name: 'Pepito',
    info: 'Meat Sandwich — $14.99',
    image: 'https://readdy.ai/api/search-image?query=Large%20Venezuelan%20pepito%20sandwich%20filled%20with%20grilled%20steak%20toppings%20on%20wooden%20cutting%20board%2C%20warm%20natural%20lighting%2C%20appetizing%20food%20photography%2C%20editorial%20style%2C%20shallow%20depth%20of%20field%2C%20warm%20amber%20tones&width=500&height=500&seq=gallery-pepito-01&orientation=squarish',
  },
  {
    name: 'Toston Burger',
    info: 'Plantain Bun Burger — $12.99',
    image: 'https://readdy.ai/api/search-image?query=Creative%20Venezuelan%20toston%20burger%20with%20crispy%20fried%20plantain%20as%20bun%20filled%20with%20beef%20lettuce%20tomato%20cheese%2C%20warm%20natural%20lighting%2C%20appetizing%20food%20photography%2C%20editorial%20style%2C%20warm%20amber%20tones&width=500&height=500&seq=gallery-toston-01&orientation=squarish',
  },
  {
    name: 'Ensalada',
    info: 'Grilled Chicken Salad — $11.99',
    image: 'https://readdy.ai/api/search-image?query=Fresh%20Venezuelan%20grilled%20chicken%20salad%20with%20avocado%20tomatoes%20lettuce%20colorful%20vegetables%20in%20white%20bowl%2C%20warm%20natural%20lighting%2C%20appetizing%20food%20photography%2C%20editorial%20style%2C%20warm%20amber%20tones&width=500&height=500&seq=gallery-ensalada-01&orientation=squarish',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 md:py-24 lg:py-32 px-6 md:px-10 bg-foreground-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
          <div className="reveal">
            <span className="inline-block text-xs font-label font-semibold tracking-[0.15em] uppercase text-background-400 border border-background-700 px-4 py-2 rounded-full mb-4 md:mb-5">
              Galeria
            </span>
            <h2 className="font-heading text-background-50 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Platos que
              <br />
              Despiertan Antojos
            </h2>
          </div>
          <p className="reveal reveal-delay-1 text-background-400 text-sm md:text-base max-w-md leading-relaxed">
            Desde nuestras empanadas crujientes hasta la cachapa mas dulce,
            cada foto cuenta una historia de sabor venezolano.
          </p>
        </div>

        {/* Grid Gallery */}
        <div className="reveal reveal-delay-2 reveal-stagger grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {galleryItems.map((item, idx) => (
            <div
              key={item.name}
              className={`reveal group relative overflow-hidden rounded-xl md:rounded-2xl bg-background-800 ${
                idx === 0 || idx === 5 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <div
                className={`relative w-full ${
                  idx === 0 || idx === 5 ? 'aspect-square md:aspect-auto md:h-full' : 'aspect-square'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground-950/70 via-foreground-950/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                  <h3 className="text-background-50 font-semibold text-sm md:text-base mb-0.5">
                    {item.name}
                  </h3>
                  <p className="text-background-400 text-xs md:text-sm">
                    {item.info}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}