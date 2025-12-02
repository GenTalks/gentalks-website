import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function MAplicationStatusForm() {
  const [status, setStatus] = useState<"open" | "reviewing" | "closed" | "">("");
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  async function updateStatus(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);

    const { error } = await supabase
      .from("mentor_application_status")
      .update({ status })
      .eq("id", "dcd2b60a-0734-4faa-b2c0-0228dc77fb16");

    setSaving(false);

    if (error) {
      setMessage("Error updating status.");
      return;
    }

    setMessage("Status updated!");
  }

  return (
    <div className="p-4 rounded-lg border bg-white shadow">
      <h3 className="text-lg font-semibold mb-2">
        Mentor Application Status
      </h3>

      <form onSubmit={updateStatus} className="space-y-4">
        <label className="flex flex-col gap-2">
          <span className="font-medium">Select Status:</span>
          <select
            value={status}
            onChange={(e) =>
              setStatus(e.target.value as "open" | "reviewing" | "closed")
            }
            className="border p-2 rounded"
          >
            <option value="">Choose…</option>
            <option value="open">Open</option>
            <option value="reviewing">Reviewing</option>
            <option value="closed">Closed</option>
          </select>
        </label>

        <button
          type="submit"
          disabled={saving || !status}
          className="bg-laurel text-cream px-4 py-2 rounded hover:bg-basil"
        >
          {saving ? "Saving…" : "Save Status"}
        </button>
      </form>

      {message && <p className="mt-2 text-sm">{message}</p>}
    </div>
  );
}
