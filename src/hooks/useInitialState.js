import { useState } from 'react';
import initialState from '../initialState';

export const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (product) => {
    const itemIdx = state.cart.findIndex((item) => item.id === product.id);

    if (itemIdx === -1) {
      setState({
        ...state,
        cart: [...state.cart, { ...product, quantity: 1 }],
      });

      return;
    }

    const newCart = [...state.cart];

    newCart.splice(itemIdx, 1, {
      ...product,
      quantity: newCart[itemIdx].quantity + 1,
    });

    setState({
      ...state,
      cart: newCart,
    });
  };

  const removeFromCart = (id) => {
    const itemIdx = state.cart.findIndex((item) => item.id === id);

    if (itemIdx === -1) {
      return;
    }

    const newCart = [...state.cart];

    newCart.splice(itemIdx, 1, {
      ...newCart[itemIdx],
      quantity: newCart[itemIdx].quantity - 1,
    });

    const filteredCart = newCart.filter((item) => item.quantity);

    setState({
      ...state,
      cart: filteredCart,
    });
  };

  const addToBuyer = (buyerData) => {
    setState({
      ...state,
      buyer: [...state.buyer, buyerData],
    });
  };

  const addNewOrder = (order) => {
    setState({
      ...state,
      orders: [...state.orders, order],
    });
  };

  const clearCart = () => {
    setState({
      ...state,
      cart: initialState.cart,
    });
  };

  return {
    state,
    addToCart,
    removeFromCart,
    addToBuyer,
    addNewOrder,
    clearCart,
  };
};
