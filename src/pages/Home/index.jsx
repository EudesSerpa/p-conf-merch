import { Link, useLoaderData } from 'react-router-dom';
import initialState from '../../initialState';
import { Products } from '../../containers/Products';

export const Home = () => {
  const { body: products } = useLoaderData();

  return <Products products={initialState.products} />;
};
