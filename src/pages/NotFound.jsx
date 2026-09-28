import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { SEO } from '../components/common/SEO';

export function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The requested page could not be found."
      />
      <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 px-4 py-16">
        <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-soft text-center space-y-6">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-50 text-school-secondary font-black text-3xl font-heading">
            404
          </div>
          <div>
            <h1 className="text-2xl font-extrabold text-school-primary font-heading">
              Page Not Found
            </h1>
            <p className="mt-2 text-sm text-slate-500 leading-relaxed">
              We couldn't locate the page you were looking for. It may have been moved or updated.
            </p>
          </div>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-school-primary hover:bg-school-secondary text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-soft"
            >
              <Home className="w-4 h-4" />
              <span>Return Home</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;
