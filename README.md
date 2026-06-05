# 🚀 Developer Portfolio — Next.js 15 + Decap CMS

A modern, CMS-backed developer portfolio built with **Next.js 15 App Router**, **Tailwind CSS**, and **Decap CMS**. Edit all content — projects, blogs, skills, certificates — from a beautiful admin panel without touching code.

![Portfolio Preview](public/images/og-image.png)

## ✨ Features

- **Next.js 15** App Router with TypeScript
- **Decap CMS** admin panel at `/admin` — no-code content editing
- **Dark / Light mode** with smooth transitions
- **Framer Motion** animations throughout
- **Typing animation** in hero section
- **Glassmorphism UI** design
- **SEO optimized** — sitemap, robots.txt, Open Graph, Twitter cards
- **Markdown blog** with full syntax support
- **Project filtering** by category
- **Skill progress bars** with animated reveals
- **Contact form** (Formspree or SMTP)
- **Mobile-first** responsive design
- **Auto-deploy** on GitHub push via Vercel

---

## 📁 Folder Structure

```
portfolio/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (fonts, theme, navbar)
│   ├── page.tsx            # Homepage (all sections)
│   ├── blog/               # Blog listing + dynamic [slug] pages
│   ├── projects/           # Projects listing + dynamic [slug] pages
│   ├── api/contact/        # Contact form API route
│   ├── sitemap.ts          # Auto-generated sitemap
│   └── robots.ts           # robots.txt
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Responsive navbar with mobile menu
│   │   └── Footer.tsx      # Footer with links and socials
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── BlogSection.tsx
│   │   ├── CertificatesSection.tsx
│   │   ├── ResumeSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/
│       ├── ThemeProvider.tsx
│       ├── ThemeToggle.tsx
│       └── SectionHeader.tsx
│
├── content/                # CMS-managed Markdown content
│   ├── projects/           # .md files for each project
│   ├── blogs/              # .md files for blog posts
│   ├── skills/             # .md files per skill category
│   └── certificates/       # .md files per certificate
│
├── public/
│   ├── admin/
│   │   ├── index.html      # Decap CMS entry point
│   │   └── config.yml      # CMS collections config
│   ├── images/             # Static images
│   └── resume.pdf          # Your resume
│
├── lib/                    # Content loaders (gray-matter)
│   ├── projects.ts
│   ├── blog.ts
│   ├── skills.ts
│   ├── certificates.ts
│   └── markdown.ts         # Markdown → HTML converter
│
├── utils/
│   ├── cn.ts               # clsx + tailwind-merge
│   └── formatDate.ts
│
└── styles/
    └── globals.css         # CSS variables, animations, utilities
```

---

## 🛠️ Local Development Setup

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Git

### 1. Clone & Install

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd portfolio
npm install
```

### 2. Configure Environment

```bash
cp .env.local.example .env.local
```

Edit `.env.local`:

```env
# Contact form — use Formspree (free) or SMTP
FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID

# Your deployed URL
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### 3. Personalize Your Info

Search and replace these placeholders across the codebase:

| Placeholder | Replace with |
|---|---|
| `Your Name` | Your actual name |
| `yourusername` | Your GitHub username |
| `yourprofile` | Your LinkedIn slug |
| `yourhandle` | Your Twitter handle |
| `your@email.com` | Your email |
| `yourdomain.com` | Your domain |
| `Your City` | Your location |

### 4. Add Your Assets

- Replace `public/images/profile.jpg` with your photo
- Add `public/resume.pdf` with your resume
- Add project screenshots to `public/images/projects/`

### 5. Run Dev Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📝 Content Management (Decap CMS)

### Admin Panel URL
- **Local:** `http://localhost:3000/admin`
- **Production:** `https://yourdomain.com/admin`

### Setting Up GitHub OAuth (Required for Admin)

Decap CMS uses GitHub as the backend, so you need OAuth set up:

#### Option A: Netlify Identity (Easiest, even on Vercel)
1. Deploy to Netlify temporarily, enable Identity, then switch to Vercel
2. Or use Sveltia CMS Auth (free Cloudflare Worker)

#### Option B: Sveltia CMS Auth (Recommended for Vercel)

