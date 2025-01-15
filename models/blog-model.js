import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema({
  title: {
    required: false,
    type: String,
  },
  sub_title: {
    required: false,
    type: String,
  },
  thumbnail_url: {
    required: false,
    type: String,
  },
  creation_time: {
    required: false,
    type: String,
  },
  update_time: {
    required: false,
    type: Number,
  },
  authorname: {
    required: false,
    type: String,
  },
  avatar: {
    required: false,
    type: String,
  },
  read_time: {
    required: false,
    type: Number,
  },
  views: {
    required: false,
    type: Number,
  },
  description: {
    required: false,
    type: String,
  },
  likes: {
    required: false,
    type: Number,
  },
});

export const Blog = mongoose.models.Blog ?? mongoose.model("Blog", blogSchema);
