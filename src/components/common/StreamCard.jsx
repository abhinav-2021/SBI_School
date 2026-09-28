import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export function StreamCard({ stream, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col group"
    >
      {/* Stream Image */}
      <div className="relative h-56 w-full overflow-hidden bg-slate-100">
        <img
          src={stream.image}
          alt={stream.title}
          className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-school-primary-dark/80 via-school-primary-dark/20 to-transparent" />
        
        {/* Stream Badge */}
        <span className="absolute top-4 left-4 inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-white/95 text-school-primary shadow-sm backdrop-blur-sm">
          {stream.badge}
        </span>
      </div>

      {/* Stream Body */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-school-primary group-hover:text-school-secondary transition-colors mb-2.5">
            {stream.title}
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-5 line-clamp-3">
            {stream.overview}
          </p>

          {/* Subjects Preview Pills */}
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-school-secondary" />
              <span>Key Subjects</span>
            </p>
            <div className="flex flex-wrap gap-1.5">
              {stream.subjectsOffered.slice(0, 3).map((sub, sIdx) => (
                <span
                  key={sIdx}
                  className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-100 text-slate-700"
                >
                  {sub.name}
                </span>
              ))}
              {stream.subjectsOffered.length > 3 && (
                <span className="px-2 py-1 text-xs font-medium rounded-md bg-blue-50 text-school-secondary">
                  +{stream.subjectsOffered.length - 3} more
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Action Link */}
        <div className="pt-4 border-t border-slate-100">
          <Link
            to={`/streams#${stream.id}`}
            className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-50 group-hover:bg-school-primary text-school-primary group-hover:text-white font-semibold text-sm transition-all duration-200"
          >
            <span>Explore Curriculum</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default StreamCard;
