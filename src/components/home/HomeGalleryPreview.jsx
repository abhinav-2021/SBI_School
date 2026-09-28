import { Link } from 'react-router-dom';
import { ArrowRight, Camera } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { GalleryGrid } from '../common/GalleryGrid';

export function HomeGalleryPreview() {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <SectionHeading
            badge="Campus"
            title="School Life & Activities"
            subtitle="Glimpses of classrooms, science practicals, and student activities."
            centered={false}
            className="mb-0 max-w-xl"
          />

          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white hover:bg-slate-100 text-school-primary font-bold text-xs uppercase tracking-wider border border-slate-200 shadow-soft-sm transition-colors shrink-0"
          >
            <Camera className="w-3.5 h-3.5 text-school-secondary" />
            <span>Visit Campus</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Gallery Grid displaying top 6 images */}
        <GalleryGrid initialLimit={6} showFilters={false} />
      </div>
    </section>
  );
}

export default HomeGalleryPreview;
