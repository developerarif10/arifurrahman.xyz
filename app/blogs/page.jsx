import { getBlogs } from "@/queries/blogs";
import SearchInput from "./_components/search-blog";

import QuoteSection from "./_components/blog-quote";
const BlogPage = async () => {
  const blogs = await getBlogs();

  return (
    <div className="min-h-screen px-6 py-20">
      <div className="max-w-4xl mx-auto">
        {/* <h1 className="text-3xl font-bold mb-4">Blog</h1> */}
        <section className="relative w-full overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,#020617,rgba(2,6,23,0.6))]" />

          <QuoteSection />

          {/* Gradient orbs */}
          <div className="absolute left-1/4 top-1/4 -z-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl dark:bg-primary/5"></div>
          <div className="absolute bottom-1/4 right-1/4 -z-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl dark:bg-primary/5"></div>
        </section>

        <p className="mb-6">
          Ive been programming for almost 4 years now. Throughout this year, Ive
          worked with various technologies. Im here to share just that. Use the
          search below to filter by title.
        </p>

        <SearchInput blogs={blogs} />

        {/* <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Most Popular</h2>
          {blogs?.map((blog) => (
            <Link key={blog.id} href={`/blogs/${blog?.slug}`}>
              <BlogGrid title={blog?.title} views={blog?.views} />
            </Link>
          ))}
        </div>
         */}
      </div>
    </div>
  );
};

export default BlogPage;
