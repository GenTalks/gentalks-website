import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function HTAForm() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [resourceUrl, setResourceUrl] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [datePosted, setDatePosted] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const tagOptions = [
    "Finance",
    "Life skills",
    "Mental/Emotional Health",
    "Legal/Admin",
    "Career Prep",
    "Digital Literacy",
  ];

  const toggleTag = (tag: string) => {
    setTags((prev) =>
      prev.includes(tag)
        ? prev.filter((t) => t !== tag)
        : [...prev, tag]
    );
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const payload = {
      title,
      author,
      tags,
      resource_url: resourceUrl,
      date_posted: datePosted || new Date().toISOString().slice(0, 10),
    };

    const { error } = await supabase.from("how_to_adult").insert([payload]);

    setLoading(false);

    if (error) {
      console.error(error);
      setMessage("Error submitting How To Adult resource.");
      return;
    }

    setMessage("How To Adult resource submitted!");

    // Reset
    setTitle("");
    setAuthor("");
    setResourceUrl("");
    setTags([]);
    setDatePosted("");
  }

  return (
    <div className="p-4 rounded-lg border bg-white shadow">
      <h3 className="text-lg font-semibold mb-4">Create Adulting Resource</h3>

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

        {/* Tags */}
        <div>
          <label className="block text-sm font-medium mb-1">Tags</label>
          <div className="flex flex-wrap gap-2">
            {tagOptions.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1 border rounded-full text-sm ${
                  tags.includes(tag)
                    ? "bg-laurel text-cream"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
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
          {loading ? "Posting..." : "Submit Resource"}
        </button>
      </form>

      {message && <p className="mt-3 text-sm">{message}</p>}
    </div>
  );
}
