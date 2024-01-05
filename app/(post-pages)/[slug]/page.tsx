import fs from 'node:fs/promises';
import { compile, run } from '@mdx-js/mdx';
import * as runtime from 'react/jsx-runtime';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import { customComponents } from '@/config/customMDXComponents';
import PostPage from '@/components/PostPage';

export default async function Page({ params }: { params: { slug: string } }) {
  const code = String(
    await compile(await fs.readFile(`./posts/${params.slug}.mdx`), {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeHighlight],
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
