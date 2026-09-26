import { useEffect, useState } from 'react';
import { Menu, X, Leaf, ArrowRight } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Green Logistics', href: '#green-logistics' },
  { label: 'Our Impact', href: '#impact' },
  { label: 'GIS & Route Optimization', href: '#gis' },
  { label: 'About', href: '#about' },
  { label: 'Insights', href: '#insights' },
  { label: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-charcoal-100'
            : 'bg-transparent'
        }`}
      >
        <nav className="container-px max-w-[1440px] mx-auto flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-500 ${
              scrolled ? 'bg-forest-600' : 'bg-forest-500'
            }`}>
              <Leaf className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col leading-none">
              <span className={`font-display font-bold text-base tracking-tight transition-colors duration-500 ${
                scrolled ? 'text-charcoal-900' : 'text-white'
              }`}>
                OPTILOG
              </span>
              <span className={`font-display font-medium text-[10px] tracking-[0.2em] transition-colors duration-500 ${
                scrolled ? 'text-forest-600' : 'text-forest-300'
              }`}>
                ANALYTICS
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-300 ${
                  scrolled
                    ? 'text-charcoal-600 hover:text-forest-600 hover:bg-forest-50'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden xl:flex items-center gap-3">
            <a
              href="#gis"
              className={`px-4 py-2 text-sm font-semibold rounded-lg border transition-all duration-300 ${
                scrolled
                  ? 'border-charcoal-200 text-charcoal-700 hover:border-forest-500 hover:text-forest-600'
                  : 'border-white/25 text-white/90 hover:border-white/50 hover:bg-white/10'
              }`}
            >
              Explore Our Model
            </a>
            <a
              href="#contact"
              className="px-4 py-2 text-sm font-semibold rounded-lg bg-forest-600 text-white hover:bg-forest-700 transition-colors duration-300 flex items-center gap-1.5 group"
            >
              Request a Logistics Assessment
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`xl:hidden p-2 rounded-md transition-colors ${
              scrolled ? 'text-charcoal-800' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 xl:hidden bg-white pt-16 overflow-y-auto">
          <div className="container-px py-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-lg font-medium text-charcoal-800 hover:bg-forest-50 hover:text-forest-600 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 space-y-3">
              <a
                href="#gis"
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-base font-semibold text-center rounded-lg border border-charcoal-200 text-charcoal-700"
              >
                Explore Our Model
              </a>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-base font-semibold text-center rounded-lg bg-forest-600 text-white"
              >
                Request a Logistics Assessment
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
