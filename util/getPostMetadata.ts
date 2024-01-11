import fs from 'node:fs/promises';
import {path as dirPath} from 'node:path';
import { compile, run } from '@mdx-js/mdx';

const allMeta = async (file: string) => {
  console.log('getPostMetadata:', `/posts/${file}`);
  const code = await compile(
    await fs.readFile(`./posts/${file}`),
    {
      outputFormat: 'function-body',
      development: false,
    },
  );

  const { data } = await run(String(code), { Fragment: 'div' });
  return data;
};

const isProd = process.env.NEXT_PUBLIC_IS_PROD === "true"

// This is a bit wonky but it seems to work....
export const getPostMetadata = async (fileList: string[]) => {
  console.log('getPostMetadata:', fileList)
 return Promise.all(fileList.map(async (post: string) => allMeta(post)));
}

export const getAllFiles: (path: string) => Promise<string[]> = async (path) => {
  console.log('getAllFiles:', `${path}`)
  return fs.readdir(`${process.cwd()}/${path}`)
}

export const getSinglePostMeta = async (file: string) =>
  await allMeta(`${file}.mdx`);
