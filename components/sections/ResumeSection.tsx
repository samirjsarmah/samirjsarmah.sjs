"use client";
import { motion } from "framer-motion";
import { FiDownload, FiEye } from "react-icons/fi";
import SectionHeader from "@/components/ui/SectionHeader";

export default function ResumeSection() {
  return (
    <section id="resume" className="section-padding">
      <div className="container-max">
        <SectionHeader
          tag="Resume"
          title="My Resume"
          subtitle="Download or view my latest resume to learn more about my experience."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto mt-12"
        >
          <div className="glass rounded-2xl p-8 text-center">
            {/* Decorative icon */}
            <div className="w-20 h-20 mx-auto rounded-2xl brand-gradient flex items-center justify-center mb-6 shadow-lg shadow-brand-500/30">
              <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>

            <h3 className="text-2xl font-bold font-display text-[var(--text-primary)] mb-2">
              Your Name — Resume
            </h3>
            <p className="text-[var(--text-muted)] mb-8">
              Full-Stack Developer | AI/ML Enthusiast | Open Source Contributor
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/resume.pdf" download
                className="btn-primary">
                <FiDownload className="w-4 h-4" />
                Download PDF
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
                className="btn-ghost">
                <FiEye className="w-4 h-4" />
                View Online
              </a>
            </div>

            <p className="text-xs text-[var(--text-muted)] mt-6">
              Last updated: January 2025 • PDF Format
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
