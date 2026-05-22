import { Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import LoadingState from '../ui/LoadingState';

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <LoadingState />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

