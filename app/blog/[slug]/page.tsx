import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FiArrowLeft, FiClock, FiCalendar } from "react-icons/fi";
import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { markdownToHtml } from "@/lib/markdown";

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { images: post.coverImage ? [post.coverImage] : [] },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const htmlContent = await markdownToHtml(post.content);

  return (
    <article className="section-padding pt-28">
      <div className="max-w-3xl mx-auto">
        <Link href="/blog" className="inline-flex items-center gap-2 text-[var(--text-muted)] hover:text-brand-500 transition-colors mb-8 text-sm">
          <FiArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>

        {/* Cover */}
        {post.coverImage && (
          <div className="relative h-72 rounded-2xl overflow-hidden mb-10">
            <Image src={post.coverImage} alt={post.title} fill className="object-cover" />
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags?.map((tag) => <span key={tag} className="tag">#{tag}</span>)}
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold font-display text-gradient mb-4 leading-tight">
          {post.title}
        </h1>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)] mb-10 pb-8 border-b border-[var(--border-color)]">
          <span className="flex items-center gap-1.5"><FiCalendar className="w-4 h-4" />{post.date}</span>
          {post.readTime && <span className="flex items-center gap-1.5"><FiClock className="w-4 h-4" />{post.readTime}</span>}
          {post.author && <span>by <strong className="text-brand-500">{post.author}</strong></span>}
        </div>

        {/* Content */}
        <div
          className="prose-blog"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div>
    </article>
  );
}
