import Image from 'next/image';
import Link from 'next/link';

export const images = {
  img: ({
    src,
    alt,
  }: {
    src: string;
    alt: string;
  }) => {
    return (
      <Link href={src}>
        <Image src={src} alt={alt} width={700} height={400} />
      </Link>
    );
  },
};
