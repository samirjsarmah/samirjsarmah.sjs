"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface Props {
  tag: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ tag, title, subtitle }: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center mb-4"
    >
      <span className="tag mb-4 inline-block">{tag}</span>
      <h2 className="section-title text-gradient">{title}</h2>
      {subtitle && (
        <p className="text-[var(--text-secondary)] max-w-2xl mx-auto mt-3 text-lg">{subtitle}</p>
      )}
    </motion.div>
  );
}
