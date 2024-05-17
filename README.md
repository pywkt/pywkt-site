# pywkt.com
Source code for [pywkt.com](https://pywkt.com)

NextJS/MDX-JS

---

- Clone Repo
- `cd` into directory
- `npm install`
- `touch .env`
- `touch config/giscusConfig.ts`

.env
```env
NEXT_PUBLIC_CF_IMG = <cloudflare_r2_bucket_url>
NEXT_PUBLIC_PL_URL = <plausible_url/script.js>
```

config/giscusConfig.ts
- Set up Giscus at [giscus.app](https://giscus.app/)
- Copy the settings to the `giscusConfig.ts` file
- split the `repo` field into two separate strings. One for the Github account and one for the repository name

```ts
export const giscusConfig = {
  id: "comments",
  ghAccount: "github-account-name",
  ghRepo: "github-repo-name",
  repoId: "repo-id",
  category: "category",
  categoryId: "category-id",
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
