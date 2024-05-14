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
  const postData = await getPostMetadata(allFiles);
  const matchingPosts = postData.filter((post: any) =>
    post.tags.includes(params.slug),
  );

  const sortedPosts = matchingPosts.sort(
    (a: any, b: any) => Date.parse(b.date) - Date.parse(a.date),
  );

  return (
    <div>
      <ul>
        {sortedPosts.map((post: any) => (
          <li key={post.title}>
            <ListPost post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
}
