import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { motion } from 'framer-motion';

export function PageHero({
  title,
  subtitle,
  badge,
  breadcrumbs = [],
  backgroundImage = "/images/hero/hero-campus-main.jpg"
}) {
  return (
    <section className="relative overflow-hidden bg-school-primary-dark text-white py-12 sm:py-16 lg:py-20">
      {/* Background Image with Dark Contrast Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt={title}
          className="w-full h-full object-cover object-[center_35%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-school-primary-dark/95 via-school-primary-dark/85 to-school-primary-dark/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex items-center gap-2 text-xs text-slate-300">
            <li>
              <Link 
                to="/" 
                className="inline-flex items-center gap-1.5 hover:text-school-accent transition-colors"
              >
                <Home className="w-3.5 h-3.5" />
                <span>Home</span>
              </Link>
            </li>
            {breadcrumbs.map((crumb, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <ChevronRight className="w-3 h-3 text-slate-400" />
                {crumb.path ? (
                  <Link to={crumb.path} className="hover:text-school-accent transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-school-accent font-semibold">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {/* Title and Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-2xl"
        >
          {badge && (
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-school-accent/20 text-school-accent border border-school-accent/30 mb-3">
              {badge}
            </span>
          )}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-heading">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-2 text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default PageHero;
