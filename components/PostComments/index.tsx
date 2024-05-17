"use client";
import { useState } from "react";
import Giscus from "@giscus/react";
import { giscusConfig } from "@/config/giscusConfig";

const PostComments = ({ title }: { title: string }) => {
  const [showComments, setShowComments] = useState(false);
  const { id, repoId, category, categoryId, ghAccount, ghRepo, theme } =
    giscusConfig;

  if (!giscusConfig) {
    return null;
  }

  return (
    <div>
      <button
        type="button"
        onClick={() => setShowComments((prev) => !prev)}
        style={{ border: 0 }}
      >
        &gt; Comments
      </button>
      {showComments && (
        <Giscus
          id={id}
          repo={`${ghAccount}/${ghRepo}`}
          repoId={repoId}
          category={category}
          categoryId={categoryId}
          mapping="specific"
          term={title}
          reactionsEnabled="0"
          emitMetadata="0"
          inputPosition="top"
          theme={theme}
          lang="en"
          loading="lazy"
        />
      )}
    </div>
  );
};

export default PostComments;
