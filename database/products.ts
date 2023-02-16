import { cache } from 'react';
import { sql } from './connect';

export type Product = {
  id: number;
  name: string;
  title: string;
  header: string;
  sub: string;
  description: string | null;
  price: number;
};

export const getProducts = cache(async () => {
  // eslint-disable-next-line @ts-safeql/check-sql
  const products = await sql<Product[]>`
  SELECT * FROM products
  `;
  return products;
});

export const getProductById = cache(async (id: number) => {
  // eslint-disable-next-line @ts-safeql/check-sql
  const [product] = await sql<Product[]>`
    SELECT
      *
    FROM
      products
    WHERE
      id = ${id}
  `;
  return product;
});
