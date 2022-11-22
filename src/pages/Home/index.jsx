import initialState from '../../initialState';
import { Products } from '../../containers/Products';
import Seo from '../../components/Seo';

export const Home = () => {
  return (
    <>
      <Seo pageTitle="Products" description="Products of all categories!" />

      <Products products={initialState.products} />
    </>
  );
};
