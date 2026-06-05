import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiGithub, FiExternalLink } from "react-icons/fi";
import { getProjectBySlug, getAllProjects } from "@/lib/projects";
import { markdownToHtml } from "@/lib/markdown";

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Not Found" };
  return { title: project.title, description: project.description };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const htmlContent = await markdownToHtml(project.content);

  return (
    <article className="section-padding pt-28">
      <div className="max-w-4xl mx-auto">
        <Link href="/projects" className="inline-flex items-center gap-2 text-[var(--text-muted)] hover:text-brand-500 transition-colors mb-8 text-sm">
          <FiArrowLeft className="w-4 h-4" /> Back to Projects
        </Link>

        {project.image && (
          <div className="relative h-80 rounded-2xl overflow-hidden mb-10">
            <Image src={project.image} alt={project.title} fill className="object-cover" />
          </div>
        )}

        <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
          <div>
            <span className="tag mb-3 inline-block">{project.category}</span>
            <h1 className="text-4xl md:text-5xl font-bold font-display text-gradient leading-tight">
              {project.title}
            </h1>
          </div>
          <div className="flex gap-3">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                <FiGithub className="w-4 h-4" /> Code
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <FiExternalLink className="w-4 h-4" /> Live Demo
              </a>
            )}
          </div>
        </div>

        <p className="text-[var(--text-secondary)] text-lg mb-6">{project.description}</p>

        {/* Tech stack */}
        {project.techStack && (
          <div className="flex flex-wrap gap-2 mb-10 pb-8 border-b border-[var(--border-color)]">
            {project.techStack.map((tech) => <span key={tech} className="tag">{tech}</span>)}
          </div>
        )}

        {/* Content */}
        <div className="prose-blog" dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>
    </article>
  );
}
