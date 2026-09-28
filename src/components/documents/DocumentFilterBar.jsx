import { Search, X, Filter } from 'lucide-react';

export function DocumentFilterBar({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  categories = [],
  totalCount = 0,
  filteredCount = 0
}) {
  return (
    <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-soft mb-10 space-y-6">
      {/* Top Search Input */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="relative flex-1 max-w-lg">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <Search className="w-5 h-5" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search documents by title, keyword, or policy..."
            className="w-full pl-10 pr-10 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-school-secondary/30 focus:border-school-secondary text-sm text-slate-700 placeholder-slate-400 transition-colors"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Counter Badge */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Filter className="w-4 h-4 text-school-secondary" />
          <span>
            Showing <strong className="text-school-primary">{filteredCount}</strong> of {totalCount} files
          </span>
        </div>
      </div>

      {/* Category Pills */}
      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
          Filter by Document Category
        </p>
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => onCategoryChange(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isSelected
                    ? 'bg-school-primary text-white shadow-soft-sm'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-school-primary border border-slate-200/80'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DocumentFilterBar;
