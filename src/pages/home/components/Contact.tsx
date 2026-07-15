import { useParticleBurst } from './ParticleProvider';

export default function Contact() {
  const burst = useParticleBurst();

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 px-6 md:px-10 bg-background-100">
      <div className="max-w-7xl mx-auto">
        {/* CTA Banner */}
        <div className="reveal reveal-scale text-center mb-14 md:mb-20">
          <h2 className="font-heading text-foreground-950 text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-5">
            Ven a Probar el Verdadero
            <br />
            <span className="text-primary-500">Sabor Venezolano</span>
          </h2>
          <p className="text-foreground-600 text-base md:text-lg max-w-xl mx-auto mb-7 md:mb-9">
            Estamos en el corazón de Kissimmee. Te esperamos con las puertas
            abiertas y la cocina encendida.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="https://fromtherestaurant.com/teq-a-bite/locations/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={burst}
              className="inline-flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-background-50 font-medium text-sm md:text-base px-7 py-3.5 md:px-9 md:py-4 rounded-full transition-all duration-300 whitespace-nowrap"
            >
              <i className="ri-shopping-bag-3-line" />
              Ordenar Online
            </a>
            <a
              href="tel:4074837996"
              className="inline-flex items-center justify-center gap-2 border border-foreground-300 hover:border-primary-500 hover:text-primary-500 text-foreground-700 font-medium text-sm md:text-base px-7 py-3.5 md:px-9 md:py-4 rounded-full transition-all duration-300 whitespace-nowrap"
            >
              <i className="ri-phone-line" />
              Llamar Ahora
            </a>
          </div>
        </div>

        {/* Map + Info Grid */}
        <div className="reveal reveal-delay-1 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Map */}
          <div className="reveal reveal-left rounded-2xl md:rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-full min-h-[320px] bg-secondary-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3511.1234567890123!2d-81.4176!3d28.3047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDE4JzE3LjAiTiA4McKwMjUnMDMuNCJX!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1ses!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '100%' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Teq-A-Bite en Kissimmee"
              className="w-full h-full"
            />
          </div>

          {/* Info */}
          <div className="reveal reveal-right reveal-delay-1 flex flex-col justify-center">
            <div className="space-y-7 md:space-y-8">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <i className="ri-map-pin-line text-primary-600 text-lg" />
                </div>
                <div>
                  <h3 className="text-foreground-900 font-semibold text-sm md:text-base mb-1">
                    Dirección
                  </h3>
                  <p className="text-foreground-600 text-sm md:text-base leading-relaxed">
                    1206 E Vine Street
                    <br />
                    Kissimmee, FL 34744
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <i className="ri-phone-line text-primary-600 text-lg" />
                </div>
                <div>
                  <h3 className="text-foreground-900 font-semibold text-sm md:text-base mb-1">
                    Teléfono
                  </h3>
                  <a
                    href="tel:4074837996"
                    className="text-foreground-600 text-sm md:text-base hover:text-primary-500 transition-colors"
                  >
                    (407) 483-7996
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <i className="ri-mail-line text-primary-600 text-lg" />
                </div>
                <div>
                  <h3 className="text-foreground-900 font-semibold text-sm md:text-base mb-1">
                    Correo
                  </h3>
                  <a
                    href="mailto:teqabite@gmail.com"
                    className="text-foreground-600 text-sm md:text-base hover:text-primary-500 transition-colors"
                  >
                    teqabite@gmail.com
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <i className="ri-time-line text-primary-600 text-lg" />
                </div>
                <div>
                  <h3 className="text-foreground-900 font-semibold text-sm md:text-base mb-1">
                    Horario
                  </h3>
                  <div className="text-foreground-600 text-sm md:text-base leading-relaxed space-y-0.5">
                    <p>Lunes – Jueves: 7:00 AM – 6:00 PM</p>
                    <p>Viernes – Sábado: 7:00 AM – 8:00 PM</p>
                    <p>Domingo: 7:00 AM – 3:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}