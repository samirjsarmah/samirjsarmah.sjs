"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { SkillData } from "@/lib/skills";

const CATEGORY_ICONS: Record<string, string> = {
  Programming:     "⚡",
  "Web Development": "🌐",
  "AI/ML":          "🤖",
  Databases:        "🗄️",
  Tools:            "🛠️",
};

interface Props { skills: SkillData[] }

function SkillBar({ skill, inView }: { skill: SkillData["skills"][0]; inView: boolean }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-[var(--text-primary)]">{skill.name}</span>
        <span className="text-xs font-mono text-brand-500">{skill.level}%</span>
      </div>
      <div className="h-2 rounded-full bg-[var(--bg-secondary)] overflow-hidden">
        <motion.div
          className="skill-bar h-full"
          initial={{ width: 0 }}
          animate={{ width: inView ? `${skill.level}%` : 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

function SkillCard({ category, inView }: { category: SkillData; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="glass rounded-2xl p-6 hover:border-brand-500/30 transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-5">
        <span className="text-2xl">{CATEGORY_ICONS[category.category] ?? "💡"}</span>
        <h3 className="font-bold text-[var(--text-primary)] font-display">{category.category}</h3>
      </div>
      {category.skills.map((skill) => (
        <SkillBar key={skill.name} skill={skill} inView={inView} />
      ))}
    </motion.div>
  );
}

export default function SkillsSection({ skills }: Props) {
  const [activeCategory, setActiveCategory] = useState("All");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const categories = ["All", ...skills.map((s) => s.category)];
  const filtered = activeCategory === "All"
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="section-padding">
      <div className="container-max">
        <SectionHeader
          tag="What I Know"
          title="Skills & Expertise"
          subtitle="Technologies and tools I work with to bring ideas to life."
        />

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mt-8 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "brand-gradient text-white shadow-lg shadow-brand-500/20"
                  : "glass text-[var(--text-secondary)] hover:text-brand-500 hover:border-brand-500/30"
              }`}
            >
              {CATEGORY_ICONS[cat] ?? "✨"} {cat}
            </button>
          ))}
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map((category) => (
            <SkillCard key={category.category} category={category} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
