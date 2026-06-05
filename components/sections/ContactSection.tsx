"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiSend, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import SectionHeader from "@/components/ui/SectionHeader";

const CONTACT_INFO = [
  { icon: FiMail,    label: "Email",    value: "your@email.com",           href: "mailto:your@email.com" },
  { icon: FiMapPin,  label: "Location", value: "Your City, India",         href: null },
  { icon: FiGithub,  label: "GitHub",   value: "github.com/yourusername",  href: "https://github.com/yourusername" },
  { icon: FiLinkedin,label: "LinkedIn", value: "linkedin.com/in/yourprofile", href: "https://linkedin.com/in/yourprofile" },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "error");
      if (res.ok) setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
    setTimeout(() => setStatus("idle"), 5000);
  };

  const inputClass = "w-full px-4 py-3 rounded-xl glass text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-brand-500/60 transition-all duration-300 text-sm";

  return (
    <section id="contact" className="section-padding">
      <div className="container-max">
        <SectionHeader
          tag="Get In Touch"
          title="Contact Me"
          subtitle="Have a project in mind or want to collaborate? I'd love to hear from you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-14">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="glass rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-bold font-display text-gradient mb-3">Let&apos;s Talk!</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
                Whether you have a question, a project idea, or just want to connect —
                my inbox is always open. I typically respond within 24 hours.
              </p>

              <div className="space-y-4">
                {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl brand-gradient flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-[var(--text-muted)]">{label}</p>
                      {href ? (
                        <a href={href} target="_blank" rel="noopener noreferrer"
                          className="text-sm text-[var(--text-primary)] hover:text-brand-500 transition-colors">
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm text-[var(--text-primary)]">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social quick-links */}
              <div className="mt-8 pt-6 border-t border-[var(--border-color)] flex gap-3">
                {[
                  { icon: FiGithub,   href: "https://github.com/yourusername" },
                  { icon: FiLinkedin, href: "https://linkedin.com/in/yourprofile" },
                  { icon: FiTwitter,  href: "https://twitter.com/yourhandle" },
                ].map(({ icon: Icon, href }) => (
                  <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl glass flex items-center justify-center text-[var(--text-muted)] hover:text-brand-500 hover:border-brand-500/50 hover:scale-110 transition-all duration-300">
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs text-[var(--text-muted)] mb-1.5 block">Name *</label>
                  <input name="name" value={form.name} onChange={handleChange} required
                    placeholder="Your Name" className={inputClass} />
                </div>
                <div>
                  <label className="text-xs text-[var(--text-muted)] mb-1.5 block">Email *</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} required
                    placeholder="your@email.com" className={inputClass} />
                </div>
              </div>

              <div>
                <label className="text-xs text-[var(--text-muted)] mb-1.5 block">Subject *</label>
                <input name="subject" value={form.subject} onChange={handleChange} required
                  placeholder="Project Inquiry / Collaboration" className={inputClass} />
              </div>

              <div>
                <label className="text-xs text-[var(--text-muted)] mb-1.5 block">Message *</label>
                <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
                  placeholder="Tell me about your project or idea..."
                  className={`${inputClass} resize-none`} />
              </div>

              <button type="submit" disabled={status === "loading"}
                className="btn-primary w-full justify-center disabled:opacity-60">
                {status === "loading" ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <><FiSend className="w-4 h-4" /> Send Message</>
                )}
              </button>

              {status === "success" && (
                <p className="text-center text-brand-500 text-sm">✅ Message sent! I&apos;ll get back to you soon.</p>
              )}
              {status === "error" && (
                <p className="text-center text-red-400 text-sm">❌ Something went wrong. Please try again.</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
