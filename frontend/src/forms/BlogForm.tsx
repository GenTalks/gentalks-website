import React, { useState } from "react";
import { supabase } from "../lib/supabase";
import {useUser} from "../hooks/useUser";
import slugify from "slugify";

export default function BlogForm() {
  const { profile } = useUser();
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!profile) {
      setMessage("❌ You must be logged in to create a blog post.");
      return;
    }

    setLoading(true);
    setMessage("");

    const slug = slugify(title, { lower: true, strict: true });

    const { error } = await supabase.from("blogs").insert([
      {
        title,
        summary,
        content,
        author: profile.name, // automatically set
        slug,
        date_posted: new Date().toISOString(),
      },
    ]);

    setLoading(false);

    if (error) {
      console.error(error);
      setMessage("❌ Error creating blog post.");
    } else {
      setMessage("✅ Blog post created successfully!");
      setTitle("");
      setSummary("");
      setContent("");
    }
  };

  return (
    <div className="p-4 rounded-lg border bg-white shadow">
      <h3 className="text-lg font-semibold mb-4">New Blog Post</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full p-2 border rounded"
            placeholder="Blog title"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Summary</label>
          <textarea
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            required
            rows={3}
            className="w-full p-2 border rounded"
            placeholder="Short summary"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            rows={8}
            className="w-full p-2 border rounded"
            placeholder="Write your blog content here..."
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-laurel text-cream rounded hover:bg-basil"
        >
          {loading ? "Saving..." : "Create Blog Post"}
        </button>

        {message && <p className="mt-3 text-sm">{message}</p>}
      </form>
    </div>
  );
}
