import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, Tag } from 'lucide-react';
import { galleryItems, galleryCategories } from '../../data/gallery';
import Lightbox from './Lightbox';

export function GalleryGrid({ initialLimit = null, showFilters = true }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  // Filter items
  const filteredItems = selectedCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  const displayItems = initialLimit ? filteredItems.slice(0, initialLimit) : filteredItems;

  const handleOpenLightbox = (index) => {
    setActivePhotoIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div>
      {/* Category Filter Pills */}
      {showFilters && (
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-10">
          {galleryCategories.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isSelected
                    ? 'bg-school-primary text-white shadow-soft'
                    : 'bg-white text-slate-600 hover:text-school-primary hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      )}

      {/* Responsive Photo Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        <AnimatePresence>
          {displayItems.map((item, index) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -6 }}
              onClick={() => handleOpenLightbox(index)}
              className="group relative h-72 rounded-2xl overflow-hidden shadow-soft-sm hover:shadow-soft-lg cursor-pointer bg-slate-900 border border-slate-100"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500 ease-out"
              />

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-school-primary-dark/95 via-school-primary-dark/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

              {/* Category Pill */}
              <span className="absolute top-4 left-4 inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-white/90 text-school-primary backdrop-blur-sm shadow-sm">
                {item.category}
              </span>

              {/* Zoom Action Icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 text-white backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-0 inset-x-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-white font-bold text-base leading-snug group-hover:text-school-accent transition-colors">
                  {item.title}
                </h4>
                <p className="text-slate-300 text-xs mt-1 line-clamp-2 opacity-90">
                  {item.description}
                </p>
                {item.date && (
                  <span className="inline-block text-[11px] text-school-accent font-semibold mt-2">
                    {item.date}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        items={displayItems}
        currentIndex={activePhotoIndex}
        onNavigate={(newIdx) => setActivePhotoIndex(newIdx)}
      />
    </div>
  );
}

export default GalleryGrid;
