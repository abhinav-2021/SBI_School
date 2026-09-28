import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Calendar, Tag } from 'lucide-react';

export function Lightbox({
  isOpen,
  onClose,
  items = [],
  currentIndex = 0,
  onNavigate
}) {
  const currentItem = items[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + items.length) % items.length);
      if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % items.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, currentIndex, items.length, onClose, onNavigate]);

  if (!isOpen || !currentItem) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-school-primary-dark/95 backdrop-blur-md"
          aria-hidden="true"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.25 }}
          className="relative max-w-5xl w-full max-h-[92vh] bg-school-primary-dark rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col border border-white/10"
          role="dialog"
          aria-modal="true"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between p-4 px-6 border-b border-white/10 bg-school-primary-dark/80 text-white">
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-school-secondary/40 text-blue-200">
                {currentIndex + 1} of {items.length}
              </span>
              <span className="text-xs font-medium text-slate-400 hidden sm:inline">
                {currentItem.category}
              </span>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-school-accent"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Main Image Area with Nav Controls */}
          <div className="relative flex-1 bg-black/40 flex items-center justify-center min-h-[320px] sm:min-h-[460px] max-h-[65vh] p-2 overflow-hidden">
            <img
              src={currentItem.image}
              alt={currentItem.title}
              className="max-h-full max-w-full object-contain rounded-lg select-none"
            />

            {/* Prev Button */}
            {items.length > 1 && (
              <button
                type="button"
                onClick={() => onNavigate((currentIndex - 1 + items.length) % items.length)}
                aria-label="Previous photograph"
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-school-primary-dark/80 text-white hover:bg-school-secondary border border-white/15 transition-all backdrop-blur-sm"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}

            {/* Next Button */}
            {items.length > 1 && (
              <button
                type="button"
                onClick={() => onNavigate((currentIndex + 1) % items.length)}
                aria-label="Next photograph"
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-school-primary-dark/80 text-white hover:bg-school-secondary border border-white/15 transition-all backdrop-blur-sm"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Caption & Metadata Footer */}
          <div className="p-4 sm:p-5 bg-school-primary-dark text-white border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white mb-1">
                {currentItem.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                {currentItem.description}
              </p>
            </div>

            <div className="flex items-center gap-4 text-xs text-slate-400 shrink-0">
              {currentItem.date && (
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-school-accent" />
                  <span>{currentItem.date}</span>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default Lightbox;
