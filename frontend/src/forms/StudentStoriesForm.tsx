import React, { useState } from "react";
import { supabase } from "../lib/supabase";

export default function StudentStoriesForm() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [resourceUrl, setResourceUrl] = useState("");
  const [tags, setTags] = useState("");
  const [datePosted, setDatePosted] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase.from("student_stories").insert([
      {
        title,
        author,
        resource_url: resourceUrl,
        tags: tags.split(",").map(t => t.trim()),
        date_posted: datePosted,
      },
    ]);

    if (error) {
      console.error(error);
      alert("Error submitting story");
    } else {
      alert("Story submitted!");
      setTitle("");
      setAuthor("");
      setResourceUrl("");
      setTags("");
      setDatePosted("");
    }
  };

  return (
    <div className="p-4 rounded-lg border bg-white shadow">
      <h3 className="text-lg font-semibold mb-2">Student Stories Form</h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="border p-2 w-full rounded"
          placeholder="story title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <input
          className="border p-2 w-full rounded"
          placeholder="author name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />

        <input
          className="border p-2 w-full rounded"
          placeholder="resource URL"
          value={resourceUrl}
          onChange={(e) => setResourceUrl(e.target.value)}
          required
        />

        <input
          className="border p-2 w-full rounded"
          placeholder="tags (comma separated)"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />

        <input
          className="border p-2 w-full rounded"
          type="date"
          value={datePosted}
          onChange={(e) => setDatePosted(e.target.value)}
          required
        />

        <button className="px-4 py-2 bg-laurel text-cream rounded hover:bg-basil transition">
          submit story
        </button>
      </form>
    </div>
  );
}
