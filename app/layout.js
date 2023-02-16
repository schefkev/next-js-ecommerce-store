import './global.scss';
import { Rubik } from '@next/font/google';
import Footer from '../components/footer';
import Header from '../components/header';
import CookieBanner from './cookiebanner/CookieBanner';
import styles from './layout.module.scss';

export const metadata = {
  title: {
    default: 'Global Shop',
    template: 'Global Shop | %s',
  },
  icons: {
    shortcut: '/favicon.ico',
  },
};

const rubik = Rubik({
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={rubik.className}>
      <head />
      <body className={styles.container}>
        <header>
          <Header />
        </header>
        <CookieBanner />
        <main /* className={styles.main} */>{children}</main>
        <footer /* className={styles.footer} */>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
