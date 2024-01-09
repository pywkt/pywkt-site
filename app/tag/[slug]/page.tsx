import ListPost from '@/components/ListPost';
import { getAllFiles, getPostMetadata } from '@/util/getPostMetadata';

export default async function TagPage({
  params,
}: {
  params: { slug: string };
}) {
  const allFiles = await getAllFiles('posts');
  const postData = await getPostMetadata(allFiles);
  const matchingPosts = postData.filter((post: any) =>
    post.tags.includes(params.slug),
  );

  return (
    <div>
      <ul>
        {matchingPosts.map((post: any) => (
          <li key={post.title}>
            <ListPost post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
}
