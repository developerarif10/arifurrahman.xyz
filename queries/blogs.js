import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/lib/convertData";
import { Blog } from "@/models/blog-model";
import dbConnect from "@/services/mongo";

export const getBlogs = async () => {
  await dbConnect();
  const blog = await Blog.find({}).lean();
  return replaceMongoIdInArray(blog);
};

export async function getBlogDetails(blog_slug) {
  try {
    await dbConnect();
    const blogs = await Blog.findById(blog_slug).lean();
    return replaceMongoIdInObject(blogs);
  } catch (error) {
    throw new Error(error);
  }
}
