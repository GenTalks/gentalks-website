import { useUser } from "../hooks/useUser";
import { supabase } from "../lib/supabase";
import { FormsByRole } from "../components/FormsByRole";

export default function StaffDashboard() {
  const { user, profile, loading } = useUser();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/staff-login";
  };

  if (loading) {
    return <p className="text-center mt-20">Checking session...</p>;
  }

  if (!user) {
    window.location.href = "/staff-login";
    return null;
  }

  return (
    <div className="max-w-5xl mx-auto mt-20 p-6 border rounded-lg bg-cream shadow-lg font-teachers">

      {/* WELCOME */}
      <h1 className="text-3xl font-bold text-laurel mb-1">
        Welcome, {profile?.name ?? "Staff"}!
      </h1>

      <p className="text-lg mb-8">
        Your role: <span className="font-semibold">{profile?.biography ?? "Unknown"}</span>
      </p>

      {/* DASHBOARD HOME SECTION */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-basil mb-2">Dashboard Home</h2>
        <p>This is the main dashboard area where general info will go.</p>
      </section>

      {/* FORMS SECTION */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-basil mb-4">
          Forms & Permissions
        </h2>

        <p className="mb-6">
          Based on your role (<strong>{profile?.biography}</strong>), these forms are available:
        </p>

        {/* Render actual forms */}
        <FormsByRole role={profile?.role ?? "unknown"} />
      </section>

      {/* LOGOUT BUTTON */}
      <button
        onClick={handleLogout}
        className="mt-12 bg-basil text-white px-6 py-3 rounded-lg hover:bg-laurel transition"
      >
        Logout
      </button>
    </div>
  );
}
