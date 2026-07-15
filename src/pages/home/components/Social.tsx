const instagramPosts = [
  {
    image: 'https://readdy.ai/api/search-image?query=Colorful%20Venezuelan%20restaurant%20food%20flat%20lay%20with%20arepas%20tequenos%20empanadas%20sauces%20on%20rustic%20wooden%20table%20top%20view%2C%20warm%20natural%20lighting%2C%20appetizing%20food%20photography%2C%20editorial%20style%2C%20warm%20amber%20tones&width=500&height=500&seq=insta-01&orientation=squarish',
    alt: 'Plato venezolano en Teqabite',
  },
  {
    image: 'https://readdy.ai/api/search-image?query=Crispy%20golden%20Venezuelan%20tequenos%20cheese%20sticks%20with%20guasacaca%20dipping%20sauce%20on%20colorful%20plate%2C%20warm%20natural%20lighting%2C%20appetizing%20food%20photography%2C%20editorial%20style%2C%20warm%20amber%20tones&width=500&height=500&seq=insta-02&orientation=squarish',
    alt: 'Tequenos crujientes',
  },
  {
    image: 'https://readdy.ai/api/search-image?query=Delicious%20Venezuelan%20arepa%20stuffed%20with%20shredded%20beef%20black%20beans%20plantains%20on%20ceramic%20plate%2C%20warm%20natural%20lighting%2C%20appetizing%20food%20photography%2C%20editorial%20style%2C%20warm%20amber%20tones&width=500&height=500&seq=insta-03&orientation=squarish',
    alt: 'Arepa de Pabellon',
  },
  {
    image: 'https://readdy.ai/api/search-image?query=Gourmet%20Venezuelan%20style%20burger%20with%20avocado%20cheese%20bacon%20on%20brioche%20bun%20with%20fries%2C%20warm%20natural%20lighting%2C%20appetizing%20food%20photography%2C%20editorial%20style%2C%20warm%20amber%20tones&width=500&height=500&seq=insta-04&orientation=squarish',
    alt: 'Hamburguesa estilo venezolano',
  },
  {
    image: 'https://readdy.ai/api/search-image?query=Venezuelan%20patacon%20plantain%20platter%20topped%20with%20shredded%20beef%20cheese%20lettuce%20sauces%2C%20warm%20natural%20lighting%2C%20appetizing%20food%20photography%2C%20editorial%20style%2C%20warm%20amber%20tones&width=500&height=500&seq=insta-05&orientation=squarish',
    alt: 'Patacon venezolano',
  },
  {
    image: 'https://readdy.ai/api/search-image?query=Creamy%20Venezuelan%20chicha%20drink%20with%20cinnamon%20in%20tall%20glass%20with%20ice%2C%20next%20to%20plate%20of%20empanadas%2C%20warm%20natural%20lighting%2C%20appetizing%20beverage%20photography%2C%20editorial%20style%2C%20warm%20amber%20tones&width=500&height=500&seq=insta-06&orientation=squarish',
    alt: 'Chicha venezolana',
  },
];

export default function Social() {
  return (
    <section id="social" className="py-16 md:py-24 lg:py-32 px-6 md:px-10 bg-background-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="reveal">
            <span className="inline-block text-xs font-label font-semibold tracking-[0.15em] uppercase text-accent-500 border border-accent-300/60 px-4 py-2 rounded-full mb-5 md:mb-6">
              @teqabite
            </span>
          </div>
          <h2 className="reveal reveal-delay-1 font-heading text-foreground-950 text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Siguenos en Instagram
          </h2>
          <p className="reveal reveal-delay-2 text-foreground-600 text-base md:text-lg max-w-xl mx-auto mb-6 md:mb-8">
            Un vistazo al dia a dia de Teq-A-Bite. Platos recien salidos de la cocina,
            promociones especiales y la comunidad que nos hace crecer.
          </p>
          <a
            href="https://www.instagram.com/teqabite/"
            target="_blank"
            rel="noopener noreferrer"
            className="reveal reveal-delay-3 inline-flex items-center gap-2 bg-foreground-950 hover:bg-foreground-800 text-background-50 font-medium text-sm md:text-base px-7 py-3.5 rounded-full transition-all duration-300 whitespace-nowrap"
          >
            <i className="ri-instagram-line text-lg" />
            @teqabite
          </a>
        </div>

        {/* Grid */}
        <div className="reveal reveal-delay-2 reveal-stagger grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {instagramPosts.map((post, idx) => (
            <a
              key={idx}
              href="https://www.instagram.com/teqabite/"
              target="_blank"
              rel="noopener noreferrer"
              className="reveal group relative aspect-square rounded-xl md:rounded-2xl overflow-hidden bg-background-100"
            >
              <img
                src={post.image}
                alt={post.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground-950/0 group-hover:bg-foreground-950/40 transition-all duration-300 flex items-center justify-center">
                <i className="ri-instagram-line text-background-50 text-2xl md:text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}