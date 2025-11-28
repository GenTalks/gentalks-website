import { Navigate } from "react-router-dom";

interface Props {
  user: any;
  loading: boolean;
  children: React.ReactNode;
}

export default function ProtectedRoute({ user, loading, children }: Props) {
  // Still loading session
  if (loading) return null;

  // Not logged in
  if (!user) return <Navigate to="/staff-login" replace />;

  return <>{children}</>;
}
