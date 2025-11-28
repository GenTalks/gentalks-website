import { supabase } from "../lib/supabase";
import { useNavigate } from "react-router-dom";

export default function StaffDashboard() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    // go to login after logout
    navigate("/staff-login");
  };

  return (
    <div className="max-w-3xl mx-auto mt-20 p-6 border rounded-lg shadow-lg bg-cream font-teachers">
      <h1 className="text-3xl font-bold text-laurel mb-4">Staff Dashboard</h1>

      <p className="text-lg mb-4">
        You are signed in. 
      </p>

      <div className="p-4 bg-white rounded-lg shadow-inner mb-6">
        <h2 className="text-xl font-bold text-basil mb-2">Welcome</h2>
        <p className="text-gray-700">FAH.</p>
      </div>

      <button
        onClick={handleLogout}
        className="bg-basil text-white px-6 py-3 rounded-lg hover:bg-laurel transition"
      >
        Logout
      </button>
    </div>
  );
}
