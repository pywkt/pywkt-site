import Link from 'next/link';
import { getAllTags } from '@/util/getTags';

export default async function TagList() {
  const uniqueTags = await getAllTags('posts');

  return (
    <ul>
      {uniqueTags.map((tag: string) => (
        <li key={tag} className="leading-4">
          <Link href={`/tag/${tag}`} className="text-xs">{tag}</Link>
        </li>
      ))}
    </ul>
  );
}
