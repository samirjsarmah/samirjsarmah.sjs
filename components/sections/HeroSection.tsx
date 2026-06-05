"use client";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiDownload, FiArrowDown } from "react-icons/fi";

const SOCIALS = [
  { icon: FiGithub,   href: "https://github.com/yourusername",     label: "GitHub" },
  { icon: FiLinkedin, href: "https://linkedin.com/in/yourprofile", label: "LinkedIn" },
  { icon: FiTwitter,  href: "https://twitter.com/yourhandle",      label: "Twitter" },
  { icon: FiMail,     href: "mailto:your@email.com",               label: "Email" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center section-padding pt-28">
      <div className="container-max w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left ── */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-brand-500 font-mono mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
              Available for opportunities
            </motion.div>

            {/* Name */}
            <motion.h1 {...fadeUp(0.2)} className="text-5xl md:text-6xl xl:text-7xl font-bold font-display leading-tight mb-4">
              Hi, I&apos;m{" "}
              <span className="text-gradient block">Your Name</span>
            </motion.h1>

            {/* Typing */}
            <motion.div {...fadeUp(0.3)} className="text-xl md:text-2xl text-[var(--text-secondary)] font-mono mb-6 h-10">
              <TypeAnimation
                sequence={[
                  "Full-Stack Developer", 2000,
                  "AI / ML Engineer",    2000,
                  "Open Source Contributor", 2000,
                  "Problem Solver",      2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-brand-400"
              />
            </motion.div>

            {/* Description */}
            <motion.p {...fadeUp(0.4)} className="text-[var(--text-secondary)] leading-relaxed text-lg max-w-lg mb-8">
              I craft scalable web applications and intelligent systems. Passionate about clean code,
              great user experiences, and the intersection of AI and web technologies.
            </motion.p>

            {/* Buttons */}
            <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-4 mb-10">
              <a href="/#projects" className="btn-primary">
                View Projects
              </a>
              <a href="/resume.pdf" download className="btn-ghost">
                <FiDownload className="w-4 h-4" />
                Download Resume
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div {...fadeUp(0.6)} className="flex items-center gap-4">
              <span className="text-[var(--text-muted)] text-sm">Find me on</span>
              <div className="flex gap-3">
                {SOCIALS.map(({ icon: Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-xl glass flex items-center justify-center text-[var(--text-muted)] hover:text-brand-500 hover:border-brand-500/50 hover:scale-110 transition-all duration-300">
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Right — Profile Photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-[-12px] rounded-full animate-spin-slow opacity-60"
                style={{ background: "conic-gradient(from 0deg, #14b897, #06b6d4, #818cf8, #14b897)", padding: "2px" }}>
                <div className="w-full h-full rounded-full bg-[var(--bg-primary)]" />
              </div>

              {/* Photo container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden"
                style={{ boxShadow: "0 0 60px rgba(20,184,151,0.3), 0 0 120px rgba(20,184,151,0.1)" }}>
                <Image
                  src="/images/profile.jpg"
                  alt="Your Name — Profile Photo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 glass px-4 py-2 rounded-xl text-sm font-mono text-brand-500 shadow-lg"
              >
                5+ Projects 🚀
              </motion.div>

              <motion.div
                animate={{ y: [8, -8, 8] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 glass px-4 py-2 rounded-xl text-sm font-mono text-cyan-400 shadow-lg"
              >
                Open to Work ✨
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center mt-16"
        >
          <a href="/#about"
            className="flex flex-col items-center gap-2 text-[var(--text-muted)] hover:text-brand-500 transition-colors group">
            <span className="text-xs font-mono">Scroll down</span>
            <FiArrowDown className="w-4 h-4 animate-bounce group-hover:text-brand-500" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
