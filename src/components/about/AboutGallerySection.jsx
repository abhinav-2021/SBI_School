import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Maximize2,
  MapPin,
  Tag,
  Sparkles,
  Compass,
  ChevronLeft,
  ChevronRight,
  X,
  Grid3X3,
  Layers,
  CheckCircle2,
  Eye,
  Camera
} from 'lucide-react';
import { aboutGalleryItems, aboutGalleryCategories } from '../../data/aboutGallery';

export function AboutGallerySection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [viewMode, setViewMode] = useState("grid"); // "grid" | "slideshow"
  const [carouselIndex, setCarouselIndex] = useState(0);

  // Filter items based on active category
  const filteredItems = useMemo(() => {
    if (activeCategory === "All") return aboutGalleryItems;
    return aboutGalleryItems.filter(item => item.category === activeCategory);
  }, [activeCategory]);

  // Compute category counts
  const categoryCounts = useMemo(() => {
    const counts = { All: aboutGalleryItems.length };
    aboutGalleryCategories.forEach(cat => {
      if (cat !== "All") {
        counts[cat] = aboutGalleryItems.filter(i => i.category === cat).length;
      }
    });
    return counts;
  }, []);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  // Lightbox keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
      }
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [lightboxOpen, filteredItems.length]);

  const activePhoto = filteredItems[lightboxIndex] || filteredItems[0];

  // Campus highlights metrics
  const highlights = [
    { label: "Spacious Green Campus", desc: "Eco-friendly, landscaped grounds & avenues", icon: Compass },
    { label: "Sports Infrastructure", desc: "Volleyball courts, running & parade grounds", icon: Sparkles },
    { label: "Junior Adventure Park", desc: "Safe slides, roundabouts & play equipment", icon: CheckCircle2 },
    { label: "Safe Transport Fleet", desc: "Dedicated buses covering local routes", icon: Camera }
  ];

  return (
    <section className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden" id="campus-gallery">
      {/* Subtle decorative background blur orbs */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-school-secondary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-school-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-school-primary font-bold text-xs uppercase tracking-wider mb-4 shadow-soft-sm">
            <Camera className="w-3.5 h-3.5 text-school-secondary" />
            <span>Campus Life & Photo Gallery</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-school-primary font-heading tracking-tight leading-tight">
            Explore Our Vibrant <span className="text-school-secondary">Campus & Life</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed font-normal">
            Take a visual tour through Saint Brahmanand International School. From our lush academic lawns and volleyball arena to dedicated faculty and lively children's recreation park.
          </p>
        </div>

        {/* Campus Highlights Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-soft-sm flex items-start gap-3.5 hover:shadow-soft transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-school-primary/5 text-school-primary flex items-center justify-center shrink-0 group-hover:bg-school-secondary group-hover:text-white transition-colors duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-school-primary leading-snug">
                    {item.label}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Filter Navigation & Mode Switcher Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 bg-white p-2.5 sm:p-3 rounded-2xl border border-slate-200 shadow-soft-sm">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 w-full md:w-auto">
            {aboutGalleryCategories.map((category) => {
              const isSelected = activeCategory === category;
              const count = categoryCounts[category] || 0;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => {
                    setActiveCategory(category);
                    setCarouselIndex(0);
                  }}
                  className={`relative px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 select-none ${isSelected
                      ? 'bg-school-primary text-white shadow-soft'
                      : 'text-slate-600 hover:text-school-primary hover:bg-slate-100'
                    }`}
                >
                  <span>{category}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold transition-colors ${isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                    }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* View Mode Toggle Button */}
          <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl self-end md:self-auto shrink-0">
            <button
              type="button"
              onClick={() => setViewMode("grid")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${viewMode === "grid"
                  ? 'bg-white text-school-primary shadow-soft-sm'
                  : 'text-slate-600 hover:text-school-primary'
                }`}
            >
              <Grid3X3 className="w-3.5 h-3.5" />
              <span>Grid</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode("slideshow")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${viewMode === "slideshow"
                  ? 'bg-white text-school-primary shadow-soft-sm'
                  : 'text-slate-600 hover:text-school-primary'
                }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Slideshow</span>
            </button>
          </div>
        </div>

        {/* View Mode: Bento / Modern Grid */}
        {viewMode === "grid" && (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, idx) => {
                // If it's the aerial photo or staff photo on "All" view, make it a featured span card
                const isAerial = item.id === "campus-aerial";
                const isStaff = item.id === "staff-group";
                const isMainFront = item.id === "main-building";

                // Let the aerial card and staff photo stand out prominently
                const cardSpan = isAerial && activeCategory === "All"
                  ? "sm:col-span-2 lg:col-span-2 sm:row-span-2 h-[380px] sm:h-[460px]"
                  : (isMainFront && activeCategory === "All") || (isStaff && activeCategory === "Faculty & Leadership")
                    ? "sm:col-span-2 lg:col-span-2 h-72 sm:h-80"
                    : "h-72 sm:h-80";

                return (
                  <motion.div
                    layout
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.94 }}
                    transition={{ duration: 0.35, delay: idx * 0.03 }}
                    whileHover={{ y: -6 }}
                    onClick={() => openLightbox(idx)}
                    className={`group relative rounded-3xl overflow-hidden shadow-soft-sm hover:shadow-soft-xl cursor-pointer bg-slate-900 border border-slate-200/90 transition-all duration-300 ${cardSpan}`}
                  >
                    {/* Background image */}
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/35 to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-300" />

                    {/* Top Badges */}
                    <div className="absolute top-4 inset-x-4 flex items-center justify-between pointer-events-none">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-white/95 text-school-primary backdrop-blur-md shadow-soft-sm">
                        <Tag className="w-3 h-3 text-school-secondary" />
                        <span>{item.tag || item.category}</span>
                      </span>

                      {/* Interactive View Icon */}
                      <div className="w-9 h-9 rounded-full bg-white/20 text-white backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 border border-white/25">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Special Aerial Badge if aerial */}
                    {isAerial && (
                      <div className="absolute top-16 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-bold bg-amber-500 text-slate-950 shadow-soft">
                        <Sparkles className="w-3.5 h-3.5 fill-slate-950" />
                        <span>Featured Campus Drone View</span>
                      </div>
                    )}

                    {/* Bottom Content / Caption */}
                    <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                      {item.location && (
                        <div className="flex items-center gap-1 text-[11px] font-semibold text-school-accent mb-1.5">
                          <MapPin className="w-3 h-3 text-school-accent" />
                          <span>{item.location}</span>
                        </div>
                      )}

                      <h3 className="text-white font-extrabold text-base sm:text-lg leading-snug group-hover:text-school-accent transition-colors font-heading">
                        {item.title}
                      </h3>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}

        {/* View Mode: Interactive Slideshow Carousel */}
        {viewMode === "slideshow" && (
          <div className="bg-white rounded-3xl p-4 sm:p-8 border border-slate-200 shadow-soft-lg">
            <div className="relative rounded-2xl overflow-hidden aspect-[16/9] max-h-[560px] bg-slate-950 shadow-soft-md group">
              <img
                src={filteredItems[carouselIndex]?.image}
                alt={filteredItems[carouselIndex]?.title}
                className="w-full h-full object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

              {/* Prev / Next Carousel Controls */}
              <button
                type="button"
                onClick={() => setCarouselIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length)}
                aria-label="Previous image"
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-950/70 hover:bg-school-secondary text-white flex items-center justify-center transition-all duration-200 border border-white/20 backdrop-blur-sm"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                type="button"
                onClick={() => setCarouselIndex((prev) => (prev + 1) % filteredItems.length)}
                aria-label="Next image"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-950/70 hover:bg-school-secondary text-white flex items-center justify-center transition-all duration-200 border border-white/20 backdrop-blur-sm"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Fullscreen Trigger */}
              <button
                type="button"
                onClick={() => openLightbox(carouselIndex)}
                className="absolute top-4 right-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-950/70 text-white hover:bg-school-secondary text-xs font-bold border border-white/20 backdrop-blur-sm transition-all"
              >
                <Maximize2 className="w-4 h-4" />
                <span>Fullscreen</span>
              </button>

              {/* Caption Overlay */}
              <div className="absolute bottom-6 inset-x-6 sm:inset-x-10 text-white">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-school-secondary/90 text-white text-xs font-bold mb-2">
                  <span>{filteredItems[carouselIndex]?.category}</span>
                  <span>•</span>
                  <span>Photo {carouselIndex + 1} of {filteredItems.length}</span>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black font-heading">
                  {filteredItems[carouselIndex]?.title}
                </h3>
              </div>
            </div>

            {/* Carousel Thumbnail Ribbon */}
            <div className="flex items-center gap-3 overflow-x-auto py-4 mt-2 px-1 scrollbar-thin">
              {filteredItems.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setCarouselIndex(idx)}
                  className={`relative shrink-0 w-24 h-16 sm:w-28 sm:h-20 rounded-xl overflow-hidden border-2 transition-all ${carouselIndex === idx
                      ? 'border-school-secondary ring-2 ring-school-secondary/40 scale-105'
                      : 'border-slate-200 opacity-60 hover:opacity-100'
                    }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Banner with Call to Action */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-school-primary via-school-primary to-school-primary-dark text-white border border-school-primary-light/30 shadow-soft-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-school-accent font-bold text-xs uppercase tracking-wider">
              Experience S.B.N.I. School In Person
            </span>
            <h3 className="text-xl sm:text-2xl font-black font-heading">
              Would You Like a Guided Tour of Our Campus?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
              Parents and prospective students are cordially invited to visit our campus in Mundri (Kaithal), meet our faculty, and inspect all facilities.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="/contact"
              className="px-6 py-3 rounded-xl bg-school-accent hover:bg-school-accent-light text-school-primary-dark font-extrabold text-sm shadow-soft transition-all transform hover:-translate-y-0.5"
            >
              Schedule Campus Visit
            </a>
          </div>
        </div>

      </div>

      {/* Modern Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && activePhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6">
            {/* Backdrop with strong blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
              className="fixed inset-0 bg-slate-950/95 backdrop-blur-xl"
              aria-hidden="true"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-6xl w-full max-h-[96vh] bg-slate-900 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col border border-white/10"
              role="dialog"
              aria-modal="true"
            >
              {/* Header Bar */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-slate-900/90 text-white">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-school-secondary text-white">
                    {lightboxIndex + 1} / {filteredItems.length}
                  </span>
                  <span className="text-xs font-semibold text-slate-300 hidden sm:inline">
                    {activePhoto.category}
                  </span>
                  {activePhoto.tag && (
                    <span className="text-[11px] font-medium text-slate-400 bg-white/10 px-2.5 py-0.5 rounded-md hidden md:inline">
                      {activePhoto.tag}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400 hidden sm:inline mr-2">
                    Use <kbd className="px-1.5 py-0.5 text-[10px] bg-white/10 rounded">←</kbd> <kbd className="px-1.5 py-0.5 text-[10px] bg-white/10 rounded">→</kbd> to navigate
                  </span>
                  <button
                    type="button"
                    onClick={closeLightbox}
                    className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-school-accent"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Main Image Viewport */}
              <div className="relative flex-1 bg-black/60 flex items-center justify-center min-h-[300px] sm:min-h-[460px] max-h-[66vh] p-2 overflow-hidden select-none">
                <motion.img
                  key={activePhoto.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  src={activePhoto.image}
                  alt={activePhoto.title}
                  className="max-h-full max-w-full object-contain rounded-xl shadow-2xl"
                />

                {/* Left Navigation Arrow */}
                {filteredItems.length > 1 && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
                    }}
                    aria-label="Previous photo"
                    className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-slate-900/80 hover:bg-school-secondary text-white flex items-center justify-center transition-all border border-white/15 backdrop-blur-md shadow-lg"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                )}

                {/* Right Navigation Arrow */}
                {filteredItems.length > 1 && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
                    }}
                    aria-label="Next photo"
                    className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-slate-900/80 hover:bg-school-secondary text-white flex items-center justify-center transition-all border border-white/15 backdrop-blur-md shadow-lg"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                )}
              </div>

              {/* Caption & Metadata Footer */}
              <div className="p-4 sm:p-5 bg-slate-900 text-white border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-3">
                <div className="max-w-3xl">
                  {activePhoto.location && (
                    <div className="flex items-center gap-1.5 text-xs text-school-accent font-semibold mb-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{activePhoto.location}</span>
                    </div>
                  )}
                  <h4 className="text-base sm:text-lg font-bold text-white font-heading">
                    {activePhoto.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                    {activePhoto.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 self-start md:self-center shrink-0">
                  <a
                    href={activePhoto.image}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors border border-white/15"
                  >
                    <Eye className="w-3.5 h-3.5 text-school-accent" />
                    <span>Open Full Image</span>
                  </a>
                </div>
              </div>

              {/* Lightbox Mini Thumbnails Strip */}
              <div className="bg-slate-950/80 px-4 py-2.5 border-t border-white/5 flex items-center gap-2 overflow-x-auto scrollbar-thin">
                {filteredItems.map((item, thumbIdx) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setLightboxIndex(thumbIdx)}
                    className={`relative shrink-0 w-14 h-10 rounded-lg overflow-hidden border-2 transition-all ${lightboxIndex === thumbIdx
                        ? 'border-school-secondary scale-105 shadow-md'
                        : 'border-white/10 opacity-50 hover:opacity-90'
                      }`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default AboutGallerySection;
