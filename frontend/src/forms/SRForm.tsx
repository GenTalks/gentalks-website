import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function ScholarshipsForm() {
  const [title, setTitle] = useState("");
  const [organization, setOrganization] = useState("");
  const [deadline, setDeadline] = useState("");
  const [amount, setAmount] = useState("");
  const [eligibility, setEligibility] = useState<string[]>([]);
  const [applicationtype, setApplicationtype] = useState<string[]>([]);
  const [applicationUrl, setApplicationUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const eligibilityOptions = [
    "First-generation",
    "STEM",
    "Women",
    "BIPOC",
    "LGTBQ+",
    "US citizens",
    "Undocumented students",
    "International students",
    "GPA requirement",
    "Major specific",
    "SAT/ACT required",
  ];

  const applicationTypeOptions = [
    "Essay",
    "Video",
    "Merit based",
    "Need based",
    "Project based",
    "Credential based",
    "Lottery draw",
    "Interview required",
  ];

  const toggleOption = (value: string, setter: (arr: string[]) => void, arr: string[]) => {
    setter(arr.includes(value) ? arr.filter(v => v !== value) : [...arr, value]);
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const { error } = await supabase.from("scholarships").insert([
      {
        title,
        organization,
        deadline: deadline || new Date().toISOString(),
        amount,
        eligibility,
        applicationtype,
        application_url: applicationUrl,
      },
    ]);

    setLoading(false);

    if (error) {
      console.error(error);
      setMessage("Error submitting scholarship.");
      return;
    }

    setMessage("Scholarship submitted!");
    setTitle("");
    setOrganization("");
    setDeadline("");
    setAmount("");
    setEligibility([]);
    setApplicationtype([]);
    setApplicationUrl("");
  }

  return (
    <div className="p-4 rounded-lg border bg-white shadow">
      <h3 className="text-lg font-semibold mb-4">Scholarship Submission Form</h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Scholarship Title"
          className="w-full p-2 border rounded"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Organization Name"
          className="w-full p-2 border rounded"
          value={organization}
          onChange={e => setOrganization(e.target.value)}
        />

        <input
          type="date"
          className="w-full p-2 border rounded"
          value={deadline}
          onChange={e => setDeadline(e.target.value)}
        />

        <input
          type="text"
          placeholder="Amount"
          className="w-full p-2 border rounded"
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />

        <div>
          <label className="font-medium">Eligibility</label>
          <div className="flex flex-wrap gap-2 mt-1">
            {eligibilityOptions.map(opt => (
              <button
                type="button"
                key={opt}
                onClick={() => toggleOption(opt, setEligibility, eligibility)}
                className={`px-3 py-1 border rounded-full text-sm ${
                  eligibility.includes(opt) ? "bg-laurel text-cream" : "bg-gray-100 text-gray-700"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="font-medium">Application Type</label>
          <div className="flex flex-wrap gap-2 mt-1">
            {applicationTypeOptions.map(opt => (
              <button
                type="button"
                key={opt}
                onClick={() => toggleOption(opt, setApplicationtype, applicationtype)}
                className={`px-3 py-1 border rounded-full text-sm ${
                  applicationtype.includes(opt) ? "bg-laurel text-cream" : "bg-gray-100 text-gray-700"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        <input
          type="url"
          placeholder="Application Link"
          className="w-full p-2 border rounded"
          value={applicationUrl}
          onChange={e => setApplicationUrl(e.target.value)}
        />

        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-laurel text-cream rounded hover:bg-basil transition"
        >
          {loading ? "Submitting..." : "Submit Scholarship"}
        </button>
      </form>

      {message && <p className="mt-3 text-sm">{message}</p>}
    </div>
  );
}
