import fs from 'node:fs/promises';
import { compile, run } from '@mdx-js/mdx';

const allMeta = async (file: string) => {
  const code = await compile(await fs.readFile(`./posts/${file}`), {
    outputFormat: 'function-body',
    development: false,
  });

  const { data } = await run(String(code), { Fragment: 'div' });
  return data;
};

// This is a bit wonky but it seems to work....
export const getPostMetadata = async (fileList: string[]) =>
  Promise.all(fileList.map(async (post: string) => allMeta(post)));
