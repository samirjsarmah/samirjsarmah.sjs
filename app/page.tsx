import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import BlogSection from "@/components/sections/BlogSection";
import CertificatesSection from "@/components/sections/CertificatesSection";
import ResumeSection from "@/components/sections/ResumeSection";
import ContactSection from "@/components/sections/ContactSection";
import { getAllProjects } from "@/lib/projects";
import { getAllPosts } from "@/lib/blog";
import { getAllSkills } from "@/lib/skills";
import { getAllCertificates } from "@/lib/certificates";

export default async function HomePage() {
  const [projects, posts, skills, certificates] = await Promise.all([
    getAllProjects(),
    getAllPosts(),
    getAllSkills(),
    getAllCertificates(),
  ]);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection skills={skills} />
      <ProjectsSection projects={projects} />
      <BlogSection posts={posts.slice(0, 3)} />
      <CertificatesSection certificates={certificates} />
      <ResumeSection />
      <ContactSection />
    </>
  );
}
