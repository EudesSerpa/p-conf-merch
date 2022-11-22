import { useContext } from 'react';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { handleSumTotal } from '../../utils/handleSumTotal';
import { Seo } from '../../components/SEOHelmet';
import './styles.css';

export const Checkout = () => {
  const {
    state: { cart },
    removeFromCart,
  } = useContext(AppContext);

  return (
    <>
      <Seo pageTitle="Orders list" description="Your products!" />

      <section className="Checkout">
        <div className="Checkout-content">
          <h3>Orders list</h3>

          <ul>
            {cart.map(({ id, title, price, quantity }) => (
              <li key={id}>
                <article className="Checkout__item">
                  <header className="Checkout__element">
                    <h4>{title}</h4>
                    <span>Price: ${price}</span>
                    <span>Quantity: {quantity}</span>
                    <span>Total: ${price * quantity}</span>
                  </header>

                  <footer>
                    <button
                      type="button"
                      aria-label="Delete"
                      onClick={() => removeFromCart(id)}
                    >
                      <MdDelete />
                    </button>
                  </footer>
                </article>
              </li>
            ))}
          </ul>
        </div>

        <aside className="Checkout__sidebar">
          <h3>Price total: ${cart.length && handleSumTotal(cart)}</h3>

          <Link to="/checkout/information">
            <button type="button">Go on with the order</button>
          </Link>
        </aside>
      </section>
    </>
  );
};
