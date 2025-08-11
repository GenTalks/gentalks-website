import React, { useEffect, useState } from "react";
import { sanityClient } from "../lib/sanityClient";
import { Link } from "react-router-dom";

interface StudentStory {
    title: string;
    author: string,
    slug: { current: string };
    summary: string;
    publishedAt: string;
}

const StudentStories: React.FC = () => {
    const [posts, setPosts] = useState<StudentStory[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const query = `*[_type == "studentStories"] | order(publishedAt desc){
          title,
          author,
          slug,
          summary,
          publishedAt,
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
        <div className="min-h-screen font-teachers bg-cream text-fog px-4 py-12 max-w-5xl mx-auto">
            <h1 className="text-4xl font-teachers mb-8 text-center">Student Stories</h1>

            <div className="mb-8">
                <Link
                    to="/student-center"
                    className="inline-flex items-center px-4 py-2 rounded-full border-2 border-fog hover:bg-fog hover:text-cream transition text-base font-teachers"
                >
                    ← Back to resources
                </Link>
            </div>

            {loading ? (
                <p className="text-center text-xl">Loading stories...</p>
            ) : posts.length === 0 ? (
                <p className="text-center text-xl">No stories found.</p>
            ) : (
                <ul className="space-y-8 font-teachers">
                    {posts.map((post) => (
                        <li key={post.slug.current} className="border rounded-lg p-6  font-teachers hover:shadow-lg transition-shadow duration-200">
                            <Link to={`/student-story/${post.slug.current}`}>
                                <a className="block">
                                    <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                                    <p className="text-xl font-semibold mb-2">by {post.author}</p>
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

export default StudentStories;
