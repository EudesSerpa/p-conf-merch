// import { useLoaderData } from 'react-router-dom';
import './styles.css';

export const Product = ({
  id,
  title,
  description,
  price,
  image,
  handleAddToCart,
}) => {
  // const { body: product } = useLoaderData();

  return (
    <li key={id} className="Products__item">
      <figure>
        <img src={image} alt={title} />

        <figcaption className="Products__item-info">
          <h2>
            {title} <span>{price}</span>
          </h2>

          <p>{description}</p>

          <button
            type="button"
            onClick={() =>
              handleAddToCart({ id, title, description, price, image })
            }
          >
            Add to Cart
          </button>
        </figcaption>
      </figure>
    </li>
  );
};
