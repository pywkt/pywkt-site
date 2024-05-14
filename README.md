# pywkt.com
Source code for [pywkt.com](https://pywkt.com)

NextJS/MDX-JS

---

- Clone Repo
- `cd` into directory
- `npm install`
- `touch .env .env.development .env.production`

.env
```env
NEXT_PUBLIC_CF_IMG = <cloudflare_r2_bucket_url>
NEXT_PUBLIC_PL_URL = <plausible_url/script.js>
```

.env.development
```env
NEXT_PUBLIC_IS_PROD = false
```

.env.production
```env
NEXT_PUBLIC_IS_PROD = true
```

- `npm run dev`
