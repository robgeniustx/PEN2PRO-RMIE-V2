import { Outlet } from 'react-router-dom'

/**
 * AppShell wraps authenticated dashboard pages.
 * DashboardWorkspacePage manages its own sidebar/topbar inline,
 * so this shell is intentionally minimal — it provides the dark
 * background and a stable mounting point for future global UI.
 */
export default function AppShell({ children }) {
  return (
    <div className="min-h-screen" style={{ background: '#080C14', color: '#F1F5F9' }}>
      {children ?? <Outlet />}
    </div>
  )
}
