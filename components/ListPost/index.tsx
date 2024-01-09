import Link from 'next/link';
import PostDate from '../PostDate';

export default function ListPost({ post }: { post: any }) {
  return (
    <section>
      <h1 className='text-xl font-bold'>
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <PostDate date={post.date} />
      <p className='text-md my-4'>{post.description}</p>
      {post.tags.map((tag: string) => (
        <span key={tag} className='listPostTags text-xs mr-1'>
          <Link href={`/tag/${tag}`}>{`${tag} `}</Link>
        </span>
      ))}

      <hr className='my-6 border-border' />
    </section>
  );
}
