import ListPost from '@/components/ListPost';
import { getAllFiles, getPostMetadata } from '@/util/getPostMetadata';
import { getAllTags } from '@/util/getTags';

export async function generateStaticParams() {
  const tags = await getAllTags('posts')
  return tags.map(tag => ({ slug: tag }))
}

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
