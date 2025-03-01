import { getBlogDetails } from "@/queries/blogs";
import Image from "next/image";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import BackButton from "../_components/back-button";
const BlogDetailedPage = async ({ params }) => {
  const { slug } = await params;
  const blog = await getBlogDetails(slug);
  if (!blog) {
    notFound();
  }

  return (
    <div className="min-h-screen px-6 pt-20">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <BackButton />
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
            <p>{blog?.read_time} read</p>
          </div>
        </div>

        {/* Featured Image */}

        <div className="mb-8">
          <Image
            src={`/blogs${blog?.thumbnail_url}`}
            alt={blog?.title}
            width={750}
            height={350}
            className="rounded-lg w-full object-cover"
          />
        </div>

        {/* Content Section */}

        {/* <ReactMarkdown>
          <div
            className="prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: blog?.content }}
          />
        </ReactMarkdown> */}
        <div className="article-content">
          <ReactMarkdown>{blog?.content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailedPage;
