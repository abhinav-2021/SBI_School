import { useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, Mail, MapPin, ArrowRight, FileText } from 'lucide-react';
import { schoolInfo } from '../../data/schoolInfo';

export function MobileMenu({ isOpen, onClose, navLinks }) {
  // Prevent body scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-school-primary-dark/60 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Drawer Content */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="relative w-full max-w-sm bg-white h-full shadow-2xl z-10 flex flex-col justify-between overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between p-5 border-b border-slate-100">
                <Link to="/" onClick={onClose} className="flex items-center">
                  <img
                    src="/images/logo/sbi-official-logo.png"
                    alt="Saint Brahmanand International School"
                    className="h-12 sm:h-14 w-auto object-contain"
                  />
                </Link>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close navigation menu"
                  className="p-2 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="p-4 space-y-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-colors ${isActive
                        ? 'bg-blue-50 text-school-secondary'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-school-primary'
                      }`
                    }
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-4 h-4 opacity-40" />
                  </NavLink>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="px-4 py-2 space-y-2.5">
                <Link
                  to="/documents"
                  onClick={onClose}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-slate-200 text-school-primary font-semibold text-sm hover:bg-slate-50 transition-colors"
                >
                  <FileText className="w-4 h-4 text-school-secondary" />
                  <span>Download Documents</span>
                </Link>
                <Link
                  to="/contact"
                  onClick={onClose}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-school-primary hover:bg-school-secondary text-white font-semibold text-sm shadow-soft transition-colors"
                >
                  <span>Apply for Admission</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Footer Contact Info */}
            <div className="p-5 border-t border-slate-100 bg-slate-50/70 text-xs text-slate-600 space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-school-secondary shrink-0 mt-0.5" />
                <span>{schoolInfo.contact.address.line1}, {schoolInfo.contact.address.city}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-school-secondary shrink-0" />
                <a href={`tel:${schoolInfo.contact.phones[0].number}`} className="hover:text-school-secondary">
                  {schoolInfo.contact.phones[0].number}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-school-secondary shrink-0" />
                <a href={`mailto:${schoolInfo.contact.emails[0].address}`} className="hover:text-school-secondary">
                  {schoolInfo.contact.emails[0].address}
                </a>
              </div>
              <div className="pt-2 text-[11px] text-slate-400">
                S.B.N.I. School, Mundri © {new Date().getFullYear()}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default MobileMenu;
