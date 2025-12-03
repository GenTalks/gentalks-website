import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { Link } from "react-router-dom";

interface StudentStory {
  id: string;
  title: string;
  author: string;
  resource_url: string;
  tags: string[];
  date_posted: string;
}

const StudentStories: React.FC = () => {
  const [stories, setStories] = useState<StudentStory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStories = async () => {
      const { data, error } = await supabase
        .from("student_stories")
        .select("*")
        .order("date_posted", { ascending: false });

      if (!error && data) {
        setStories(data);
      }

      setLoading(false);
    };

    fetchStories();
  }, []);

  return (
    <div className="min-h-screen font-teachers bg-cream text-fog px-4 py-12 max-w-5xl mx-auto">
      <h1 className="text-4xl font-teachers mb-8 text-center">Student Stories</h1>

      <div className="mb-8">
        <Link
          to="/student-center"
          className="inline-flex items-center px-4 py-2 rounded-full border-2 border-fog hover:bg-fog hover:text-cream transition text-base"
        >
          ← Back to resources
        </Link>
      </div>

      {loading ? (
        <p className="text-center text-xl">Loading stories...</p>
      ) : stories.length === 0 ? (
        <p className="text-center text-xl">No stories found.</p>
      ) : (
        <ul className="space-y-8">
          {stories.map((s) => (
            <li key={s.id} className="border rounded-lg p-6 hover:shadow-lg transition">
              <h2 className="text-2xl font-semibold mb-2">{s.title}</h2>
              <p className="text-xl font-semibold mb-2">by {s.author}</p>

              {s.tags?.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {s.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-fog text-cream rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <a
                href={s.resource_url}
                target="_blank"
                className="text-fog underline"
              >
                Read the resource →
              </a>

              <p className="text-sm mt-2">
                {new Date(s.date_posted).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StudentStories;
