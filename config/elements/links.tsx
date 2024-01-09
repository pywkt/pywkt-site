import Link from 'next/link';

export const links = {
  a: (link: { href: string; children: string }) => {
    const { href, children } = link;
    const isExternal = href.includes('https://');

    return (
      <Link href={href} target={isExternal ? '_blank' : '_self'}>
        {children}
      </Link>
    );
  },
};
