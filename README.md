# pywkt.com
Source code for [pywkt.com](https://pywkt.com)

NextJS/MDX-JS

---

- Clone Repo
- `cd` into directory
- `npm install`
- `touch .env`

.env
```env
NEXT_PUBLIC_CF_IMG = <cloudflare_r2_bucket_url>
NEXT_PUBLIC_PL_URL = <plausible_url/script.js>
GH_REPO_ID = <from_giscus_setup>
GH_CATEGORY_ID = <from_giscus_setup>
```

config/giscusConfig.ts
- Set up Giscus at [giscus.app](https://giscus.app/)
- Copy the settings to the `giscusConfig.ts` file
- The `repo` field is split into two separate strings. One for the Github account and one for the repository name
- The `repoId` and `categoryId` probably don't need to be environment variables, but I did it anyway. Oh well...

```ts
export const giscusConfig = {
  id: "comments",
  ghAccount: "github-account-name",
  ghRepo: "github-repo-name",
  repoId: process.env.GH_REPO_ID,
  category: "category",
  categoryId: process.env.GH_CATEGORY_ID,
  mapping: "mapping",
  reactionsEnabled: "0",
  emitMetadata: "0",
  inputPosition: "top",
  theme: "dark_dimmed",
  lang: "en",
  loading: "lazy",
};
```
Remove the `components/PostComments` directory and the corresponding import in `components/PostPage` to omit the comment feature on posts.

- `npm run dev`

---

See the `posts` directory for examples on how to format posts.

A "post" is an `mdx` file with a `data` object on line 1.
```js
export const data = {
    title: string,
    slug: string,    // The exact name of the MDX file without the extension.
    author: string,
    description: string,
    date: string,    // year-month-day eg: "2024-05-22",
    tags: string[]
}
```
