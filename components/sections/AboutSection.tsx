"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { HiAcademicCap, HiBriefcase } from "react-icons/hi2";
import SectionHeader from "@/components/ui/SectionHeader";

const TIMELINE = [
  {
    type: "education",
    icon: HiAcademicCap,
    title: "B.Tech in Computer Science",
    org: "Your University",
    period: "2020 – 2024",
    desc: "Specialized in AI/ML and software engineering. CGPA: 8.5/10",
  },
  {
    type: "work",
    icon: HiBriefcase,
    title: "Software Developer Intern",
    org: "Some Company",
    period: "Jun 2023 – Aug 2023",
    desc: "Built REST APIs and React dashboards. Improved performance by 40%.",
  },
  {
    type: "education",
    icon: HiAcademicCap,
    title: "Higher Secondary (Science)",
    org: "Your School",
    period: "2018 – 2020",
    desc: "Physics, Chemistry, Mathematics & Computer Science. Score: 92%.",
  },
];

function TimelineItem({ item, i }: { item: typeof TIMELINE[0]; i: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.15 }}
      className="flex gap-4 mb-8 last:mb-0"
    >
      {/* Icon */}
      <div className="flex-shrink-0 mt-1">
        <div className="w-10 h-10 rounded-xl brand-gradient flex items-center justify-center shadow-lg">
          <item.icon className="w-5 h-5 text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="glass rounded-2xl p-5 flex-1 hover:border-brand-500/30 transition-all duration-300">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
          <h3 className="font-semibold text-[var(--text-primary)]">{item.title}</h3>
          <span className="tag text-xs">{item.period}</span>
        </div>
        <p className="text-brand-500 text-sm font-medium mb-2">{item.org}</p>
        <p className="text-[var(--text-muted)] text-sm leading-relaxed">{item.desc}</p>
      </div>
    </motion.div>
  );
}

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding">
      <div className="container-max">
        <SectionHeader
          tag="Who I Am"
          title="About Me"
          subtitle="A passionate developer driven by curiosity and a love for building meaningful products."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-14">
          {/* Bio */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="glass rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-bold font-display text-gradient mb-5">Hello, World! 👋</h3>
              <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
                <p>
                  I&apos;m <strong className="text-[var(--text-primary)]">Your Name</strong>, a full-stack developer
                  and AI enthusiast based in <strong className="text-brand-500">Your City, India</strong>. I love
                  turning complex problems into elegant, user-friendly solutions.
                </p>
                <p>
                  My journey started with curiosity about how websites worked. Today I build everything from
                  scalable REST APIs and React frontends to machine learning pipelines and cloud deployments.
                </p>
                <p>
                  When I&apos;m not coding, you&apos;ll find me reading tech blogs, contributing to open source,
                  or exploring the latest in AI research.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                {[
                  { label: "Projects", value: "20+" },
                  { label: "Certifications", value: "10+" },
                  { label: "Tech Stack", value: "15+" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-4 rounded-xl"
                    style={{ background: "var(--brand-dim)" }}>
                    <div className="text-2xl font-bold text-gradient">{stat.value}</div>
                    <div className="text-xs text-[var(--text-muted)] mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Career goal */}
              <div className="mt-6 p-4 rounded-xl border border-brand-500/20 bg-brand-500/5">
                <p className="text-sm text-[var(--text-secondary)] italic">
                  🎯 <strong className="text-brand-500">Career Goal:</strong> Build AI-powered products that
                  solve real-world problems and positively impact millions of users.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <div>
            <h3 className="text-xl font-bold font-display text-[var(--text-primary)] mb-6">
              Education & Experience
            </h3>
            {TIMELINE.map((item, i) => (
              <TimelineItem key={i} item={item} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
