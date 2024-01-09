import { getAllFiles, getPostMetadata } from '@/util/getPostMetadata';
import ListPost from '../ListPost';

export default async function AllPosts() {
  const allFiles = await getAllFiles('posts');
  const postData = await getPostMetadata(allFiles);

  return (
    <div>
      <ul>
        {postData.map((post: any) => {
          return (
            <li key={post.title}>
              <ListPost post={post} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
