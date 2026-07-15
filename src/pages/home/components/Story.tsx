export default function Story() {
  return (
    <section id="story" className="py-16 md:py-24 lg:py-32 px-6 md:px-10 bg-background-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image Column */}
          <div className="reveal reveal-left order-2 lg:order-1">
            <div className="relative">
              <span className="inline-block text-xs font-label font-semibold tracking-[0.15em] uppercase text-primary-500 border border-primary-300/60 px-4 py-2 rounded-full mb-6">
                Desde 2018
              </span>
              <div className="rounded-2xl md:rounded-3xl overflow-hidden aspect-[4/5] md:aspect-square">
                <img
                  src="https://readdy.ai/api/search-image?query=Warm%20cozy%20Venezuelan%20restaurant%20interior%20with%20wooden%20tables%20soft%20ambient%20lighting%20family%20friendly%20atmosphere%20colorful%20decor%20elements%20clean%20modern%20design%20editorial%20photography%20warm%20amber%20tones%20professional%20restaurant%20interior%20shot&width=700&height=700&seq=story-restaurant-01&orientation=squarish"
                  alt="Interior acogedor del restaurante Teq-A-Bite"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="reveal reveal-right reveal-delay-2 order-1 lg:order-2">
            <h2 className="font-heading text-foreground-950 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5 md:mb-6">
              Un Pedacito
              <br />
              de Venezuela
              <br />
              en Florida
            </h2>
            <p className="text-foreground-600 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
              Teq-A-Bite nació con una misión simple: llevar el auténtico sabor
              venezolano a Kissimmee. Cada arepa, cada tequeño, cada cachapa está
              hecho en casa con recetas de familia, ingredientes frescos y mucho
              cariño. Somos el lugar donde los venezolanos se sienten en casa y
              donde quienes prueban nuestra comida por primera vez descubren un
              sabor que los hace volver.
            </p>
            <p className="text-foreground-500 text-sm md:text-base leading-relaxed mb-8 md:mb-10">
              Ubicados en el corazón de Kissimmee, nos hemos ganado la confianza
              de cientos de clientes con porciones generosas, precios justos y
              un servicio que te hace sentir parte de la familia.
            </p>
            <a
              href="#menu"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 bg-foreground-950 hover:bg-foreground-800 text-background-50 font-medium text-sm md:text-base px-7 py-3.5 md:px-8 md:py-4 rounded-full transition-all duration-300 whitespace-nowrap"
            >
              Explorar el Menú
              <i className="ri-arrow-right-line" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}