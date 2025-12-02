import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

export default function HomeStatisticsForm() {
  const [stats, setStats] = useState({ mentors: 0, bookings: 0, members: 0 });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function fetchStats() {
      const { data, error } = await supabase
        .from("home_statistics")
        .select("mentors, bookings, members")
        .eq("id", "6d2a120b-b20d-4435-a22d-8963562c2c75")
        .single();

      if (data) setStats(data);
      if (error) console.error(error);
    }
    fetchStats();
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const { error } = await supabase
      .from("home_statistics")
      .update(stats)
      .eq("id", "6d2a120b-b20d-4435-a22d-8963562c2c75");

    setLoading(false);
    if (error) {
      console.error(error);
      setMessage("❌ Error updating stats.");
    } else {
      setMessage("✅ Stats updated successfully!");
    }
  }

  return (
    <div className="p-4 rounded-lg border bg-white shadow">
      <h3 className="text-lg font-semibold mb-4">Update Home Page Statistics</h3>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label className="block mb-1 font-medium">Mentors</label>
          <input
            type="number"
            value={stats.mentors}
            onChange={(e) => setStats({ ...stats, mentors: Number(e.target.value) })}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">GenTalks Booked</label>
          <input
            type="number"
            value={stats.bookings}
            onChange={(e) => setStats({ ...stats, bookings: Number(e.target.value) })}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Community Members</label>
          <input
            type="number"
            value={stats.members}
            onChange={(e) => setStats({ ...stats, members: Number(e.target.value) })}
            className="w-full p-2 border rounded"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-laurel text-cream rounded hover:bg-basil"
        >
          {loading ? "Saving..." : "Save Stats"}
        </button>
      </form>
      {message && <p className="mt-3 text-sm">{message}</p>}
    </div>
  );
}
