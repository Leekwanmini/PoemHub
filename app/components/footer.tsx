import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <p className={styles.mainText}>
            &copy; 2024 PoemHub - A platform for poets
          </p>
          <p className={styles.subText}>
            Front-end Group Project
          </p>
        </div>
      </div>
    </footer>
  );
}
