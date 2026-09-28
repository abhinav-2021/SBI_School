import { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Copy, 
  Check, 
  Navigation,
  ArrowUpRight 
} from 'lucide-react';
import { motion } from 'framer-motion';
import { schoolInfo } from '../../data/schoolInfo';

export function QuickContactCards() {
  const [copiedItem, setCopiedItem] = useState(null);

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(key);
    setTimeout(() => {
      setCopiedItem(null);
    }, 2000);
  };

  const cards = [
    {
      id: 'admissions',
      title: 'Admissions Helpline',
      badge: 'Open for 2026-27',
      badgeColor: 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20',
      icon: Phone,
      iconColor: 'bg-blue-50 text-school-secondary border-blue-100',
      primaryText: schoolInfo.contact.phones[1].number,
      secondaryText: 'Mon - Sat: 8:00 AM to 2:30 PM',
      description: 'Direct line for Nursery to 10+2 admissions, eligibility, fees & guidelines.',
      actions: [
        {
          label: 'Call Helpline',
          href: `tel:${schoolInfo.contact.phones[1].number}`,
          icon: Phone,
          primary: true,
        },
        {
          label: 'WhatsApp',
          href: `https://wa.me/${schoolInfo.contact.whatsapp}?text=Hello%20SBI%20School,%20I%20want%20to%20inquire%20about%20admissions`,
          icon: MessageCircle,
          target: '_blank',
          className: 'bg-emerald-600 hover:bg-emerald-700 text-white',
        },
      ],
      copyValue: schoolInfo.contact.phones[1].number,
      copyLabel: 'Copy Number',
    },
    {
      id: 'office',
      title: 'School Reception & Office',
      badge: 'Admin Desk',
      badgeColor: 'bg-blue-500/10 text-school-secondary border-blue-500/20',
      icon: Mail,
      iconColor: 'bg-amber-50 text-amber-600 border-amber-100',
      primaryText: schoolInfo.contact.phones[0].number,
      secondaryText: schoolInfo.contact.emails[0].address,
      description: 'For student inquiries, Transfer Certificates (TC), documents & general help.',
      actions: [
        {
          label: 'Call Office',
          href: `tel:${schoolInfo.contact.phones[0].number}`,
          icon: Phone,
          primary: true,
        },
        {
          label: 'Send Email',
          href: `mailto:${schoolInfo.contact.emails[0].address}`,
          icon: Mail,
        },
      ],
      copyValue: schoolInfo.contact.emails[0].address,
      copyLabel: 'Copy Email',
    },
    {
      id: 'hours',
      title: 'Visiting & Office Hours',
      badge: 'Campus Access',
      badgeColor: 'bg-purple-500/10 text-purple-700 border-purple-500/20',
      icon: Clock,
      iconColor: 'bg-purple-50 text-purple-600 border-purple-100',
      primaryText: 'Mon – Sat: 8:00 AM – 2:30 PM',
      secondaryText: 'Principal Meeting: 9:00 AM – 1:00 PM',
      description: 'Parents & guardians are welcome to visit without prior form submission.',
      actions: [
        {
          label: 'Campus Directions',
          href: '#campus-location',
          icon: Navigation,
          primary: false,
        },
      ],
      note: 'Closed on Sundays & Gazetted Holidays',
    },
    {
      id: 'address',
      title: 'Campus Location',
      badge: 'Kaithal Road',
      badgeColor: 'bg-amber-500/10 text-amber-700 border-amber-500/20',
      icon: MapPin,
      iconColor: 'bg-rose-50 text-rose-600 border-rose-100',
      primaryText: 'Mundri, Distt. Kaithal',
      secondaryText: 'Haryana 136027, India',
      description: 'Conveniently situated on the main highway road with dedicated visitor parking.',
      actions: [
        {
          label: 'Open in Maps',
          href: schoolInfo.contact.mapUrl,
          icon: ArrowUpRight,
          target: '_blank',
          primary: true,
        },
      ],
      copyValue: schoolInfo.contact.address.full,
      copyLabel: 'Copy Address',
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-school-secondary/10 text-school-secondary border border-school-secondary/20 mb-3">
            Direct Contact Hub
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-school-primary font-heading">
            Connect With Us Directly
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-slate-600">
            No waiting or forms required. Speak directly with our staff, chat via WhatsApp, or plan your visit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            const isCopied = copiedItem === card.id;

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-soft-sm hover:shadow-soft transition-all duration-300 flex flex-col justify-between relative group"
              >
                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${card.iconColor} group-hover:scale-105 transition-transform duration-200`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold border tracking-wide ${card.badgeColor}`}>
                      {card.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-school-primary font-heading mb-1.5">
                    {card.title}
                  </h3>

                  {/* Primary text */}
                  <p className="text-sm font-semibold text-slate-900 mb-0.5">
                    {card.primaryText}
                  </p>

                  {/* Secondary text */}
                  {card.secondaryText && (
                    <p className="text-xs text-slate-500 font-medium mb-3">
                      {card.secondaryText}
                    </p>
                  )}

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    {card.actions.map((action, actionIdx) => {
                      const ActionIcon = action.icon;
                      return (
                        <a
                          key={actionIdx}
                          href={action.href}
                          target={action.target || '_self'}
                          rel={action.target ? 'noopener noreferrer' : undefined}
                          className={`flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                            action.className
                              ? action.className
                              : action.primary
                              ? 'bg-school-primary hover:bg-school-primary-light text-white shadow-sm'
                              : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                          }`}
                        >
                          <ActionIcon className="w-3.5 h-3.5" />
                          <span>{action.label}</span>
                        </a>
                      );
                    })}
                  </div>

                  {/* Copy Button if available */}
                  {card.copyValue && (
                    <button
                      type="button"
                      onClick={() => handleCopy(card.copyValue, card.id)}
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-500 hover:text-school-secondary hover:bg-slate-50 transition-colors"
                      title={card.copyLabel}
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700 font-semibold">Copied to clipboard!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>{card.copyLabel}</span>
                        </>
                      )}
                    </button>
                  )}

                  {/* Note if available */}
                  {card.note && (
                    <p className="text-[11px] text-slate-600 text-center font-medium mt-1">
                      {card.note}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default QuickContactCards;
