import fs from 'node:fs/promises';
import Link from 'next/link';
import { getPostMetadata } from '@/util/getPostMetadata';

export default async function AllPosts() {
  const allFiles: string[] = await fs.readdir('./posts');
  const postData = await getPostMetadata(allFiles);

  console.log('postData:', postData)

  return (
    <div>
      <ul>
        {postData.map((post: any) => {
          return (
            <li key={post.title}>
              <Link href={`/${post.slug}`}>{post.title}</Link>
              <h2 className="">{post.description}</h2>
              {post.tags.map((tag: string) => (
              <span key={tag} className="text-xs">{`${tag} `}</span>
              ))}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
