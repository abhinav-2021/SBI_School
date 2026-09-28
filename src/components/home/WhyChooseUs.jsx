import { SectionHeading } from '../common/SectionHeading';
import { FeatureCard } from '../common/FeatureCard';
import { schoolInfo } from '../../data/schoolInfo';

export function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Why Us"
          title="Why S.B.I. School"
          subtitle="Dedicated to quality learning, student character, and practical education."
          centered={true}
        />

        {/* Feature Cards Grid (6 clean cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {schoolInfo.whyChooseUs.map((feature, idx) => (
            <FeatureCard
              key={idx}
              index={idx}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        {/* Fast Statistics Ribbon below cards */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-soft grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {schoolInfo.stats.map((stat, sIdx) => (
            <div key={sIdx} className="space-y-1">
              <p className="text-2xl sm:text-3xl font-black text-school-primary font-heading">
                {stat.value}
              </p>
              <p className="text-xs text-slate-500 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
