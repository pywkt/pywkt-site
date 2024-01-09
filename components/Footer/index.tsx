import Link from 'next/link';

export default function Footer() {
  return (
    <div className='text-xs w-full flex-col justify-center items-center gap-2 mt-12 mb-8'>
      <p className='font-bold'><Link href="/">pywkt</Link></p>
      {/* <p>|</p> */}
      {/* <p className='font-ital'>a collection of notes</p> */}
      {/* <p className="footerLinks font-ital"> */}
      {/*   <Link href="https://gitlab.com/pywkt" className="">gitlab</Link> */}
      {/* </p> */}
    </div>
  );
}
