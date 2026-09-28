import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Sparkles, Check, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { schoolInfo } from '../../data/schoolInfo';

export function CampusFacilities() {
  const [activeTab, setActiveTab] = useState("all");

  const categories = [
    { id: "all", label: "All Facilities" },
    { id: "Academic", label: "Academic & Tech" },
    { id: "Research", label: "Laboratories" },
    { id: "Athletics", label: "Sports & Turf" },
    { id: "Cultural", label: "Arts & Culture" }
  ];

  const filteredFacilities = activeTab === "all"
    ? schoolInfo.facilities
    : schoolInfo.facilities.filter(f => f.category === activeTab);

  return (
    <section className="py-20 lg:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="World-Class Infrastructure"
          title="State-of-the-Art Campus Facilities"
          subtitle="Designed to foster intellectual rigor, athletic excellence, and creative mastery within safe, modern, and technologically integrated environments."
          centered={true}
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isSelected = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isSelected
                    ? 'bg-school-primary text-white shadow-soft'
                    : 'bg-white text-slate-600 hover:text-school-primary hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Facilities Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredFacilities.map((facility, idx) => (
              <motion.div
                layout
                key={facility.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-soft-sm hover:shadow-soft-lg transition-all duration-300 flex flex-col group"
              >
                {/* Image */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <img
                    src={facility.image}
                    alt={facility.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-school-primary-dark/70 via-transparent to-transparent" />
                  
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/95 text-school-primary backdrop-blur-sm shadow-sm">
                    {facility.category}
                  </span>
                </div>

                {/* Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-school-primary group-hover:text-school-secondary transition-colors mb-2.5">
                      {facility.name}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {facility.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-school-secondary">
                    <span>Modern Equipment Verified</span>
                    <Check className="w-4 h-4 text-emerald-600" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

export default CampusFacilities;
