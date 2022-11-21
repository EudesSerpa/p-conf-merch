import { useContext } from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import './styles.css';

export const Header = () => {
  const {
    state: { cart },
  } = useContext(AppContext);

  return (
    <header className="Header">
      <h1>
        <NavLink to="/">PlatziConf Merch</NavLink>
      </h1>

      <nav>
        <NavLink to="/checkout" aria-label="Cart">
          <MdShoppingCart />
          {cart.length && (
            <span className="Header__alert">
              {cart.reduce((acc, el) => acc + el.quantity, 0)}
            </span>
          )}
        </NavLink>
      </nav>
    </header>
  );
};
