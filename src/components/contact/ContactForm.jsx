import { useState } from 'react';
import { Send, CheckCircle2, User, Mail, Phone, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    interest: 'Admission Inquiry',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      setError('Please provide your name and phone number.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      interest: 'Admission Inquiry',
      message: ''
    });
    setIsSubmitted(false);
  };

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-soft">
      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-school-primary font-heading">
          Send an Inquiry
        </h3>
        <p className="mt-1 text-xs sm:text-sm text-slate-500">
          Fill in your details and our office will get back to you.
        </p>
      </div>

      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="p-6 text-center bg-emerald-50 rounded-xl border border-emerald-200 space-y-3"
          >
            <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
            <h4 className="text-lg font-bold text-emerald-950 font-heading">
              Inquiry Sent
            </h4>
            <p className="text-xs sm:text-sm text-emerald-800">
              Thank you, <strong>{formData.fullName}</strong>. We will reach out to you shortly.
            </p>
            <button
              type="button"
              onClick={handleReset}
              className="mt-2 px-4 py-2 rounded-lg bg-school-primary text-white text-xs font-bold hover:bg-school-secondary transition-colors"
            >
              Send Another
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="p-3 rounded-lg bg-red-50 text-red-700 text-xs flex items-center gap-2 border border-red-200">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="fullName" className="block text-xs font-bold text-slate-700 mb-1.5">
                  Your Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder="Full name"
                    className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-school-secondary/30 focus:border-school-secondary text-slate-700"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs font-bold text-slate-700 mb-1.5">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Phone number"
                    className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-school-secondary/30 focus:border-school-secondary text-slate-700"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-xs font-bold text-slate-700 mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email address (optional)"
                    className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-school-secondary/30 focus:border-school-secondary text-slate-700"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="interest" className="block text-xs font-bold text-slate-700 mb-1.5">
                  Area of Interest
                </label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-school-secondary/30 focus:border-school-secondary text-slate-700 bg-white"
                >
                  <option value="Admission Inquiry">Admission Inquiry</option>
                  <option value="Science Stream (10+2)">Science Stream (10+2)</option>
                  <option value="Commerce Stream (10+2)">Commerce Stream (10+2)</option>
                  <option value="Arts Stream (10+2)">Arts Stream (10+2)</option>
                  <option value="Campus Visit">Campus Visit</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-bold text-slate-700 mb-1.5">
                Message / Query
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your query or student's class..."
                className="w-full p-3 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-school-secondary/30 focus:border-school-secondary text-slate-700"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-school-primary hover:bg-school-secondary text-white font-bold text-xs uppercase tracking-wider shadow-soft transition-colors cursor-pointer"
            >
              <span>{isSubmitting ? 'Sending...' : 'Submit Inquiry'}</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ContactForm;
