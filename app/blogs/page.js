"use client";
import { useState } from "react";

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const articles = [
    {
      title: "Top 5 courses and resources to learn Next JS in 2021",
      views: 4793,
    },
    {
      title: "How I built a blogging platform like Medium with Next.js",
      views: 3531,
    },
    {
      title:
        "How to freelance and make money as a Freelance Web Developer - A practical guide.",
      views: 2596,
    },
    {
      title: "Free portfolio website template that gets you hired in 2021",
      views: 5363,
    },
    { title: "Ace the Javascript Interview", views: 15733 },
    {
      title:
        "Build your own Covid Resource and leads portal with the Twitter API and Next.js",
      views: 2539,
    },
    {
      title:
        "How I built a blogging platform like Medium with Next.js and Firebase",
      views: 3531,
    },
    {
      title: "Top 5 courses and resources to learn Next JS in 2021",
      views: 4793,
    },
  ];

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Blog</h1>
        <p className="mb-6">
          Ive been programming for almost 6 years now. Throughout this year, Ive
          worked with various technologies. Im here to share just that. Use the
          search below to filter by title.
        </p>

        <input
          type="text"
          placeholder="Search articles"
          className="w-full p-3 border border-gray-300 rounded-md mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Most Popular</h2>
          {articles.slice(0, 2).map((article, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-medium bg-slate-900 p-2 cursor-pointer">
                {article.title}
              </h3>
              <p className="text-gray-500 text-sm">
                {article.views.toLocaleString()} views
              </p>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">All Posts</h2>
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg font-medium bg-slate-900 p-2 cursor-pointer">
                  {article.title}
                </h3>
                <p className="text-sm">
                  {article.views.toLocaleString()} views
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No articles found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
