import { Navigate } from "react-router-dom";

interface Props {
  user: any;
  role?: string;
  children: React.ReactNode;
}

export default function ProtectedRoute({ user, role, children }: Props) {
  if (!user) {
    return <Navigate to="/staff-login" replace />;
  }

  if (role && user.user_metadata?.role !== role) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}
