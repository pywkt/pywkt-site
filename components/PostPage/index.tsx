import PostDate from '../PostDate';
import styles from './styles.module.css';

export default function PostPage({
  content,
  data,
}: {
  content: React.ReactNode;
  data: any;
}) {
  const { post } = styles;
  return (
    <section className=''>
      <h1>{data.title}</h1>
      <PostDate date={data.date} />
      <article className={post}>{content}</article>
    </section>
  );
}
