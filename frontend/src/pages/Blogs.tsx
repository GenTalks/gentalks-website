import React, { useEffect, useState } from "react";
import { sanityClient } from "../lib/sanityClient";
import { Link } from "react-router-dom";

interface BlogPost {
  title: string;
  author: string,
  slug: { current: string };
  summary: string;
  publishedAt: string;
  group: string;
}

const Blogs : React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const query = `*[_type == "blogPost"] | order(publishedAt desc){
          title,
          author,
          slug,
          summary,
          publishedAt,
          group,
        }`;
        const data = await sanityClient.fetch(query);
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-cream text-fog px-4 py-12 max-w-5xl mx-auto">
      <h1 className="text-4xl font-teachers mb-8 text-center">GenBlogs</h1>

      {loading ? (
        <p className="text-center text-xl">Loading posts...</p>
      ) : posts.length === 0 ? (
        <p className="text-center text-xl">No blog posts found.</p>
      ) : (
        <ul className="space-y-8">
          {posts.map((post) => (
            <li key={post.slug.current} className="border rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
              <Link to={`/blog/${post.slug.current}`}>
                <a className="block">
                  <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                  <p className="text-xl font-semibold mb-2">by {post.author}</p>
                  <p className="text-xl font-normal mb-2">Group: {post.group} </p>
                  <p className="text-fog mb-3">{post.summary}</p>
                  <time className="text-sm text-fog">
                    {new Date(post.publishedAt).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Blogs;
