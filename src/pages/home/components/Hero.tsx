import { useParticleBurst } from './ParticleProvider';

export default function Hero() {
  const burst = useParticleBurst();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image — full bleed */}
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=Spectacular%20overhead%20view%20of%20Venezuelan%20food%20platter%20with%20arepas%20teque%C3%B1os%20empanadas%20and%20cachapa%20on%20rustic%20wooden%20table%2C%20warm%20golden%20natural%20lighting%2C%20appetizing%20gourmet%20food%20photography%2C%20editorial%20style%2C%20shallow%20depth%20of%20field%2C%20warm%20amber%20earthy%20tones%2C%20professional%20restaurant%20presentation&width=1400&height=900&seq=hero-bg-full-01&orientation=landscape"
          alt="Plato estrella venezolano con arepas, tequeños y empanadas"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
      </div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground-950/60 via-foreground-950/45 to-foreground-950/65" />

      {/* Content — centered over the image */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto w-full py-20">
        <div className="reveal reveal-blur reveal-delay-1">
          <span className="inline-block text-xs md:text-sm font-label font-semibold tracking-[0.2em] uppercase text-background-50/90 border border-background-50/30 px-4 py-2 rounded-full mb-5 md:mb-6 backdrop-blur-sm">
            Cocina Venezolana en Kissimmee
          </span>
        </div>
        <h1 className="reveal reveal-scale reveal-delay-2 font-heading text-background-50 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-5 md:mb-7 drop-shadow-lg">
          Sabor Auténtico
          <br />
          <span className="text-primary-400">Hecho en Casa</span>
        </h1>
        <p className="reveal reveal-delay-3 text-background-50/80 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-8 md:mb-10 drop-shadow">
          Arepas, tequeños, empanadas, cachapas y más. La mejor cocina venezolana
          de Orlando, preparada con recetas tradicionales y amor de familia.
        </p>
        <div className="reveal reveal-delay-4 flex flex-col items-center gap-5 sm:gap-6">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="#menu"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-primary-500 hover:bg-primary-600 text-background-50 font-medium text-sm md:text-base px-7 py-3.5 md:px-9 md:py-4 rounded-full transition-all duration-300 whitespace-nowrap shadow-lg"
            >
              Ver el Menú
            </a>
            <a
              href="tel:4074837996"
              className="border border-background-50/40 hover:border-primary-400 hover:text-primary-400 text-background-50 font-medium text-sm md:text-base px-7 py-3.5 md:px-9 md:py-4 rounded-full transition-all duration-300 whitespace-nowrap backdrop-blur-sm"
            >
              <i className="ri-phone-line mr-2" />
              (407) 483-7996
            </a>
          </div>

          {/* Ordena Ya Banner */}
          <div className="reveal reveal-scale reveal-delay-5 w-full max-w-md mx-auto bg-background-50/10 backdrop-blur-md border border-background-50/20 rounded-2xl p-4 md:p-5">
            <p className="text-background-50/70 text-[11px] md:text-xs font-label font-semibold tracking-[0.2em] uppercase text-center mb-3 md:mb-4">
              Ordena Ya
            </p>
            <div className="flex flex-col sm:flex-row gap-2.5">
              <a
                href="https://order.online/store/-473471/?pickup=true&hideModal=true&utm_source=gfo&rwg_token=AE37R_irUsbybEszKOANkYwzU5O_VH5F4OR2mb7D4VjvlyTuPqgr-pgwMPjTxImUlRFjkudErxLiOWglPePt8j_0Nanyiz8niWT0sc_GO3Gf_WzXYWhX3iw%3D"
                target="_blank"
                rel="noopener noreferrer"
                onClick={burst}
                className="flex-1 flex items-center justify-center gap-2.5 bg-[#FF3008] hover:bg-[#E02B07] text-white font-semibold text-xs md:text-sm py-3 px-4 rounded-full transition-all duration-300 whitespace-nowrap"
              >
                <span className="w-5 h-5 md:w-5 md:h-5 bg-white/20 rounded flex items-center justify-center text-white text-[9px] md:text-[10px] font-extrabold shrink-0">
                  DD
                </span>
                DoorDash
              </a>
              <a
                href="https://www.ubereats.com/store-browse-uuid/6d975bea-ccb4-4d57-a88a-7a9be0e1a10c?diningMode=PICKUP"
                target="_blank"
                rel="noopener noreferrer"
                onClick={burst}
                className="flex-1 flex items-center justify-center gap-2.5 bg-[#06C167] hover:bg-[#05A95B] text-white font-semibold text-xs md:text-sm py-3 px-4 rounded-full transition-all duration-300 whitespace-nowrap"
              >
                <span className="w-5 h-5 md:w-5 md:h-5 bg-white/20 rounded flex items-center justify-center text-white text-[9px] md:text-[10px] font-extrabold shrink-0">
                  UE
                </span>
                Uber Eats
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-5 h-8 rounded-full border-2 border-background-50/30 flex items-start justify-center p-1.5">
          <div className="w-1 h-2 rounded-full bg-background-50/60 animate-bounce" />
        </div>
      </div>
    </section>
  );
}