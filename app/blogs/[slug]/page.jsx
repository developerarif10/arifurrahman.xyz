import { getBlogDetails } from "@/queries/blogs";
import { notFound } from "next/navigation";

const BlogDetailedPage = async ({ params }) => {
  const { slug } = await params;
  const blog = await getBlogDetails(slug);
  if (!blog) {
    notFound();
  }

  return (
    <div className="min-h-screen text-white">
      <div className="max-w-4xl mx-auto p-6">
        {/* Back Button */}
        <button className="mb-6 text-gray-400 hover:text-white transition">
          &larr; Back
        </button>

        {/* Title Section */}
        <h1 className="text-4xl font-bold mb-2">{blog?.title}</h1>
        <div className="flex items-center justify-between text-gray-400 text-sm mb-6">
          <div>
            <p>
              {blog?.authorname} /{" "}
              {new Date(blog?.creation_time).toLocaleDateString()}
            </p>
          </div>
          <div>
            <p>{blog?.views?.toLocaleString()} views</p>
          </div>
        </div>

        {/* Featured Image */}
        {blog?.thumbnailurl && (
          <div className="mb-8">
            <img
              src={blog?.thumbnailurl}
              alt={blog?.title}
              className="rounded-lg w-full object-cover"
            />
          </div>
        )}

        {/* Content Section */}
        <div
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: blog?.description }}
        />
      </div>
    </div>
  );
};

export default BlogDetailedPage;