1. Fork [sveltia-cms-auth](https://github.com/sveltia/sveltia-cms-auth)
2. Deploy it as a Cloudflare Worker (free)
3. Create a GitHub OAuth App:
   - Go to GitHub → Settings → Developer Settings → OAuth Apps → New
   - Homepage URL: `https://yourdomain.com`
   - Callback URL: `https://YOUR_WORKER.workers.dev/callback`
4. Add your OAuth credentials to the Cloudflare Worker
5. Update `public/admin/config.yml`:

```yaml
backend:
  name: github
  repo: YOUR_USERNAME/YOUR_REPO
  branch: main
  base_url: https://YOUR_WORKER.workers.dev
```

### Adding Content via Admin

1. Go to `yourdomain.com/admin`
2. Log in with GitHub
3. Click any collection (Projects, Blog, Skills, etc.)
4. Click **New [Item]** to create content
5. Fill in the fields and click **Publish**
6. Decap CMS commits the `.md` file to your GitHub repo
7. Vercel auto-deploys the update in ~30 seconds ✅

### Manual Content (without admin)

You can also edit/create `.md` files directly in the `content/` folder:

```markdown
---
title: "My New Project"
description: "A brief description"
category: "Web Development"
techStack: ["React", "Node.js"]
github: "https://github.com/..."
featured: true
date: "2025-01-01"
---

## Project Description

Write your **Markdown** content here...
```

---

## 🚀 GitHub Setup & Push

### Initialize Repository

```bash
# In your portfolio folder
git init
git add .
git commit -m "🚀 Initial portfolio commit"

# Create repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

### Future Updates

```bash
git add .
git commit -m "✨ Add new project / Update skills"
git push
# Vercel auto-deploys within ~30 seconds
```

---

## ▲ Vercel Deployment

### First Deploy

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Vercel auto-detects Next.js — click **Deploy**
5. Wait ~2 minutes for the first build ✅

### Environment Variables in Vercel

1. Go to your project → **Settings → Environment Variables**
2. Add:

| Variable | Value |
|---|---|
| `FORMSPREE_ENDPOINT` | Your Formspree URL |
| `NEXT_PUBLIC_SITE_URL` | `https://yourdomain.com` |

### Custom Domain

1. Go to project → **Settings → Domains**
2. Add your domain (e.g., `yourdomain.com`)
3. Follow DNS instructions (add CNAME or A record at your domain registrar)
4. Vercel automatically provisions SSL ✅

### Auto-Deploy Configuration

Every `git push` to `main` → automatic Vercel deployment. Zero config needed.

---

## 🎨 Customization Guide

### Colors

Edit `tailwind.config.ts` to change the brand color from teal (`#14b897`) to anything:

```ts
colors: {
  brand: {
    500: "#YOUR_COLOR",  // Primary accent
    // ...
  }
}
```

### Fonts

Edit `app/layout.tsx` to swap Google Fonts:

```ts
import { Inter, Fira_Code } from "next/font/google";
```

### Sections

Each section is a standalone component in `components/sections/`. To disable a section, simply remove it from `app/page.tsx`.

### Adding New Skills Category

Create `content/skills/myskill.md`:

```yaml
---
category: "DevOps"
skills:
  - name: "Docker"
    level: 80
  - name: "Kubernetes"
    level: 60
---
```

Or add it directly in the Admin panel under **Skills**.

---

## 📱 Admin Panel Collections Reference

| Collection | Files Location | Fields |
|---|---|---|
| **Projects** | `content/projects/` | title, description, image, category, techStack, github, demo, featured, date, body |
| **Blog Posts** | `content/blogs/` | title, excerpt, coverImage, date, readTime, author, tags, body |
| **Skills** | `content/skills/` | category, skills[].name, skills[].level |
| **Certificates** | `content/certificates/` | title, issuer, date, image, link |
| **About** | `content/about.md` | name, tagline, photo, bio, location, email, github, linkedin |

---

## 🔧 Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Styling | Tailwind CSS + Custom CSS |
| CMS | Decap CMS (Markdown + GitHub) |
| Animation | Framer Motion |
| Typing | react-type-animation |
| Icons | react-icons |
| Dark Mode | next-themes |
| Markdown | remark + remark-html + remark-gfm |
| Deployment | Vercel |
| CI/CD | GitHub + Vercel |

---

## 📄 License

MIT — free to use for personal and commercial portfolios. Attribution appreciated but not required.

---

## 🙋 Need Help?

- Open a GitHub Issue
- Decap CMS Docs: [decapcms.org/docs](https://decapcms.org/docs)
- Next.js Docs: [nextjs.org/docs](https://nextjs.org/docs)
- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
