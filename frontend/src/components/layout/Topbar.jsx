import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function getStoredUser() {
  try {
    return JSON.parse(localStorage.getItem('pen2pro_user') || 'null')
  } catch {
    return null
  }
}

/**
 * Reusable top bar for authenticated dashboard pages.
 * Shows the current page title, breadcrumb, action buttons,
 * and a user menu with sign-out.
 */
export default function Topbar({ title = 'Dashboard', subtitle = '', actions = [] }) {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)
  const user = getStoredUser()
  const initials = ((user?.name || 'U').slice(0, 1)).toUpperCase()

  function handleSignOut() {
    localStorage.removeItem('pen2pro_token')
    localStorage.removeItem('pen2pro_user')
    navigate('/login')
  }

  return (
    <header className="p2p-topbar" style={{ position: 'sticky', top: 0, zIndex: 40 }}>
      <div>
        <p className="p2p-eyebrow">PEN2PRO BusinessOS</p>
        <h1>{title}</h1>
        {subtitle && <span style={{ color: '#64748b', fontSize: 13 }}>{subtitle}</span>}
      </div>

      <div className="p2p-top-actions" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        {actions.map((action) => (
          <button
            key={action.label}
            type="button"
            onClick={action.onClick}
            style={{
              padding: '8px 16px',
              borderRadius: 8,
              fontSize: 13,
              fontWeight: 700,
              background: action.primary ? '#D4A017' : 'transparent',
              color: action.primary ? '#080C14' : '#94a3b8',
              border: action.primary ? 'none' : '1px solid #1A2235',
              cursor: 'pointer',
            }}
          >
            {action.label}
          </button>
        ))}

        <Link
          to="/starter"
          style={{
            padding: '8px 16px',
            borderRadius: 8,
            fontSize: 13,
            fontWeight: 700,
            background: '#0F1520',
            color: '#94a3b8',
            border: '1px solid #1A2235',
          }}
        >
          New Blueprint
        </Link>

        {/* User avatar + dropdown */}
        <div style={{ position: 'relative' }}>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            style={{
              width: 36,
              height: 36,
              borderRadius: 8,
              background: '#D4A017',
              color: '#080C14',
              fontWeight: 900,
              fontSize: 15,
              border: 'none',
              cursor: 'pointer',
            }}
          >
            {initials}
          </button>

          {menuOpen && (
            <div
              style={{
                position: 'absolute',
                right: 0,
                top: 44,
                width: 200,
                background: '#0F1520',
                border: '1px solid #1A2235',
                borderRadius: 12,
                padding: '8px 0',
                zIndex: 100,
                boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
              }}
            >
              <div style={{ padding: '10px 16px', borderBottom: '1px solid #1A2235' }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#F1F5F9' }}>
                  {user?.name || 'My Account'}
                </div>
                <div style={{ fontSize: 12, color: '#64748b', marginTop: 2 }}>
                  {user?.tier || 'Free'} plan
                </div>
              </div>
              <Link
                to="/dashboard"
                onClick={() => setMenuOpen(false)}
                style={{ display: 'block', padding: '10px 16px', fontSize: 13, color: '#94a3b8' }}
              >
                Dashboard
              </Link>
              <Link
                to="/pricing"
                onClick={() => setMenuOpen(false)}
                style={{ display: 'block', padding: '10px 16px', fontSize: 13, color: '#D4A017', fontWeight: 700 }}
              >
                Upgrade Plan
              </Link>
              <button
                type="button"
                onClick={handleSignOut}
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  padding: '10px 16px',
                  fontSize: 13,
                  color: '#ef4444',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  borderTop: '1px solid #1A2235',
                  marginTop: 4,
                }}
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
