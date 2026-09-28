import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Do I need to submit an online enquiry form or book an appointment to visit?",
      answer: "No, you do not need an online form or prior appointment for campus visits! You are welcome to walk into our admission office anytime from Monday to Saturday between 8:00 AM and 2:30 PM. Our staff will be glad to assist you."
    },
    {
      question: "What documents should we carry when visiting for admission?",
      answer: "We recommend bringing the student's birth certificate, recent passport-size photographs (4 copies), previous school report card/mark sheet, Transfer Certificate (TC, if migrating from another school), and parents' Aadhaar card copies."
    },
    {
      question: "When can parents meet the School Principal?",
      answer: "The Principal is available for parent meetings on all working days between 9:00 AM and 1:00 PM. While walk-ins are accommodated, calling the office reception (+91 90500 98100) ahead of time ensures minimum waiting time."
    },
    {
      question: "Which areas and villages are covered by the school bus facility?",
      answer: "Our school buses cover Mundri and over 20+ surrounding villages and rural routes as well as designated stops in Kaithal city. All buses are operated by experienced drivers with conductor assistance and strict safety protocols."
    },
    {
      question: "What payment modes are accepted at the school accounts counter?",
      answer: "Fees can be deposited directly at our accounts counter during office hours via UPI, Net Banking, Debit/Credit Card, Demand Draft, or Cheque. Official receipts are issued immediately."
    },
    {
      question: "How do I request a Transfer Certificate (TC) or character certificate?",
      answer: "You can apply for a Transfer Certificate or student record verification in person at the school records desk (Counter 1) or by calling the office helpline. Typical processing time is 2 to 3 working days."
    }
  ];

  return (
    <section className="py-14 sm:py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-school-secondary/10 text-school-secondary border border-school-secondary/20 mb-3">
            Got Questions?
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-school-primary font-heading">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Answers to common questions regarding visits, admissions, and office procedures.
          </p>
        </div>

        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-soft-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left hover:bg-slate-50/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-school-primary font-heading">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-transform duration-300 ${
                    isOpen ? 'bg-school-primary text-white rotate-180 border-school-primary' : 'bg-slate-100 text-slate-500 border-slate-200'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ContactFAQ;
