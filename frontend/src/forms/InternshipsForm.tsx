import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function InternshipsForm() {
  const [internshipTitle, setInternshipTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const [compensation, setCompensation] = useState("");
  const [industries, setIndustries] = useState<string[]>([]);
  const [applicationLink, setApplicationLink] = useState("");
  const [datePosted, setDatePosted] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const industryOptions = [
    "Software",
    "Healthcare",
    "Finance",
    "Education",
    "Marketing",
    "Design",
    "Engineering",
    "Science",
    "Nonprofit",
    "Law",
  ];

  const toggleIndustry = (industry: string) => {
    setIndustries((prev) =>
      prev.includes(industry) ? prev.filter((i) => i !== industry) : [...prev, industry]
    );
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const payload = {
      internship_title: internshipTitle,
      company_name: companyName,
      location,
      compensation,
      industries,
      application_link: applicationLink,
      date_posted: datePosted || new Date().toISOString().slice(0, 10), // store as date
    };

    const { error } = await supabase.from("internships").insert([payload]);

    setLoading(false);

    if (error) {
      console.error(error);
      setMessage("Error submitting internship.");
      return;
    }

    setMessage("Internship submitted!");

    // reset
    setInternshipTitle("");
    setCompanyName("");
    setLocation("");
    setCompensation("");
    setIndustries([]);
    setApplicationLink("");
    setDatePosted("");
  }

  return (
    <div className="p-4 rounded-lg border bg-white shadow">
      <h3 className="text-lg font-semibold mb-4">Create Internship</h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Internship Title */}
        <div>
          <label className="block text-sm font-medium mb-1">Internship Title</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            required
            value={internshipTitle}
            onChange={(e) => setInternshipTitle(e.target.value)}
            placeholder="Internship title"
          />
        </div>

        {/* Company */}
        <div>
          <label className="block text-sm font-medium mb-1">Company Name</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            required
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="Company name"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium mb-1">Location</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="City, remote, etc."
          />
        </div>

        {/* Compensation */}
        <div>
          <label className="block text-sm font-medium mb-1">Compensation</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={compensation}
            onChange={(e) => setCompensation(e.target.value)}
            placeholder="paid / unpaid / stipend / hourly"
          />
        </div>

        {/* Industries (tags like CPForm) */}
        <div>
          <label className="block text-sm font-medium mb-1">Industries</label>
          <div className="flex flex-wrap gap-2">
            {industryOptions.map((opt) => (
              <button
                type="button"
                key={opt}
                onClick={() => toggleIndustry(opt)}
                className={`px-3 py-1 border rounded-full text-sm ${
                  industries.includes(opt) ? "bg-laurel text-cream" : "bg-gray-100 text-gray-700"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Application Link */}
        <div>
          <label className="block text-sm font-medium mb-1">Application Link</label>
          <input
            type="url"
            className="w-full p-2 border rounded"
            value={applicationLink}
            onChange={(e) => setApplicationLink(e.target.value)}
            placeholder="https://company.com/apply"
          />
        </div>

        {/* Date Posted */}
        <div>
          <label className="block text-sm font-medium mb-1">Date Posted</label>
          <input
            type="date"
            className="w-full p-2 border rounded"
            value={datePosted}
            onChange={(e) => setDatePosted(e.target.value)}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-laurel text-cream rounded hover:bg-basil transition"
        >
          {loading ? "Posting..." : "Submit Internship"}
        </button>
      </form>

      {message && <p className="mt-3 text-sm">{message}</p>}
    </div>
  );
}
