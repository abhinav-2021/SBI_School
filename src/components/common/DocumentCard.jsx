import { FileText, Download, ExternalLink, Calendar, HardDrive, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export function DocumentCard({ doc, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-soft-sm hover:shadow-soft transition-all duration-300 flex flex-col justify-between group"
    >
      <div>
        {/* Top Meta: Icon + Category Badge */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0 border border-red-100 group-hover:scale-105 transition-transform">
            <FileText className="w-6 h-6" />
          </div>

          <div className="flex items-center gap-2">
            {doc.badge && (
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-amber-50 text-amber-700 border border-amber-200/60">
                {doc.badge}
              </span>
            )}
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-slate-100 text-slate-600">
              {doc.category}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-bold text-school-primary group-hover:text-school-secondary transition-colors mb-2 line-clamp-2">
          {doc.title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
          {doc.description}
        </p>

        {/* File Specs Metadata */}
        <div className="flex items-center gap-4 text-xs text-slate-400 mb-5 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-1.5">
            <HardDrive className="w-3.5 h-3.5" />
            <span>{doc.fileSize}</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            <span>{doc.uploadDate}</span>
          </div>
          <span>•</span>
          <span className="font-semibold text-slate-500 uppercase">{doc.format}</span>
        </div>
      </div>

      {/* Action Buttons: Direct Download + View In Browser */}
      <div className="grid grid-cols-2 gap-2.5">
        <a
          href={doc.filePath}
          download
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-school-primary hover:bg-school-secondary text-white text-xs font-bold shadow-sm transition-colors"
          title={`Download ${doc.title}`}
        >
          <Download className="w-3.5 h-3.5" />
          <span>Download</span>
        </a>

        <a
          href={doc.filePath}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold transition-colors"
          title={`View ${doc.title} in new tab`}
        >
          <ExternalLink className="w-3.5 h-3.5" />
          <span>View Online</span>
        </a>
      </div>
    </motion.div>
  );
}

export default DocumentCard;
