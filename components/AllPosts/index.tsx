import { getAllFiles, getPostMetadata } from '@/util/getPostMetadata';
import ListPost from '../ListPost';

export default async function AllPosts() {
  const allFiles = await getAllFiles('posts');
  const postData = await getPostMetadata(allFiles);

  // console.log('postData:', postData);

  return (
    <div className="">
      <ul>
        {postData.map((post: any) => {
          return (
            <li key={post.title} className="">
              <ListPost post={post} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
