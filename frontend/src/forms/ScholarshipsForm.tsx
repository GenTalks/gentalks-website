import React, { useState } from "react";
import { supabase } from "../lib/supabase";

export default function ScholarshipsForm() {
  const [title, setTitle] = useState("");
  const [organization, setOrganization] = useState("");
  const [deadline, setDeadline] = useState("");
  const [amount, setAmount] = useState("");
  const [eligibility, setEligibility] = useState<string[]>([]);
  const [applicationtype, setApplicationType] = useState<string[]>([]);
  const [applicationUrl, setApplicationUrl] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    const { data, error } = await supabase.from("scholarships").insert([
      {
        title,
        organization,
        deadline,
        amount,
        eligibility,
        applicationtype,
        application_url: applicationUrl,
      },
    ]);

    setLoading(false);
    if (error) {
      setError(error.message);
    } else {
      setSuccess(true);
      // Clear form
      setTitle("");
      setOrganization("");
      setDeadline("");
      setAmount("");
      setEligibility([]);
      setApplicationType([]);
      setApplicationUrl("");
    }
  };

  const handleArrayInput = (setter: React.Dispatch<React.SetStateAction<string[]>>, value: string) => {
    const items = value.split(",").map((v) => v.trim()).filter((v) => v);
    setter(items);
  };

  return (
    <div className="p-6 rounded-lg border bg-cream shadow max-w-lg mx-auto">
      <h3 className="text-2xl font-semibold mb-4 font-teachers">Add a Scholarship</h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-semibold">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-laurel"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Organization</label>
          <input
            type="text"
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-laurel"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Deadline</label>
          <input
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-laurel"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Amount</label>
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-laurel"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Eligibility (comma separated)</label>
          <input
            type="text"
            value={eligibility.join(", ")}
            onChange={(e) => handleArrayInput(setEligibility, e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-laurel"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Application Type (comma separated)</label>
          <input
            type="text"
            value={applicationtype.join(", ")}
            onChange={(e) => handleArrayInput(setApplicationType, e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-laurel"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Application URL</label>
          <input
            type="url"
            value={applicationUrl}
            onChange={(e) => setApplicationUrl(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-laurel"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 px-4 bg-laurel text-cream font-semibold rounded hover:bg-darkLaurel transition"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>

        {success && <p className="text-green-600 mt-2">Scholarship added successfully!</p>}
        {error && <p className="text-red-600 mt-2">{error}</p>}
      </form>
    </div>
  );
}
