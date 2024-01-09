import fs from 'node:fs/promises';
import { compile, run } from '@mdx-js/mdx';
import * as runtime from 'react/jsx-runtime';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import { customComponents } from '@/config/customMDXComponents';
import PostPage from '@/components/PostPage';
import rehypePrettyCode from 'rehype-pretty-code';
import { cookies } from 'next/headers';

export default async function Page({ params }: { params: { slug: string } }) {
  const cookieValue = cookies().get('theme')?.value || '';

  /** @type {import('rehype-pretty-code').Options} */
  const options = {
    theme: cookieValue === 'dark' ? 'catppuccin-macchiato' : 'material-theme',
    // theme: {
    //   dark: 'github-dark-dimmed',
    //   light: 'github-light',
    // },
    defaultLang: {
      block: 'javascript',
      inline: 'shell',
      // inline: 'plaintext'
    },
    tokensMap: {
      txt: "entity.name."
    },
    keepBackground: cookieValue === 'dark' ? true : true
  };

  const code = String(
    await compile(await fs.readFile(`./posts/${params.slug}.mdx`), {
      remarkPlugins: [remarkGfm],
      // rehypePlugins: [rehypeHighlight],
      rehypePlugins: [[rehypePrettyCode, options]],
      outputFormat: 'function-body',
      development: false,
    }),
  );

  const { default: Content, data } = await run(code, {
    ...runtime,
    Fragment: 'div',
  });

  return (
    <PostPage content={<Content components={customComponents} />} data={data} />
  );
}

// Helpful Links
// https://rivea0.github.io/blog/converting-mdx-files-with-frontmatter-into-an-mdx-component-nextjs-13
// https://www.codeconcisely.com/posts/nextjs-mdx/
// https://mdxjs.com/packages/mdx/
