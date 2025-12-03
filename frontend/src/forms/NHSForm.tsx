import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function NHSForm() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [resourceUrl, setResourceUrl] = useState("");
  const [datePosted, setDatePosted] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const tagOptions = [
    "General advice",
    "Academics",
    "School involvement",
    "Athletics",
    "Social & emotional support",
  ];

  const toggleTag = (tag: string) => {
    setTags(prev => (prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]));
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const { error } = await supabase.from("navigating_high_school").insert([
      {
        title,
        author,
        tags,
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

    setMessage("Resource submitted!");
    setTitle("");
    setAuthor("");
    setTags([]);
    setResourceUrl("");
    setDatePosted("");
  }

  return (
    <div className="p-4 rounded-lg border bg-white shadow">
      <h3 className="text-lg font-semibold mb-4">Navigating High School RSS Form</h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            required
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Resource title"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Author</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={author}
            onChange={e => setAuthor(e.target.value)}
            placeholder="Author name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Tags</label>
          <div className="flex flex-wrap gap-2">
            {tagOptions.map(tag => (
              <button
                type="button"
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1 border rounded-full text-sm ${
                  tags.includes(tag) ? "bg-laurel text-cream" : "bg-gray-100 text-gray-700"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Resource Link</label>
          <input
            type="url"
            className="w-full p-2 border rounded"
            value={resourceUrl}
            onChange={e => setResourceUrl(e.target.value)}
            placeholder="https://example.com/resource"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Date Posted</label>
          <input
            type="date"
            className="w-full p-2 border rounded"
            value={datePosted}
            onChange={e => setDatePosted(e.target.value)}
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
