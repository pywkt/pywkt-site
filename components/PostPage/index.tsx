export default function PostPage({
  content,
  data,
}: {
  content: React.ReactNode;
  data: any;
}) {
  return (
    <div className='w-full px-6 bg-slate-800'>
      <h1>{data.title}</h1>
      {content}
    </div>
  );
}
