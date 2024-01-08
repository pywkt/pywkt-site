import ListPost from '@/components/ListPost';
import { getAllFiles, getPostMetadata } from '@/util/getPostMetadata';

export default async function TagPage({
  params,
}: {
  params: { slug: string };
}) {
  console.log('tag page params:', params.slug);

  const allFiles = await getAllFiles('posts');
  const postData = await getPostMetadata(allFiles);

  // console.log('postData:', postData)
  const matchingPosts = postData.filter((post: any) => post.tags.includes(params.slug));
  // console.log('matching:', matchingPosts)

  return <div className="">
    <ul>
      {matchingPosts.map((post: any) => (
      <li key={post.title} className="">
          <ListPost post={post} />
      </li>
      ))}

    </ul>
  </div>;
}
