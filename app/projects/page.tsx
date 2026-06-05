import { Metadata } from "next";
import { getAllProjects } from "@/lib/projects";
import ProjectsSection from "@/components/sections/ProjectsSection";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Projects",
  description: "Browse all my development projects — web apps, AI/ML experiments, and open source contributions.",
};

export default async function ProjectsPage() {
  const projects = await getAllProjects();
  return (
    <div className="pt-24">
      <div className="container-max px-4 sm:px-6 lg:px-8 pt-8">
        <Link href="/" className="inline-flex items-center gap-2 text-[var(--text-muted)] hover:text-brand-500 transition-colors mb-4 text-sm">
          <FiArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>
      <ProjectsSection projects={projects} />
    </div>
  );
}
