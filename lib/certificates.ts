import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CERTS_DIR = path.join(process.cwd(), "content/certificates");

export interface CertificateMeta {
  slug: string;
  title: string;
  issuer: string;
  date: string;
  image?: string;
  link?: string;
}

function ensureDir() {
  if (!fs.existsSync(CERTS_DIR)) fs.mkdirSync(CERTS_DIR, { recursive: true });
}

export function getAllCertificates(): CertificateMeta[] {
  ensureDir();
  const files = fs.readdirSync(CERTS_DIR).filter((f) => f.endsWith(".md"));
  return files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(CERTS_DIR, filename), "utf-8");
    const { data } = matter(raw);
    return { slug, ...(data as Omit<CertificateMeta, "slug">) };
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
