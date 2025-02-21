"use client";
import { useState } from "react";
import BlogGrid from "./blog-grid";

export default function SearchInput({ blogs }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredArticles = blogs?.filter((blog) =>
    blog?.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        placeholder="Search articles"
        className="w-full p-3 border border-gray-300 rounded-md mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div>
        <h2 className="text-2xl font-semibold mb-4">All Posts</h2>
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article, index) => (
            <div key={index} className="mb-4">
              <h2 className="mb-8 text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                {article?.creation_time.slice(0, 4)}
              </h2>
              <BlogGrid article={article} blogs={blogs} />
            </div>
          ))
        ) : (
          <p className="text-gray-500">No articles found.</p>
        )}
      </div>
    </>
  );
}
