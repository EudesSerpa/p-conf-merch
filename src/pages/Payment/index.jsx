import { useContext } from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { AppContext } from '../../context/AppContext';
import { handleSumTotal } from '../../utils/handleSumTotal';
import './styles.css';
import { useNavigate } from 'react-router-dom';

export const Payment = () => {
  const {
    state: { cart, buyer },
    addNewOrder,
  } = useContext(AppContext);
  const navigate = useNavigate();

  const handlePaymentSuccess = (data) => {
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        products: cart,
        payment: data,
      };

      addNewOrder(newOrder);
      navigate('/checkout/success');
    }
  };

  return (
    <>
      <section className="Payment-content">
        <header>
          <h3>Summary of the order</h3>
        </header>

        <ul>
          {cart.map(({ id, title, price }) => (
            <li key={id} className="Payment-item">
              <article>
                <h4>{title}</h4>
                <span>{price}</span>
              </article>
            </li>
          ))}
        </ul>

        <footer>
          <PayPalButtons
            style={{ layout: 'vertical' }}
            createOrder={(data, actions) =>
              actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: Number.parseFloat(handleSumTotal(cart)).toFixed(2),
                    },
                  },
                ],
              })
            }
            onError={(error) => {
              console.error(
                '🚀 ~ file: index.jsx ~ line 61 ~ Payment ~ error',
                error
              );
            }}
            onApprove={(data, actions) => {
              return actions.order
                .capture()
                .then((data) => {
                  handlePaymentSuccess(data);
                })
                .catch((error) => console.log(error));
            }}
          />
        </footer>
      </section>

      <aside className="Payment-sidebar">
        <p>Total: ${handleSumTotal(cart)}</p>
      </aside>
    </>
  );
};
