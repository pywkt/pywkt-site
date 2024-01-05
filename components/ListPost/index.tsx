import Link from "next/link";

export default function ListPost({ post }: { post: any }) {
  return (
    <div>
              <Link href={`/${post.slug}`}>{post.title}</Link>
              <h2 className=''>{post.description}</h2>
              {post.tags.map((tag: string) => (
                <span key={tag} className='text-xs'>
                  <Link href={`/tag/${tag}`}>{`${tag} `}</Link>
                </span>
              ))}
    </div>
  );
}
