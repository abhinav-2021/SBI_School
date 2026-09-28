import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { StreamCard } from '../common/StreamCard';
import { academicStreams } from '../../data/streams';

export function StreamsPreview() {
  return (
    <section className="py-16 sm:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <SectionHeading
            badge="Senior Secondary"
            title="Academic Streams (10+2)"
            subtitle="Senior secondary programs in Science, Commerce, and Arts."
            centered={false}
            className="mb-0 max-w-xl"
          />

          <Link
            to="/streams"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-school-secondary font-bold text-xs uppercase tracking-wider transition-colors shrink-0"
          >
            <span>All Streams</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 3 Stream Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {academicStreams.map((stream, idx) => (
            <StreamCard key={stream.id} stream={stream} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default StreamsPreview;
