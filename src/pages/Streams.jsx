import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { PageHero } from '../components/common/PageHero';
import { StreamDetailCard } from '../components/streams/StreamDetailCard';
import { SectionHeading } from '../components/common/SectionHeading';
import { CTASection } from '../components/common/CTASection';
import { academicStreams } from '../data/streams';
import { GraduationCap } from 'lucide-react';

export function Streams() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [hash]);

  return (
    <>
      <SEO
        title="Academic Streams (10+2)"
        description="Science, Commerce, and Arts streams offered at S.B.I. School, Mundri."
      />

      {/* Page Hero */}
      <PageHero
        title="Academic Streams (10+2)"
        subtitle="Permanent recognised senior secondary programs in Science, Commerce, and Arts."
        badge="Senior Secondary"
        breadcrumbs={[{ label: "Streams" }]}
        backgroundImage="/images/hero/hero-campus-main.jpg"
      />

      {/* Quick Stream Navigation Bar */}
      <div className="sticky top-16 sm:top-20 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-soft-sm py-2.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 overflow-x-auto">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider shrink-0">
            <GraduationCap className="w-4 h-4 text-school-secondary" />
            <span>Select Stream:</span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {academicStreams.map((stream) => (
              <a
                key={stream.id}
                href={`#${stream.id}`}
                className="px-3 py-1 rounded-lg text-xs font-bold bg-slate-100 hover:bg-school-primary hover:text-white text-slate-700 transition-colors"
              >
                {stream.title}
              </a>
            ))}
          </div>

          <a
            href="/documents"
            className="text-xs font-bold text-school-secondary hover:underline shrink-0 hidden md:inline-block"
          >
            Download Syllabus
          </a>
        </div>
      </div>

      {/* Streams Listing */}
      <section className="py-14 sm:py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            badge="Streams"
            title="Senior Secondary Streams (10+2)"
            subtitle="Subject combinations and career pathways for Class 11 & 12."
            centered={true}
          />

          <div className="space-y-12">
            {academicStreams.map((stream) => (
              <StreamDetailCard key={stream.id} stream={stream} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Admission Inquiries 2026-27"
        subtitle="Contact our office for eligibility criteria, seat availability, and stream counseling."
        primaryButtonText="Contact Office"
        primaryButtonLink="/contact"
        secondaryButtonText="Download Syllabus"
        secondaryButtonLink="/documents"
      />
    </>
  );
}

export default Streams;
