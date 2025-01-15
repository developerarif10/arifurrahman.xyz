import NotFound from "./not-found";

export default function Page({ params }) {
  // const post = getPostBySlug(params.slug)

  if (!post) {
    NotFound();
  }

  return <div>{post.title}</div>;
}
