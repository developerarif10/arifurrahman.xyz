// "use client";
// import { useState } from "react";

import { getBlogs } from "@/queries/blogs";
import Link from "next/link";
import BlogGrid from "./_components/blog-grid";

const BlogPage = async () => {
  const blogs = await getBlogs();

  // const filteredArticles = articles.filter((article) =>
  //   article.title.toLowerCase().includes(searchTerm.toLowerCase())
  // );

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
          // value={searchTerm}
          // onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Most Popular</h2>
          {blogs.map((blog) => (
            <Link key={blog.id} href={`/blogs/${blog?.slug}`}>
              <BlogGrid title={blog?.title} views={blog?.views} />
            </Link>
          ))}
        </div>

        {/* <div>
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
        </div> */}
      </div>
    </div>
  );
};

export default BlogPage;
