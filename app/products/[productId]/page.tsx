import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProductById } from '../../../database/products';
import { productNotFoundMetadata } from './not-found';
import Products from './Products';

export const dynamic = 'force-dynamic';

type Props = {
  params: { productId: string };
};

export async function generateMetaData(props: Props): Promise<Metadata> {
  const singleProduct = await getProductById(parseInt(props.params.productId));
  if (!singleProduct) {
    return productNotFoundMetadata;
  }

  return {
    title: singleProduct.header,
    description: `Page for ${singleProduct.header}`,
  };
}

export default async function ProductPage(props: Props) {
  const singleProduct = await getProductById(parseInt(props.params.productId));
  if (!singleProduct) {
    notFound();
  }
  return <Products singleProduct={singleProduct} />;
}
