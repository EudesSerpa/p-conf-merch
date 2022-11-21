export const handleSumTotal = (cart) => {
  return cart.reduce((acc, el) => acc + el.price * el.quantity, 0);
};
