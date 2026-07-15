import { useState, useEffect, useRef } from 'react';
import { useParticleBurst } from './ParticleProvider';
import HoursModal from './HoursModal';
import OpenNowBadge from './OpenNowBadge';

const navItems = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Promociones', href: '#promociones' },
  { label: 'Nuestra Historia', href: '#story' },
  { label: 'Menu', href: '#menu' },
  { label: 'Galeria', href: '#gallery' },
  { label: 'Resenas', href: '#reviews' },
  { label: 'Contacto', href: '#contact' },
];

const orderLinks = [
  {
    label: 'Ordenar por DoorDash',
    href: 'https://order.online/store/-473471/?pickup=true&hideModal=true&utm_source=gfo&rwg_token=AE37R_irUsbybEszKOANkYwzU5O_VH5F4OR2mb7D4VjvlyTuPqgr-pgwMPjTxImUlRFjkudErxLiOWglPePt8j_0Nanyiz8niWT0sc_GO3Gf_WzXYWhX3iw%3D',
    brand: 'doordash' as const,
  },
  {
    label: 'Ordenar por Uber Eats',
    href: 'https://www.ubereats.com/store-browse-uuid/6d975bea-ccb4-4d57-a88a-7a9be0e1a10c?diningMode=PICKUP',
    brand: 'ubereats' as const,
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [orderDropdownOpen, setOrderDropdownOpen] = useState(false);
  const [hoursModalOpen, setHoursModalOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const burst = useParticleBurst();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOrderDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-background-50/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <nav className="flex items-center justify-between px-6 md:px-10 py-4">
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-2"
          >
            <span
              className={`font-heading text-xl md:text-2xl font-bold tracking-tight transition-colors duration-500 ${
                scrolled ? 'text-foreground-950' : 'text-background-50'
              }`}
            >
              Teq<span className="text-primary-500">-A-</span>Bite
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-primary-500 whitespace-nowrap ${
                  scrolled ? 'text-foreground-700' : 'text-background-100'
                }`}
              >
                {item.label}
              </a>
            ))}

            {/* Open Now Badge */}
            <OpenNowBadge scrolled={scrolled} />

            {/* Hours Button */}
            <button
              onClick={() => setHoursModalOpen(true)}
              className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-primary-500 whitespace-nowrap flex items-center gap-1 ${
                scrolled ? 'text-foreground-700' : 'text-background-100'
              }`}
            >
              <i className="ri-time-line text-sm" />
              Horario
            </button>

            {/* Desktop Order Dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setOrderDropdownOpen(!orderDropdownOpen)}
                className="bg-primary-500 hover:bg-primary-600 text-background-50 text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300 whitespace-nowrap flex items-center gap-1.5 cursor-pointer"
              >
                Ordenar Online
                <i className={`${orderDropdownOpen ? 'ri-arrow-up-line' : 'ri-arrow-down-line'} text-sm`} />
              </button>
              {orderDropdownOpen && (
                <div className="absolute right-0 mt-2 w-60 bg-background-50 rounded-xl border border-background-200/70 shadow-lg py-2 overflow-hidden z-50">
                  {orderLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        setOrderDropdownOpen(false);
                      }}
                      className="flex items-center gap-3 px-5 py-3 text-sm font-medium text-foreground-800 hover:bg-background-100 transition-colors whitespace-nowrap cursor-pointer"
                    >
                      <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold shrink-0 ${link.brand === 'doordash' ? 'bg-[#FF3008]' : 'bg-[#06C167]'}`}>
                        {link.brand === 'doordash' ? 'DD' : 'UE'}
                      </span>
                      <span className="hover:text-primary-600 transition-colors">{link.label}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden w-10 h-10 flex items-center justify-center rounded-full transition-colors ${
              scrolled ? 'text-foreground-950' : 'text-background-50'
            }`}
            aria-label="Toggle menu"
          >
            <i className={`ri-${mobileOpen ? 'close' : 'menu'}-line text-2xl`} />
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            mobileOpen ? 'max-h-[700px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-background-50/98 backdrop-blur-md px-6 pb-6 pt-2 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block text-foreground-800 text-base font-medium py-3 border-b border-background-200/60 hover:text-primary-500 transition-colors"
              >
                {item.label}
              </a>
            ))}

            {/* Mobile Hours */}
            <button
              onClick={() => {
                setMobileOpen(false);
                setHoursModalOpen(true);
              }}
              className="w-full text-left text-foreground-800 text-base font-medium py-3 border-b border-background-200/60 hover:text-primary-500 transition-colors flex items-center gap-2"
            >
              <i className="ri-time-line" />
              Horario de Atencion
            </button>

            {/* Mobile Open Now */}
            <div className="py-2">
              <OpenNowBadge scrolled={true} className="mx-auto" />
            </div>

            {/* Mobile Order Links */}
            <div className="pt-2 space-y-2">
              <p className="text-xs text-foreground-500 font-label font-semibold tracking-widest uppercase mb-1">Ordenar Online</p>
              {orderLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={burst}
                  className={`flex items-center justify-center gap-2.5 text-background-50 text-center text-sm font-medium px-5 py-3 rounded-full whitespace-nowrap ${link.brand === 'doordash' ? 'bg-[#FF3008]' : 'bg-[#06C167]'}`}
                >
                  <span className="w-5 h-5 bg-white/20 rounded flex items-center justify-center text-white text-[10px] font-bold shrink-0">
                    {link.brand === 'doordash' ? 'DD' : 'UE'}
                  </span>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </header>

      <HoursModal isOpen={hoursModalOpen} onClose={() => setHoursModalOpen(false)} />
    </>
  );
}