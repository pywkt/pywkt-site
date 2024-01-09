import PostDate from '../PostDate';

export default function PostPage({
  content,
  data,
}: {
  content: React.ReactNode;
  data: any;
}) {
  return (
    <section>
      <h1 className='text-3xl'>{data.title}</h1>
      <PostDate date={data.date} />
      <article className='postContent mt-8'>{content}</article>
    </section>
  );
}
