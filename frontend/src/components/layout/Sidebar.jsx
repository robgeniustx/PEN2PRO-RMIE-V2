import { Link, useLocation } from 'react-router-dom'

const DEFAULT_NAV = [
  { section: 'Workspace', items: [
    { label: 'Overview',    path: '/dashboard' },
    { label: 'Contacts',    path: '/dashboard/contacts' },
    { label: 'Lead Inbox',  path: '/dashboard/lead-inbox' },
    { label: 'Pipeline',    path: '/dashboard/pipeline' },
    { label: 'Calendar',    path: '/dashboard/calendar' },
    { label: 'Tasks',       path: '/dashboard/tasks' },
  ]},
  { section: 'Revenue', items: [
    { label: 'Estimates',   path: '/dashboard/estimates' },
    { label: 'Invoices',    path: '/dashboard/invoices' },
    { label: 'Payments',    path: '/dashboard/payments' },
  ]},
  { section: 'Growth', items: [
    { label: 'Campaigns',   path: '/dashboard/campaigns' },
    { label: 'Automations', path: '/dashboard/automations' },
    { label: 'Funnels',     path: '/dashboard/funnels' },
    { label: 'Reports',     path: '/dashboard/reports' },
  ]},
  { section: 'Settings', items: [
    { label: 'Integrations', path: '/dashboard/integrations' },
    { label: 'Billing',      path: '/dashboard/billing' },
    { label: 'Settings',     path: '/dashboard/settings' },
  ]},
]

/**
 * Reusable sidebar for authenticated dashboard pages.
 * Pass `nav` to override the default navigation groups,
 * or `user` for the avatar/plan display.
 */
export default function Sidebar({ nav = DEFAULT_NAV, user = null, activeKey = '' }) {
  const location = useLocation()
  const isActive = (path) =>
    path === '/dashboard'
      ? location.pathname === '/dashboard'
      : location.pathname.startsWith(path)

  const initials = ((user?.name || 'R').slice(0, 1)).toUpperCase()
  const planLabel = user?.role === 'admin'
    ? 'Admin'
    : (user?.tier || 'Free').charAt(0).toUpperCase() + (user?.tier || 'free').slice(1)

  return (
    <aside className="p2p-sidebar">
      <Link to="/" className="p2p-brand">PEN2PRO</Link>

      {user && (
        <div className="p2p-user-card">
          <div className="p2p-avatar">{initials}</div>
          <div>
            <strong>{user.name || 'My Account'}</strong>
            <span>{planLabel} plan</span>
          </div>
        </div>
      )}

      {nav.map(({ section, items }) => (
        <div className="p2p-nav-section" key={section}>
          <p>{section}</p>
          {items.map(({ label, path, locked }) => (
            <Link
              key={path}
              to={path}
              className={`p2p-nav-link ${isActive(path) ? 'active' : ''}`}
            >
              <span>{label}</span>
              {locked && <small>upgrade</small>}
            </Link>
          ))}
        </div>
      ))}

      <div className="p2p-nav-section" style={{ marginTop: 'auto', paddingTop: 16 }}>
        <Link to="/pricing" className="p2p-nav-link" style={{ color: '#D4A017', fontWeight: 700 }}>
          Upgrade Plan
        </Link>
        <Link to="/" className="p2p-nav-link" style={{ color: '#64748b' }}>
          ← Back to Site
        </Link>
      </div>
    </aside>
  )
}
