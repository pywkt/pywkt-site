import PostDate from '../PostDate';

export default function PostPage({
  content,
  data,
}: {
  content: React.ReactNode;
  data: any;
}) {
  return (
    <section className="">
      <h1>{data.title}</h1>
      <PostDate date={data.date} />
      <article className='postContent'>{content}</article>
    </section>
  );
}
