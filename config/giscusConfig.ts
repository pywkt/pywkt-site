export const giscusConfig = {
  id: "comments",
  ghAccount: "pywkt",
  ghRepo: "pywkt-site",
  repoId: process.env.GH_REPO_ID || "",
  category: "Announcements",
  categoryId: process.env.GH_CATEGORY_ID,
  mapping: "specific",
  reactionsEnabled: "0",
  emitMetadata: "0",
  inputPosition: "top",
  theme: "dark_dimmed",
  lang: "en",
  loading: "lazy",
};