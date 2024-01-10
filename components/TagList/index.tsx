import Link from 'next/link';
import { getAllTags } from '@/util/getTags';
import styles from './styles.module.css';

export default async function TagList() {
  const { tagListUl } = styles;
  const uniqueTags = await getAllTags('posts');


  return (
    <ul className={tagListUl}>
      {uniqueTags.map((tag: string) => (
        <li key={tag} className="leading-4">
          <Link href={`/tag/${tag}`} className="text-xs">{tag}</Link>
        </li>
      ))}
    </ul>
  );
}
