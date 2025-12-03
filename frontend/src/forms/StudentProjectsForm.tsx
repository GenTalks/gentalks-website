import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function StudentProjectsForm() {
  const [mode, setMode] = useState<"create" | "update">("create");
  const [id, setId] = useState("");

  const [title, setTitle] = useState("");
  const [creator, setCreator] = useState("");
  const [categories, setCategories] = useState("game");
  const [projectUrl, setProjectUrl] = useState("");
  const [dateFeatured, setDateFeatured] = useState("");

  const resetFields = () => {
    setTitle("");
    setCreator("");
    setCategories("game");
    setProjectUrl("");
    setDateFeatured("");
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (mode === "create") {
      const { error } = await supabase.from("student_projects").insert([
        {
          title,
          creator,
          categories: [categories],
          project_url: projectUrl,
          date_featured: dateFeatured,
        },
      ]);

      if (!error) resetFields();
    }

    if (mode === "update" && id.trim() !== "") {
      const { error } = await supabase
        .from("student_projects")
        .update({
          title,
          creator,
          categories: [categories],
          project_url: projectUrl,
          date_featured: dateFeatured,
        })
        .eq("id", id);

      if (!error) resetFields();
    }
  };

  return (
    <div className="p-6 rounded-lg border bg-white shadow font-teachers text-fog">
      <h3 className="text-2xl font-semibold mb-4">Student Projects Form</h3>

      {/* Toggle create/update */}
      <div className="flex gap-4 mb-4">
        <button
          className={`px-4 py-2 rounded-md border ${
            mode === "create"
              ? "bg-laurel text-cream"
              : "bg-cream text-fog border-fog"
          }`}
          onClick={() => setMode("create")}
        >
          Create
        </button>

        <button
          className={`px-4 py-2 rounded-md border ${
            mode === "update"
              ? "bg-laurel text-cream"
              : "bg-cream text-fog border-fog"
          }`}
          onClick={() => setMode("update")}
        >
          Update
        </button>
      </div>

      {/* Only show ID field when updating */}
      {mode === "update" && (
        <div className="mb-4">
          <label className="block mb-1 font-medium">Project ID</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded"
            placeholder="enter student project id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
      )}

      {/* Title */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Title</label>
        <input
          type="text"
          className="w-full px-3 py-2 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      {/* Creator */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Creator</label>
        <input
          type="text"
          className="w-full px-3 py-2 border rounded"
          value={creator}
          onChange={(e) => setCreator(e.target.value)}
        />
      </div>

      {/* Categories (single-select) */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Category</label>
        <select
          className="w-full px-3 py-2 border rounded"
          value={categories}
          onChange={(e) => setCategories(e.target.value)}
        >
          <option value="game">game</option>
          <option value="program">program</option>
          <option value="article">article</option>
        </select>
      </div>

      {/* Project URL */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Project URL</label>
        <input
          type="text"
          className="w-full px-3 py-2 border rounded"
          value={projectUrl}
          onChange={(e) => setProjectUrl(e.target.value)}
        />
      </div>

      {/* Date Featured */}
      <div className="mb-6">
        <label className="block mb-1 font-medium">Date Featured</label>
        <input
          type="date"
          className="w-full px-3 py-2 border rounded"
          value={dateFeatured}
          onChange={(e) => setDateFeatured(e.target.value)}
        />
      </div>

      {/* Submit */}
      <button
        onClick={handleSubmit}
        className="px-6 py-2 bg-laurel text-cream rounded hover:bg-darkLaurel transition"
      >
        {mode === "create" ? "Create Project" : "Update Project"}
      </button>
    </div>
  );
}
