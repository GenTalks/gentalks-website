import { supabase } from "../lib/supabase";

export default function StaffDashboard() {
  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/";
  };

  return (
    <div className="max-w-3xl mx-auto mt-20 p-6 border rounded-lg shadow-lg bg-cream font-teachers">
      <h1 className="text-3xl font-bold text-laurel mb-6">Staff Dashboard</h1>
      <p className="text-lg mb-6">
        If you're not a staff stop looking at our private parts.
      </p>
      <button
        onClick={handleLogout}
        className="bg-basil text-white px-6 py-3 rounded-lg hover:bg-laurel transition"
      >
        Logout
      </button>
    </div>
  );
}
