import * as LucideIcons from 'lucide-react';
import { motion } from 'framer-motion';

export function ContactInfoCard({
  icon = "Phone",
  title,
  subtitle,
  details = [],
  actionText,
  actionHref,
  index = 0
}) {
  const IconComponent = LucideIcons[icon] || LucideIcons.Info;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-soft-sm hover:shadow-soft transition-all duration-300 flex flex-col justify-between group"
    >
      <div>
        {/* Icon */}
        <div className="w-13 h-13 w-12 h-12 rounded-xl bg-blue-50 text-school-secondary border border-blue-100 flex items-center justify-center mb-5 group-hover:bg-school-secondary group-hover:text-white transition-colors">
          <IconComponent className="w-6 h-6" />
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-school-primary mb-1">
          {title}
        </h3>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-xs text-slate-400 font-medium mb-4">
            {subtitle}
          </p>
        )}

        {/* Details list */}
        <div className="space-y-2 text-sm text-slate-600 mb-6">
          {details.map((detail, idx) => (
            <p key={idx} className="leading-relaxed">
              {detail}
            </p>
          ))}
        </div>
      </div>

      {/* Action link */}
      {actionHref && (
        <a
          href={actionHref}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-school-secondary hover:text-school-primary transition-colors group-hover:underline"
        >
          <span>{actionText || "Connect with us"}</span>
          <LucideIcons.ArrowRight className="w-3.5 h-3.5" />
        </a>
      )}
    </motion.div>
  );
}

export default ContactInfoCard;
