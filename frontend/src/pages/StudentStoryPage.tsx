import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { sanityClient } from "../lib/sanityClient";
import { PortableText } from '@portabletext/react';

interface StudentStory {
  title: string;
  author: string;
  summary: string;
  body: any;  
  publishedAt: string;
}

const StudentStory: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<StudentStory | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;
      try {
        const query = `*[_type == "studentStories" && slug.current == $slug][0]{
          title,
          author,
          summary,
          body,
          publishedAt
        }`;
        const data = await sanityClient.fetch(query, { slug });
        setPost(data);
      } catch (error) {
        console.error("Error fetching blog post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) return <p>Loading post...</p>;
  if (!post) return <p>Post not found.</p>;

  return (
    <main className="min-h-screen bg-cream text-fog font-teachers px-6 py-12 max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-6">{post.title}</h1>
      <p className="text-xl font-semibold mb-2">By {post.author}</p>
      <time className="text-fog mb-8 block">
        {new Date(post.publishedAt).toLocaleDateString(undefined, {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </time>
      <article className="prose max-w-none">
        <PortableText value={post.body} />
      </article>
    </main>
  );
};

export default StudentStory;
