import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../store/auth.store';
const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useAuthStore();

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
