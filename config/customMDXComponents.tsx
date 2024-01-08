import Link from 'next/link';

type CustomComponents = {
  [key in string]: Function;
};

export const customComponents: CustomComponents = {
  a: (link: { href: string; children: string }) => {
    const { href, children } = link;
    const isExternal = href.includes('https://');

    return (
      <Link href={href} target={isExternal ? '_blank' : '_self'}>
        {children}
      </Link>
    );
  },
  code: ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className: string;
  }) => (
    <code className={className} style={{ borderRadius: '10px' }}>
      {children}
    </code>
  ),
};
