import Image from 'next/image';
import Link from 'next/link';
import ItemsInCart from '../app/ItemsInCart';
import logo from '../public/logo.png';
import styles from './header.module.scss';

export default function Header() {
  return (
    <header>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Link href="/">
            <Image alt="website logo" src={logo} width="100" height="30" />
          </Link>
        </div>
        <nav>
          <div className={styles.nav}>
            <Link href="/" className={styles.navItem}>
              Home
            </Link>
            <Link href="/" className={styles.navItem}>
              About Global
            </Link>
            <Link
              href="/products"
              data-test-id="products-link"
              className={styles.navItem}
            >
              Shop
            </Link>
            <Link
              href="/cart"
              data-test-id="cart-link"
              className={styles.navItem}
            >
              🛒 <ItemsInCart data-test-id="cart-count" />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
