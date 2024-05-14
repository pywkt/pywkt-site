import Link from "next/link";
import PostDate from "../PostDate";
import styles from "./styles.module.css";
import { Post } from "../AllPosts";

export default function ListPost({ post }: { post: Post }) {
  const { allPostsList, listPostTags } = styles;

  return (
    <section className={allPostsList}>
      <h1>
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <PostDate date={post.date} dateOnly />
      <p>{post.description}</p>
      {post.tags.map((tag) => (
        <span key={tag} className={listPostTags}>
          <Link href={`/tag/${tag}`}>{`${tag} `}</Link>
        </span>
      ))}

      <hr />
    </section>
  );
}
