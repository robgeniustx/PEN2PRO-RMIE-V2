import { Link, useNavigate } from "react-router-dom";

export default function Topbar({ title, subtitle, actions, breadcrumbs }) {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-30 border-b border-[#1A2D50] bg-[#0A0F1E]/95 backdrop-blur-xl">
      <div className="flex h-14 items-center justify-between px-5 gap-4">
        <div className="flex items-center gap-3 min-w-0">
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav className="hidden items-center gap-1 sm:flex text-sm text-slate-500">
              {breadcrumbs.map((crumb, i) => (
                <span key={i} className="flex items-center gap-1">
                  {i > 0 && <span>/</span>}
                  {crumb.href ? (
                    <Link to={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link>
                  ) : (
                    <span className="text-slate-300 font-semibold">{crumb.label}</span>
                  )}
                </span>
              ))}
            </nav>
          )}
          {!breadcrumbs && (
            <div>
              {title && <h1 className="text-sm font-bold text-white leading-tight truncate">{title}</h1>}
              {subtitle && <p className="text-xs text-slate-500 truncate">{subtitle}</p>}
            </div>
          )}
        </div>

        {actions && (
          <div className="flex shrink-0 items-center gap-2">
            {actions}
          </div>
        )}
      </div>
    </header>
  );
}
