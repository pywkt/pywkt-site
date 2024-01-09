import Image from 'next/image';
import Link from 'next/link';

export const images = {
  img: ({ children, src, alt }: { children: React.ReactNode | any, src: string, alt: string }) => {
    return <Link href={src}><Image src={src} alt={alt} width={700} height={400}/></Link>;
  },
};
