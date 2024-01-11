import Image from 'next/image';
import Link from 'next/link';

export const images = {
  img: ({ src, alt }: { src: string; alt: string }) => {
    return (
      <Link
        href={src}
        style={{ position: 'relative', width: '200px', height: '200px' }}
      >
        <Image
          src={src}
          alt={alt}
          width={800}
          height={300}
          sizes='(max-width: 640px) 30vw, 800px'
          style={{ objectFit: 'cover', transform: 'translate3d(0, 0, 0)' }}
        />
      </Link>
    );
  },
};
