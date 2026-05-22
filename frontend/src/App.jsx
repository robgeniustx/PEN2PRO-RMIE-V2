import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './components/layout/ProtectedRoute';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import BlueprintPage from './pages/BlueprintPage';
import BlueprintDetailPage from './pages/BlueprintDetailPage';
import './index.css';

// Placeholder pages - will be built in later phases
const DashboardPage = () => <div className="p-8">Dashboard - Coming Soon</div>;
const AgentPage = () => <div className="p-8">Agent - Coming Soon</div>;
const SettingsPage = () => <div className="p-8">Settings - Coming Soon</div>;

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/blueprint"
          element={
            <ProtectedRoute>
              <BlueprintPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/blueprint/:id"
          element={
            <ProtectedRoute>
              <BlueprintDetailPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/agents"
          element={
            <ProtectedRoute>
              <AgentPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <SettingsPage />
            </ProtectedRoute>
          }
        />

        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Router>
  );
}
