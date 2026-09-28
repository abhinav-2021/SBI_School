import { useState } from 'react';
import { 
  MapPin, 
  Navigation, 
  Car, 
  Bus, 
  Train, 
  ExternalLink, 
  Copy, 
  Check, 
  Compass, 
  Clock, 
  ShieldCheck 
} from 'lucide-react';
import { 
  FacebookIcon, 
  TwitterIcon, 
  InstagramIcon, 
  YoutubeIcon 
} from '../common/SocialIcons';
import { schoolInfo } from '../../data/schoolInfo';

const transitIconMap = {
  Car,
  Bus,
  Train,
};

export function CampusLocationGuide() {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(schoolInfo.contact.address.full);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const transitGuides = schoolInfo.contact.transitGuides || [];

  return (
    <section id="campus-location" className="py-14 sm:py-20 bg-slate-50 border-t border-slate-200/80 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-school-secondary/10 text-school-secondary border border-school-secondary/20 mb-3">
            Campus Guide & Map
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-school-primary font-heading">
            Visit Our School Campus
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-slate-600">
            Conveniently located on the main road in Mundri, easily reachable from Kaithal city and surrounding areas.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Transit Info & Campus Details */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            {/* Campus Address Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-soft-sm">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-school-secondary flex items-center justify-center border border-blue-100 shrink-0">
                    <MapPin className="w-5 h-5 text-school-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-school-primary font-heading">
                      Campus Address
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      Village Mundri, Distt. Kaithal
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-500" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 mb-5 text-sm text-slate-700 leading-relaxed font-medium">
                <p className="font-bold text-school-primary">{schoolInfo.contact.address.line1}</p>
                <p>{schoolInfo.contact.address.line2}</p>
                <p>{schoolInfo.contact.address.city}, {schoolInfo.contact.address.state} – {schoolInfo.contact.address.zip}</p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={schoolInfo.contact.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-school-secondary hover:bg-school-secondary-dark text-white text-xs font-bold shadow-sm transition-all"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Start Turn-by-Turn Navigation</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>

                <a
                  href={`tel:${schoolInfo.contact.phones[0].number}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors"
                >
                  <span>Call Gate Reception</span>
                </a>
              </div>
            </div>

            {/* Transit & Commute Options */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-soft-sm">
              <div className="flex items-center gap-2.5 mb-5">
                <Compass className="w-5 h-5 text-school-secondary" />
                <h3 className="text-base font-bold text-school-primary font-heading">
                  How To Reach the Campus
                </h3>
              </div>

              <div className="space-y-4">
                {transitGuides.map((guide, idx) => {
                  const Icon = transitIconMap[guide.icon] || Compass;
                  return (
                    <div key={idx} className="flex items-start gap-3.5">
                      <div className="w-8 h-8 rounded-lg bg-slate-100 text-school-primary flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="w-4 h-4 text-school-primary" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-school-primary">{guide.title}</span>
                          <span className="text-[10px] uppercase font-bold text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">
                            {guide.mode}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                          {guide.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* School Bus Alert */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-3 text-xs text-slate-600 bg-blue-50/50 p-3 rounded-xl border border-blue-100">
                <Bus className="w-4 h-4 text-school-secondary shrink-0" />
                <span>
                  <strong>Student Bus Network:</strong> Regular school bus routes connect over 20+ surrounding villages with safe, GPS-monitored student transport.
                </span>
              </div>
            </div>

            {/* Social Connect Bar */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-soft-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold text-school-primary font-heading">
                  Stay Connected With Campus Life
                </p>
                <p className="text-[11px] text-slate-500">
                  Follow official announcements, photo galleries & events
                </p>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={schoolInfo.contact.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 text-xs font-semibold border border-blue-100 transition-colors"
                >
                  <FacebookIcon className="w-3.5 h-3.5 text-blue-600" />
                  <span>Facebook</span>
                </a>

                <a
                  href={schoolInfo.contact.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-pink-50 text-pink-700 hover:bg-pink-100 text-xs font-semibold border border-pink-100 transition-colors"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-pink-600" />
                  <span>Instagram</span>
                </a>

                <a
                  href={schoolInfo.contact.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-50 text-red-700 hover:bg-red-100 text-xs font-semibold border border-red-100 transition-colors"
                >
                  <YoutubeIcon className="w-3.5 h-3.5 text-red-600" />
                  <span>YouTube</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Embed */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-soft h-full flex flex-col">
              {/* Map Header */}
              <div className="p-5 sm:p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50/50">
                <div>
                  <span className="text-[11px] font-bold text-school-secondary uppercase tracking-wider">
                    Interactive Map
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-school-primary font-heading">
                    S.B.I. School, Mundri
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    District Kaithal, Haryana 136027
                  </p>
                </div>

                <a
                  href={schoolInfo.contact.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white hover:bg-slate-100 text-school-primary text-xs font-bold border border-slate-200 shadow-xs transition-colors shrink-0"
                >
                  <Navigation className="w-3.5 h-3.5 text-school-secondary" />
                  <span>Full Screen Map</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>

              {/* Map iFrame */}
              <div className="relative w-full flex-1 min-h-[380px] sm:min-h-[460px] bg-slate-100">
                <iframe
                  title="S.B.I. School Campus Location Map"
                  src={schoolInfo.contact.mapEmbedUrl}
                  className="w-full h-full border-0 absolute inset-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Floating Campus Badge */}
                <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-slate-200/90 shadow-soft max-w-xs pointer-events-none hidden sm:block">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-blue-50 text-school-secondary shrink-0">
                      <MapPin className="w-4 h-4 text-school-secondary" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-school-primary font-heading">
                        S.B.I. School Campus
                      </p>
                      <p className="text-[11px] text-slate-500">
                        Permanent Recognised • Nur. to 10+2
                      </p>
                      <p className="text-[10px] text-emerald-700 font-semibold mt-1 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
                        Open for Admissions 2026-27
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visiting Notice Footer */}
              <div className="p-4 px-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-school-accent" />
                  <span>Visiting Hours: <strong>8:00 AM – 2:30 PM (Mon – Sat)</strong></span>
                </div>
                <span className="text-[11px] text-slate-500 hidden md:inline">Entry via Gate 1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CampusLocationGuide;
