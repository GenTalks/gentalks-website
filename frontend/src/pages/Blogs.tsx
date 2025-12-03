import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

interface BlogPost {
  id: string;
  title: string;
  summary: string;
  author: string;
  link: string;
  date_posted: string;
}

const Blogs: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .order("date_posted", { ascending: false });

      if (error) {
        console.error("Error fetching blogs:", error);
      } else {
        setBlogs(data || []);
      }

      setLoading(false);
    };

    fetchBlogs();
  }, []);

  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  if (loading) return <p className="text-center mt-12">Loading blogs...</p>;

  return (
    <div className="min-h-screen bg-cream text-fog px-4 py-12 max-w-5xl mx-auto font-teachers">
      <h1 className="text-4xl font-bold mb-8 text-center">GenBlogs</h1>

      {blogs.length === 0 ? (
        <p className="text-center text-xl">No blog posts yet.</p>
      ) : (
        <ul className="space-y-8">
          {blogs.map((blog) => (
            <li
              key={blog.id}
              className="border rounded-lg p-6 hover:shadow-lg transition-shadow duration-200 bg-white"
            >
              {/* Clicking opens the blog link in a new tab */}
              <a href={blog.link} target="_blank" rel="noopener noreferrer">
                <h2 className="text-2xl font-semibold mb-1">{blog.title}</h2>

                <p className="text-lg font-medium mb-1">by {blog.author}</p>

                <p className="text-sm text-gray-500 mb-3">
                  {formatDate(blog.date_posted)}
                </p>

                <p className="line-clamp-3 text-fog">{blog.summary}</p>

                <p className="mt-3 text-laurel underline text-sm">
                  Read full blog →
                </p>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Blogs;
