import fs from "node:fs/promises";
import * as runtime from "react/jsx-runtime";
import { compile, run } from "@mdx-js/mdx";
import { Metadata } from "next";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import { customComponents } from "@/config/customMDXComponents";
import PostPage from "@/components/PostPage";
import { Post } from "@/components/AllPosts";
import { postMetadata } from "./postMetadata";
import { getSinglePostMeta } from "@/util/getPostMetadata";
import { MDXComponents } from "mdx/types";
import { getValidSlugs } from "@/util/getValidSlugs";

type MetadataProps = {
  params: { id: string; title: string; slug: string };
};

export async function generateStaticParams() {
  const slugs = await getValidSlugs();
  const params = slugs.map((slug) => ({
    slug,
  }));

  return params;
}

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const postMeta = await getSinglePostMeta(params.slug);
  const meta = postMetadata(postMeta as Post);
  return meta;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const options = {
    grid: true,
    theme: {
      light: "rose-pine-moon",
      dark: "catppuccin-mocha",
    },
    bypassInlineCode: false,
    defaultLang: {
      block: "javascript",
      inline: "shell",
    },
    keepBackground: true,
    tokensMap: {
      txt: "entity.name.",
    },
  };

  const code = String(
    await compile(await fs.readFile(`./posts/${params.slug}.mdx`), {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [[rehypePrettyCode, options]],
      outputFormat: "function-body",
      development: false,
    }),
  );

  const { default: Content, data } = await run(code, {
    ...runtime,
    Fragment: "div",
  });

  return (
    <PostPage
      content={<Content components={customComponents as MDXComponents} />}
      data={data as Post}
    />
  );
}

// Helpful Links
// https://rivea0.github.io/blog/converting-mdx-files-with-frontmatter-into-an-mdx-component-nextjs-13
// https://www.codeconcisely.com/posts/nextjs-mdx/
// https://mdxjs.com/packages/mdx/
