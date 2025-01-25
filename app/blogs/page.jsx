import { getBlogs } from "@/queries/blogs";
import Link from "next/link";
import BlogGrid from "./_components/blog-grid";
import SearchInput from "./_components/search-blog";

const BlogPage = async () => {
  const blogs = await getBlogs();

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Blog</h1>
        <p className="mb-6">
          Ive been programming for almost 6 years now. Throughout this year, Ive
          worked with various technologies. Im here to share just that. Use the
          search below to filter by title.
        </p>

        <SearchInput blogs={blogs} />

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Most Popular</h2>
          {blogs?.map((blog) => (
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
