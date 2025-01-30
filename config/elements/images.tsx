"use client";
import Image from "next/image";

const imageLoader = ({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) => {
  return `https://${process.env.NEXT_PUBLIC_CF_IMG}${src}?w=${width}&q=${quality || 75
    }`;
};

export const images = {
  img: ({ src, alt }: { src: string; alt: string }) => {
    return (
      <Image
        loader={imageLoader}
        src={`${process.env.NEXT_PUBLIC_CF_IMG}/${src}`}
        alt={alt}
        width={800}
        height={300}
        sizes="(max-width: 640px) 30vw, 800px"
        style={{ objectFit: "cover", transform: "translate3d(0, 0, 0)" }}
      />
    );
  },
};
