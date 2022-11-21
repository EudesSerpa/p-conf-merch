import { useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import './styles.css';

export const Information = () => {
  const {
    state: { cart },
    addToBuyer,
  } = useContext(AppContext);
  const navigate = useNavigate();
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const buyerData = Object.fromEntries(formData);

    addToBuyer(buyerData);
    navigate('/checkout/payment');
  };

  return (
    <section className="Information">
      <div className="Information-content">
        <header>
          <h2>Contact information:</h2>
        </header>

        <section className="Information-form">
          <form ref={formRef} onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <input id="name" name="name" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input id="email" name="email" />
            </div>
            <div>
              <label htmlFor="address">Address</label>
              <input id="address" name="address" />
            </div>
            <div>
              <label htmlFor="apartment">Apartment</label>
              <input id="apartment" name="apartment" />
            </div>
            <div>
              <label htmlFor="city">City</label>
              <input id="city" name="city" />
            </div>
            <div>
              <label htmlFor="province">Province</label>
              <input id="province" name="province" />
            </div>
            <div>
              <label htmlFor="country">Country</label>
              <input id="country" name="country" />
            </div>
            <div>
              <label htmlFor="postal-code">Postal Code</label>
              <input id="postal-code" name="postal-code" />
            </div>
            <div>
              <label htmlFor="phone">Phone</label>
              <input id="phone" name="phone" />
            </div>

            <div className="Information-buttons">
              <button type="button" onClick={() => navigate(-1)}>
                Back
              </button>

              <button type="submit">Pay</button>
            </div>
          </form>
        </section>

        <aside className="Information-sidebar">
          <header>
            <h3>Order</h3>
          </header>

          <ul>
            {cart.map(({ id, title, price }) => (
              <article key={id} className="Information-item">
                <h4>{title}</h4>
                <span>${price}</span>
              </article>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
};
