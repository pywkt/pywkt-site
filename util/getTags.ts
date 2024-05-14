import { getAllFiles, getPostMetadata } from "./getPostMetadata";

export const getAllTags = async (type: string) => {
  if (!type) return;
  const allFiles = await getAllFiles(type);
  const postData = await getPostMetadata(allFiles);
  const allTags = postData?.map((pd: any) => pd?.tags).flat();

  function removeDuplicates(array: string[]) {
    return [...new Set(array)];
  }

  const uniqueTags = removeDuplicates(allTags);

  return uniqueTags;
};
