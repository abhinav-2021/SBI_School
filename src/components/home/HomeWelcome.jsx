import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export function HomeWelcome() {
  const highlights = [
    "Permanent Recognised (Nursery to 10+2)",
    "Science, Commerce & Arts Streams",
    "Equipped Science & Computer Laboratories",
    "Disciplined, Safe & Nurturing Campus"
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* School Campus Photo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-lg border-4 border-slate-100/90 aspect-[4/3] bg-slate-100 group">
              <img
                src="/images/hero/hero-campus-main.jpg"
                alt="S.B.I. School Mundri Campus"
                className="w-full h-full object-cover object-[center_42%] transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              
              {/* Clean campus photo badge */}
              <div className="absolute bottom-3.5 left-3.5 bg-school-primary-dark/90 backdrop-blur-md text-white px-3.5 py-2 rounded-xl border border-white/20 shadow-md flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <div className="text-left">
                  <p className="text-xs font-bold text-white tracking-wide leading-tight">School Campus & Play Grounds</p>
                  <p className="text-[10px] text-slate-300 leading-tight">Mundri (Kaithal)</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Minimal Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-6 space-y-5"
          >
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-school-secondary border border-blue-100 mb-2.5">
                About Us
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-school-primary font-heading tracking-tight">
                Welcome to S.B.I. School
              </h2>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Established in Mundri (Kaithal), S.B.I. School is permanently recognised CBSE School from Nursery to 10+2, providing quality education with experienced teachers and modern practical laboratories.
            </p>

            {/* Highlights List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Action CTA */}
            <div className="pt-3">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-school-primary hover:bg-school-secondary text-white font-bold text-xs uppercase tracking-wider shadow-soft transition-colors group"
              >
                <span>About Our School</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HomeWelcome;
