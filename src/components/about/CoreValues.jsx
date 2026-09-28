import { SectionHeading } from '../common/SectionHeading';
import { FeatureCard } from '../common/FeatureCard';
import { schoolInfo } from '../../data/schoolInfo';

export function CoreValues() {
  return (
    <section className="py-14 sm:py-18 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Values"
          title="Our Core Values"
          subtitle="The foundational principles guiding our students and teachers every day."
          centered={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {schoolInfo.coreValues.map((val, idx) => (
            <FeatureCard
              key={idx}
              index={idx}
              icon={val.icon}
              title={val.title}
              description={val.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoreValues;
