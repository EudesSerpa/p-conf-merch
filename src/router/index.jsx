import { createBrowserRouter } from 'react-router-dom';
import { loaderProducts } from '../services/products/getProducts';
import { loaderProduct } from '../services/products/getSingleProduct';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';
import { Layout } from '../components/Layout';
import { Product } from '../components/Product';
import { Checkout } from '../containers/Checkout';
import { Information } from '../containers/Information';
import { Payment } from '../pages/Payment';
import { Success } from '../containers/Success';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        errorElement: <NotFound />,
        children: [
          {
            index: true,
            element: <Home />,
            loader: loaderProducts,
          },
          {
            path: '/:id',
            element: <Product />,
            loader: loaderProduct,
          },
          {
            path: '/checkout',
            element: <Checkout />,
          },
          {
            path: '/checkout/information',
            element: <Information />,
          },
          {
            path: '/checkout/payment',
            element: <Payment />,
          },
          {
            path: '/checkout/success',
            element: <Success />,
          },
        ],
      },
    ],
  },
]);
