import Link from 'next/link';
import styles from './styles.module.css';

export default function Footer() {
  const { footer } = styles;
  return (
    <div className={footer}>
      <p className='font-bold'>
        <Link href='/'>pywkt</Link>
      </p>
      {/* <p>|</p> */}
      {/* <p className='font-ital'>a collection of notes</p> */}
      {/* <p className="footerLinks font-ital"> */}
      {/*   <Link href="https://gitlab.com/pywkt" className="">gitlab</Link> */}
      {/* </p> */}
    </div>
  );
}
