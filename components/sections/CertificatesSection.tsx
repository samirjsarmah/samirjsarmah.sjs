"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiExternalLink, FiAward } from "react-icons/fi";
import SectionHeader from "@/components/ui/SectionHeader";
import { CertificateMeta } from "@/lib/certificates";

interface Props { certificates: CertificateMeta[] }

function CertCard({ cert, i }: { cert: CertificateMeta; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: i * 0.08 }}
      className="glass rounded-2xl overflow-hidden group hover:border-brand-500/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-500/10 transition-all duration-300"
    >
      {/* Certificate image */}
      <div className="relative h-44 bg-gradient-to-br from-brand-500/10 to-cyan-500/10 overflow-hidden">
        {cert.image ? (
          <Image src={cert.image} alt={cert.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
        ) : (
          <div className="flex items-center justify-center h-full">
            <FiAward className="w-16 h-16 text-brand-500/40" />
          </div>
        )}
      </div>

      <div className="p-5">
        <h3 className="font-bold text-[var(--text-primary)] mb-1 group-hover:text-brand-500 transition-colors line-clamp-2">
          {cert.title}
        </h3>
        <p className="text-brand-500 text-sm font-medium mb-1">{cert.issuer}</p>
        <p className="text-[var(--text-muted)] text-xs mb-4">{cert.date}</p>

        {cert.link && (
          <a href={cert.link} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-brand-500 hover:text-brand-400 transition-colors font-medium">
            <FiExternalLink className="w-3.5 h-3.5" />
            View Certificate
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function CertificatesSection({ certificates }: Props) {
  return (
    <section id="certificates" className="section-padding">
      <div className="container-max">
        <SectionHeader
          tag="Achievements"
          title="Certificates"
          subtitle="Credentials and certifications from courses and professional development."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
          {certificates.map((cert, i) => <CertCard key={cert.slug} cert={cert} i={i} />)}
        </div>

        {certificates.length === 0 && (
          <p className="text-center text-[var(--text-muted)] py-12">Certificates coming soon.</p>
        )}
      </div>
    </section>
  );
}
