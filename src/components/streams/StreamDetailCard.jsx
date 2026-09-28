import { 
  BookOpen, 
  Target, 
  Briefcase, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

export function StreamDetailCard({ stream }) {
  return (
    <article
      id={stream.id}
      className="scroll-mt-24 bg-white rounded-2xl border border-slate-200/90 shadow-soft overflow-hidden"
    >
      {/* Stream Header Banner */}
      <div className="relative h-48 sm:h-56 lg:h-64 w-full overflow-hidden bg-slate-900">
        <img
          src={stream.image}
          alt={stream.title}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-school-primary-dark/95 via-school-primary-dark/60 to-transparent" />

        {/* Header Info */}
        <div className="absolute bottom-5 inset-x-5 sm:inset-x-8 max-w-3xl">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-school-accent text-school-primary-dark mb-2">
            {stream.badge}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading tracking-tight">
            {stream.title}
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-200 line-clamp-1">
            {stream.tagline}
          </p>
        </div>
      </div>

      {/* Stream Content */}
      <div className="p-6 sm:p-8 space-y-7">
        {/* Overview */}
        <div>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            {stream.overview}
          </p>
        </div>

        {/* Subjects Offered */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
            <BookOpen className="w-4 h-4 text-school-secondary" />
            <span>Key Subjects</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {stream.subjectsOffered.map((subject, subIdx) => (
              <div
                key={subIdx}
                className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70"
              >
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h4 className="text-xs sm:text-sm font-bold text-school-primary">
                    {subject.name}
                  </h4>
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-white text-slate-500 border border-slate-200">
                    {subject.code}
                  </span>
                </div>
                <p className="text-xs text-slate-500">
                  {subject.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 2-Column: Objectives & Careers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 border-t border-slate-100">
          {/* Objectives */}
          <div className="bg-slate-50/70 p-5 rounded-xl border border-slate-200/60">
            <h4 className="text-xs font-bold uppercase tracking-wider text-school-primary mb-3 flex items-center gap-1.5">
              <Target className="w-4 h-4 text-school-secondary" />
              <span>Learning Focus</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
              {stream.learningObjectives.map((obj, oIdx) => (
                <li key={oIdx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Career Pathways */}
          <div className="bg-slate-50/70 p-5 rounded-xl border border-slate-200/60">
            <h4 className="text-xs font-bold uppercase tracking-wider text-school-primary mb-3 flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 text-school-secondary" />
              <span>Career Pathways</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
              {stream.careerOpportunities.map((career, cIdx) => (
                <li key={cIdx} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-school-accent shrink-0" />
                  <span>{career}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stream Actions */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
          <Link
            to="/documents"
            className="px-4 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold transition-colors"
          >
            Syllabus PDF
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-school-primary hover:bg-school-secondary text-white text-xs font-bold shadow-soft-sm transition-colors"
          >
            <span>Admission Enquiry</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default StreamDetailCard;
