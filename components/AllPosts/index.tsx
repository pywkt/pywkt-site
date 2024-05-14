import { getAllFiles, getPostMetadata } from "@/util/getPostMetadata";
import ListPost from "../ListPost";

export type Post = {
  title: string;
  slug: string;
  author: string;
  description: string;
  date: string;
  tags: string[];
  lastUpdated?: string
};

export default async function AllPosts() {
  const allFiles = await getAllFiles("posts");
  const postData = (await getPostMetadata(allFiles)) as Post[];

  if (!postData) return;

  return (
    <div>
      <ul>
        {postData.reverse().map((post) => {
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
