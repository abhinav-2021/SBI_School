import { MapPin, Navigation, ExternalLink } from 'lucide-react';
import { schoolInfo } from '../../data/schoolInfo';

export function MapSection() {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-soft">
      {/* Map Header */}
      <div className="p-5 sm:p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold text-school-secondary uppercase tracking-wider">
            Campus Location
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-school-primary font-heading">
            S.B.I. School, Mundri
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Main Road, Village Mundri, Distt. Kaithal, Haryana 136027
          </p>
        </div>

        <a
          href={schoolInfo.contact.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-school-primary text-xs font-bold border border-slate-200 transition-colors shrink-0"
        >
          <Navigation className="w-3.5 h-3.5 text-school-secondary" />
          <span>Get Directions</span>
          <ExternalLink className="w-3 h-3 text-slate-400" />
        </a>
      </div>

      {/* Embedded Map iFrame */}
      <div className="relative w-full h-[340px] sm:h-[400px] bg-slate-100">
        <iframe
          title="S.B.I. School Campus Location Map"
          src={schoolInfo.contact.mapEmbedUrl}
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* Floating Campus Badge */}
        <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md p-3 rounded-xl border border-slate-200/80 shadow-soft max-w-xs pointer-events-none hidden sm:block">
          <div className="flex items-start gap-2.5">
            <div className="p-1.5 rounded-lg bg-blue-50 text-school-secondary mt-0.5">
              <MapPin className="w-4 h-4 text-school-secondary" />
            </div>
            <div>
              <p className="text-xs font-bold text-school-primary">S.B.I. School Campus</p>
              <p className="text-[11px] text-slate-500">Mundri, Distt. Kaithal</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapSection;
