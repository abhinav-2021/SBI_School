import { Award, BookOpen, Quote, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { schoolInfo } from '../../data/schoolInfo';

export function PrincipalMessage() {
  const { principal } = schoolInfo;

  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait & Formal Title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Picture frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-soft-lg border-8 border-slate-50 aspect-[4/5] bg-slate-100">
                <img
                  src={principal.image}
                  alt={principal.name}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-school-primary-dark/80 via-transparent to-transparent" />
                
                {/* Overlay Name Tag */}
                <div className="absolute bottom-6 inset-x-6 p-4 rounded-xl bg-white/95 backdrop-blur-md shadow-soft border border-white/40">
                  <h3 className="text-base sm:text-lg font-bold text-school-primary font-heading">
                    {principal.name}
                  </h3>
                  <p className="text-xs font-semibold text-school-secondary">
                    {principal.title}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    {principal.qualifications}
                  </p>
                </div>
              </div>

              {/* Decorative Experience Badge */}
              <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-school-accent text-school-primary-dark p-4 rounded-2xl shadow-soft-lg flex items-center gap-3 border-4 border-white">
                <Award className="w-6 h-6 text-school-primary-dark" />
                <div>
                  <p className="text-sm font-extrabold leading-none">25+ Years</p>
                  <p className="text-[11px] font-semibold text-school-primary-dark/80 mt-0.5">
                    Academic Leadership
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Full Principal Message */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <div>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-school-secondary border border-blue-100 mb-3">
                Leadership Message
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-school-primary font-heading tracking-tight">
                Inspiring Curiosity, Shaping Character
              </h2>
            </div>

            {/* Quotation highlight */}
            <div className="p-5 rounded-2xl bg-slate-50 border-l-4 border-school-accent text-school-primary font-medium italic text-base sm:text-lg relative">
              <Quote className="w-8 h-8 text-school-accent/30 absolute top-3 right-3" />
              "{principal.quote}"
            </div>

            {/* Paragraphs */}
            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              {principal.fullMessage.map((paragraph, pIdx) => (
                <p key={pIdx}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Signature Block */}
            <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
              <div>
                <p className="font-serif italic text-2xl text-school-primary select-none tracking-wide">
                  Eleanor Vance
                </p>
                <p className="text-xs text-slate-500 font-medium mt-1">
                  Head of School & Principal, SBI Academy
                </p>
              </div>

              <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-slate-400 bg-slate-50 py-2 px-3 rounded-lg border border-slate-200/60">
                <Sparkles className="w-3.5 h-3.5 text-school-accent" />
                <span>Office of the Principal</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default PrincipalMessage;
