import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.inner}>

          <Link href="/" className={styles.logo}>
            PoemHub
          </Link>

          <div className={styles.menu}>

            <Link href="/Search" className={styles.menuItem}>
              Search
            </Link>
            <Link href="/" className={styles.menuItem}>
              Homepage
            </Link>

            <Link href="/feed" className={styles.menuItem}>
              Feed
            </Link>

            <Link href="/profile" className={styles.menuItem}>
              Profile
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}
