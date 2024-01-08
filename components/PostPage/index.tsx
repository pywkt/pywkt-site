export default function PostPage({
  content,
  data,
}: {
  content: React.ReactNode;
  data: any;
}) {
  return (
    <div className=''>
      <h1>{data.title}</h1>
      {content}
    </div>
  );
}
