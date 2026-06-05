"use client";
import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiGithub, FiExternalLink, FiArrowRight } from "react-icons/fi";
import SectionHeader from "@/components/ui/SectionHeader";
import { ProjectMeta } from "@/lib/projects";

interface Props { projects: ProjectMeta[] }

function ProjectCard({ project, i }: { project: ProjectMeta; i: number }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay: i * 0.08 }}
      className="glass rounded-2xl overflow-hidden group hover:border-brand-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-500/10 flex flex-col"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image || "/images/project-placeholder.png"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        {project.featured && (
          <span className="absolute top-3 right-3 tag text-xs">⭐ Featured</span>
        )}
        <span className="absolute top-3 left-3 tag text-xs">{project.category}</span>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-bold font-display text-[var(--text-primary)] mb-2 group-hover:text-brand-500 transition-colors">
          {project.title}
        </h3>
        <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.techStack?.slice(0, 5).map((tech) => (
            <span key={tech} className="tag text-xs">{tech}</span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-brand-500 transition-colors">
              <FiGithub className="w-4 h-4" /> Code
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-brand-500 transition-colors">
              <FiExternalLink className="w-4 h-4" /> Live Demo
            </a>
          )}
          <Link href={`/projects/${project.slug}`}
            className="ml-auto flex items-center gap-1 text-sm text-brand-500 hover:gap-2 transition-all duration-200">
            Details <FiArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export default function ProjectsSection({ projects }: Props) {
  const [activeFilter, setActiveFilter] = useState("All");
  const ref = useRef(null);
  useInView(ref, { once: true });

  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category).filter(Boolean)))];
  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section-padding">
      <div className="container-max">
        <SectionHeader
          tag="What I've Built"
          title="Projects"
          subtitle="A selection of projects that showcase my skills and problem-solving approach."
        />

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mt-8 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeFilter === cat
                  ? "brand-gradient text-white shadow-lg shadow-brand-500/20"
                  : "glass text-[var(--text-secondary)] hover:text-brand-500 hover:border-brand-500/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.slug} project={project} i={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-[var(--text-muted)]">
            No projects found in this category.
          </div>
        )}
      </div>
    </section>
  );
}
