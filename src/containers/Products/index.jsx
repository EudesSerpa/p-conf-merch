import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { Product } from '../../components/Product';
import './styles.css';

export const Products = ({ products }) => {
  const { addToCart } = useContext(AppContext);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <ul className="Products__items">
      {products?.map((product) => (
        <Product
          key={product.id}
          {...product}
          handleAddToCart={handleAddToCart}
        />
      ))}
    </ul>
  );
};
