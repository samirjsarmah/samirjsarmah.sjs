import { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import BlogListClient from "./BlogListClient";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles, tutorials, and thoughts on web development, AI/ML, and tech.",
};

export default async function BlogPage() {
  const posts = await getAllPosts();
  return <BlogListClient posts={posts} />;
}
