import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function CPForm() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [resourceUrl, setResourceUrl] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [datePosted, setDatePosted] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const categoryOptions = [
    "General advice",
    "Applications",
    "Pathways",
    "Financial aid",
    "Exploring college",
    "Emotional support",
    "Post-acceptance",
  ];

  const toggleTag = (tag: string) => {
    setTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const { error } = await supabase.from("college_prep").insert([
      {
        title,
        author,
        resource_url: resourceUrl,
        tags,
        date_posted: datePosted || new Date().toISOString(),
      },
    ]);

    setLoading(false);

    if (error) {
      console.error(error);
      setMessage("Error submitting resource.");
      return;
    }

    setMessage("College prep resource submitted!");

    setTitle("");
    setAuthor("");
    setResourceUrl("");
    setTags([]);
    setDatePosted("");
  }

  return (
    <div className="p-4 rounded-lg border bg-white shadow">
      <h3 className="text-lg font-semibold mb-4">Create College Prep Resource</h3>

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
            required
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Your name"
          />
        </div>

        {/* Resource URL */}
        <div>
          <label className="block text-sm font-medium mb-1">Resource Link</label>
          <input
            type="url"
            className="w-full p-2 border rounded"
            required
            value={resourceUrl}
            onChange={(e) => setResourceUrl(e.target.value)}
            placeholder="https://example.com/resource"
          />
        </div>

        {/* Tags */}
        <div>
          <label className="block text-sm font-medium mb-1">Category</label>
          <div className="flex flex-wrap gap-2">
            {categoryOptions.map((cat) => (
              <button
                type="button"
                key={cat}
                onClick={() => toggleTag(cat)}
                className={`px-3 py-1 border rounded-full text-sm ${
                  tags.includes(cat)
                    ? "bg-laurel text-cream"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Optional date override */}
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
