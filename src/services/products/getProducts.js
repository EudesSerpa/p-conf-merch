export const loaderProducts = async ({ request }) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    signal: request.signal,
  });

  if (!response.ok) {
    throw {
      status: response.status,
      statusText: 'Products not found',
    };
  }

  const body = await response.json();

  return { body };
};
