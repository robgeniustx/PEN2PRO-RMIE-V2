export default function AdminRoute({ children }) {
  const enabled = import.meta.env.VITE_ADMIN_DASHBOARD_ENABLED === 'true'
  // TODO: add real auth + role-based access control.
  if (!enabled) return <div className="p-6 text-white">Admin dashboard is disabled.</div>
  return children
}
