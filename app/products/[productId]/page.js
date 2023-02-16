import { notFound } from 'next/navigation';
import { getProductById } from '../../../database/products';
// import { productNotFoundMetadata } from './not-found';
import Products from './Products';

export const dynamic = 'force-dynamic';

/* export async function generateMetaData({ props }) {
  const singleProduct = await getProductById(parseInt(props.params.productId));
  if (!singleProduct) {
    return productNotFoundMetadata;
  }

  return {
    title: singleProduct.header,
    description: `Page for ${singleProduct.header}`,
  };
} */

export default async function ProductPage(props) {
  const singleProduct = await getProductById(parseInt(props.params.productId));
  if (!singleProduct) {
    notFound();
  }
  return <Products singleProduct={singleProduct} />;
}
