import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function ScholarshipsForm() {
  const [title, setTitle] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [deadline, setDeadline] = useState("");
  const [amount, setAmount] = useState("");
  const [eligibility, setEligibility] = useState<string[]>([]);
  const [applicationType, setApplicationType] = useState<string[]>([]);
  const [applicationLink, setApplicationLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const eligibilityOptions = [
    "High school students",
    "College students",
    "Graduate students",
    "Minority students",
    "Women",
    "STEM",
  ];

  const applicationTypeOptions = ["Essay", "Portfolio", "Recommendation", "Transcript", "Other"];

  const toggleOption = (option: string, state: string[], setter: (val: string[]) => void) => {
    setter(state.includes(option) ? state.filter(o => o !== option) : [...state, option]);
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const { error } = await supabase.from("scholarships").insert([
      {
        title,
        organization_name: organizationName,
        deadline: deadline || new Date().toISOString(),
        amount,
        eligibility,               // array of strings
        application_type: applicationType, // <-- MUST match column name exactly
        application_link: applicationLink,
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
    setOrganizationName("");
    setDeadline("");
    setAmount("");
    setEligibility([]);
    setApplicationType([]);
    setApplicationLink("");
  }

  return (
    <div className="p-4 rounded-lg border bg-white shadow">
      <h3 className="text-lg font-semibold mb-4">Scholarships Form</h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            required
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Scholarship title"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Organization Name</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={organizationName}
            onChange={e => setOrganizationName(e.target.value)}
            placeholder="Organization name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Deadline</label>
          <input
            type="date"
            className="w-full p-2 border rounded"
            value={deadline}
            onChange={e => setDeadline(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Amount</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            placeholder="Scholarship amount"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Eligibility</label>
          <div className="flex flex-wrap gap-2">
            {eligibilityOptions.map(option => (
              <button
                type="button"
                key={option}
                onClick={() => toggleOption(option, eligibility, setEligibility)}
                className={`px-3 py-1 border rounded-full text-sm ${eligibility.includes(option) ? "bg-laurel text-cream" : "bg-gray-100 text-gray-700"
                  }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Application Type</label>
          <div className="flex flex-wrap gap-2">
            {applicationTypeOptions.map(option => (
              <button
                type="button"
                key={option}
                onClick={() => toggleOption(option, applicationType, setApplicationType)}
                className={`px-3 py-1 border rounded-full text-sm ${applicationType.includes(option) ? "bg-laurel text-cream" : "bg-gray-100 text-gray-700"
                  }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Application Link</label>
          <input
            type="url"
            className="w-full p-2 border rounded"
            value={applicationLink}
            onChange={e => setApplicationLink(e.target.value)}
            placeholder="https://example.com/apply"
          />
        </div>

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
