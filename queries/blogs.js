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

export const getBlogDetails = async (slug) => {
  try {
    await dbConnect();
    const blogs = await Blog.findOne({ slug: slug }).lean();
    if (!blogs) {
      throw new Error("Blog not found!");
    }
    return replaceMongoIdInObject(blogs);
  } catch (error) {
    throw new Error(error.message);
  }
};
