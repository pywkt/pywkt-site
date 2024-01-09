import Link from 'next/link';
import PostDate from '../PostDate';

export default function ListPost({ post }: { post: any }) {
  return (
    <section className="allPostsList">
      <h1>
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <PostDate date={post.date} />
      <p>{post.description}</p>
      {post.tags.map((tag: string) => (
        <span key={tag} className='listPostTags text-xs mr-1'>
          <Link href={`/tag/${tag}`}>{`${tag} `}</Link>
        </span>
      ))}

      <hr />
    </section>
  );
}
