import { motion } from 'framer-motion';

export function SectionHeading({
  badge,
  title,
  subtitle,
  centered = true,
  dark = false,
  className = ""
}) {
  return (
    <div
      className={`max-w-3xl mb-12 sm:mb-16 ${
        centered ? 'mx-auto text-center' : 'text-left'
      } ${className}`}
    >
      {badge && (
        <span
          className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3.5 ${
            dark
              ? 'bg-school-accent/20 text-school-accent border border-school-accent/30'
              : 'bg-blue-50 text-school-secondary border border-blue-100'
          }`}
        >
          {badge}
        </span>
      )}
      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight ${
          dark ? 'text-white' : 'text-school-primary'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-sm sm:text-base lg:text-lg leading-relaxed ${
            dark ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 flex items-center gap-1.5 ${
          centered ? 'justify-center' : 'justify-start'
        }`}
      >
        <span className="w-12 h-1 bg-school-secondary rounded-full" />
        <span className="w-3 h-1 bg-school-accent rounded-full" />
      </div>
    </div>
  );
}

export default SectionHeading;
