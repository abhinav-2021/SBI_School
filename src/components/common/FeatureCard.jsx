import * as LucideIcons from 'lucide-react';
import { motion } from 'framer-motion';

export function FeatureCard({
  icon = "Sparkles",
  title,
  description,
  accent = false,
  index = 0
}) {
  // Dynamically resolve icon from Lucide
  const IconComponent = LucideIcons[icon] || LucideIcons.Sparkles;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className={`relative p-6 sm:p-7 rounded-2xl border transition-all duration-300 group flex flex-col justify-between ${
        accent
          ? 'bg-gradient-to-br from-school-primary to-school-primary-light text-white border-transparent shadow-soft-lg'
          : 'bg-white text-slate-700 border-slate-100/90 hover:border-blue-100 shadow-soft-sm hover:shadow-soft'
      }`}
    >
      <div>
        {/* Icon Container */}
        <div
          className={`w-13 h-13 w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 ${
            accent
              ? 'bg-white/10 text-school-accent border border-white/15'
              : 'bg-blue-50 text-school-secondary border border-blue-100/80 group-hover:bg-school-secondary group-hover:text-white'
          }`}
        >
          <IconComponent className="w-6 h-6" />
        </div>

        {/* Title */}
        <h3
          className={`text-lg sm:text-xl font-bold tracking-tight mb-2.5 ${
            accent ? 'text-white' : 'text-school-primary'
          }`}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className={`text-sm leading-relaxed ${
            accent ? 'text-slate-200' : 'text-slate-600'
          }`}
        >
          {description}
        </p>
      </div>


    </motion.div>
  );
}

export default FeatureCard;
