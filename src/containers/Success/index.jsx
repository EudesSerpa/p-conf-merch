import { useContext, useEffect } from 'react';
import { Map } from '../../components/Map';
import { AppContext } from '../../context/AppContext';
import { useGoogleAddress } from '../../hooks/useGoogleAddress';
import './styles.css';

export const Success = () => {
  const {
    state: { buyer },
    clearCart,
  } = useContext(AppContext);
  const location = useGoogleAddress({
    address: buyer[buyer.length - 1]?.address,
    city: buyer[buyer.length - 1]?.city,
    province: buyer[buyer.length - 1]?.province,
    country: buyer[buyer.length - 1]?.country,
  });

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <section className="Success-content">
      <header>
        <h2>Hi, {buyer[0]?.name || 'there'}! Thanks for your bought</h2>

        <span>Your order arrive in 4 days</span>
      </header>

      <footer className="Success-map">
        <Map location={location} />
      </footer>
    </section>
  );
};
