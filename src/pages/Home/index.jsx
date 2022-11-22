import { Products } from '../../containers/Products';
import { Seo } from '../../components/SEOHelmet';
import { useLoaderData } from 'react-router-dom';

export const Home = () => {
  const { products } = useLoaderData();
  console.log('🚀 ~ file: index.jsx ~ line 7 ~ Home ~ products', products);
  return (
    <>
      <Seo pageTitle="Products" description="Products of all categories!" />

      <Products products={products} />
    </>
  );
};
