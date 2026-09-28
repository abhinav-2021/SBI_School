import { Link } from 'react-router-dom';
import { 
  Phone, 
  MessageCircle, 
  FileDown, 
  CheckCircle2, 
  Calendar,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import { schoolInfo } from '../../data/schoolInfo';

export function CampusVisitCTA() {
  const highlights = [
    "No appointment required for campus tour",
    "One-on-one admission counseling with teachers",
    "Explore labs, smart classrooms & sports facilities",
    "Collect physical admission forms & syllabus guides"
  ];

  return (
    <section className="py-14 sm:py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-school-primary-dark via-school-primary to-[#183a66] text-white p-8 sm:p-12 lg:p-16 shadow-soft-lg">
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 rounded-full bg-school-secondary/20 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 -mb-10 w-60 h-60 rounded-full bg-school-accent/10 blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-school-accent/20 text-school-accent border border-school-accent/30 mb-5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Walk-In Admissions 2026-27</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight font-heading text-white leading-tight">
                Plan Your Campus Visit — <br className="hidden sm:inline" />
                <span className="text-school-accent">No Prior Form Needed</span>
              </h2>

              <p className="mt-4 text-sm sm:text-base text-slate-200 leading-relaxed max-w-xl">
                Experience our welcoming academic environment in person. Visit the school office during working hours (8:00 AM – 2:00 PM, Monday to Saturday). Our dedicated admission team will give you a guided campus tour and answer every question.
              </p>

              {/* Highlights List */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-school-accent shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Action Box */}
            <div className="lg:col-span-5">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 shadow-xl space-y-4">
                <h3 className="text-lg font-bold text-white font-heading">
                  Quick Connect Channels
                </h3>
                <p className="text-xs text-slate-300">
                  Speak directly with an admission advisor right now:
                </p>

                {/* Call Button */}
                <a
                  href={`tel:${schoolInfo.contact.phones[1].number}`}
                  className="w-full flex items-center justify-between px-5 py-3.5 rounded-xl bg-school-accent hover:bg-school-accent-dark text-school-primary-dark font-bold text-sm shadow-md transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-school-primary-dark/10 flex items-center justify-center">
                      <Phone className="w-4 h-4 text-school-primary-dark" />
                    </div>
                    <div className="text-left">
                      <span className="block text-xs uppercase font-extrabold text-school-primary-dark/80">Call Admission Desk</span>
                      <span className="text-sm font-black">{schoolInfo.contact.phones[1].number}</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                {/* WhatsApp Chat Button */}
                <a
                  href={`https://wa.me/${schoolInfo.contact.whatsapp}?text=Hello%20SBI%20School,%20I%20would%20like%20to%20know%20more%20about%20admissions`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                      <MessageCircle className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-left">
                      <span className="block text-xs uppercase font-semibold text-emerald-100">WhatsApp Chat</span>
                      <span className="text-sm font-bold">Instant Chat with Counselors</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Download Form Link */}
                <div className="pt-2">
                  <Link
                    to="/documents"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/20 transition-colors"
                  >
                    <FileDown className="w-4 h-4 text-school-accent" />
                    <span>Download Admission Forms & Documents</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CampusVisitCTA;
