import { Calendar, Flag, Award, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { schoolInfo } from '../../data/schoolInfo';

export function HistoryTimeline() {
  const { history } = schoolInfo;

  return (
    <section className="py-20 lg:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Heritage"
          title="Three Decades of Educational Evolution"
          subtitle="From humble beginnings with 120 students to an internationally acclaimed center of excellence, explore the pivotal milestones that shaped SBI Academy."
          centered={true}
        />

        {/* Founding Story Overview Box */}
        <div className="max-w-4xl mx-auto mb-16 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-soft">
          <h3 className="text-xl font-bold text-school-primary mb-3 flex items-center gap-2">
            <Flag className="w-5 h-5 text-school-secondary" />
            <span>The Founding Vision</span>
          </h3>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {history.foundingStory}
          </p>
        </div>

        {/* Alternating Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-1/2 -ml-px w-0.5 bg-gradient-to-b from-school-secondary via-school-accent to-school-primary" />

          <div className="space-y-12">
            {history.milestones.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    isEven ? 'sm:flex-row-reverse' : 'sm:flex-row'
                  }`}
                >
                  {/* Center Dot with Year */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-4 border-school-secondary shadow-md flex items-center justify-center z-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-school-accent" />
                  </div>

                  {/* Card Content */}
                  <div
                    className={`ml-12 sm:ml-0 sm:w-1/2 ${
                      isEven ? 'sm:pr-12 sm:text-right' : 'sm:pl-12 sm:text-left'
                    }`}
                  >
                    <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-soft-sm hover:shadow-soft transition-all duration-300">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-blue-50 text-school-secondary border border-blue-100 mb-2">
                        {item.year}
                      </span>
                      <h4 className="text-lg font-bold text-school-primary mb-2 font-heading">
                        {item.title}
                      </h4>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HistoryTimeline;
