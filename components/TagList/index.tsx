import Link from "next/link";
import { getAllTags } from "@/util/getTags";
import styles from "./styles.module.css";

export default async function TagList() {
  const { tagListUl } = styles;
  const uniqueTags = await getAllTags("posts");

  if (!uniqueTags) return null;

  return (
    <ul className={tagListUl}>
      {uniqueTags.sort().map((tag: string) => (
        <li key={tag}>
          <Link href={`/tag/${tag}`}>{tag}</Link>
        </li>
      ))}
    </ul>
  );
}
