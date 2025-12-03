import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function SRForm() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [topic, setTopic] = useState("");
  const [resourceUrl, setResourceUrl] = useState("");
  const [datePosted, setDatePosted] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Optional topics list
  const topicOptions = [
    "Math",
    "Science",
    "History",
    "English",
    "Computer Science",
    "Art",
    "Other",
  ];

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const { error } = await supabase.from("study_resources").insert([
      {
        title,
        author,
        topic,
        resource_url: resourceUrl,
        date_posted: datePosted || new Date().toISOString(),
      },
    ]);

    setLoading(false);

    if (error) {
      console.error(error);
      setMessage("Error submitting resource.");
      return;
    }

    setMessage("Study resource submitted!");

    // Reset form
    setTitle("");
    setAuthor("");
    setTopic("");
    setResourceUrl("");
    setDatePosted("");
  }

  return (
    <div className="p-4 rounded-lg border bg-white shadow">
      <h3 className="text-lg font-semibold mb-4">Create Study Resource</h3>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Title */}
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Resource title"
          />
        </div>

        {/* Author */}
        <div>
          <label className="block text-sm font-medium mb-1">Author</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Author name"
          />
        </div>

        {/* Topic */}
        <div>
          <label className="block text-sm font-medium mb-1">Topic</label>
          <select
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">Select a topic</option>
            {topicOptions.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        {/* Resource URL */}
        <div>
          <label className="block text-sm font-medium mb-1">Resource Link</label>
          <input
            type="url"
            className="w-full p-2 border rounded"
            value={resourceUrl}
            onChange={(e) => setResourceUrl(e.target.value)}
            placeholder="https://example.com/resource"
          />
        </div>

        {/* Optional Date */}
        <div>
          <label className="block text-sm font-medium mb-1">Date Posted</label>
          <input
            type="date"
            value={datePosted}
            onChange={(e) => setDatePosted(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-laurel text-cream rounded hover:bg-basil transition"
        >
          {loading ? "Posting..." : "Submit Resource"}
        </button>
      </form>

      {message && <p className="mt-3 text-sm">{message}</p>}
    </div>
  );
}
