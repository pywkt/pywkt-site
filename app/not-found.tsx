import Link from 'next/link';

export const runtime = 'edge';

export default function NotFound() {
  return (
    <div>
      <h2>Nothing here</h2>
      <Link href='/'>Return</Link>
    </div>
  );
}
