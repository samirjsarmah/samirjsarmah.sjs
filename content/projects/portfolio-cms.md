---
title: "AI-Powered Portfolio CMS"
description: "A modern portfolio website with an integrated headless CMS, built using Next.js 15, Tailwind CSS, and Decap CMS for seamless content management."
image: "/images/projects/portfolio-cms.png"
category: "Web Development"
techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Decap CMS", "Vercel"]
github: "https://github.com/yourusername/portfolio"
demo: "https://yourdomain.com"
featured: true
date: "2025-01-15"
---

## Overview

This is my personal portfolio built with Next.js 15 using the App Router. It features a fully integrated headless CMS powered by Decap CMS, allowing content updates without touching code.

## Features

- **Decap CMS Integration** — Edit content from a beautiful admin panel at `/admin`
- **Dark / Light Mode** — Smooth system-preference-aware theme switching
- **Markdown Blog** — Write articles in Markdown, rendered with syntax highlighting
- **Glassmorphism UI** — Modern, premium design with subtle animations
- **SEO Optimized** — Full Open Graph, Twitter cards, and structured metadata
- **Vercel Deployment** — Zero-config CI/CD with GitHub integration

## Technical Details

The project uses **gray-matter** for frontmatter parsing and **remark** for Markdown-to-HTML conversion. All content is stored as Markdown files in the `content/` directory, which Decap CMS reads and writes to via the GitHub API.

## Challenges & Solutions

One challenge was enabling real-time preview in the CMS without a separate preview server. Solved by using Decap's built-in preview pane with a custom preview template that mirrors the production styles.
