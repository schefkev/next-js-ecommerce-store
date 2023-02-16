import Link from 'next/link';
import styles from './footer.module.scss';

export default function Footer() {
  return (
    <footer>
      <div>
        <div className={styles.footer}>
          <div className={styles.footer}>
            <ul className={styles.li}>
              <span>CUSTOMER CARE</span>
              <Link href="/" className={styles.list}>
                <li>SUPPORT</li>
              </Link>
              <Link href="/" className={styles.list}>
                <li>FAQ</li>
              </Link>
            </ul>
          </div>
          <div className={styles.footer}>
            <ul className={styles.li}>
              <span>ABOUT US</span>
              <Link href="/" className={styles.list}>
                <li>OUR STORY</li>
              </Link>
              <Link href="/" className={styles.list}>
                <li>DESIGN</li>
              </Link>
            </ul>
          </div>
          <div className={styles.footer}>
            <ul className={styles.li}>
              <span>INFORMATION</span>
              <Link href="/" className={styles.list}>
                <li>TERMS & CONDITION</li>
              </Link>
              <Link href="/" className={styles.list}>
                <li>PRIVACY POLICY</li>
              </Link>
            </ul>
          </div>
          <div className={styles.footer}>
            <ul className={styles.li}>
              <span>CONTACT US</span>
              <Link href="/" className={styles.list}>
                <li>
                  <span>T: </span>
                  0664 12 34 5678
                </li>
              </Link>
              <Link href="/" className={styles.list}>
                <li>
                  <span>E: </span>
                  support@lecuisiner.at
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
