import Link from 'next/link';
import styles from './styles.module.css';

export default function Header() {
  const { header } = styles;
  return (
    <div className={header}>
      <Link href='/'>
        <h1>pywkt</h1>
      </Link>
    </div>
  );
}
