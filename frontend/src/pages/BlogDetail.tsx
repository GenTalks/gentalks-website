import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { useParams, Link } from "react-router-dom";

interface BlogPost {
  id: string;
  title: string;
  author: string;
  content: string;
  summary: string;
  slug: string;
  date_posted: string;
}

const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    const fetchBlog = async () => {
      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .eq("slug", slug)
        .single();

      if (error) {
        console.error("Error fetching blog:", error);
        setBlog(null);
      } else {
        setBlog(data);
      }
      setLoading(false);
    };

    fetchBlog();
  }, [slug]);

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  if (loading) return <p className="text-center mt-12">Loading blog...</p>;
  if (!blog) return <p className="text-center mt-12">Blog not found.</p>;

  return (
    <div className="min-h-screen bg-cream text-fog px-4 py-12 max-w-5xl mx-auto font-teachers">
      <Link to="/blogs" className="text-laurel underline mb-4 inline-block">
        ← Back to all blogs
      </Link>

      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <p className="text-lg font-medium mb-2">by {blog.author}</p>
      <p className="text-sm text-gray-500 mb-6">
        {formatDate(blog.date_posted)}
      </p>

      <div className="prose max-w-none">{blog.content}</div>
    </div>
  );
};

export default BlogDetail;
