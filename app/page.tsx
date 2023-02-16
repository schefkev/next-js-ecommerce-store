import Image from 'next/image';
import banner from '../public/images/banners/global-classic-web-banner.jpeg';
import styles from './page.module.scss';

export const metadata = {
  title: 'Home',
  description: 'Get the ultimate experience with Global Chef knives',
};

export default function HomePage() {
  return (
    <div className={styles.home}>
      <Image
        src={banner}
        alt="banner"
        width={1000}
        height={350}
        className={styles.banner}
      />
      <h1 className={styles.titlePage}>HOME</h1>
      <p className={styles.description}>
        Global Knives were introduced to the market by Komin Yamada, a legendary
        Japanese product designer. He was given a brief to create a range of
        knives that were truly innovative and different, using the best
        available manufacturing methods and machinery with the latest stainless
        steel materials. He created a series of knives which brought the art of
        Japanese knife making to Western consumers and chefs. Global knives use
        their proprietary steel, Chromova 18 in all their knives, a high carbon
        steel with molybdenum and vanadium mix achieving a hardness rating of
        56-58 HRC.
      </p>
      <p className={styles.description}>
        All Global ranges use a stainless steel handle, a feature that has
        become the brand's trademark. Global knives are famous all over the
        world for their outstanding design, performance and ease of use in both,
        home and professional settings. Still the market leader to which all
        other brands are compared.
      </p>
      <p className={styles.description}>
        Choose from their 3 ranges. Global Classic, Ni and Sai.
      </p>
    </div>
  );
}
