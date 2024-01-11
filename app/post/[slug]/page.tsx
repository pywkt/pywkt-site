import fs from 'node:fs/promises';
import { compile, run } from '@mdx-js/mdx';
import * as jsxRuntime from 'react/jsx-runtime';
import remarkGfm from 'remark-gfm';
import { customComponents } from '@/config/customMDXComponents';
import PostPage from '@/components/PostPage';
import rehypePrettyCode from 'rehype-pretty-code';
import { cookies } from 'next/headers';
import { Metadata } from 'next';
import { getSinglePostMeta, getAllFiles } from '@/util/getPostMetadata';

type Props = {
  params: { id: string; title: string; slug: string };
};

export async function generateStaticParams() {
  const posts = await getAllFiles('posts');
  return posts.map((post) => ({ slug: post.split('.')[0] }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const postMeta: any = await getSinglePostMeta(params.slug);

  return {
    title: {
      default: 'pywkt.com',
      absolute: `${postMeta.title} | pywkt.com`,
    },
    description: postMeta.description,
    keywords: postMeta.tags,
    authors: [{ name: 'pywkt', url: 'https://pywkt.com' }],
    publisher: 'pywkt',
    creator: 'pywkt',
    referrer: 'origin-when-cross-origin',
    applicationName: 'pywkt.com',
    generator: 'Next.js',
    formatDetection: { email: false, address: false, telephone: false },
    metadataBase: new URL('https://pywkt.com'),
    openGraph: {
      title: `${postMeta.title} | pywkt.com`,
      description: postMeta.description,
      url: `https://pywkt.com/post/${postMeta.slug}`,
      siteName: 'pywkt.com',
      locale: 'en_US',
      type: 'article',
      publishedTime: new Date(postMeta.date).toISOString(),
      authors: ['pywkt'],
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: '/favicon.ico',
    },
    twitter: {
      card: 'summary_large_image',
      title: postMeta.title,
      description: postMeta.description,
      creator: 'pywkt',
    },
    category: 'technology',
  };
}
export default async function Page({ params }: { params: { slug: string } }) {
  const cookieValue = cookies().get('theme')?.value || '';

  const options = {
    theme: cookieValue === 'dark' ? 'catppuccin-macchiato' : 'material-theme',
    // theme: 'material-theme',
    defaultLang: {
      block: 'javascript',
      inline: 'shell',
    },
    tokensMap: {
      txt: 'entity.name.',
    },
    keepBackground: cookieValue === 'dark' ? true : true,
  };

  // console.log('post/[slug]', process.cwd());
  const code = String(
    await compile(await fs.readFile(`./posts/${params.slug}.mdx`), {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [[rehypePrettyCode, options]],
      outputFormat: 'function-body',
      development: false,
    }),
  );

  const { default: Content, data } = await run(code, {
    ...jsxRuntime,
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
