import fs from "node:fs/promises";
import path from "node:path";

export async function getValidSlugs() {
  try {
    const postsDirectory = path.join(process.cwd(), "posts");
    const files = await fs.readdir(postsDirectory);
    const slugs = files
      .filter((file) => file.endsWith(".mdx"))
      .map((file) => file.replace(/\.mdx$/, ""));
    return slugs;
  } catch (error) {
    return [];
  }
}
