'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { getParsedCookie, setStringifiedCookie } from '../../../utils/cookies';
import styles from './Products.module.scss';

export default function Products({ singleProduct }) {
  const [inputAmount, setInputAmount] = useState(1);
  const router = useRouter();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{singleProduct.title}</h1>
      <h3 className={styles.header}>{singleProduct.header}</h3>
      <div className={styles.card}>
        <Image
          src={`/images/${singleProduct.image}`}
          alt={singleProduct.name}
          width="370"
          height="280"
          className={styles.image}
          data-test-id="product-image"
        />
        <div className={styles.description}>{singleProduct.description}</div>
      </div>
      <div data-test-id="product-price" className={styles.price}>
        {singleProduct.price} €
      </div>
      <div>
        <label data-test-id="product-quantity" htmlFor="amount">
          Qty:
        </label>
        <input
          type="number"
          min="1"
          max="10"
          value={inputAmount}
          onChange={(event) => setInputAmount(event.currentTarget.value)}
        />

        <button
          data-test-id="product-add-to-cart"
          className={styles.button}
          onClick={() => {
            // get the cookie
            const producstInCookies = getParsedCookie('cart');

            // if there is no cookie we initialize the value with 1
            if (!producstInCookies) {
              // create the cookie with a new object
              setStringifiedCookie('cart', [
                { id: singleProduct.id, amount: 1 },
              ]);
              // if there is no cookie stop here
              return;
            }

            // try to find the fruit inside of the cookie
            const foundProduct = producstInCookies.find((productCookie) => {
              return productCookie.id === singleProduct.id;
            });

            // my product is inside of the cookie
            if (foundProduct) {
              // Add amount to the foundProduct
              foundProduct.amount =
                Number(foundProduct.amount) + Number(inputAmount);
              // my product is inside of the cookie
            } else {
              // Add the product to the array of products in cookies
              producstInCookies.push({
                id: singleProduct.id,
                amount: 1,
              });
            }

            // Update the cookie after transformation
            setStringifiedCookie('cart', producstInCookies);
            router.refresh();
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
