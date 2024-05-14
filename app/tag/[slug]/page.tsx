import { Post } from "@/components/AllPosts";
import ListPost from "@/components/ListPost";
import { getAllFiles, getPostMetadata } from "@/util/getPostMetadata";
import { getAllTags } from "@/util/getTags";

export async function generateStaticParams() {
  const tags = await getAllTags("posts");
  if (!tags) return [];
  return tags.map((tag) => ({ slug: tag }));
}

export default async function TagPage({
  params,
}: {
  params: { slug: string };
}) {
  const allFiles = await getAllFiles("posts");
  const postData = (await getPostMetadata(allFiles)) as Post[];
  const matchingPosts = postData.filter((post) =>
    post.tags.includes(params.slug),
  );

  const sortedPosts = matchingPosts.sort(
    (a, b) => Date.parse(b.date) - Date.parse(a.date),
  );

  return (
    <div>
      <ul>
        {sortedPosts.map((post) => (
          <li key={post.title}>
            <ListPost post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
}
