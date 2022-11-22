import initialState from '../../initialState';
import { Products } from '../../containers/Products';
import HEAD from '../../components/SEO';

export const Home = () => {
  return (
    <>
      <HEAD pageTitle="Products" description="Products of all categories!" />

      <Products products={initialState.products} />
    </>
  );
};
