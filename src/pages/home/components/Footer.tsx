export default function Footer() {
  return (
    <footer className="px-4 md:px-6 pb-4 md:pb-6 bg-background-50">
      <div className="max-w-7xl mx-auto bg-foreground-950 rounded-2xl md:rounded-3xl px-6 md:px-10 lg:px-14 py-10 md:py-14 lg:py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-10 md:mb-14">
          {/* Column 1: Brand + Social */}
          <div className="md:col-span-5">
            <a href="#hero" className="inline-block mb-5 md:mb-6">
              <span className="font-heading text-background-50 text-2xl md:text-3xl font-bold tracking-tight">
                Teq<span className="text-primary-500">-A-</span>Bite
              </span>
            </a>
            <p className="text-background-500 text-sm md:text-base leading-relaxed mb-6 md:mb-8 max-w-sm">
              Cocina venezolana auténtica en Kissimmee, Florida.
              Hecho en casa, con sabor de verdad.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://es-la.facebook.com/pg/Teqabite/photos/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background-800 hover:bg-primary-500 flex items-center justify-center transition-colors duration-300"
                aria-label="Facebook"
              >
                <i className="ri-facebook-fill text-background-200 text-lg" />
              </a>
              <a
                href="https://www.instagram.com/teqabite/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background-800 hover:bg-primary-500 flex items-center justify-center transition-colors duration-300"
                aria-label="Instagram"
              >
                <i className="ri-instagram-line text-background-200 text-lg" />
              </a>
              <a
                href="https://fromtherestaurant.com/teq-a-bite/locations/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background-800 hover:bg-primary-500 flex items-center justify-center transition-colors duration-300"
                aria-label="Ordenar Online"
              >
                <i className="ri-shopping-bag-3-line text-background-200 text-lg" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="md:col-span-3 md:pl-4">
            <h4 className="text-background-400 text-xs font-semibold uppercase tracking-[0.15em] mb-4 md:mb-5">
              Navegación
            </h4>
            <ul className="space-y-2.5 md:space-y-3">
              {[
                { label: 'Inicio', href: '#hero' },
                { label: 'Nuestra Historia', href: '#story' },
                { label: 'Menú', href: '#menu' },
                { label: 'Galería', href: '#gallery' },
                { label: 'Reseñas', href: '#reviews' },
                { label: 'Contacto', href: '#contact' },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-background-300 hover:text-primary-400 text-sm md:text-base transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="md:col-span-4 md:pl-4">
            <h4 className="text-background-400 text-xs font-semibold uppercase tracking-[0.15em] mb-4 md:mb-5">
              Contacto
            </h4>
            <div className="space-y-3 md:space-y-4">
              <a
                href="tel:4072053548"
                className="block text-background-200 hover:text-primary-400 text-sm md:text-base transition-colors"
              >
                (407) 205-3548
              </a>
              <a
                href="mailto:teqabite@gmail.com"
                className="block text-background-200 hover:text-primary-400 text-sm md:text-base transition-colors"
              >
                teqabite@gmail.com
              </a>
              <p className="text-background-500 text-sm md:text-base leading-relaxed">
                1206 E Vine Street
                <br />
                Kissimmee, FL 34744
              </p>
            </div>

            <h4 className="text-background-400 text-xs font-semibold uppercase tracking-[0.15em] mt-6 md:mt-8 mb-3 md:mb-4">
              Horario
            </h4>
            <div className="text-background-500 text-xs md:text-sm leading-relaxed space-y-1">
              <p>Lun – Jue: 7AM – 6PM</p>
              <p>Vie – Sáb: 7AM – 8PM</p>
              <p>Dom: 7AM – 3PM</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background-800 pt-6 md:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-background-700 text-xs md:text-sm">
            © {new Date().getFullYear()} Teq-A-Bite. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4 md:gap-6">
            <a
              href="https://fromtherestaurant.com/teq-a-bite/locations/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background-600 hover:text-primary-400 text-xs md:text-sm transition-colors"
            >
              Ordenar Online
            </a>
            <a
              href="tel:4072053548"
              className="text-background-600 hover:text-primary-400 text-xs md:text-sm transition-colors"
            >
              Llamar
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}