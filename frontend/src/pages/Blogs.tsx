import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { Link } from "react-router-dom";

interface BlogPost {
  id: string;
  title: string;
  summary: string;
  author: string;
  slug: string;
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

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString("en-US", {
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
              className="border rounded-lg p-6 hover:shadow-lg transition-shadow duration-200"
            >
              <Link to={`/blog/${blog.slug}`}>
                <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
                <p className="text-lg font-medium mb-1">by {blog.author}</p>
                <p className="text-sm text-gray-500 mb-2">
                  {formatDate(blog.date_posted)}
                </p>
                <p className="line-clamp-3">{blog.summary}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Blogs;
