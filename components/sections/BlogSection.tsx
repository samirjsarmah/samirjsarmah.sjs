"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FiArrowRight, FiSearch, FiClock, FiCalendar } from "react-icons/fi";
import SectionHeader from "@/components/ui/SectionHeader";
import { PostMeta } from "@/lib/blog";

interface Props { posts: PostMeta[] }

function BlogCard({ post, i }: { post: PostMeta; i: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
    >
      <Link href={`/blog/${post.slug}`}
        className="glass rounded-2xl overflow-hidden group flex flex-col h-full hover:border-brand-500/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-500/10 transition-all duration-300 block">
        {/* Thumbnail */}
        {post.coverImage && (
          <div className="relative h-44 overflow-hidden">
            <Image src={post.coverImage} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        )}

        <div className="p-6 flex flex-col flex-1">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {post.tags?.slice(0, 3).map((tag) => (
              <span key={tag} className="tag text-xs">#{tag}</span>
            ))}
          </div>

          <h3 className="font-bold font-display text-lg text-[var(--text-primary)] mb-2 group-hover:text-brand-500 transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-[var(--text-muted)] text-sm leading-relaxed flex-1 line-clamp-3 mb-4">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between text-xs text-[var(--text-muted)]">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1"><FiCalendar className="w-3 h-3" /> {post.date}</span>
              {post.readTime && <span className="flex items-center gap-1"><FiClock className="w-3 h-3" /> {post.readTime}</span>}
            </div>
            <span className="flex items-center gap-1 text-brand-500 group-hover:gap-2 transition-all">
              Read <FiArrowRight className="w-3 h-3" />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export default function BlogSection({ posts }: Props) {
  const [query, setQuery] = useState("");

  const filtered = posts.filter(
    (p) => p.title.toLowerCase().includes(query.toLowerCase()) ||
           p.excerpt?.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section id="blog" className="section-padding">
      <div className="container-max">
        <SectionHeader
          tag="My Thoughts"
          title="Blog"
          subtitle="Articles, tutorials, and reflections on tech, development, and beyond."
        />

        {/* Search */}
        <div className="relative max-w-md mx-auto mt-8 mb-12">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)] w-4 h-4" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles..."
            className="w-full pl-11 pr-4 py-3 rounded-xl glass text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-brand-500/50 transition-all duration-300 text-sm"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map((post, i) => <BlogCard key={post.slug} post={post} i={i} />)}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-[var(--text-muted)] py-12">No articles found.</p>
        )}

        {posts.length > 0 && (
          <div className="text-center mt-12">
            <Link href="/blog" className="btn-ghost">
              View All Articles <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
