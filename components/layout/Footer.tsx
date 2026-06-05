import Link from "next/link";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";

const QUICK_LINKS = [
  { label: "About",        href: "/#about" },
  { label: "Projects",     href: "/#projects" },
  { label: "Blog",         href: "/#blog" },
  { label: "Certificates", href: "/#certificates" },
  { label: "Contact",      href: "/#contact" },
];

const SOCIAL = [
  { icon: FiGithub,   href: "https://github.com/yourusername",        label: "GitHub" },
  { icon: FiLinkedin, href: "https://linkedin.com/in/yourprofile",    label: "LinkedIn" },
  { icon: FiTwitter,  href: "https://twitter.com/yourhandle",         label: "Twitter" },
  { icon: FiMail,     href: "mailto:your@email.com",                  label: "Email" },
];

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-[var(--border-color)]">
      <div className="container-max section-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="font-display font-bold text-2xl block mb-3">
              <span className="text-gradient">&lt;YourName/&gt;</span>
            </Link>
            <p className="text-[var(--text-muted)] text-sm leading-relaxed">
              Building digital experiences with passion and precision. Open to exciting opportunities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-[var(--text-primary)] mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {QUICK_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href}
                    className="text-[var(--text-muted)] hover:text-brand-500 transition-colors duration-200 text-sm">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-[var(--text-primary)] mb-4">Connect</h3>
            <div className="flex gap-3 flex-wrap">
              {SOCIAL.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-[var(--text-muted)] hover:text-brand-500 hover:border-brand-500/50 transition-all duration-300 hover:scale-110">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[var(--border-color)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[var(--text-muted)] text-sm">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
          <p className="text-[var(--text-muted)] text-sm flex items-center gap-1">
            Built with <span className="text-brand-500">♥</span> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
