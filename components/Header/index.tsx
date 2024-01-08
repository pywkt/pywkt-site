import Link from 'next/link';

export default function Header() {
  return (
    <div className='w-full py-2 flex justify-end items-center'>
      <Link href='/'><h1 className="text-3xl">pywkt</h1></Link>
    </div>
  );
}
