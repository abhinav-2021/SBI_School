import { Trophy, Award, Medal, Star, GraduationCap, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';

export function Achievements() {
  const achievements = [
    {
      icon: Trophy,
      title: "Top 5 National School of Excellence",
      year: "2024–2026",
      desc: "Ranked among the nation's premier institutions for STEM education, holistic character formation, and digital innovation."
    },
    {
      icon: GraduationCap,
      title: "100% College Matriculation Record",
      year: "Consecutive 15 Years",
      desc: "Our graduates consistently earn admissions and merit scholarships to Ivy League, Russell Group, and premier national universities."
    },
    {
      icon: Medal,
      title: "National STEM & Robotics Champions",
      year: "2025 Winner",
      desc: "SBI Academy student robotics team claimed 1st place in the National Autonomous Rover Challenge and represented the country internationally."
    },
    {
      icon: Award,
      title: "State Interschool Athletics Trophy",
      year: "3 Consecutive Years",
      desc: "Overall champions across track & field, swimming, and basketball divisions in state interschool sports federations."
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Distinction & Honors"
          title="Institutional Achievements & Honors"
          subtitle="A testament to the unwavering dedication of our faculty, the ambition of our students, and our rigorous standards."
          centered={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {achievements.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 shadow-soft-sm hover:shadow-soft transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 border border-amber-200/60 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-xs font-bold text-school-secondary uppercase tracking-wider">
                    {item.year}
                  </span>
                  
                  <h3 className="text-lg font-bold text-school-primary mt-1 mb-2 font-heading">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                  <Star className="w-3.5 h-3.5 text-school-accent fill-school-accent" />
                  <span>Institutional Honor</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
