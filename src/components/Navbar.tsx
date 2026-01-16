import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 glass border-b border-white/5">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="flex items-center h-16">
          <Link
            to="/"
            className="group flex items-center gap-3"
          >
            {/* Logo mark */}
            <div className="relative">
              <div className="absolute inset-0 rounded-lg bg-[var(--color-primary)] blur-md opacity-40 group-hover:opacity-60 transition-opacity" />
              <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] flex items-center justify-center shadow-lg">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Wordmark */}
            <span className="text-xl font-bold text-white/90 group-hover:text-white transition-colors">
              CSScout
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
