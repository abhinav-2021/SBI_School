import { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ArrowRight, ShieldCheck } from 'lucide-react';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { schoolInfo } from '../../data/schoolInfo';
import MobileMenu from './MobileMenu';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isScrolled } = useScrollPosition(30);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Streams', path: '/streams' },
    { name: 'Documents', path: '/documents' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full transition-all duration-300">
        {/* Top Notification / Contact Bar */}
        <div className="bg-school-primary-dark text-slate-200 text-xs py-2 px-4 border-b border-school-primary-light/40 hidden md:block">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-6">
              <span className="inline-flex items-center gap-1.5 text-school-accent font-semibold tracking-wide uppercase text-[11px]">
                <ShieldCheck className="w-3.5 h-3.5 text-school-accent" />
                Admissions Open 2026–27
              </span>
              <span className="text-slate-400">|</span>
              <a
                href={`tel:${schoolInfo.contact.phones[0].number}`}
                className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-school-accent" />
                <span>{schoolInfo.contact.phones[0].number}</span>
              </a>
              <span className="text-slate-400">|</span>
              <a
                href={`mailto:${schoolInfo.contact.emails[0].address}`}
                className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-school-accent" />
                <span>{schoolInfo.contact.emails[0].address}</span>
              </a>
            </div>

            <div className="flex items-center gap-4 text-xs font-medium">
              <Link
                to="/contact"
                className="text-slate-300 hover:text-school-accent transition-colors"
              >
                Campus Visit
              </Link>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <nav
          className={`w-full transition-all duration-300 ${
            isScrolled
              ? 'bg-white/95 backdrop-blur-md shadow-soft py-2 sm:py-2.5'
              : 'bg-white py-2.5 sm:py-3.5 border-b border-slate-100'
          }`}
          aria-label="Main Navigation"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center group focus:outline-none focus:ring-2 focus:ring-school-secondary rounded-xl p-0.5"
              aria-label="Saint Brahmanand International School Home"
            >
              <img
                src="/images/logo/sbi-official-logo.png"
                alt="Saint Brahmanand International School"
                className="h-14 sm:h-16 lg:h-20 w-auto object-contain transition-transform group-hover:scale-[1.02] duration-200"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={`relative px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${isActive
                        ? 'text-school-secondary bg-blue-50/80 font-bold'
                        : 'text-slate-600 hover:text-school-primary hover:bg-slate-100/70'
                      }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-school-secondary rounded-full" />
                    )}
                  </NavLink>
                );
              })}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-1.5 px-4.5 py-2.5 text-xs font-bold text-white bg-school-primary hover:bg-school-secondary rounded-lg shadow-sm hover:shadow transition-all duration-200 group"
              >
                <span>Apply Online</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              className="lg:hidden p-2.5 rounded-lg text-slate-700 hover:text-school-primary hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-school-secondary"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-slate-900" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
}

export default Navbar;
