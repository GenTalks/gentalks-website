import { useUser } from "../hooks/useUser";
import { supabase } from "../lib/supabase";

export default function StaffDashboard() {
  const { user, profile, loading } = useUser();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/staff-login";
  };

  if (loading) return <p className="text-center mt-20">Checking session...</p>;

  if (!user || !profile) {
    window.location.href = "/staff-login";
    return null;
  }

  return (
    <div className="max-w-3xl mx-auto mt-20 p-6 border rounded-lg shadow-lg bg-cream font-teachers">
      <h1 className="text-3xl font-bold text-laurel mb-4">Staff Dashboard</h1>

      <p className="text-lg mb-2">Welcome, {profile.name ?? "Staff"}!</p>
      <p className="text-lg mb-4">Role: {profile.role ?? "Unknown"}</p>

      <button
        onClick={handleLogout}
        className="bg-basil text-white px-6 py-3 rounded-lg hover:bg-laurel transition"
      >
        Logout
      </button>
    </div>
  );
}
