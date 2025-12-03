import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function BlogForm() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [link, setLink] = useState("");
  const [author, setAuthor] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Fetch the logged-in user's profile name
  useEffect(() => {
    async function fetchProfile() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      const { data, error } = await supabase
        .from("profiles")
        .select("name")
        .eq("id", user.id)
        .single();

      if (!error && data) setAuthor(data.name);
    }

    fetchProfile();
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    if (!author) {
      setMessage("❌ Error: Could not fetch your profile name.");
      setLoading(false);
      return;
    }

    const { error } = await supabase.from("blogs").insert([
      {
        title,
        summary,
        link,
        author,
        date_posted: new Date().toISOString(),
      },
    ]);

    setLoading(false);

    if (error) {
      console.error(error);
      setMessage("Error submitting blog post.");
      return;
    }

    setMessage("Blog post submitted!");

    setTitle("");
    setSummary("");
    setLink("");
  }

  return (
    <div className="p-4 rounded-lg border bg-white shadow">
      <h3 className="text-lg font-semibold mb-4">Create New Blog Post</h3>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full p-2 border rounded"
            placeholder="Enter blog title"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Summary</label>
          <textarea
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            required
            className="w-full p-2 border rounded"
            placeholder="Short summary of the blog"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Blog Link</label>
          <input
            type="url"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            required
            className="w-full p-2 border rounded"
            placeholder="https://medium.com/"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Author</label>
          <input
            type="text"
            value={author || "Loading..."}
            disabled
            className="w-full p-2 border rounded bg-gray-100 text-gray-600"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-laurel text-cream rounded hover:bg-basil"
        >
          {loading ? "Posting..." : "Submit Blog"}
        </button>
      </form>

      {message && <p className="mt-3 text-sm">{message}</p>}
    </div>
  );
}
