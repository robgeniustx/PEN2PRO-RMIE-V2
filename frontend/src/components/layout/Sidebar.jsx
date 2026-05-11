import { NavLink } from "react-router-dom";

const sections = [
  {
    label: "Core",
    links: [
      { label: "Dashboard", href: "/dashboard", icon: "⬛" },
      { label: "Blueprint", href: "/starter", icon: "📋" },
      { label: "Tasks", href: "/dashboard/tasks", icon: "✅" },
      { label: "Earnings", href: "/dashboard/earnings", icon: "💰" },
    ],
  },
  {
    label: "Growth",
    links: [
      { label: "Social Media", href: "/dashboard/social", icon: "📱" },
      { label: "Content Gen", href: "/dashboard/content", icon: "✍️" },
      { label: "Outreach", href: "/dashboard/outreach", icon: "📨" },
      { label: "Ads", href: "/dashboard/ads", icon: "🎯" },
    ],
  },
  {
    label: "CRM",
    links: [
      { label: "Leads", href: "/dashboard/crm/leads", icon: "👥" },
      { label: "Customers", href: "/dashboard/crm/customers", icon: "🤝" },
      { label: "Follow-Ups", href: "/dashboard/crm/followups", icon: "🔔" },
      { label: "Pipeline", href: "/dashboard/crm/pipeline", icon: "📊" },
    ],
  },
  {
    label: "Revenue",
    links: [
      { label: "Affiliate", href: "/dashboard/affiliate", icon: "🔗" },
      { label: "Credit Ready", href: "/dashboard/credit", icon: "🏦" },
      { label: "Funding", href: "/dashboard/credit/funding", icon: "💼" },
      { label: "Documents", href: "/dashboard/credit/documents", icon: "📁" },
    ],
  },
  {
    label: "Brand",
    links: [
      { label: "Website Builder", href: "/dashboard/website", icon: "🌐" },
      { label: "Brand Kit", href: "/dashboard/brand-kit", icon: "🎨" },
      { label: "SEO", href: "/dashboard/website/seo", icon: "🔍" },
      { label: "Landing Pages", href: "/dashboard/website/landing", icon: "🚀" },
    ],
  },
  {
    label: "Account",
    links: [
      { label: "Settings", href: "/dashboard/settings", icon: "⚙️" },
      { label: "Upgrade", href: "/pricing", icon: "⭐" },
    ],
  },
];

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex flex-col w-56 min-h-screen border-r border-slate-800 bg-slate-950 px-3 py-6 shrink-0">
      {/* Logo */}
      <NavLink to="/" className="mb-8 px-2 flex items-center gap-1.5">
        <span className="text-lg font-extrabold tracking-tight text-white">
          PEN<span className="text-cyan-400">2</span>PRO
        </span>
        <span className="rounded bg-cyan-500/10 border border-cyan-500/20 px-1.5 py-0.5 text-[9px] font-bold tracking-widest text-cyan-400 uppercase">
          RMIE
        </span>
      </NavLink>

      {/* Nav sections */}
      <nav className="flex-1 space-y-6 overflow-y-auto">
        {sections.map((section) => (
          <div key={section.label}>
            <p className="mb-1.5 px-2 text-[10px] font-bold tracking-widest text-slate-600 uppercase">
              {section.label}
            </p>
            <ul className="space-y-0.5">
              {section.links.map((link) => (
                <li key={link.href}>
                  <NavLink
                    to={link.href}
                    end={link.href === "/dashboard"}
                    className={({ isActive }) =>
                      `flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-cyan-500/10 text-cyan-400"
                          : "text-slate-400 hover:bg-slate-800/60 hover:text-white"
                      }`
                    }
                  >
                    <span className="text-base leading-none">{link.icon}</span>
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
