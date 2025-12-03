import { useState } from "react";
import { supabase } from "../lib/supabase";

const categoryOptions = [
  "Personal Development",
  "Getting Ready for College",
  "Career & Professional Development",
];

const tutoringOptions = [
  "Math",
  "Biology",
  "Chemistry",
  "Physics",
  "Engineering",
  "History",
  "Economics",
  "Government",
  "Psychology",
  "English Language Arts",
  "Spanish",
  "Japanese",
  "Mandarin",
  "Tagalog",
  "French",
  "Visual Arts",
  "Digital Media",
];

export default function MentorCardForm() {
  const [id, setId] = useState("");
  const [mentorName, setMentorName] = useState("");
  const [mentorImage, setMentorImage] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [calendly, setCalendly] = useState("");
  const [title, setTitle] = useState("");

  const [categories, setCategories] = useState<string[]>([]);
  const [tutoring, setTutoring] = useState<string[]>([]);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const toggle = (value: string, arraySetter: any, array: string[]) => {
    if (array.includes(value)) {
      arraySetter(array.filter((item) => item !== value));
    } else {
      arraySetter([...array, value]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      if (id.trim()) {
        const { error } = await supabase
          .from("mentors")
          .update({
            mentor_name: mentorName,
            mentor_image: mentorImage,
            linkedin,
            calendly,
            title,
            categories,
            tutoring,
          })
          .eq("id", id);

        if (error) throw error;
        setMessage("✅ Mentor card updated successfully!");
      } else {
        const { error } = await supabase.from("mentors").insert([
          {
            mentor_name: mentorName,
            mentor_image: mentorImage,
            linkedin,
            calendly,
            title,
            categories,
            tutoring,
          },
        ]);

        if (error) throw error;
        setMessage("✅ Mentor card created successfully!");
      }
    } catch (err) {
      console.error(err);
      setMessage("❌ Error saving mentor card.");
    }

    setLoading(false);
  };

  return (
    <div className="p-4 rounded-lg border bg-white shadow">
      <h3 className="text-lg font-semibold mb-4">Mentor Card Form</h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full p-2 border rounded"
          placeholder="Mentor ID (leave empty to create new)"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />

        <input
          className="w-full p-2 border rounded"
          placeholder="Mentor Name"
          value={mentorName}
          onChange={(e) => setMentorName(e.target.value)}
          required
        />

        <input
          className="w-full p-2 border rounded"
          placeholder="Image URL"
          value={mentorImage}
          onChange={(e) => setMentorImage(e.target.value)}
          required
        />

        <input
          className="w-full p-2 border rounded"
          placeholder="LinkedIn URL"
          value={linkedin}
          onChange={(e) => setLinkedin(e.target.value)}
        />

        <input
          className="w-full p-2 border rounded"
          placeholder="Calendly URL"
          value={calendly}
          onChange={(e) => setCalendly(e.target.value)}
        />

        <input
          className="w-full p-2 border rounded"
          placeholder="Title (ex: Software Engineer)"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <div>
          <p className="font-semibold mb-1">Categories</p>
          {categoryOptions.map((cat) => (
            <label key={cat} className="block">
              <input
                type="checkbox"
                checked={categories.includes(cat)}
                onChange={() => toggle(cat, setCategories, categories)}
              />
              <span className="ml-2">{cat}</span>
            </label>
          ))}
        </div>

        <div>
          <p className="font-semibold mb-1 mt-4">Tutoring Subjects</p>
          {tutoringOptions.map((subj) => (
            <label key={subj} className="block">
              <input
                type="checkbox"
                checked={tutoring.includes(subj)}
                onChange={() => toggle(subj, setTutoring, tutoring)}
              />
              <span className="ml-2">{subj}</span>
            </label>
          ))}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-laurel text-cream rounded hover:bg-basil"
        >
          {loading ? "Saving..." : id ? "Update Mentor Card" : "Create Mentor Card"}
        </button>
      </form>

      {message && <p className="mt-3">{message}</p>}
    </div>
  );
}
