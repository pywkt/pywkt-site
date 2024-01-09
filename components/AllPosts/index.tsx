import { getAllFiles, getPostMetadata } from '@/util/getPostMetadata';
import ListPost from '../ListPost';

export default async function AllPosts() {
  const allFiles = await getAllFiles('posts');
  const postData = await getPostMetadata(allFiles);

  // const sorted = postData.sort((a, b) => b.date - a.date)
  // const sorted = postData.reverse()
  // console.log('postData:', postData)
  // console.log('sorted:', sorted)

  return (
    <div>
      <ul>
        {postData.reverse().map((post: any) => {
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
