import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function StudentCenterAnnouncementForm() {
  const [announcement, setAnnouncement] = useState("");
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
 
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const { error } = await supabase
      .from("student_center_announcements")
      .update({
        announcement: announcement,
        announcement_link: link,
        date_posted: new Date().toISOString(),
      })
      .eq("id", "44db8159-bf40-43a0-a097-7c595cce324d");

    setLoading(false);

    if (error) {
      console.error(error);
      setMessage("❌ Error updating announcement.");
      return;
    }

    setMessage("✅ Announcement updated successfully!");
  }

  return (
    <div className="p-4 rounded-lg border bg-white shadow">
      <h3 className="text-lg font-semibold mb-4">
        Student Center Announcement Form
      </h3>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label className="block text-sm font-medium mb-1">Announcement</label>
          <textarea
            value={announcement}
            onChange={(e) => setAnnouncement(e.target.value)}
            required
            className="w-full p-2 border rounded"
            placeholder="Enter announcement text"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Link (optional)</label>
          <input
            type="url"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="https://google.com"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-laurel text-cream rounded hover:bg-basil"
        >
          {loading ? "Saving..." : "Save Announcement"}
        </button>
      </form>

      {message && <p className="mt-3 text-sm">{message}</p>}
    </div>
  );
}
