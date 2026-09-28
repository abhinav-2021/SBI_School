import { Link } from 'react-router-dom';
import { Bell, ArrowRight, Calendar, Sparkles } from 'lucide-react';
import { announcements } from '../../data/announcements';

export function QuickAnnouncements() {
  return (
    <section className="bg-school-primary py-8 text-white relative z-20 border-b border-school-primary-light/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Label */}
          <div className="lg:col-span-3 flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-school-accent/20 text-school-accent shrink-0">
              <Bell className="w-5 h-5 text-school-accent" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-school-accent">
                Notice Board
              </p>
              <h3 className="text-base font-bold text-white font-heading">
                Important Updates
              </h3>
            </div>
          </div>

          {/* Announcements Items */}
          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-4">
            {announcements.map((item) => (
              <div
                key={item.id}
                className="bg-white/10 hover:bg-white/15 border border-white/10 rounded-xl p-3.5 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5 text-[11px]">
                    <span className={`px-2 py-0.5 rounded font-bold uppercase tracking-wider ${
                      item.isUrgent ? 'bg-amber-400 text-school-primary-dark font-extrabold' : 'bg-white/20 text-slate-200'
                    }`}>
                      {item.category}
                    </span>
                    <span className="text-slate-300 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {item.date}
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-white leading-snug line-clamp-1 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-300 line-clamp-2">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-2 mt-2 border-t border-white/10 text-right">
                  <Link
                    to={item.linkTo}
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-school-accent hover:text-white transition-colors"
                  >
                    <span>{item.linkText}</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuickAnnouncements;
