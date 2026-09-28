import { 
  GraduationCap, 
  UserCheck, 
  CreditCard, 
  Bus, 
  FileText, 
  Phone, 
  Mail, 
  Clock, 
  HelpCircle,
  ShieldCheck 
} from 'lucide-react';
import { motion } from 'framer-motion';
import { schoolInfo } from '../../data/schoolInfo';

const iconMap = {
  GraduationCap,
  UserCheck,
  CreditCard,
  Bus,
  FileText,
};

export function DepartmentDirectory() {
  const departments = schoolInfo.contact.departments || [];

  return (
    <section className="py-14 sm:py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-school-primary/10 text-school-primary border border-school-primary/20 mb-3">
            Department Directory
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-school-primary font-heading">
            Direct Helplines & Key Desks
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed">
            Reach the exact department handling your requirement without navigating through switchboards.
          </p>
        </div>

        {/* Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept, idx) => {
            const Icon = iconMap[dept.icon] || HelpCircle;

            return (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.07 }}
                className="bg-slate-50/70 hover:bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-school-secondary/40 hover:shadow-soft transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 text-school-primary flex items-center justify-center shadow-xs">
                      <Icon className="w-5 h-5 text-school-secondary" />
                    </div>
                    {dept.badge && (
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 border border-blue-200/60">
                        {dept.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-school-primary font-heading mb-1.5">
                    {dept.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {dept.description}
                  </p>
                </div>

                <div className="space-y-2.5 pt-4 border-t border-slate-200/80 text-xs">
                  {dept.timings && (
                    <div className="flex items-center gap-2 text-slate-500">
                      <Clock className="w-3.5 h-3.5 text-school-accent shrink-0" />
                      <span>{dept.timings}</span>
                    </div>
                  )}

                  <div className="flex items-center justify-between gap-2 pt-1">
                    <a
                      href={`tel:${dept.phone}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-school-primary hover:text-school-secondary transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-school-secondary" />
                      <span>{dept.phone}</span>
                    </a>

                    <a
                      href={`mailto:${dept.email}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-school-primary transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Email</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Quick Notice Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: departments.length * 0.07 }}
            className="bg-gradient-to-br from-school-primary-dark via-school-primary to-school-primary-light text-white rounded-2xl p-6 sm:p-7 shadow-soft flex flex-col justify-between relative overflow-hidden"
          >
            <div>
              <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/20 text-school-accent flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>

              <span className="text-[11px] font-bold uppercase tracking-wider text-school-accent">
                Visitor Protocol
              </span>

              <h3 className="text-base sm:text-lg font-bold text-white font-heading mt-1 mb-2">
                Visiting Our Campus?
              </h3>

              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                All visitors and parents are requested to report to Gate No. 1 and register with campus security. Please carry a valid photo ID.
              </p>
            </div>

            <div className="pt-5 mt-4 border-t border-white/15">
              <a
                href="#campus-location"
                className="inline-flex items-center gap-2 text-xs font-bold text-school-accent hover:text-white transition-colors"
              >
                <span>View Campus Travel Guide</span>
                <span>→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default DepartmentDirectory;
