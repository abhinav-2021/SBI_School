import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUp,
  ChevronRight
} from 'lucide-react';
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  YoutubeIcon
} from '../common/SocialIcons';
import { schoolInfo } from '../../data/schoolInfo';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Academic Streams', path: '/streams' },
    { name: 'Documents & Downloads', path: '/documents' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const streamLinks = [
    { name: 'Science Stream (10+2)', path: '/streams#science' },
    { name: 'Commerce Stream (10+2)', path: '/streams#commerce' },
    { name: 'Arts & Humanities (10+2)', path: '/streams#humanities' },
    { name: 'Admission Form', path: '/documents' }
  ];

  return (
    <footer className="bg-school-primary-dark text-slate-300 relative border-t-2 border-school-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Col 1: School Identity */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white rounded-2xl p-3 sm:p-4 inline-block shadow-soft border border-white/20">
              <img
                src="/images/logo/sbi-official-logo.png"
                alt="Saint Brahmanand International School, Mundri"
                className="h-14 sm:h-16 md:h-18 w-auto object-contain"
              />
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              S.B.I. School, Mundri (Kaithal). Permanent recognised school offering education from Nursery to 10+2 with Science, Commerce, and Arts streams.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <a
                href={schoolInfo.contact.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-school-secondary flex items-center justify-center text-slate-300 hover:text-white transition-colors"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={schoolInfo.contact.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-school-secondary flex items-center justify-center text-slate-300 hover:text-white transition-colors"
              >
                <TwitterIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={schoolInfo.contact.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-school-secondary flex items-center justify-center text-slate-300 hover:text-white transition-colors"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={schoolInfo.contact.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-red-600 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
              >
                <YoutubeIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-white font-heading font-bold text-xs uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              {quickLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="inline-flex items-center gap-1.5 text-slate-400 hover:text-school-accent transition-colors"
                  >
                    <ChevronRight className="w-3 h-3 opacity-60" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact & Timings */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-white font-heading font-bold text-xs uppercase tracking-wider">
              Contact & Location
            </h3>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-school-accent shrink-0 mt-0.5" />
                <span>{schoolInfo.contact.address.full}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-school-accent shrink-0" />
                <a href={`tel:${schoolInfo.contact.phones[0].number}`} className="hover:text-white transition-colors">
                  {schoolInfo.contact.phones[0].number}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-school-accent shrink-0" />
                <a href={`mailto:${schoolInfo.contact.emails[0].address}`} className="hover:text-white transition-colors">
                  {schoolInfo.contact.emails[0].address}
                </a>
              </div>
              <div className="flex items-center gap-2.5 pt-1 text-[11px] text-slate-400">
                <Clock className="w-3.5 h-3.5 text-school-accent shrink-0" />
                <span>{schoolInfo.contact.officeHours.weekdays}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-4 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} S.B.N.I. School, Mundri (Kaithal). Permanent Recognised.
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-slate-300 hover:text-school-accent font-semibold transition-colors"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
