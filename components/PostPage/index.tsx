import { Post } from "../AllPosts";
import PostComments from "../PostComments";
import PostDate from "../PostDate";
import UpdatedDate from "../UpdatedDate";
import styles from "./styles.module.css";

export default async function PostPage({
  content,
  data,
}: {
  content: React.ReactNode;
  data: Post;
}) {
  const { post, commentHr } = styles;
  return (
    <section>
      <h1>{data.title}</h1>
      <PostDate date={data.date} dateOnly={!Boolean(data.lastUpdated)} />
      {data.lastUpdated && <UpdatedDate date={data.lastUpdated} />}
      <article className={post}>{content}</article>
      <hr className={commentHr}/>
      <PostComments title={data.title}/>
      <hr className={commentHr}/>
    </section>
  );
}
