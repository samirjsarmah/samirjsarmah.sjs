---
title: "Building a Production-Ready Portfolio with Next.js 15 and Decap CMS"
excerpt: "A deep dive into building a developer portfolio that's not just beautiful but also CMS-backed, SEO-optimized, and auto-deployed via Vercel."
coverImage: "/images/blog/nextjs-portfolio.png"
date: "2025-01-20"
tags: ["Next.js", "CMS", "Vercel", "Portfolio"]
readTime: "8 min read"
author: "Your Name"
---

## Why Build a CMS-Backed Portfolio?

Most developer portfolios are static HTML or hardcoded React — fine until you want to add a new project at 11pm without touching VSCode. A CMS-backed portfolio lets you edit content from anywhere, including your phone.

## The Stack

After evaluating Contentful, Sanity, and Strapi, I chose **Decap CMS** for one key reason: it stores content directly in your GitHub repo as Markdown files. No external database, no SaaS lock-in, no monthly bill.

```bash
# Folder structure
content/
  projects/   # .md files with frontmatter
  blogs/      # blog posts
  skills/     # skill categories
  certificates/
```

## Setting Up Decap CMS

The CMS lives at `/admin/index.html` — a single HTML file that bootstraps the Decap editor. The config is in `admin/config.yml`.

```yaml
backend:
  name: github
  repo: yourusername/portfolio
  branch: main

media_folder: public/images/uploads
public_folder: /images/uploads

collections:
  - name: projects
    label: Projects
    folder: content/projects
    fields:
      - { label: Title, name: title, widget: string }
      - { label: Description, name: description, widget: text }
```

## Deployment

Push to GitHub → Vercel auto-deploys. Decap commits content edits back to GitHub → triggers a new deployment. Fully automated.

## Conclusion

This stack gives you the developer control of a static site with the editorial convenience of a full CMS. Highly recommended for anyone who wants to maintain their portfolio without touching code every time.
