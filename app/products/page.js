import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../../database/products';
import banner from '../../public/images/banners/global-banner.jpeg';
import styles from './page.module.scss';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Products',
  description: 'OVerview of all available Global Products',
};

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div>
      <div className={styles.home}>
        <Image src={banner} width="0%" height="0" className={styles.banner} />
        <h3 className={styles.titlePage}>Global G</h3>
        <div className={styles.description}>
          <p>
            The Global G series of knives are Global‘s classic collection of
            larger, longer bladed knives with weighted hollow handles. The
            Global G range knives all have Global’s famous Chromova18 blades and
            are sharpened to a 15 degree angle. The Global G range contains
            extremely diverse knives. There are 12 different chef’s knives alone
            in the range constituting a number of different sizes and shapes
            including the award winning G-2, which has been feature in numerous
            publications and won many awards. Within the G range you will also
            find; vegetable choppers, Santoku knives, filterers, bread and
            slicing knives. There is a knife literally for any and every
            purpose. Many of these knives have multiple size options available
            and fluted varieties.
          </p>
        </div>
      </div>
      <div className={styles.grid}>
        {products.map((item) => {
          return (
            <div key={item.id} className={styles.items}>
              <div className={styles.card}>
                <Link
                  href={`/products/${item.id}`}
                  data-test-id={`product-${item.id}`}
                >
                  <Image
                    // src={`/images/products/${item.name}-${item.id}.jpg`}
                    src={`/images/${item.image}`}
                    alt={item.name}
                    className={styles.image}
                    width="200"
                    height="150"
                  />
                  <div className={styles.title}>{item.title}</div>
                </Link>

                <div className={styles.header}>{item.header}</div>
                <div className={styles.header}>{item.sub}</div>
                <div className={styles.price}>€ {item.price}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
