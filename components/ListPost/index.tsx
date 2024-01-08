import Link from 'next/link';

export default function ListPost({ post }: { post: any }) {
  return (
    <div>
      <h1 className='text-2xl'>
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <p className="text-xs">{post.date}</p>
      <p className='text-md my-4'>{post.description}</p>
      {post.tags.map((tag: string) => (
        <span key={tag} className='text-xs'>
          <Link href={`/tag/${tag}`}>{`#${tag} `}</Link>
        </span>
      ))}
      
      <hr className="my-6"/>
    </div>
  );
}
