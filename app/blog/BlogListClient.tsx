"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiSearch, FiArrowLeft, FiClock, FiCalendar, FiArrowRight } from "react-icons/fi";
import { PostMeta } from "@/lib/blog";

export default function BlogListClient({ posts }: { posts: PostMeta[] }) {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState("All");

  const allTags = ["All", ...Array.from(new Set(posts.flatMap((p) => p.tags ?? [])))];

  const filtered = posts.filter((p) => {
    const matchSearch = p.title.toLowerCase().includes(query.toLowerCase()) ||
                        p.excerpt?.toLowerCase().includes(query.toLowerCase());
    const matchTag = activeTag === "All" || p.tags?.includes(activeTag);
    return matchSearch && matchTag;
  });

  return (
    <div className="section-padding pt-28">
      <div className="container-max">
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center gap-2 text-[var(--text-muted)] hover:text-brand-500 transition-colors mb-6 text-sm">
            <FiArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="section-title text-gradient">Blog</h1>
          <p className="text-[var(--text-secondary)] mt-2">Thoughts, tutorials, and insights.</p>
        </div>

        {/* Search */}
        <div className="relative max-w-lg mb-6">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)] w-4 h-4" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles..."
            className="w-full pl-11 pr-4 py-3 rounded-xl glass text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-brand-500/60 transition-all text-sm"
          />
        </div>

        {/* Tag filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {allTags.map((tag) => (
            <button key={tag} onClick={() => setActiveTag(tag)}
              className={`px-4 py-1.5 rounded-xl text-sm transition-all duration-300 ${
                activeTag === tag
                  ? "brand-gradient text-white"
                  : "glass text-[var(--text-muted)] hover:text-brand-500"
              }`}>
              #{tag}
            </button>
          ))}
        </div>

        {/* Posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
            >
              <Link href={`/blog/${post.slug}`}
                className="glass rounded-2xl overflow-hidden group hover:border-brand-500/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-500/10 transition-all duration-300 flex flex-col h-full block">
                {post.coverImage && (
                  <div className="relative h-44 overflow-hidden">
                    <Image src={post.coverImage} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags?.slice(0, 3).map((t) => <span key={t} className="tag text-xs">#{t}</span>)}
                  </div>
                  <h2 className="font-bold font-display text-[var(--text-primary)] mb-2 group-hover:text-brand-500 transition-colors line-clamp-2">{post.title}</h2>
                  <p className="text-[var(--text-muted)] text-sm flex-1 line-clamp-3 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-[var(--text-muted)]">
                    <div className="flex gap-3">
                      <span className="flex items-center gap-1"><FiCalendar className="w-3 h-3" />{post.date}</span>
                      {post.readTime && <span className="flex items-center gap-1"><FiClock className="w-3 h-3" />{post.readTime}</span>}
                    </div>
                    <span className="text-brand-500 flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read <FiArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-[var(--text-muted)] py-20">No articles found.</p>
        )}
      </div>
    </div>
  );
}
