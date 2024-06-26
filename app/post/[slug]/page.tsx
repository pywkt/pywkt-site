import fs from "node:fs/promises";
import { compile, run } from "@mdx-js/mdx";
import * as jsxRuntime from "react/jsx-runtime";
import remarkGfm from "remark-gfm";
import { customComponents } from "@/config/customMDXComponents";
import PostPage from "@/components/PostPage";
import rehypePrettyCode from "rehype-pretty-code";
import { postMetadata } from "./postMetadata";
import { Metadata } from "next";
import { getSinglePostMeta, getAllFiles } from "@/util/getPostMetadata";
import { Post } from "@/components/AllPosts";

type MetadataProps = {
  params: { id: string; title: string; slug: string };
};

export async function generateStaticParams() {
  const posts = await getAllFiles("posts");
  return posts.map((post) => ({ slug: post.split(".")[0] }));
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
    // theme: cookieValue === 'dark' ? 'catppuccin-macchiato' : 'material-theme',
    theme: "material-theme",
    defaultLang: {
      block: "javascript",
      inline: "shell",
    },
    tokensMap: {
      txt: "entity.name.",
    },
    // keepBackground: cookieValue === 'dark' ? true : true,
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
    ...jsxRuntime,
    Fragment: "div",
  });

  return (
    <PostPage
      content={<Content components={customComponents} />}
      data={data as Post}
    />
  );
}

// Helpful Links
// https://rivea0.github.io/blog/converting-mdx-files-with-frontmatter-into-an-mdx-component-nextjs-13
// https://www.codeconcisely.com/posts/nextjs-mdx/
// https://mdxjs.com/packages/mdx/
