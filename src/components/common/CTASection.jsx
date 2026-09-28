import { Link } from 'react-router-dom';
import { ArrowRight, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

export function CTASection({
  title = "Admissions Open 2026-27",
  subtitle = "Nursery to 10+2. Contact our office for admission details or visit the campus.",
  primaryButtonText = "Contact Office",
  primaryButtonLink = "/contact",
  secondaryButtonText = "Download Forms",
  secondaryButtonLink = "/documents",
  badge = "Enrollment"
}) {
  return (
    <section className="relative bg-school-primary-dark text-white py-14 sm:py-16 border-t border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
        >
          {badge && (
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-school-accent/20 text-school-accent border border-school-accent/30 mb-4">
              {badge}
            </span>
          )}

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white font-heading">
            {title}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            {subtitle}
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link
              to={primaryButtonLink}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-school-accent hover:bg-school-accent-dark text-school-primary-dark font-extrabold text-xs uppercase tracking-wider shadow-soft transition-all duration-200"
            >
              <span>{primaryButtonText}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              to={secondaryButtonLink}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider border border-white/20 transition-all duration-200"
            >
              <FileText className="w-3.5 h-3.5 text-school-accent" />
              <span>{secondaryButtonText}</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CTASection;
