import { BASE_URL } from '../settings';

export const loaderProducts = async ({ request }) => {
  const response = await fetch(`${BASE_URL}/products`, {
    signal: request.signal,
  });

  if (!response.ok) {
    throw {
      status: response.status,
      statusText: 'Products not found',
    };
  }

  const data = await response.json();

  return { products: data };
};
