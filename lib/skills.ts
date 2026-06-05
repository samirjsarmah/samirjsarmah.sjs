import fs from "fs";
import path from "path";
import matter from "gray-matter";

const SKILLS_DIR = path.join(process.cwd(), "content/skills");

export interface SkillData {
  category: string;
  skills: { name: string; level: number; icon?: string }[];
}

function ensureDir() {
  if (!fs.existsSync(SKILLS_DIR)) fs.mkdirSync(SKILLS_DIR, { recursive: true });
}

export function getAllSkills(): SkillData[] {
  ensureDir();
  const files = fs.readdirSync(SKILLS_DIR).filter((f) => f.endsWith(".md"));
  return files.map((filename) => {
    const raw = fs.readFileSync(path.join(SKILLS_DIR, filename), "utf-8");
    const { data } = matter(raw);
    return data as SkillData;
  });
}
