import { Navigate } from "react-router-dom";

interface Props {
  user: any;
  loading: boolean;
  roles?: string[];
  children: React.ReactNode;
}

export default function ProtectedRoute({ user, loading, roles, children }: Props) {
  // 1. Don't redirect during loading
  if (loading) return <p className="text-center mt-20">Checking session...</p>;

  // 2. After loading, if no user → redirect
  if (!user) return <Navigate to="/staff-login" replace />;

  // 3. Role validation
  const userRole = user.user_metadata?.role;
  if (roles && !roles.includes(userRole)) {
    return <Navigate to="/staff-login" replace />;
  }

  return <>{children}</>;
}
